const r=`'use strict';\r
\r
import $ from 'jquery';\r
import semver from 'semver';\r
import i18n from '../js/localization';\r
import BackupRestore from '../js/backup_restore';\r
import MigrationHandler from '../js/migration/migration_handler';\r
import CONFIGURATOR from '../js/data_storage';\r
import GUI from '../js/gui';\r
import FC from '../js/fc';\r
import ConnectionSerial from '../js/connection/connectionSerial';\r
\r
/**\r
 * Manages the post-flash restore UI flow for the Firmware Flasher tab.\r
 *\r
 * Extracted from firmware_flasher.js to break the 8-level closure nesting.\r
 * All dependencies are passed explicitly so this class is independently testable.\r
 */\r
export class FlashRestoreFlow {\r
    /**\r
     * @param {object}        options            Flash options (erase_chip, no_reboot, ...)\r
     * @param {boolean}       skipAutoRestore    True when user accepted a major-version warning\r
     * @param {string}        originalPort       Port to reconnect to after flash\r
     * @param {number}        originalBaud       Baud rate for reconnect\r
     * @param {string|null}   targetVersion      Semver of firmware being flashed, or null if unknown\r
     * @param {function}      disconnectSafely   Cleanly close the serial port and call back\r
     */\r
    constructor({ options, skipAutoRestore, originalPort, originalBaud, targetVersion, disconnectSafely }) {\r
        this._options = options;\r
        this._skipAutoRestore = skipAutoRestore;\r
        this._originalPort = originalPort;\r
        this._originalBaud = originalBaud;\r
        this._targetVersion = targetVersion;\r
        this._disconnectSafely = disconnectSafely;\r
    }\r
\r
    /**\r
     * Called by the STM32/DFU flash driver when flashing completes.\r
     * Decides whether to offer auto-restore, show migration preview, or just confirm backup saved.\r
     */\r
    onFlashComplete() {\r
        if (this._targetVersion && FC.CONFIG) {\r
            FC.CONFIG.flightControllerVersion = this._targetVersion;\r
        }\r
\r
        var backup = BackupRestore.getLastAutoBackup();\r
        if (!backup) return;\r
\r
        GUI.log(i18n.getMessage('backupRestoreAutoBackupSaved', [backup.filePath]));\r
\r
        var backupVersion = MigrationHandler.extractBackupVersion(backup.data);\r
        var isMajorDowngrade = false;\r
        if (backupVersion && this._targetVersion &&\r
            semver.valid(backupVersion) && semver.valid(this._targetVersion)) {\r
            if (semver.major(backupVersion) > semver.major(this._targetVersion)) {\r
                isMajorDowngrade = true;\r
            }\r
        }\r
\r
        if (!this._targetVersion) {\r
            this._showBackupSavedMessage('backupRestoreFlashCompleteBackupSaved');\r
            BackupRestore.clearLastAutoBackup();\r
        } else if (isMajorDowngrade) {\r
            GUI.log(i18n.getMessage('backupRestoreDowngradeNoAutoRestore'));\r
            this._showBackupSavedMessage('backupRestoreDowngradeNoAutoRestore');\r
            BackupRestore.clearLastAutoBackup();\r
        } else if (this._options.erase_chip && !this._skipAutoRestore) {\r
            this._offerAutoRestore(backup);\r
        } else {\r
            this._showBackupSavedMessage('backupRestoreFlashCompleteBackupSaved');\r
            BackupRestore.clearLastAutoBackup();\r
        }\r
    }\r
\r
    /**\r
     * Polls for the serial port to reappear after the FC reboots, then triggers restore.\r
     * @param {string} restoreData  The backed-up CLI diff content to restore\r
     */\r
    startPortPollingAndRestore(restoreData) {\r
        var restorePort = this._originalPort;\r
        var restoreBaud = this._originalBaud;\r
\r
        var $overlay = $('#restore-overlay');\r
        var $overlayStatus = $overlay.find('.restore-overlay__status');\r
        var $overlayFill = $overlay.find('.restore-overlay__progress-fill');\r
        var $overlayText = $overlay.find('.restore-overlay__progress-text');\r
        $overlayFill.css('width', '0%');\r
        $overlayText.text('');\r
        $overlayStatus.text(i18n.getMessage('backupRestoreAutoRestoreWaitingPort', [restorePort]));\r
        $overlay.removeClass('is-hidden');\r
\r
        var portPollRetries = 0;\r
        var maxPortPollRetries = 60;\r
        var restoreScheduled = false;\r
        var portPollInterval = setInterval(() => {\r
            portPollRetries++;\r
            if (portPollRetries > maxPortPollRetries) {\r
                clearInterval(portPollInterval);\r
                $overlay.addClass('is-hidden');\r
                GUI.connect_lock = false;\r
                GUI.log(i18n.getMessage('backupRestoreRestoreFailed'));\r
                $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreFailed'));\r
                BackupRestore.clearLastAutoBackup();\r
                return;\r
            }\r
\r
            ConnectionSerial.getDevices().then((devices) => {\r
                if (!restoreScheduled && devices && devices.includes(restorePort)) {\r
                    restoreScheduled = true;\r
                    clearInterval(portPollInterval);\r
                    $overlayStatus.text(i18n.getMessage('backupRestoreStatusConnecting'));\r
                    setTimeout(() => {\r
                        executeRestore(restorePort, restoreBaud, restoreData, $overlay, {\r
                            disconnectSafely: this._disconnectSafely,\r
                            clearAutoBackup: true,\r
                        });\r
                    }, 2000);\r
                }\r
            }).catch((err) => {\r
                console.warn('Port poll getDevices error:', err);\r
            });\r
        }, 500);\r
    }\r
\r
    // -------------------------------------------------------------------------\r
    // Private methods\r
    // -------------------------------------------------------------------------\r
\r
    _offerAutoRestore(backup) {\r
        const { dataToRestore, migrationResult } = prepareRestoreData(backup.data, this._targetVersion);\r
\r
        if (migrationResult && (migrationResult.summary.totalChanges > 0 ||\r
                                migrationResult.summary.warnings.length > 0)) {\r
            showMigrationPreview(migrationResult.summary, () => {\r
                GUI.log(i18n.getMessage('backupRestoreMigrationApplied', [\r
                    migrationResult.summary.fromVersion,\r
                    migrationResult.summary.toVersion,\r
                    migrationResult.summary.totalChanges.toString(),\r
                ]));\r
                this.startPortPollingAndRestore(dataToRestore);\r
            }, () => {\r
                BackupRestore.clearLastAutoBackup();\r
                this._showBackupSavedMessage('backupRestoreFlashCompleteBackupSaved');\r
            });\r
        } else {\r
            this._offerRestoreConfirm(dataToRestore);\r
        }\r
    }\r
\r
    _offerRestoreConfirm(dataToRestore) {\r
        $('span.progressLabel').text(i18n.getMessage('backupRestoreFlashCompleteOfferRestore'));\r
\r
        var $confirmOverlay = $('#restore-confirm-overlay');\r
        $confirmOverlay.removeClass('is-hidden');\r
        i18n.localize($confirmOverlay);\r
\r
        var $yesBtn = $confirmOverlay.find('.restore-confirm-overlay__btn--yes');\r
        var $noBtn  = $confirmOverlay.find('.restore-confirm-overlay__btn--no');\r
\r
        var cleanup = function() {\r
            $yesBtn.off('click.autoRestore');\r
            $noBtn.off('click.autoRestore');\r
            $confirmOverlay.addClass('is-hidden');\r
        };\r
\r
        $noBtn.on('click.autoRestore', (e) => {\r
            e.preventDefault();\r
            cleanup();\r
            BackupRestore.clearLastAutoBackup();\r
            $('span.progressLabel').text(i18n.getMessage('backupRestoreFlashCompleteBackupSaved'));\r
        });\r
\r
        $yesBtn.on('click.autoRestore', (e) => {\r
            e.preventDefault();\r
            cleanup();\r
            this.startPortPollingAndRestore(dataToRestore);\r
        });\r
    }\r
\r
    _showBackupSavedMessage(messageKey) {\r
        $('span.progressLabel').html(\r
            i18n.getMessage(messageKey) +\r
            ' <a class="open_backup_dir" href="#">' +\r
            i18n.getMessage('backupRestoreOpenBackupsFolder') + '</a>'\r
        );\r
        $('.open_backup_dir').on('click', function(e) {\r
            e.preventDefault();\r
            window.electronAPI.openBackupDir();\r
        });\r
    }\r
}\r
\r
// ---------------------------------------------------------------------------\r
// Standalone exports\r
// ---------------------------------------------------------------------------\r
\r
/**\r
 * Run the migration check on backup data and return ready-to-restore content.\r
 * Used by both the auto-restore flow (FlashRestoreFlow) and the manual Restore\r
 * Config handler so the migration logic is not duplicated between them.\r
 *\r
 * @param {string}      data           Raw backup file content\r
 * @param {string|null} targetVersion  FC firmware version being targeted\r
 * @returns {{ dataToRestore: string, migrationResult: object|null }}\r
 */\r
export function prepareRestoreData(data, targetVersion) {\r
    const migrationNeeded = targetVersion && MigrationHandler.isMigrationNeeded(data, targetVersion);\r
    const missingProfiles = targetVersion && MigrationHandler.hasMissingProfiles(data, targetVersion);\r
    let migrationResult = null;\r
    let dataToRestore = data;\r
\r
    if (migrationNeeded) {\r
        migrationResult = MigrationHandler.migrateBackupData(data, targetVersion);\r
        dataToRestore = migrationResult.migratedContent;\r
    }\r
\r
    if (missingProfiles) {\r
        if (!migrationResult) {\r
            const backupVer = MigrationHandler.extractBackupVersion(data) || 'unknown';\r
            migrationResult = MigrationHandler.createEmptyResult(backupVer, targetVersion, dataToRestore);\r
        }\r
        migrationResult.summary.warnings.push(\r
            i18n.getMessage('migrationMissingProfileWarning', [\r
                migrationResult.summary.fromVersion,\r
                migrationResult.summary.toVersion,\r
            ])\r
        );\r
    }\r
\r
    return { dataToRestore, migrationResult };\r
}\r
\r
/**\r
 * Connect to the FC, restore backup data, then save and reboot.\r
 * Shared between the auto-restore flow (post-flash) and the manual Restore\r
 * Config handler so the connect/restore/error-dialog/saveAndReboot sequence\r
 * is not duplicated between them.\r
 *\r
 * @param {string}   port                  Serial port path\r
 * @param {number}   baud                  Baud rate\r
 * @param {string}   data                  Backup content to restore\r
 * @param {jQuery}   $overlay              The restore progress overlay element\r
 * @param {object}   opts\r
 * @param {function} opts.disconnectSafely Callback to cleanly close the port\r
 * @param {boolean}  [opts.clearAutoBackup=false] Clear lastAutoBackup when done\r
 */\r
export function executeRestore(port, baud, data, $overlay, { disconnectSafely, clearAutoBackup = false }) {\r
    const $overlayStatus = $overlay.find('.restore-overlay__status');\r
    const $overlayFill   = $overlay.find('.restore-overlay__progress-fill');\r
    const $overlayText   = $overlay.find('.restore-overlay__progress-text');\r
    const onProgress = makeRestoreProgressHandler($overlayStatus, $overlayFill, $overlayText);\r
\r
    GUI.connect_lock = true;\r
\r
    CONFIGURATOR.connection.connect(port, { bitrate: baud }, (openInfo) => {\r
        if (!openInfo) {\r
            $overlay.addClass('is-hidden');\r
            GUI.connect_lock = false;\r
            GUI.log(i18n.getMessage('failedToOpenSerialPort'));\r
            $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreFailed'));\r
            if (clearAutoBackup) BackupRestore.clearLastAutoBackup();\r
            return;\r
        }\r
\r
        BackupRestore.performRestore(data, onProgress).then((result) => {\r
            $overlay.addClass('is-hidden');\r
            if (clearAutoBackup) BackupRestore.clearLastAutoBackup();\r
\r
            if (result.errors.length > 0) {\r
                showRestoreErrorDialog(result.errors, disconnectSafely);\r
            } else {\r
                BackupRestore.saveAndReboot().then(() => {\r
                    GUI.log(i18n.getMessage('backupRestoreRestoreComplete'));\r
                    $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreComplete'));\r
                    disconnectSafely(() => { GUI.connect_lock = false; });\r
                });\r
            }\r
        }).catch((err) => {\r
            $overlay.addClass('is-hidden');\r
            console.error('Restore failed:', err);\r
            GUI.log(i18n.getMessage('backupRestoreRestoreFailed'));\r
            $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreFailed'));\r
            if (clearAutoBackup) BackupRestore.clearLastAutoBackup();\r
            disconnectSafely(() => { GUI.connect_lock = false; });\r
        });\r
    });\r
}\r
\r
/**\r
 * Show the migration preview overlay, used by both the auto-restore and manual\r
 * restore flows.\r
 */\r
export function showMigrationPreview(summary, onContinue, onCancel) {\r
    var $preview     = $('#migration-preview-overlay');\r
    var $continueBtn = $preview.find('.migration-preview__btn--continue');\r
    var $cancelBtn   = $preview.find('.migration-preview__btn--cancel');\r
\r
    $preview.find('.migration-preview__changes').text(\r
        buildMigrationChangesText(summary)\r
    );\r
    $preview.find('.migration-preview__warnings').text(\r
        summary.warnings.length > 0 ? summary.warnings.map(w => '⚠ ' + w).join('\\n') : ''\r
    );\r
\r
    $preview.removeClass('is-hidden');\r
    i18n.localize($preview);\r
\r
    var cleanup = function() {\r
        $continueBtn.off('click.migPreview');\r
        $cancelBtn.off('click.migPreview');\r
        $preview.addClass('is-hidden');\r
    };\r
\r
    $cancelBtn.on('click.migPreview', function(e) {\r
        e.preventDefault(); cleanup(); onCancel();\r
    });\r
    $continueBtn.on('click.migPreview', function(e) {\r
        e.preventDefault(); cleanup(); onContinue();\r
    });\r
}\r
\r
// ---------------------------------------------------------------------------\r
// Private helpers\r
// ---------------------------------------------------------------------------\r
\r
function makeRestoreProgressHandler($overlayStatus, $overlayFill, $overlayText) {\r
    return function(info) {\r
        switch (info.phase) {\r
            case 'entering-cli':\r
                $overlayStatus.text(i18n.getMessage('backupRestoreStatusEnteringCli'));\r
                $overlayFill.css('width', '0%');\r
                $overlayText.text('');\r
                break;\r
            case 'restoring': {\r
                const pct = info.total > 0 ? Math.round((info.current / info.total) * 100) : 0;\r
                $overlayStatus.text(i18n.getMessage('backupRestoreStatusRestoringProgress',\r
                    [info.current, info.total]));\r
                $overlayFill.css('width', pct + '%');\r
                $overlayText.text(info.current + ' / ' + info.total);\r
                break;\r
            }\r
            case 'saving':\r
                $overlayStatus.text(i18n.getMessage('backupRestoreStatusSaving'));\r
                $overlayFill.css('width', '100%');\r
                break;\r
        }\r
    };\r
}\r
\r
function showRestoreErrorDialog(errors, disconnectSafely) {\r
    var $errorDlg = $('#restore-error-dialog');\r
    $errorDlg.find('.restore-error-dialog__errors').text(errors.join('\\n'));\r
    $errorDlg.removeClass('is-hidden');\r
\r
    var $saveBtn  = $errorDlg.find('.restore-error-dialog__btn--save');\r
    var $abortBtn = $errorDlg.find('.restore-error-dialog__btn--abort');\r
\r
    var cleanup = function() {\r
        $saveBtn.off('click.restoreErr');\r
        $abortBtn.off('click.restoreErr');\r
        $errorDlg.addClass('is-hidden');\r
    };\r
\r
    $saveBtn.on('click.restoreErr', function(e) {\r
        e.preventDefault();\r
        cleanup();\r
        BackupRestore.saveAndReboot().then(function() {\r
            GUI.log(i18n.getMessage('backupRestoreRestoreComplete'));\r
            $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreComplete'));\r
            disconnectSafely(function() { GUI.connect_lock = false; });\r
        }).catch(function(err) {\r
            console.error('saveAndReboot failed:', err);\r
            disconnectSafely(function() { GUI.connect_lock = false; });\r
        });\r
    });\r
\r
    $abortBtn.on('click.restoreErr', function(e) {\r
        e.preventDefault();\r
        cleanup();\r
        BackupRestore.abortRestore().then(function() {\r
            GUI.log(i18n.getMessage('backupRestoreRestoreAborted'));\r
            $('span.progressLabel').text(i18n.getMessage('backupRestoreRestoreAborted'));\r
            disconnectSafely(function() { GUI.connect_lock = false; });\r
        }).catch(function(err) {\r
            console.error('abortRestore failed:', err);\r
            disconnectSafely(function() { GUI.connect_lock = false; });\r
        });\r
    });\r
}\r
\r
function buildMigrationChangesText(summary) {\r
    var sections = [\r
        { key: 'removedSettings',    header: 'migrationPreviewRemovedHeader' },\r
        { key: 'renamedSettings',    header: 'migrationPreviewRenamedSettingsHeader' },\r
        { key: 'renamedCommands',    header: 'migrationPreviewRenamedCommandsHeader' },\r
        { key: 'valueReplacements',  header: 'migrationPreviewValueReplacementsHeader' },\r
        { key: 'settingRemappings',  header: 'migrationPreviewSettingRemappingsHeader' },\r
    ];\r
    var lines = [];\r
    for (var s = 0; s < sections.length; s++) {\r
        var items = summary[sections[s].key];\r
        if (items && items.length > 0) {\r
            if (lines.length > 0) lines.push('');\r
            lines.push(i18n.getMessage(sections[s].header, [items.length.toString()]));\r
            for (var j = 0; j < items.length; j++) {\r
                lines.push('  • ' + items[j]);\r
            }\r
        }\r
    }\r
    return lines.join('\\n');\r
}\r
`;export{r as default};
