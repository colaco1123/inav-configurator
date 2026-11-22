const r=`<div class="tab-firmware_flasher toolbar_fixed_bottom">\r
    <!-- Restore overlay: blocks UI during restore operation -->\r
    <div id="restore-overlay" class="is-hidden">\r
        <div class="restore-overlay__content">\r
            <div class="restore-overlay__title" i18n="backupRestoreOverlayTitle"></div>\r
            <div class="restore-overlay__status" i18n="backupRestoreStatusEnteringCli"></div>\r
            <div class="restore-overlay__progress-bar">\r
                <div class="restore-overlay__progress-fill"></div>\r
            </div>\r
            <div class="restore-overlay__progress-text">0 / 0</div>\r
        </div>\r
    </div>\r
\r
    <!-- Version warning overlay: shown when minor/major update without chip erase -->\r
    <div id="version-warning-overlay" class="is-hidden">\r
        <div class="version-warning-overlay__content">\r
            <div class="version-warning-overlay__title" i18n="firmwareFlasherVersionWarningTitle"></div>\r
            <div class="version-warning-overlay__text"></div>\r
            <div class="version-warning-overlay__buttons">\r
                <a class="version-warning-overlay__btn version-warning-overlay__btn--continue" href="#" i18n="firmwareFlasherVersionWarningContinue"></a>\r
                <a class="version-warning-overlay__btn version-warning-overlay__btn--cancel" href="#" i18n="firmwareFlasherVersionWarningCancel"></a>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Confirm overlay: ask user if they want to auto-restore after flash -->\r
    <div id="restore-confirm-overlay" class="is-hidden">\r
        <div class="restore-confirm-overlay__content">\r
            <div class="restore-confirm-overlay__title" i18n="backupRestoreAutoRestoreConfirm"></div>\r
            <div class="restore-confirm-overlay__status"></div>\r
            <div class="restore-confirm-overlay__buttons">\r
                <a class="restore-confirm-overlay__btn restore-confirm-overlay__btn--no" href="#" i18n="backupRestoreAutoRestoreNo"></a>\r
                <a class="restore-confirm-overlay__btn restore-confirm-overlay__btn--yes" href="#" i18n="backupRestoreAutoRestoreYes"></a>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Error dialog: shown after restore if errors were detected -->\r
    <div id="restore-error-dialog" class="is-hidden">\r
        <div class="restore-error-dialog__content">\r
            <div class="restore-error-dialog__title" i18n="backupRestoreErrorTitle"></div>\r
            <div class="restore-error-dialog__text" i18n="backupRestoreErrorText"></div>\r
            <div class="restore-error-dialog__errors"></div>\r
            <div class="restore-error-dialog__buttons">\r
                <a class="restore-error-dialog__btn restore-error-dialog__btn--abort" href="#" i18n="backupRestoreErrorAbort"></a>\r
                <a class="restore-error-dialog__btn restore-error-dialog__btn--save" href="#" i18n="backupRestoreErrorSave"></a>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Migration preview overlay: shown before restore when migration is needed -->\r
    <div id="migration-preview-overlay" class="is-hidden">\r
        <div class="migration-preview__content">\r
            <div class="migration-preview__title" i18n="migrationPreviewTitle"></div>\r
            <div class="migration-preview__subtitle"></div>\r
            <div class="migration-preview__changes"></div>\r
            <div class="migration-preview__warnings"></div>\r
            <div class="migration-preview__buttons">\r
                <a class="migration-preview__btn migration-preview__btn--cancel" href="#" i18n="migrationPreviewCancel"></a>\r
                <a class="migration-preview__btn migration-preview__btn--continue" href="#" i18n="migrationPreviewContinue"></a>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="content_wrapper">\r
        <div class="options gui_box">\r
            <div class="spacer">\r
                <table class="cf_table" style="margin-top: 10px;">\r
                    <tr>\r
                        <td><input class="target_search" placeholder="Search targets..." autocomplete="on"><br />\r
                            <select name="board" id="board_targets">\r
                                <option value="0">Loading ...</option>\r
                        </select></td>\r
                        <td><div class="default_btn narrow">\r
                            <a class="auto_select_target" href="#" i18n="firmwareFlasherButtonAutoSelect"></a>\r
                        </div> \r
                        <span class="autoselect_description description" i18n="firmwareFlasherOnlineSelectBoardDescription"></span></td>\r
                    </tr>\r
                    <tr>\r
                        <td><select name="firmware_version">\r
                                <option value="0">Loading ...</option>\r
                        </select></td>\r
                        <td><span class="description" i18n="firmwareFlasherOnlineSelectFirmwareVersionDescription"></span></td>\r
                    </tr>\r
                    <tr>\r
                        <td><label> <input class="updating toggle" type="checkbox" /> <span\r
                                i18n="firmwareFlasherNoReboot"></span>\r
                        </label></td>\r
                        <td><span class="description" i18n="firmwareFlasherNoRebootDescription"></span></td>\r
                    </tr>\r
                    <tr class="option flash_on_connect_wrapper">\r
                        <td><label> <input class="flash_on_connect toggle" type="checkbox" /> <span\r
                                i18n="firmwareFlasherFlashOnConnect"></span></label></td>\r
\r
                        <td><span class="description" i18n="firmwareFlasherFlashOnConnectDescription"></span></td>\r
                    </tr>\r
                    <tr class="option">\r
                        <td><label> <input class="erase_chip toggle" type="checkbox" /> <span\r
                                i18n="firmwareFlasherFullChipErase"></span>\r
                        </label></td>\r
                        <td><span class="description" i18n="firmwareFlasherFullChipEraseDescription"></span></td>\r
                    </tr>\r
                    <tr class="option manual_baud_rate">\r
                        <td><label> <input class="flash_manual_baud toggle" type="checkbox" /> <span\r
                                i18n="firmwareFlasherManualBaud"></span> <select id="flash_manual_baud_rate"\r
                                title="Baud Rate">\r
                                    <option value="921600">921600</option>\r
                                    <option value="460800">460800</option>\r
                                    <option value="256000" selected="selected">256000</option>\r
                                    <option value="230400">230400</option>\r
                                    <option value="115200">115200</option>\r
                                    <option value="57600">57600</option>\r
                                    <option value="38400">38400</option>\r
                                    <option value="28800">28800</option>\r
                                    <option value="19200">19200</option>\r
                            </select>\r
                        </label></td>\r
                        <td><span class="description" i18n="firmwareFlasherManualBaudDescription"></span></td>\r
                    </tr>\r
                    <tr class="option noboarder">\r
                        <td><label> <input class="show_development_releases toggle" type="checkbox" /> <span\r
                                i18n="firmwareFlasherShowDevelopmentReleases"></span>\r
                        </label></td>\r
                        <td><span class="description" i18n="firmwareFlasherShowDevelopmentReleasesDescription"></span></td>\r
                    </tr>\r
                </table>\r
            </div>\r
        </div>\r
        <div class="clear-both"></div>\r
        <div class="git_info">\r
            <div class="title" i18n="firmwareFlasherGithubInfoHead"></div>\r
            <p>\r
                <strong i18n="firmwareFlasherHash"></strong> <a i18n_title="firmwareFlasherUrl" class="hash" href="#"\r
                    target="_blank"></a><br /> <strong i18n="firmwareFlasherCommiter"></strong> <span class="committer"></span><br />\r
                <strong i18n="firmwareFlasherDate"></strong> <span class="date"></span><br /> <strong\r
                    i18n="firmwareFlasherMessage"></strong> <span class="message"></span>\r
            </p>\r
        </div>\r
        <div class="release_info gui_box">\r
            <div class="gui_box_titlebar darkgrey">\r
                <div class="spacer_box_title" style="text-align: center; color: white;"\r
                    i18n="firmwareFlasherReleaseSummaryHead"></div>\r
            </div>\r
            <div class="spacer" style="margin-bottom: 10px;">\r
                <strong i18n="firmwareFlasherReleaseTarget"></strong> <span class="target"></span><br /> <strong\r
                    i18n="firmwareFlasherReleaseName"></strong> <a i18n_title="firmwareFlasherReleaseUrl" class="name"\r
                    href="#" target="_blank"></a><br /> <strong i18n="firmwareFlasherReleaseFile"></strong> <a\r
                    i18n_title="firmwareFlasherReleaseFileUrl" class="file" href="#" target="_blank"></a><br /> <strong\r
                    i18n="firmwareFlasherReleaseDate"></strong> <span class="date"></span><br /> <strong\r
                    i18n="firmwareFlasherReleaseStatus"></strong> <span class="status"></span><br /> <strong\r
                    i18n="firmwareFlasherReleaseNotes"></strong>\r
                <div class=notes></div>\r
            </div>\r
        </div>\r
        <div class="gui_box gui_warning">\r
            <div class="gui_box_titlebar">\r
                <div class="spacer_box_title" style="text-align: center; color: white;"\r
                    i18n="firmwareFlasherWarningHead">\r
                </div>\r
            </div>\r
            <div class="spacer" style="margin-bottom: 10px;">\r
                <p i18n="firmwareFlasherWarningText"></p>\r
                <br />\r
                <p i18n="firmwareFlasherTargetWarning"></p>\r
            </div>\r
        </div>\r
        <div class="gui_box gui_note">\r
            <div class="gui_box_titlebar">\r
                <div class="spacer_box_title" style="text-align: center; color: black;"\r
                    i18n="firmwareFlasherRecoveryHead">\r
                </div>\r
            </div>\r
            <div class="spacer" style="margin-bottom: 10px;">\r
                <p i18n="firmwareFlasherRecoveryText"></p>\r
            </div>\r
        </div>\r
\r
        <div class="info"><a name="progressbar"></a>\r
            <progress class="progress" value="0" min="0" max="100"></progress>\r
            <span class="progressLabel" i18n="firmwareFlasherLoadFirmwareFile"></span>\r
        </div>\r
    </div>\r
    <div class="content_toolbar">\r
\r
        <div class="toolbar-left">\r
          <div class="btn">\r
              <a class="backup_config" href="#" i18n="backupRestoreButtonBackup"></a>\r
          </div>\r
          <div class="btn">\r
              <a class="restore_config" href="#" i18n="backupRestoreButtonRestore"></a>\r
          </div>\r
          <div class="btn">\r
              <a class="open_backups_folder" href="#" i18n="backupRestoreOpenBackupsFolder"></a>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <div class="btn">\r
              <a class="load_file" href="#" i18n="firmwareFlasherButtonLoadLocal"></a>\r
          </div>\r
          <div class="btn">\r
              <a class="load_remote_file disabled" href="#" i18n="firmwareFlasherButtonLoadOnline"></a>\r
          </div>\r
          <div class="btn">\r
              <a class="flash_firmware disabled" href="#progressbar" i18n="firmwareFlasherFlashFirmware"></a>\r
          </div>\r
        </div>\r
\r
    </div>\r
</div>\r
`;export{r as default};
