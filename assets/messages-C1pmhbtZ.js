const n=`{\r
  "translation_version": {\r
    "message": "0"\r
  },\r
  "language_de": {\r
    "message": "Deutsch",\r
    "comment": "Don't translate!"\r
  },\r
  "language_en": {\r
    "message": "English",\r
    "_comment": "Don't translate!"\r
  },\r
  "language_bg": {\r
    "message": "Български",\r
    "_comment": "Don't translate!"\r
  },\r
  "language_uk": {\r
    "message": "українська",\r
    "_comment": "Don't translate!"\r
  },\r
  "language_ja": {\r
    "message": "日本語",\r
    "_comment": "Don't translate!"\r
  },\r
  "language_zh_CN": {\r
    "message": "简体中文",\r
    "_comment": "Don't translate!"\r
  },\r
  "language_ru": {\r
    "message": "Русский",\r
    "_comment": "Don't translate!"\r
  },\r
  "language": {\r
    "message": "Език"\r
  },\r
  "options_title": {\r
    "message": "Опции на приложението"\r
  },\r
  "options_receive_app_notifications": {\r
    "message": "Получавай <strong>известия</strong> на работния плот при обновяване"\r
  },\r
  "options_improve_configurator": {\r
    "message": "Изпращай анонимни данни за употреба до екипа разработчици"\r
  },\r
  "options_disable3dAcceleration": {\r
    "message": "Изключи 3D ускорението. Ако 3D моделите не се показват. Изисква рестарт."\r
  },\r
  "options_showProfileParameters": {\r
    "message": "Откроявай параметрите, които се променят при превключване на батерия или контролни профили"\r
  },\r
  "options_cliAutocomplete": {\r
    "message": "Разширено автоматично довършване в CLI"\r
  },\r
  "options_unit_type": {\r
    "message": "Избери как да се визуализират мерните единици само в конфигуратора"\r
  },\r
  "options_render": {\r
    "message": "Опции за визуализация"\r
  },\r
  "unexpectedError": {\r
    "message": "Неочаквана грешка: $1"\r
  },\r
  "disconnecting": {\r
    "message": "Прекратяване на връзката..."\r
  },\r
  "connect": {\r
    "message": "Свързване"\r
  },\r
  "connecting": {\r
    "message": "Свързване"\r
  },\r
  "disconnect": {\r
    "message": "Прекъсване"\r
  },\r
  "autoConnect": {\r
    "message": "Автоматично свързване"\r
  },\r
  "autoConnectEnabled": {\r
    "message": "Авто-свързване: Включено - Конфигураторът автоматично опитва да се свърже при откриване на нов порт"\r
  },\r
  "autoConnectDisabled": {\r
    "message": "Авто-свързване: Изключено - Потребителят трябва сам да избере правилния сериен порт и да натисне бутона \\"Свързване\\""\r
  },\r
  "deviceRebooting": {\r
    "message": "Устройство - <span style=\\"color: red\\">Рестартиране</span>"\r
  },\r
  "deviceReady": {\r
    "message": "Устройство - <span style=\\"color: #37a8db\\">Готово</span>"\r
  },\r
  "savingDefaults": {\r
    "message": "Устройство - <span style=\\"color: red\\">Запазване на настройките по подразбиране</span>"\r
  },\r
  "fcNotConnected": {\r
    "message": "Няма връзка"\r
  },\r
\r
  "backupFileIncompatible": {\r
    "message": "Предоставеният архивен файл е създаден за предишна версия на конфигуратора и е несъвместим с тази версия. Съжаляваме."\r
  },\r
\r
  "backupFileUnmigratable": {\r
    "message": "Предоставеният архивен файл е създаден от предишна версия на конфигуратора и не може да бъде мигриран. Съжаляваме."\r
  },\r
\r
  "configMigrationFrom": {\r
    "message": "Мигриране на конфигурационен файл, създаден от конфигуратор: $1"\r
  },\r
  "configMigratedTo": {\r
    "message": "Мигрирана конфигурация към конфигуратор: $1"\r
  },\r
  "configMigrationSuccessful": {\r
    "message": "Миграцията на конфигурацията завърши, приложени миграции: $1"\r
  },\r
  "documentation": {\r
    "message": "Документация"\r
  },\r
  "tabFirmwareFlasher": {\r
    "message": "Флашър на фърмуер"\r
  },\r
  "tabLanding": {\r
    "message": "Добре дошли"\r
  },\r
  "tabHelp": {\r
    "message": "Документация и поддръжка"\r
  },\r
  "tabSetup": {\r
    "message": "Състояние"\r
  },\r
  "tabCalibration": {\r
    "message": "Калибрация"\r
  },\r
  "tabConfiguration": {\r
    "message": "Конфигурация"\r
  },\r
  "tabPorts": {\r
    "message": "Портове"\r
  },\r
  "tabPidTuning": {\r
    "message": "Настройка"\r
  },\r
  "tabReceiver": {\r
    "message": "Приемник"\r
  },\r
  "tabMisc": {\r
    "message": "Разни"\r
  },\r
  "tabModeSelection": {\r
    "message": "Избор на режим"\r
  },\r
  "tabServos": {\r
    "message": "Сервосистеми"\r
  },\r
  "tabFailsafe": {\r
    "message": "Failsafe"\r
  },\r
  "tabEzTune": {\r
    "message": "Ez Tune"\r
  },\r
  "tabGPS": {\r
    "message": "GPS"\r
  },\r
  "tabOutputs": {\r
    "message": "Изходи"\r
  },\r
  "tabLedStrip": {\r
    "message": "LED лента"\r
  },\r
  "tabRawSensorData": {\r
    "message": "Сензори"\r
  },\r
  "tabCLI": {\r
    "message": "CLI"\r
  },\r
  "tabLogging": {\r
    "message": "Вързано логване"\r
  },\r
  "tabOnboardLogging": {\r
    "message": "Blackbox"\r
  },\r
  "tabAdjustments": {\r
    "message": "Регулировки"\r
  },\r
  "tabAuxiliary": {\r
    "message": "Режими"\r
  },\r
  "tabSitl": {\r
    "message": "SITL"\r
  },\r
  "sitlDemoMode": {\r
    "message": "Демо режим"\r
  },\r
  "sitlResetDemoModeData": {\r
    "message": "Нулиране на демо режима"\r
  },\r
  "sitlOSNotSupported": {\r
    "message": "SITL не се поддържа на тази операционна система."\r
  },\r
  "sitlOptions": {\r
    "message": "SITL опции"\r
  },\r
  "sitlEnableSim": {\r
    "message": "Активирай симулатор"\r
  },\r
  "sitlSimulator": {\r
    "message": "Симулатор"\r
  },\r
  "sitlUseImu": {\r
    "message": "Използвай IMU"\r
  },\r
  "sitlSimIP": {\r
    "message": "IP на симулатора"\r
  },\r
  "sitlPort": {\r
    "message": "Порт на симулатора"\r
  },\r
  "sitlChannelMap": {\r
    "message": "Картографиране на канали"\r
  },\r
 \r
  "sitlSimInput": {\r
    "message": "Вход от симулатор"\r
  },\r
  "sitlInavOutput": {\r
    "message": "INAV изход"\r
  },\r
  "sitlLog": {\r
    "message": "Лог"\r
  },\r
  "sitlStart": {\r
    "message": "Старт"\r
  },\r
  "sitlStop": {\r
    "message": "Стоп"\r
  },\r
  "sitlStopped": {\r
    "message": "SITL спрян\\n"\r
  },\r
  "sitlProfiles": {\r
    "message": "SITL профили"\r
  },\r
  "sitlNew": {\r
    "message": "Нов"\r
  },\r
  "sitlSave": {\r
    "message": "Запази"\r
  },\r
  "sitlDelete": {\r
    "message": "Изтрий"\r
  },\r
  "sitlNewProfile": {\r
    "message": "Нов SITL профил"\r
  },\r
  "sitlEnterName": {\r
    "message": "(Име на профил)"\r
  },\r
  "sitlProfileExists": {\r
    "message": "Профил с това име вече съществува."\r
  },\r
  "sitlStdProfileCantDeleted": {\r
    "message": "Стандартният SITL профил не може да бъде изтрит."\r
  },\r
  "sitlStdProfileCantOverwritten": {\r
    "message": "Стандартният SITL профил не може да бъде презаписан. Моля, създайте нов."\r
  },\r
  "serialReceiver": {\r
    "message": "Сериен приемник"\r
  },\r
  "sitlSerialProtocoll": {\r
    "message": "Предварителна настройка на серийния порт според RX протокола на свързания приемник"\r
  },\r
  "sitlSerialStopbits": {\r
    "message": "Стоп битове"\r
  },\r
  "sitlSerialPort": {\r
    "message": "Сериен приемник/Proxy FC е свързан към сериен порт на хоста"\r
  },\r
  "sitlSerialUART": {\r
    "message": "Сериен приемник е конфигуриран на SITL UART"\r
  },\r
  "sitlSerialParity": {\r
    "message": "Паритет"\r
  },\r
  "sitlSerialTcpEnable": {\r
    "message": "Активирай"\r
  },\r
  "sitlHelp": {\r
    "message": "SITL (Software in the loop) позволява да стартирате INAV изцяло в софтуера на компютъра, без да използвате полетен контролер, и да симулирате пълни FPV полети. За целта INAV се компилира с нормален PC компилатор. Сензорите се заменят с данни, предоставени от симулатор.<br/>В момента се поддържат:<br/><ul><li><a href=\\"https://www.realflight.com\\" target=\\"_blank\\">RealFlight</a><br/></li><li><a href=\\"https://www.x-plane.com\\" target=\\"_blank\\">X-Plane</a></li></ul>"\r
  },\r
  "sitlProfilesHelp": {\r
    "message": "Профилите се записват локално. Профилите съдържат не само всички данни от този раздел, но и конфигурационния файл (\\"EEPROM\\") на самия INAV. <br><span style=\\"color: red\\">Забележка:</span><br>Стандартните профили не могат да бъдат презаписвани. За да запазите промените си, създайте нов профил."\r
  },\r
  "sitlEnableSimulatorHelp": {\r
    "message": "Ако тази опция е деактивирана, могат да се използват само UART портове (MSP/Конфигуратор). Полезно за конфигуриране на INAV, без да се налага да стартирате симулатора."\r
  },\r
  "sitlUseImuHelp": {\r
    "message": "Използвай данни от IMU сензора от симулатора, вместо да използваш директно данни за ориентация от симулатора (Експериментално, не се препоръчва)."\r
  },\r
  "sitlIpHelp": {\r
    "message": "IP адрес на компютъра, на който работи симулаторът. Ако симулаторът работи на същия компютър, оставете го на \\"127.0.0.1\\"."\r
  },\r
  "sitlPortHelp": {\r
    "message": "Номер на порта на интерфейса на симулатора. Забележка: Портът на RealFlight е фиксиран и не може да се променя."\r
  },\r
  "sitlSerialReceiverHelp": {\r
    "message": "Използвай приемник (SBUS/CRSF/др.), свързан към хоста чрез USB-към-UART адаптер или proxy Flight Controller."\r
  },\r
  "auxiliaryAcroEnabled": {\r
    "message": "ACRO"\r
  },\r
  "serialPortOpened": {\r
    "message": "MSP връзката е <span style=\\"color: #37a8db\\">успешно</span> отворена с ID: $1"\r
  },\r
  "serialPortOpenFail": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> отваряне на MSP връзка"\r
  },\r
  "serialPortClosedOk": {\r
    "message": "MSP връзката е <span style=\\"color: #37a8db\\">успешно</span> затворена"\r
  },\r
  "serialPortClosedFail": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> затваряне на MSP връзка"\r
  },\r
  "serialPortUnrecoverable": {\r
    "message": "Невъзстановима <span style=\\"color: red\\">грешка</span> на серийната връзка, прекъсване..."\r
  },\r
  "connectionConnected": {\r
    "message": "Свързан към: $1"\r
  },\r
  "connectionBleType": {\r
    "message": "Тип BLE устройство: $1"\r
  },\r
  "connectionBleNotSupported": {\r
    "message": "<span style=\\"color: red\\">Грешка при свързване:</span> Фърмуерът не поддържа BLE връзки. Абортиране."\r
  },\r
  "connectionBleInterrupted": {\r
    "message": "Връзката беше неочаквано прекъсната."\r
  },\r
  "connectionBleError": {\r
    "message": "Грешка при отваряне на BLE устройство: $1"\r
  },\r
  "connectionBleCliEnter": {\r
    "message": "Активна връзка чрез BLE, изходът може да е по-бавен от обикновено."\r
  },\r
  "connectionUdpTimeout": {\r
    "message": "Изтече времето за UDP връзка."\r
  },\r
  "usbDeviceOpened": {\r
    "message": "USB устройството е <span style=\\"color: #37a8db\\">успешно</span> отворено"\r
  },\r
  "usbDeviceOpenFail": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> отваряне на USB устройство!"\r
  },\r
  "usbDeviceClosed": {\r
    "message": "USB устройството е <span style=\\"color: #37a8db\\">успешно</span> затворено"\r
  },\r
  "usbDeviceCloseFail": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> затваряне на USB устройство"\r
  },\r
  "usbDeviceUdevNotice": {\r
    "message": "<strong>Правилата за udev</strong> инсталирани ли са правилно? Вижте документацията за инструкции."\r
  },\r
  "stm32UsbDfuNotFound": {\r
    "message": "USB DFU не е намерен"\r
  },\r
  "stm32RebootingToBootloader": {\r
    "message": "Иницииране на рестарт към bootloader..."\r
  },\r
  "stm32RebootingToBootloaderFailed": {\r
    "message": "Рестартиране на устройството към bootloader: НЕУСПЕШНО"\r
  },\r
  "stm32TimedOut": {\r
    "message": "STM32 - изтече времето, програмиране: НЕУСПЕШНО"\r
  },\r
  "stm32WrongResponse": {\r
    "message": "STM32 комуникацията неуспешна, грешен отговор, очаквано: $1 (0x$2) получено: $3 (0x$4)"\r
  },\r
  "stm32ContactingBootloader": {\r
    "message": "Свързване с bootloader..."\r
  },\r
  "stm32ContactingBootloaderFailed": {\r
    "message": "Комуникацията с bootloader неуспешна"\r
  },\r
  "stm32ResponseBootloaderFailed": {\r
    "message": "Няма отговор от bootloader, програмиране: НЕУСПЕШНО"\r
  },\r
  "stm32GlobalEraseExtended": {\r
    "message": "Изпълнение на глобално изтриване на чипа (чрез разширено изтриване)..."\r
  },\r
  "stm32LocalEraseExtended": {\r
    "message": "Изпълнение на локално изтриване (чрез разширено изтриване)..."\r
  },\r
  "stm32GlobalErase": {\r
    "message": "Изпълнение на глобално изтриване на чипа..."\r
  },\r
  "stm32LocalErase": {\r
    "message": "Изпълнение на локално изтриване..."\r
  },\r
  "stm32InvalidHex": {\r
    "message": "Невалиден hex файл"\r
  },\r
  "stm32Erase": {\r
    "message": "Изтриване..."\r
  },\r
  "stm32Flashing": {\r
    "message": "Флашване..."\r
  },\r
  "stm32Verifying": {\r
    "message": "Проверка..."\r
  },\r
  "stm32ProgrammingSuccessful": {\r
    "message": "Програмиране: УСПЕШНО"\r
  },\r
  "stm32ProgrammingFailed": {\r
    "message": "Програмиране: НЕУСПЕШНО"\r
  },\r
  "stm32AddressLoadFailed": {\r
    "message": "Зареждането на адреса за сектора на опционалните байтове неуспешно. Най-вероятно поради защита от четене."\r
  },\r
  "stm32AddressLoadSuccess": {\r
    "message": "Зареждането на адреса за сектора на опционалните байтове успешно."\r
  },\r
  "stm32AddressLoadUnknown": {\r
    "message": "Зареждането на адреса за сектора на опционалните байтове неуспешно с неизвестна грешка. Абортиране."\r
  },\r
  "stm32NotReadProtected": {\r
    "message": "Защитата от четене не е активна"\r
  },\r
  "stm32ReadProtected": {\r
    "message": "Изглежда, че платката е защитена от четене. Премахване на защитата. Не изключвайте/изваждайте!"\r
  },\r
  "stm32UnprotectSuccessful": {\r
    "message": "Премахването на защитата успешно."\r
  },\r
  "stm32UnprotectUnplug": {\r
    "message": "НЕОБХОДИМО ДЕЙСТВИЕ: Изключете и свържете отново полетния контролер в DFU режим, за да опитате да флашнете отново!"\r
  },\r
  "stm32UnprotectFailed": {\r
    "message": "Неуспешно премахване на защитата на платката"\r
  },\r
  "stm32UnprotectInitFailed": {\r
    "message": "Неуспешно иницииране на процедурата за премахване на защитата"\r
  },\r
\r
  "noConfigurationReceived": {\r
    "message": "Не е получена конфигурация в рамките на <span style=\\"color: red\\">10 секунди</span>, комуникацията е <span style=\\"color: red\\">неуспешна</span>"\r
  },\r
  "firmwareVersionNotSupported": {\r
    "message": "Тази версия на фърмуера <span style=\\"color: red\\">не се поддържа</span>. Тази версия на Конфигуратора поддържа фърмуер от $1 до $2 (изключително)"\r
  },\r
  "firmwareVariantNotSupported": {\r
    "message": "Този вариант на фърмуера <span style=\\"color: red\\">не се поддържа</span>. Моля, надстройте до INAV фърмуер. Използвайте CLI за архив преди флашване. Процедурата за архивиране/възстановяване чрез CLI е в документацията."\r
  },\r
\r
  "tabSwitchConnectionRequired": {\r
    "message": "Трябва да се <strong>свържете</strong>, преди да можете да видите някой от разделите."\r
  },\r
  "tabSwitchWaitForOperation": {\r
    "message": "Не можете да направите това <span style=\\"color: red\\">в момента</span>, моля, изчакайте текущата операция да приключи..."\r
  },\r
\r
  "tabSwitchUpgradeRequired": {\r
    "message": "Трябва да <strong>надстроите</strong> своя фърмуер, преди да можете да използвате раздела $1."\r
  },\r
  "firmwareVersion": {\r
    "message": "Версия на фърмуера: <strong>$1</strong>"\r
  },\r
  "apiVersionReceived": {\r
    "message": "Версията на MultiWii API е <span style=\\"color: #37a8db\\">получена</span> - <strong>$1</strong>"\r
  },\r
  "uniqueDeviceIdReceived": {\r
    "message": "Уникалният ID на устройството е <span style=\\"color: #37a8db\\">получен</span> - <strong>0x$1</strong>"\r
  },\r
  "boardInfoReceived": {\r
    "message": "Платка: <strong>$1</strong>, версия: <strong>$2</strong>"\r
  },\r
  "buildInfoReceived": {\r
    "message": "Работещ фърмуер, пуснат на: <strong>$1</strong>"\r
  },\r
  "fcInfoReceived": {\r
    "message": "Информация за полетен контролер, идентификатор: <strong>$1</strong>, версия: <strong>$2</strong>"\r
  },\r
\r
  "notifications_app_just_updated_to_version": {\r
    "message": "Приложението току-що бе обновено до версия: $1"\r
  },\r
  "notifications_click_here_to_start_app": {\r
    "message": "Кликнете тук, за да стартирате приложението"\r
  },\r
\r
  "statusbar_port_utilization": {\r
    "message": "Използване на порта:"\r
  },\r
  "statusbar_usage_download": {\r
    "message": "Изт.: $1%"\r
  },\r
  "statusbar_usage_upload": {\r
    "message": "Качв.: $1%"\r
  },\r
  "statusbar_packet_error": {\r
    "message": "Грешка в пакета:"\r
  },\r
  "statusbar_i2c_error": {\r
    "message": "I2C грешка:"\r
  },\r
  "statusbar_cycle_time": {\r
    "message": "Време на цикъл:"\r
  },\r
  "statusbar_cpu_load": {\r
    "message": "Натоварване на CPU: $1%"\r
  },\r
  "statusbar_arming_flags": {\r
    "message": "Флагове за армиране:"\r
  },\r
\r
  "dfu_connect_message": {\r
    "message": "Моля, използвайте Firmware Flasher за достъп до DFU устройства"\r
  },\r
  "dfu_erased_kilobytes": {\r
    "message": "Изтрити $1 kB от флаш паметта <span style=\\"color: #37a8db\\">успешно</span>"\r
  },\r
  "dfu_device_flash_info": {\r
    "message": "Открито устройство с общ размер на флаш паметта $1 kiB"\r
  },\r
  "dfu_error_image_size": {\r
    "message": "<span style=\\"color: red; font-weight: bold\\">Грешка</span>: Предоставеният образ е по-голям от наличната флаш памет на чипа! Образ: $1 kiB, лимит = $2 kiB"\r
  },\r
\r
  "eeprom_saved_ok": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>"\r
  },\r
\r
  "defaultWelcomeIntro": {\r
    "message": "Добре дошли в <strong>INAV - Конфигуратор</strong>, помощна програма, предназначена да опрости обновяването, конфигурирането и настройката на вашия полетен контролер."\r
  },\r
  "defaultWelcomeHead": {\r
    "message": "Фърмуер и драйвери"\r
  },\r
  "defaultWelcomeHead2": {\r
    "message": "Приятели на INAV"\r
  },\r
  "defaultWelcomeText2": {\r
    "message": "INAV се поддържа от страхотна общност от потребители, разработчици и компании. Ето кратък списък: <a href=\\"http://www.mateksys.com/\\" target=\\"_blank\\">Mateksys</a>, <a href=\\"https://www.speedybee.com/\\" target=\\"_blank\\">SpeedyBee</a>, <a href=\\"https://geprc.com/\\" target=\\"_blank\\">GEPRC</a>. "\r
  },\r
  "defaultWelcomeText": {\r
    "message": "Изходният код на фърмуера може да бъде изтеглен от <a href=\\"https://github.com/iNavFlight\\" title=\\"www.github.com\\" target=\\"_blank\\">тук</a><br />Най-новият двоичен образ на фърмуера е достъпен <a href=\\"https://github.com/iNavFlight/inav/releases\\" title=\\"www.github.com\\" target=\\"_blank\\">тук</a>.<br /><br />Най-новите <strong>STM USB VCP драйвери</strong> могат да бъдат изтеглени от <a href=\\"http://www.st.com/web/en/catalog/tools/PF257938\\" title=\\"http://www.st.com\\" target=\\"_blank\\">тук</a><br />Най-новият <strong>Zadig</strong> за Windows DFU флашване може да бъде изтеглен от <a href=\\"http://zadig.akeo.ie/\\" title=\\"http://zadig.akeo.ie\\" target=\\"_blank\\">тук</a><br />"\r
  },\r
  "defaultContributingHead": {\r
    "message": "Принос"\r
  },\r
  "defaultContributingText": {\r
    "message": "Ако искате да помогнете INAV да стане още по-добър, можете да помогнете по много начини, включително:<br /><ul><li>Отговаряне на въпроси на други потребители във форумите и IRC.</li><li>Допринасяне с код към фърмуера и конфигуратора – нови функции, поправки, подобрения.</li><li>Тестване на <a href=\\"https://github.com/iNavFlight/inav/pulls\\" target=\\"_blank\\">нови функции/поправки</a> и предоставяне на обратна връзка.</li><li>Помагане с <a href=\\"https://github.com/iNavFlight/inav/issues\\" target=\\"_blank\\">проблеми и коментиране на искания за функции</a>.</li></ul>"\r
  },\r
  "defaultChangelogHead": {\r
    "message": "Конфигуратор - Списък на промените"\r
  },\r
  "defaultButtonFirmwareFlasher": {\r
    "message": "Флашър на фърмуер"\r
  },\r
  "defaultDonateHead": {\r
    "message": "Отворен код / Бележка за дарения"\r
  },\r
  "defaultDonateText": {\r
    "message": "Тази помощна програма е напълно <strong>отворен код</strong> и е достъпна безплатно за всички потребители на <strong>INAV</strong>.<br />Ако намирате INAV или INAV Конфигуратора за полезни, моля, помислете дали да не <strong>подкрепите</strong> тяхното развитие чрез дарение."\r
  },\r
  "defaultSponsorsHead": {\r
    "message": "INAV се поддържа от"\r
  },\r
  "communityRCGroupsSupport": {\r
    "message": "RC Groups поддръжка"\r
  },\r
  "communityDiscordServer": {\r
    "message": "Discord сървър"\r
  },\r
  "communitySlackSupport": {\r
    "message": "Slack поддръжка - онлайн чат"\r
  },\r
  "communityTelegramSupport": {\r
    "message": "Telegram канал"\r
  },\r
  "communityFacebookSupport": {\r
    "message": "Facebook група"\r
  },\r
  "initialSetupBackupAndRestoreApiVersion": {\r
    "message": "<span style=\\"color: red\\">Функционалността за архивиране и възстановяване е деактивирана.</span>  Имате фърмуер с API версия <span style=\\"color: red\\">$1</span>, архивирането и възстановяването изисква <span style=\\"color: #37a8db\\">$2</span>.  Моля, архивирайте настройките си чрез CLI, вижте документацията на INAV за процедурата."\r
  },\r
  "initialSetupButtonCalibrateAccel": {\r
    "message": "Калибрирай акселерометър"\r
  },\r
  "initialSetupCalibrateAccelText": {\r
    "message": "6-точково калибриране на акселерометъра. Отидете на wiki за iNav и следвайте Sensor Calibration за повече информация."\r
  },\r
  "initialSetupButtonCalibrateMag": {\r
    "message": "Калибрирай магнитометър"\r
  },\r
  "initialSetupCalibrateMagText": {\r
    "message": "Завъртете мултиротора поне <strong>360</strong> градуса по всички оси на въртене, имате 30 секунди за изпълнение."\r
  },\r
  "initialSetupButtonReset": {\r
    "message": "Нулирай настройките"\r
  },\r
  "initialSetupResetText": {\r
    "message": "Възстановяване на настройките по <strong>подразбиране</strong>"\r
  },\r
  "initialSetupButtonBackup": {\r
    "message": "Архив"\r
  },\r
  "initialSetupButtonRestore": {\r
    "message": "Възстанови"\r
  },\r
  "initialSetupBackupRestoreText": {\r
    "message": "<strong>Архивирайте</strong> конфигурацията си в случай на инцидент, <strong>CLI</strong> настройките <span style=\\"color: red\\">не</span> са включени - вижте 'dump' CLI команда."\r
  },\r
  "initialSetupBackupSuccess": {\r
    "message": "Архивът е запазен <span style=\\"color: #37a8db\\">успешно</span>"\r
  },\r
  "initialSetupRestoreSuccess": {\r
    "message": "Конфигурацията е възстановена <span style=\\"color: #37a8db\\">успешно</span>"\r
  },\r
  "initialSetupButtonResetZaxis": {\r
    "message": "Нулирай Z ос, отместване: 0°"\r
  },\r
  "initialSetupButtonResetZaxisValue": {\r
    "message": "Нулирай Z ос, отместване: $1°"\r
  },\r
  "initialSetupMixerHead": {\r
    "message": "Тип миксер"\r
  },\r
  "initialSetupThrottleHead": {\r
    "message": "Настройки на газта"\r
  },\r
  "initialSetupMinimum": {\r
    "message": "Минимум:"\r
  },\r
  "initialSetupMaximum": {\r
    "message": "Максимум:"\r
  },\r
  "initialSetupFailsafe": {\r
    "message": "Failsafe:"\r
  },\r
  "initialSetupMinCommand": {\r
    "message": "MinCommand:"\r
  },\r
  "initialSetupBatteryHead": {\r
    "message": "Батерия"\r
  },\r
  "initialSetupMinCellV": {\r
    "message": "Мин. напрежение на клетка:"\r
  },\r
  "initialSetupMaxCellV": {\r
    "message": "Макс. напрежение на клетка:"\r
  },\r
  "initialSetupVoltageScale": {\r
    "message": "Мащаб на напрежението:"\r
  },\r
  "initialSetupAccelTrimsHead": {\r
    "message": "Корекции на акселерометъра"\r
  },\r
  "initialSetupPitch": {\r
    "message": "Тангаж:"\r
  },\r
  "initialSetupRoll": {\r
    "message": "Рол:"\r
  },\r
  "initialSetupMagHead": {\r
    "message": "Магнитометър"\r
  },\r
  "initialSetupDeclination": {\r
    "message": "Деклинация:"\r
  },\r
  "initialSetupInfoHead": {\r
    "message": "Информация"\r
  },\r
  "initialSetupBatteryVoltage": {\r
    "message": "Напрежение на батерията:"\r
  },\r
  "initialSetupBatteryDetectedCells": {\r
    "message": "Открит брой клетки на батерията:"\r
  },\r
  "initialSetupBatteryDetectedCellsValue": {\r
    "message": "$1"\r
  },\r
  "initialSetupBatteryPercentage": {\r
    "message": "Оставаща батерия:"\r
  },\r
  "initialSetupBatteryPercentageValue": {\r
    "message": "$1%"\r
  },\r
  "initialSetupBatteryRemainingCapacity": {\r
    "message": "Оставащ капацитет на батерията"\r
  },\r
  "initialSetupBatteryRemainingCapacityValue": {\r
    "message": "$1 $2"\r
  },\r
  "initialSetupBatteryFull": {\r
    "message": "Батерията е пълна при включване"\r
  },\r
  "initialSetupBatteryFullValue": {\r
    "message": "$1"\r
  },\r
  "initialSetupBatteryThresholds": {\r
    "message": "Праг на използвания капацитет на батерията"\r
  },\r
  "initialSetupBatteryThresholdsValue": {\r
    "message": "$1"\r
  },\r
  "initialSetup_Wh_drawn": {\r
    "message": "Консумиран капацитет:"\r
  },\r
  "initialSetup_Wh_drawnValue": {\r
    "message": "$1 Wh"\r
  },\r
  "initialSetupBatteryVoltageValue": {\r
    "message": "$1 V"\r
  },\r
  "initialSetupDrawn": {\r
    "message": "Консумиран капацитет:"\r
  },\r
  "initialSetupCurrentDraw": {\r
    "message": "Консумиран ток:"\r
  },\r
  "initialSetupPowerDraw": {\r
    "message": "Консумирана мощност:"\r
  },\r
  "initialSetupPowerDrawValue": {\r
    "message": "$1 W"\r
  },\r
  "initialSetupBatteryMahValue": {\r
    "message": "$1 mAh"\r
  },\r
  "initialSetupCurrentDrawValue": {\r
    "message": "$1 A"\r
  },\r
  "initialSetupRSSI": {\r
    "message": "RSSI:"\r
  },\r
  "initialSetupRSSIValue": {\r
    "message": "$1%"\r
  },\r
  "initialSetupGPSHead": {\r
    "message": "GPS"\r
  },\r
  "initialSetupInstrumentsHead": {\r
    "message": "Инструменти"\r
  },\r
  "initialSetupButtonSave": {\r
    "message": "Запази"\r
  },\r
  "initialSetupModel": {\r
    "message": "Модел: $1"\r
  },\r
  "initialSetupAttitude": {\r
    "message": "$1°"\r
  },\r
  "initialSetupAccelCalibStarted": {\r
    "message": "Калибрирането на акселерометъра започна"\r
  },\r
  "initialSetupAccelCalibEnded": {\r
    "message": "Калибрирането на акселерометъра <span style=\\"color: #37a8db\\">завърши</span>"\r
  },\r
  "initialSetupMagCalibStarted": {\r
    "message": "Калибрирането на магнитометъра започна"\r
  },\r
  "initialSetupMagCalibEnded": {\r
    "message": "Калибрирането на магнитометъра <span style=\\"color: #37a8db\\">завърши</span>"\r
  },\r
  "initialSetupOpflowCalibStarted": {\r
    "message": "Калибрирането на оптичния поток започна"\r
  },\r
  "initialSetupOpflowCalibEnded": {\r
    "message": "Калибрирането на оптичния поток <span style=\\"color: #37a8db\\">завърши</span>"\r
  },\r
  "initialSetupSettingsRestored": {\r
    "message": "Настройките са възстановени по <strong>подразбиране</strong>"\r
  },\r
  "initialSetupEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: Настройка"\r
  },\r
\r
  "RX_PPM": {\r
    "message": "PPM RX вход"\r
  },\r
  "RX_SERIAL": {\r
    "message": "Приемник на серийна основа (SPEKSAT, SBUS, SUMD)"\r
  },\r
  "RX_PWM": {\r
    "message": "PWM RX вход (един проводник на канал)"\r
  },\r
  "RX_MSP": {\r
    "message": "MSP RX вход (управление през MSP порт)"\r
  },\r
  "RX_SPI": {\r
    "message": "RX SPI базиран приемник (NRF24L01, RFM22)"\r
  },\r
  "RX_NONE": {\r
    "message": "Няма приемник"\r
  },\r
\r
  "featureVBAT": {\r
    "message": "Мониторинг на напрежението на батерията"\r
  },\r
  "featureTX_PROF_SEL": {\r
    "message": "Избор на профил с команда от стиковете на TX"\r
  },\r
  "featureINFLIGHT_ACC_CAL": {\r
    "message": "Калибриране на нивото по време на полет"\r
  },\r
  "featureMOTOR_STOP": {\r
    "message": "Спри моторите при ниска газ"\r
  },\r
  "featureSERVO_TILT": {\r
    "message": "Серво кардан (gimbal)"\r
  },\r
  "featureBAT_PROFILE_AUTOSWITCH": {\r
    "message": "Автоматичен избор на профил за батерията"\r
  },\r
  "featureBAT_PROFILE_AUTOSWITCHTip": {\r
    "message": "Автоматично избира профил на батерията според нейното напрежение, когато е включена."\r
  },\r
  "featureTHR_VBAT_COMP": {\r
    "message": "Компенсация на газта според напрежението"\r
  },\r
  "featureTHR_VBAT_COMPTip": {\r
    "message": "Автоматично компенсира спада на напрежението при разреждане на батерията, за да поддържа тягата постоянна спрямо газта."\r
  },\r
  "featureSOFTSERIAL": {\r
    "message": "Активиране на CPU базирани серийни портове"\r
  },\r
  "featureSOFTSERIALTip": {\r
    "message": "След активиране, конфигурирайте портовете в раздела Ports."\r
  },\r
  "featureGPS": {\r
    "message": "GPS за навигация и телеметрия"\r
  },\r
  "featureGPSTip": {\r
    "message": "Първо конфигурирайте сценария на порта."\r
  },\r
  "featureFAILSAFE": {\r
    "message": "Приложи failsafe настройките при загуба на RX сигнал"\r
  },\r
  "featureSONAR": {\r
    "message": "Сонар"\r
  },\r
  "featureTELEMETRY": {\r
    "message": "Телеметричен изход"\r
  },\r
  "featureCURRENT_METER": {\r
    "message": "Мониторинг на тока на батерията"\r
  },\r
  "featureREVERSIBLE_MOTORS": {\r
    "message": "Режим на обратими мотори (за използване с обратими ESC)"\r
  },\r
  "featureRSSI_ADC": {\r
    "message": "Аналогов RSSI вход"\r
  },\r
  "featureLED_STRIP": {\r
    "message": "Поддръжка на многоцветна RGB LED лента"\r
  },\r
  "featureDASHBOARD": {\r
    "message": "OLED екранен дисплей"\r
  },\r
  "featureONESHOT125": {\r
    "message": "ONESHOT ESC поддръжка"\r
  },\r
  "featureONESHOT125Tip": {\r
    "message": "Преди активиране, изключете полетната батерия и свалете перките."\r
  },\r
  "featurePWM_OUTPUT_ENABLE": {\r
    "message": "Активиране на изходите за мотори и сервосистеми"\r
  },\r
  "featurePWM_OUTPUT_ENABLETip": {\r
    "message": "Активирането на тази опция е необходимо, за да може INAV да изпраща сигнали към ESC. Това е предпазна мярка, която предотвратява повреда на сервосистемите веднага след флашване на полетния контролер."\r
  },\r
  "featureBLACKBOX": {\r
    "message": "Blackbox записващо устройство за полетни данни"\r
  },\r
  "featureBLACKBOXTip": {\r
    "message": "След активиране, конфигурирайте през раздела BlackBox."\r
  },\r
  "onboardLoggingBlackbox": {\r
    "message": "Blackbox записващо устройство"\r
  },\r
  "onboardLoggingBlackboxRate": {\r
    "message": "Част от итерациите на полетния цикъл, които да се записват (честота на запис)"\r
  },\r
  "featureCHANNEL_FORWARDING": {\r
    "message": "Препращане на спомагателни канали към изходите за серво"\r
  },\r
  "featureSOFTSPI": {\r
    "message": "CPU базиран SPI"\r
  },\r
  "featurePWM_SERVO_DRIVER": {\r
    "message": "Външен PWM драйвер за серво"\r
  },\r
  "featurePWM_SERVO_DRIVERTip": {\r
    "message": "Използвайте външен PCA9685 PWM драйвер, за да свържете до 16 сервосистеми към полетния контролер. За активиране на тази функция PCA9685 трябва да е свързан."\r
  },\r
  "featureRSSI_ADCTip": {\r
    "message": "RSSI е мярка за силата на сигнала и е много удобна, за да знаете кога самолетът ви излиза извън обхват или страда от радиосмущения."\r
  },\r
  "featureOSD": {\r
    "message": "OSD"\r
  },\r
  "featureAIRMODE": {\r
    "message": "Постоянно активиране на AIRMODE"\r
  },\r
  "featureFW_LAUNCH": {\r
    "message": "Постоянно активиране на Launch Mode за самолети"\r
  },\r
  "featureFW_AUTOTRIM": {\r
    "message": "Непрекъснато коригиране на сервосистемите за самолети"\r
  },\r
  "featureFW_AUTOTRIMTip": {\r
    "message": "При летене в стабилизиран режим, непрекъснато коригира средните позиции на серво, така че самолетът да продължава да лети право при превключване към ръчен режим. Изисква GPS."\r
  },\r
  "featureDYNAMIC_FILTERS": {\r
    "message": "Динамични жиро филтри"\r
  },\r
  "featureDYNAMIC_FILTERSTip": {\r
    "message": "Използва автоматичен FFT анализ на жирото, за да настрои notch филтри за затихване на шума от жирото. Трябва да е включено през цялото време!"\r
  },\r
  "configurationFeatureEnabled": {\r
    "message": "Активирано"\r
  },\r
  "configurationFeatureName": {\r
    "message": "Функция"\r
  },\r
  "configurationFeatureDescription": {\r
    "message": "Описание"\r
  },\r
  "configurationMixer": {\r
    "message": "Миксер"\r
  },\r
  "configurationFeatures": {\r
    "message": "Други функции"\r
  },\r
  "configurationReceiver": {\r
    "message": "Режим на приемника"\r
  },\r
  "configurationRSSI": {\r
    "message": "RSSI (сила на сигнала)"\r
  },\r
  "configurationEscFeatures": {\r
    "message": "ESC/Мотор функции"\r
  },\r
  "serialrx_inverted": {\r
    "message": "Серийният порт е инвертиран (в сравнение с протокола по подразбиране)"\r
  },\r
  "serialrx_halfduplex": {\r
    "message": "Полудуплексен сериен приемник"\r
  },\r
  "serialrx_frSkyPitchRollLabel": {\r
    "message": "Използвай Pitch & Roll сензори в телеметрията"\r
  },\r
  "serialrx_frSkyPitchRollHelp": {\r
    "message": "Това изпраща телеметрични данни за ъглите на тангаж и рол вместо стандартните сурови данни от акселерометъра. Трябва да се включи, ако се използват LUA скриптовете за INAV табло в OpenTX/EdgeTX или ETHOS."\r
  },\r
  "serialrx_frSkyFuelUnitLabel": {\r
    "message": "Единици за Fuel в SmartPort"\r
  },\r
  "serialrx_frSkyFuelUnitHelp": {\r
    "message": "Изберете данните, които искате да се изпращат към телеметричния сензор <strong>fuel</strong>."\r
  },\r
  "configurationFeaturesHelp": {\r
    "message": "<strong>Забележка:</strong> Не всички комбинации от функции са валидни. Когато фърмуерът на полетния контролер открие невалидни комбинации, конфликтните функции ще бъдат деактивирани.<br /><strong>Забележка:</strong> Конфигурирайте серийните портове <span style=\\"color: red\\">преди</span> да активирате функциите, които ще ги използват."\r
  },\r
  "configurationSerialRXHelp": {\r
    "message": "<strong>Забележка:</strong> Не забравяйте да конфигурирате сериен порт (през раздела Ports) за серийния приемник."\r
  },\r
  "configurationFrSkyOptions": {\r
    "message": "FrSky опции"\r
  },\r
  "configurationFrSkyOptions_HELP": {\r
    "message": "Тези опции предоставят бърз достъп за конфигуриране на SmartPort телеметричните сензори да работят с OpenTX/EdgeTX и ETHOS телеметричните LUA скриптове. Моля, имайте предвид, че ако използвате SBUS, ще трябва да настроите SmartPort телеметрия на отделен сериен порт."\r
  },\r
  "configurationSensorAlignmentMag": {\r
    "message": "MAG подравняване"\r
  },\r
  "configurationSensorAlignmentMagRoll": {\r
    "message": "Рол"\r
  },\r
  "configurationSensorAlignmentMagPitch": {\r
    "message": "Тангаж"\r
  },\r
  "configurationSensorAlignmentMagYaw": {\r
    "message": "Рибкане"\r
  },\r
  "configurationAccelTrims": {\r
    "message": "Корекция на акселерометъра"\r
  },\r
  "configurationAccelTrimRoll": {\r
    "message": "Корекция на рола на акселерометъра"\r
  },\r
  "configurationAccelTrimPitch": {\r
    "message": "Корекция на тангажа на акселерометъра"\r
  },\r
  "configurationMagDeclination": {\r
    "message": "Деклинация на магнитометъра [°]"\r
  },\r
  "configurationAutoDisarmDelay": {\r
    "message": "Секунди до деармиране поради ниска газ"\r
  },\r
  "configurationAutoDisarmDelayHelp": {\r
    "message": "Използва се само за армиране със стикове (т.е. не се използва ключ)"\r
  },\r
  "configurationThrottleMinimum": {\r
    "message": "Минимална газ"\r
  },\r
  "configurationThrottleMid": {\r
    "message": "Средна газ [централна стойност на RC входовете]"\r
  },\r
  "configurationThrottleMaximum": {\r
    "message": "Максимална газ"\r
  },\r
  "configurationThrottleMinimumCommand": {\r
    "message": "Минимална команда"\r
  },\r
  "configurationVoltageCurrentSensor": {\r
    "message": "Сензори за напрежение и ток"\r
  },\r
  "configurationBatteryCurrent": {\r
    "message": "Ток на батерията"\r
  },\r
  "configurationVoltageSource": {\r
    "message": "Източник на напрежение за аларми и телеметрия"\r
  },\r
  "configurationVoltageSourceHelp": {\r
    "message": "Raw напрежението е напрежението, прочетено директно от батерията. Компенсираното за спад напрежение е изчисленото напрежение, което батерията би трябвало да има без товар (симулира идеална батерия и трябва да премахне фалшивите аларми, провокирани от висок товар)."\r
  },\r
  "configurationBatteryCells": {\r
    "message": "Брой клетки (0 = автоматично)"\r
  },\r
  "configurationBatteryCellsHelp": {\r
    "message": "Задайте това на броя клетки на вашата батерия, за да деактивирате автоматичното откриване на броя клетки или за да направите възможно автоматичното превключване на профилите на батерията. Батериите 7S, 9S и 11S не могат да бъдат автоматично открити."\r
  },\r
  "configurationBatteryCellDetectVoltage": {\r
    "message": "Максимално напрежение на клетка за откриване на броя клетки"\r
  },\r
  "configurationBatteryCellDetectVoltageHelp": {\r
    "message": "Максимално напрежение на клетка, използвано за автоматично откриване на броя клетки. Трябва да е по-високо от максималното напрежение на клетка, за да се вземе предвид евентуално отклонение в измереното напрежение и да се поддържа точно откриване на броя клетки."\r
  },\r
  "configurationBatteryMinimum": {\r
    "message": "Минимално напрежение на клетка"\r
  },\r
  "configurationBatteryMaximum": {\r
    "message": "Максимално напрежение на клетка"\r
  },\r
  "configurationBatteryWarning": {\r
    "message": "Предупредително напрежение на клетка"\r
  },\r
  "configurationBatteryScale": {\r
    "message": "Мащаб на напрежението"\r
  },\r
  "configurationBatteryVoltage": {\r
    "message": "Напрежение на батерията"\r
  },\r
  "configurationCurrentScale": {\r
    "message": "Мащаб на токовия измервател"\r
  },\r
  "configurationCurrentScaleHelp": {\r
    "message": "Мащабира изходното напрежение към милиампери [1/10 mV/A]"\r
  },\r
  "configurationCurrentOffset": {\r
    "message": "Отместване в стъпки от миливолти"\r
  },\r
  "configurationBatteryMultiwiiCurrent": {\r
    "message": "Активиране на поддръжка за наследен Multiwii MSP токов изход"\r
  },\r
  "configurationBatterySettings": {\r
    "message": "Настройки на батерията"\r
  },\r
  "configurationBatterySettingsHelp": {\r
    "message": "Тези настройки се прилагат към текущо избрания профил на батерията."\r
  },\r
  "configurationBatteryCapacityValue": {\r
    "message": "Капацитет"\r
  },\r
  "configurationBatteryCapacityWarning": {\r
    "message": "Предупредителен капацитет (оставащ %)"\r
  },\r
  "configurationBatteryCapacityCritical": {\r
    "message": "Критичен капацитет (оставащ %)"\r
  },\r
  "configurationBatteryCapacityUnit": {\r
    "message": "Единица за капацитет на батерията"\r
  },\r
  "configurationLaunch": {\r
    "message": "Настройки за автоматично изстрелване на самолет"\r
  },\r
  "configurationLaunchVelocity": {\r
    "message": "Прагова скорост"\r
  },\r
  "configurationLaunchVelocityHelp": {\r
    "message": "Праг на скоростта напред за откриване на изстрелване с размах. По подразбиране: 300 [100-10000]"\r
  },\r
  "configurationLaunchAccel": {\r
    "message": "Прагово ускорение"\r
  },\r
  "configurationLaunchAccelHelp": {\r
    "message": "Праг на ускорението напред за изстрелване с ластик или хвърляне, 1G = 981 cm/s². По подразбиране: 1863 [1000-20000]"\r
  },\r
  "configurationLaunchMaxAngle": {\r
    "message": "Макс. ъгъл на хвърляне"\r
  },\r
  "configurationLaunchMaxAngleHelp": {\r
    "message": "Макс. ъгъл на хвърляне (комбинация от тангаж/рол), за да се счита изстрелването за успешно. Задайте 180 за пълно изключване. По подразбиране: 45 [5-180]"\r
  },\r
  "configurationLaunchDetectTime": {\r
    "message": "Време за откриване"\r
  },\r
  "configurationLaunchDetectTimeHelp": {\r
    "message": "Време, през което праговете трябва да бъдат надвишени, за да се счита, че изстрелването е станало. По подразбиране: 40 [10-1000]"\r
  },\r
  "configurationLaunchThr": {\r
    "message": "Газ при изстрелване"\r
  },\r
  "configurationLaunchThrHelp": {\r
    "message": "Газ за изстрелване - газта, която да се зададе по време на последователността на изстрелване. По подразбиране: 1700 [1000-2000]"\r
  },\r
  "configurationLaunchIdleThr": {\r
    "message": "Газ на празен ход"\r
  },\r
  "configurationLaunchIdleThrHelp": {\r
    "message": "Газ на празен ход - газта, която да се зададе преди започване на последователността на изстрелване. Ако е зададена под минималната газ, ще принуди спиране на мотора или ще бъде на газ на празен ход (в зависимост дали MOTOR_STOP е активиран). Ако е зададена над минималната газ, ще принуди газта до тази стойност (ако MOTOR_STOP е активиран, ще се третира според позицията на стика на газта). По подразбиране: 1000 [1000-2000]"\r
  },\r
  "configurationLaunchIdleDelay": {\r
    "message": "Закъснение на газта на празен ход"\r
  },\r
  "configurationLaunchIdleDelayHelp": {\r
    "message": "Задава времево закъснение между повдигането на газта за изстрелване и стартирането на мотора на газ на празен ход. По подразбиране: 0 [0-60000]"\r
  },\r
  "configurationWiggleWakeIdle": {\r
    "message": "Разклащане за събуждане от празен ход"\r
  },\r
  "configurationWiggleWakeIdleHelp": {\r
    "message": "Ако е активирано, тази функция позволява разклащане по рискане на самолета да събуди моторите от празен ход.<br />0: Изключено (по подразбиране)<br />1: 1 разклащане - тази настройка има по-висока точка на откриване, за самолети без опашка, която може лесно да се движи.<br />2: 2 разклащания - тази настройка има по-ниска точка на откриване, но изисква повтарящо се действие. Предназначено е за по-големи модели и самолети с опашки."\r
  },\r
  "configurationLaunchMotorDelay": {\r
    "message": "Закъснение на мотора"\r
  },\r
  "configurationLaunchMotorDelayHelp": {\r
    "message": "Закъснение между открито изстрелване и стартиране на последователността на изстрелване и увеличаване на газта. По подразбиране: 500 [0-5000]"\r
  },\r
  "configurationLaunchSpinupTime": {\r
    "message": "Време за завъртане на мотора"\r
  },\r
  "configurationLaunchSpinupTimeHelp": {\r
    "message": "Време за увеличаване на мощността от минимална газ до nav_fw_launch_thr, за да се избегне голямо напрежение върху ESC и голям въртящ момент от витлото. По подразбиране: 100 [0-1000]"\r
  },\r
  "configurationLaunchMinTime": {\r
    "message": "Минимално време на изстрелване"\r
  },\r
  "configurationLaunchMinTimeHelp": {\r
    "message": "Позволява на режима на изстрелване да се изпълнява поне това време [ms] и игнорира движенията на стиковете. По подразбиране: 0 [0-60000]"\r
  },\r
  "configurationLaunchTimeout": {\r
    "message": "Време за изчакване на изстрелване"\r
  },\r
  "configurationLaunchTimeoutHelp": {\r
    "message": "Максимално време за изпълнение на последователността на изстрелване. След това време режимът LAUNCH ще бъде изключен и нормалният полетен режим ще поеме управлението. По подразбиране: 5000 [0-60000]"\r
  },\r
  "configurationLaunchEndTime": {\r
    "message": "Време за преход в края"\r
  },\r
  "configurationLaunchEndTimeHelp": {\r
    "message": "Време за плавен преход в края на изстрелването (ms). Добавя се към Launch Timeout. По подразбиране: 2000 [0-5000]"\r
  },\r
  "configurationLaunchMaxAltitude": {\r
    "message": "Максимална височина"\r
  },\r
  "configurationLaunchMaxAltitudeHelp": {\r
    "message": "Височина, при която режимът LAUNCH ще бъде изключен и нормалният полетен режим ще поеме управлението. По подразбиране: 0 [0-60000]"\r
  },\r
  "configurationLaunchClimbAngle": {\r
    "message": "Ъгъл на изкачване"\r
  },\r
  "configurationLaunchClimbAngleHelp": {\r
    "message": "Ъгъл на изкачване (ориентация на модела, а не наклон на изкачване) за последователността на изстрелване (градуси), също така е ограничен от глобалния max_angle_inclination_pit. По подразбиране: 18 [5-45]"\r
  },\r
  "configuration3d": {\r
    "message": "Обратими мотори"\r
  },\r
  "configuration3dDeadbandLow": {\r
    "message": "Долна мъртва зона за обратими мотори"\r
  },\r
  "configuration3dDeadbandHigh": {\r
    "message": "Горна мъртва зона за обратими мотори"\r
  },\r
  "configuration3dNeutral": {\r
    "message": "Неутрална позиция за обратими мотори"\r
  },\r
  "configuration3dDeadbandThrottle": {\r
    "message": "Мъртва зона на газта за обратими мотори"\r
  },\r
  "configurationSystem": {\r
    "message": "Системна конфигурация"\r
  },\r
  "configurationLoopTime": {\r
    "message": "Време на цикъл на полетния контролер"\r
  },\r
  "configurationCalculatedCyclesSec": {\r
    "message": "Цикли/сек (Hz)"\r
  },\r
  "configurationGPS": {\r
    "message": "Конфигурация"\r
  },\r
  "configurationGPSProtocol": {\r
    "message": "Протокол"\r
  },\r
  "configurationGPSUseGalileo": {\r
    "message": "GPS използвай Galileo спътници (ЕС)"\r
  },\r
  "configurationGPSUseBeidou": {\r
    "message": "GPS използвай BeiDou спътници (КНР)"\r
  },\r
  "configurationGPSUseGlonass": {\r
    "message": "GPS използвай Glonass спътници (РУ)"\r
  },\r
  "tzOffset": {\r
    "message": "Отместване на часовия пояс"\r
  },\r
  "tzOffsetHelp": {\r
    "message": "Отместване на часовия пояс от UTC. Това се прилага към GPS времето за логване и времеви отпечатъци на Blackbox логове. (По подразбиране = 0 минути)"\r
  },\r
  "tzAutomaticDST": {\r
    "message": "Автоматично лятно часово време"\r
  },\r
  "tzAutomaticDSTHelp": {\r
    "message": "Автоматично добавя лятно часово време към GPS времето, когато е необходимо, или просто го игнорира. Включва предварителни настройки за ЕС и САЩ - ако живеете извън тези райони, се препоръчва да управлявате DST ръчно чрез tz_offset. (По подразбиране = Изключено)"\r
  },\r
  "configurationGPSBaudrate": {\r
    "message": "Скорост на предаване"\r
  },\r
  "configurationGPSubxSbas": {\r
    "message": "Тип наземно подпомагане"\r
  },\r
  "receiverType": {\r
    "message": "Тип приемник"\r
  },\r
  "configurationSerialRX": {\r
    "message": "Доставчик на сериен приемник"\r
  },\r
  "configurationSPIProtocol": {\r
    "message": "RX SPI протокол"\r
  },\r
  "configurationEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: Конфигурация"\r
  },\r
  "configurationButtonSave": {\r
    "message": "Запази и рестартирай"\r
  },\r
  "configurationVTX": {\r
    "message": "VTX"\r
  },\r
  "configurationVTXBand": {\r
    "message": "Обхват"\r
  },\r
  "configurationNoBand": {\r
    "message": "Няма"\r
  },\r
  "configurationVTXNoBandHelp": {\r
    "message": "Честотата на VTX е зададена ръчно. Избирането на обхват ще презапише конфигурираната честота."\r
  },\r
  "configurationVTXChannel": {\r
    "message": "Канал"\r
  },\r
  "configurationVTXPower": {\r
    "message": "Ниво на мощност"\r
  },\r
  "configurationVTXPowerHelp": {\r
    "message": "Ниво на мощност на VTX. Точната мощност в mW (или dBm) ще зависи от конкретния хардуер. Проверете ръководството на вашия VTX."\r
  },\r
  "configurationVTXLowerPowerDisarm": {\r
    "message": "Използвай ниска мощност, докато дронът е деармиран"\r
  },\r
  "configurationVTXLowerPowerDisarmHelp": {\r
    "message": "Активирането на тази опция ще накара VTX да използва най-ниската си мощност, докато дронът е деармиран. Използвайте 'Until first arm', за да използва най-ниска мощност само докато не армирате за първи път."\r
  },\r
  "configurationVTXLowPowerDisarmValue_0": {\r
    "message": "Изключено"\r
  },\r
  "configurationVTXLowPowerDisarmValue_1": {\r
    "message": "Винаги"\r
  },\r
  "configurationVTXLowPowerDisarmValue_2": {\r
    "message": "До първото армиране"\r
  },\r
  "configurationGimbal": {\r
    "message": "Сериен кардан"\r
  },\r
  "configurationGimbalSensitivity": {\r
    "message": "Чувствителност на кардана"\r
  },\r
  "configurationGimbalPanChannel": {\r
    "message": "Канал за панорамиране (рискане)"\r
  },\r
  "configurationGimbalTiltChannel": {\r
    "message": "Канал за наклон (тангаж)"\r
  },\r
  "configurationGimbalRollChannel": {\r
    "message": "Канал за рол"\r
  },\r
  "configurationHeadtracker": {\r
    "message": "Тракер на главата"\r
  },\r
  "configurationHeadtrackerType": {\r
    "message": "Тип тракер на главата"\r
  },\r
  "configurationHeadtrackerPanRatio": {\r
    "message": "Коефициент на движение при панорамиране"\r
  },\r
  "configurationHeadtrackerTiltRatio": {\r
    "message": "Коефициент на движение при наклон"\r
  },\r
  "configurationHeadtrackerRollRatio": {\r
    "message": "Коефициент на движение при рол"\r
  },\r
  "portsHelp": {\r
    "message": "<strong>Забележка:</strong> не всички комбинации са валидни. Когато фърмуерът на полетния контролер открие това, конфигурацията на серийния порт ще бъде нулирана."\r
  },\r
  "portsMSPWarning": {\r
    "message": "<strong>Внимание:</strong><p>Поставянето на MSP на повече от два UART порта може да попречи на USB комуникацията. Помислете за премахване на MSP от порт, където не е необходим.</p>"\r
  },\r
  "portsFirmwareUpgradeRequired": {\r
    "message": "Обновяване на фърмуера <span style=\\"color: red\\">се изисква</span>."\r
  },\r
  "portsButtonSave": {\r
    "message": "Запази и рестартирай"\r
  },\r
  "portsTelemetryDisabled": {\r
    "message": "Изключено"\r
  },\r
  "portsFunction_MSP": {\r
    "message": "MSP"\r
  },\r
  "portsFunction_GPS": {\r
    "message": "GPS"\r
  },\r
  "portsFunction_RANGEFINDER": {\r
    "message": "Далномер"\r
  },\r
  "portsFunction_OPFLOW": {\r
    "message": "Оптичен поток"\r
  },\r
  "portsFunction_ESC": {\r
    "message": "ESC изход/телеметрия"\r
  },\r
  "portsFunction_TELEMETRY_FRSKY": {\r
    "message": "FrSky"\r
  },\r
  "portsFunction_TELEMETRY_HOTT": {\r
    "message": "HoTT"\r
  },\r
  "portsFunction_TELEMETRY_LTM": {\r
    "message": "LTM"\r
  },\r
  "portsFunction_TELEMETRY_MAVLINK": {\r
    "message": "MAVLink"\r
  },\r
  "portsFunction_TELEMETRY_IBUS": {\r
    "message": "IBUS"\r
  },\r
  "portsFunction_GSM_SMS": {\r
    "message": "GSM SMS"\r
  },\r
  "portsFunction_TELEMETRY_MSP": {\r
    "message": "MSP"\r
  },\r
  "portsFunction_TELEMETRY_SMARTPORT": {\r
    "message": "SmartPort"\r
  },\r
  "portsFunction_SMARTPORT_MASTER": {\r
    "message": "SmartPort Master"\r
  },\r
  "portsFunction_RX_SERIAL": {\r
    "message": "Сериен RX"\r
  },\r
  "portsFunction_BLACKBOX": {\r
    "message": "Blackbox"\r
  },\r
  "portsFunction_RUNCAM_DEVICE_CONTROL": {\r
    "message": "RunCam устройство"\r
  },\r
  "portsFunction_TBS_SMARTAUDIO": {\r
    "message": "TBS SmartAudio"\r
  },\r
  "portsFunction_IRC_TRAMP": {\r
    "message": "IRC Tramp"\r
  },\r
  "portsFunction_VTX_FFPV": {\r
    "message": "FuriousFPV Vtx"\r
  },\r
  "portsFunction_FRSKY_OSD": {\r
    "message": "FrSky OSD"\r
  },\r
  "portsFunction_DJI_FPV": {\r
    "message": "DJI FPV VTX"\r
  },\r
  "portsFunction_MSP_DISPLAYPORT": {\r
    "message": "MSP DisplayPort"\r
  },\r
  "portsFunction_SBUS_OUTPUT": {\r
    "message": "SBus изход"\r
  },\r
  "portsFunction_GIMBAL": {\r
    "message": "Сериен кардан"\r
  },\r
  "portsFunction_HEADTRACKER": {\r
    "message": "Сериен тракер на главата"\r
  },\r
  "pidTuning_Other": {\r
    "message": "Други"\r
  },\r
  "pidTuning_Limits": {\r
    "message": "Лимити"\r
  },\r
  "pidTuning_HeadingHold_Rate": {\r
    "message": "Скорост на задържане на курса (°/s)"\r
  },\r
  "pidTuning_Max_Inclination_Angle": {\r
    "message": "Макс. ъгъл на наклон"\r
  },\r
  "pidTuning_Max_Roll": {\r
    "message": "Рол (°/10)"\r
  },\r
  "pidTuning_Max_Pitch": {\r
    "message": "Тангаж (°/10)"\r
  },\r
  "pidTuning_ShowAllPIDs": {\r
    "message": "Покажи всички PID"\r
  },\r
  "pidTuning_PIDmain": {\r
    "message": "Основни PID коефициенти"\r
  },\r
  "pidTuning_PIDother": {\r
    "message": "Допълнителни PID коефициенти"\r
  },\r
  "pidTuning_SelectNewDefaults": {\r
    "message": "Избери нови стойности по подразбиране"\r
  },\r
  "pidTuning_ResetPIDController": {\r
    "message": "Нулирай PID контролера"\r
  },\r
  "pidTuning_PIDgains": {\r
    "message": "PID коефициенти"\r
  },\r
  "pidTuning_Name": {\r
    "message": "Име"\r
  },\r
  "pidTuning_Proportional": {\r
    "message": "Пропорционален"\r
  },\r
  "pidTuning_Integral": {\r
    "message": "Интегрален"\r
  },\r
  "pidTuning_Derivative": {\r
    "message": "Диференциален"\r
  },\r
  "pidTuning_FeedForward": {\r
    "message": "FeedForward"\r
  },\r
  "pidTuning_ControlDerivative": {\r
    "message": "Control Derivative"\r
  },\r
  "pidTuning_Basic": {\r
    "message": "Основен/Acro"\r
  },\r
  "pidTuning_Level": {\r
    "message": "Ъгъл/Хоризонт"\r
  },\r
  "pidTuning_Altitude": {\r
    "message": "Барометър и Сонар/Височина"\r
  },\r
  "pidTuning_Mag": {\r
    "message": "Магнитометър/Курс"\r
  },\r
  "pidTuning_GPS": {\r
    "message": "GPS навигация"\r
  },\r
  "pidTuning_LevelP": {\r
    "message": "Степен на въздействие"\r
  },\r
  "pidTuning_LevelI": {\r
    "message": "Честота на срязване на LPF (Hz)"\r
  },\r
  "pidTuning_LevelD": {\r
    "message": "Преход (Хоризонт)"\r
  },\r
  "pidTuning_LevelHelp": {\r
    "message": "Стойностите по-долу променят поведението на полетните режими ANGLE и HORIZON. Различните PID контролери обработват стойностите LEVEL по различен начин. Моля, проверете документацията."\r
  },\r
  "pidTuning_RatesAndExpo": {\r
    "message": "Скорости и Expo"\r
  },\r
  "pidTuning_Rates_Stabilized": {\r
    "message": "Стабилизирани скорости"\r
  },\r
  "pidTuning_Rates_Roll": {\r
    "message": "Рол (°/s)"\r
  },\r
  "pidTuning_Rates_Pitch": {\r
    "message": "Тангаж (°/s)"\r
  },\r
  "pidTuning_Rates_Yaw": {\r
    "message": "Рискане (°/s)"\r
  },\r
  "pidTuning_Expo_Stabilized": {\r
    "message": "Стабилизирано Expo"\r
  },\r
  "pidTuning_Expo_Manual": {\r
    "message": "Ръчно Expo"\r
  },\r
  "pidTuning_Expo_RollPitch": {\r
    "message": "Рол и Тангаж (%)"\r
  },\r
  "pidTuning_Expo_Yaw": {\r
    "message": "Рискане (%)"\r
  },\r
  "pidTuning_RateDynamics": {\r
    "message": "Динамика на скоростта"\r
  },\r
  "pidTuning_RateDynamics_Sensitivity": {\r
    "message": "Чувствителност"\r
  },\r
  "pidTuning_RateDynamics_Correction": {\r
    "message": "Корекция"\r
  },\r
  "pidTuning_RateDynamics_Weight": {\r
    "message": "Тегло"\r
  },\r
  "pidTuning_RateDynamics_Center": {\r
    "message": "Център"\r
  },\r
  "pidTuning_RateDynamics_End": {\r
    "message": "Край"\r
  },\r
  "pidTuning_RollPitchRate": {\r
    "message": "Скорост на РОЛ и ТАНГАЖ"\r
  },\r
  "pidTuning_RollRate": {\r
    "message": "Скорост на РОЛ"\r
  },\r
  "pidTuning_PitchRate": {\r
    "message": "Скорост на ТАНГАЖ"\r
  },\r
  "pidTuning_YawRate": {\r
    "message": "Скорост на РИСКАНЕ"\r
  },\r
  "pidTuning_RollAndPitchExpo": {\r
    "message": "Expo за Рол и Тангаж"\r
  },\r
  "pidTuning_YawExpo": {\r
    "message": "Expo за Рискане"\r
  },\r
  "pidTuning_MaxRollAngle": {\r
    "message": "Макс. ъгъл на РОЛ"\r
  },\r
  "pidTuning_MaxRollAngleHelp": {\r
    "message": "Максимален ъгъл на РОЛ в режим ANGLE. Това също така ограничава максималния наклон в навигационните режими."\r
  },\r
  "pidTuning_MaxPitchAngle": {\r
    "message": "Макс. ъгъл на ТАНГАЖ"\r
  },\r
  "pidTuning_MaxPitchAngleHelp": {\r
    "message": "Максимален ъгъл на ТАНГАЖ в режим ANGLE. Това също така ограничава максималното изкачване и гмуркане в навигационните режими."\r
  },\r
  "pidTuning_ManualRollRate": {\r
    "message": "Ръчна скорост на РОЛ"\r
  },\r
  "pidTuning_ManualPitchRate": {\r
    "message": "Ръчна скорост на ТАНГАЖ"\r
  },\r
  "pidTuning_ManualYawRate": {\r
    "message": "Ръчна скорост на РИСКАНЕ"\r
  },\r
  "pidTuning_magHoldYawRate": {\r
    "message": "Лимит на скоростта за задържане на курс"\r
  },\r
  "pidTuning_MagHoldYawRateHelp": {\r
    "message": "Максимална скорост на въртене по РИСКАНЕ, която MagHold контролерът може да изиска от UAV. Използва се само когато режимът MagHold е активиран, по време на RTH и WAYPOINT навигация. Стойности под 30dps дават приятни \\"кинематографични\\" завои."\r
  },\r
  "pidTuning_Filters": {\r
    "message": "Филтри"\r
  },\r
  "pidTuning_mainFilters": {\r
    "message": "Жиро филтри"\r
  },\r
  "pidTuning_advancedFilters": {\r
    "message": "Разширени жиро филтри"\r
  },\r
  "pidTuning_gyro_main_lpf_hz": {\r
    "message": "Честота на срязване на основния жиро филтър"\r
  },\r
  "pidTuning_gyro_main_lpf_hz_help": {\r
    "message": "По-високите стойности предлагат по-малко забавяне, но повече шум. По-ниските стойности предлагат по-малко шум, но повече забавяне при обработката на жирото."\r
  },\r
  "pidTuning_MatrixFilterMinFrequency": {\r
    "message": "Мин. честота на матричния филтър"\r
  },\r
  "pidTuning_MatrixFilterMinFrequencyHelp": {\r
    "message": "Минимална честота за матричния филтър. Стойността трябва да зависи от размера на витлото. 150Hz работят добре за 5\\" и по-малки. За 7\\" и повече намалете дори под 100Hz."\r
  },\r
  "pidTuning_MatrixFilterQFactor": {\r
    "message": "Q фактор на матричния филтър"\r
  },\r
  "pidTuning_MatrixFilterQFactorHelp": {\r
    "message": "Колкото по-висока е стойността, толкова по-висока е селективността на матричния филтър. Препоръчват се стойности между 150 и 300."\r
  },\r
  "pidTuning_UnicornFilterQFactor": {\r
    "message": "Q фактор на Unicorn филтъра"\r
  },\r
  "pidTuning_dtermFilters": {\r
    "message": "D-term филтри"\r
  },\r
  "pidTuning_dtermLpfCutoffFrequency": {\r
    "message": "Честота на срязване на D-term LPF"\r
  },\r
  "pidTuning_dtermLpfCutoffFrequencyHelp": {\r
    "message": "Нискочестотен срязващ филтър за Dterm за всички PID контролери."\r
  },\r
  "pidTuning_rpmFilters": {\r
    "message": "Жиро RPM филтри"\r
  },\r
  "pidTuning_rpm_gyro_filter_enabled": {\r
    "message": "Жиро RPM филтър (изисква ESC телеметрия)"\r
  },\r
  "pidTuning_rpm_gyro_min_hz": {\r
    "message": "Мин. честота на жиро RPM филтъра"\r
  },\r
  "pidTuning_Mechanics": {\r
    "message": "Механика"\r
  },\r
  "pidTuning_ITermMechanics": {\r
    "message": "I-term механика"\r
  },\r
  "pidTuning_itermRelaxCutoff": {\r
    "message": "Честота на срязване за Relax на I-term"\r
  },\r
  "pidTuning_itermRelaxCutoffHelp": {\r
    "message": "По-ниските стойности отварят по-дълъг времеви прозорец за работа на Iterm Relax и по-силно потискане на Iterm. По-високите стойности съкращават времевите прозорци и намаляват потискането."\r
  },\r
  "pidTuning_antigravityGain": {\r
    "message": "Antigravity коефициент"\r
  },\r
  "pidTuning_antigravityAccelerator": {\r
    "message": "Antigravity Accelerator"\r
  },\r
  "pidTuning_antigravityCutoff": {\r
    "message": "Antigravity честота на срязване"\r
  },\r
  "pidTuning_itermBankAngleFreeze": {\r
    "message": "Ъгъл на наклон за замразяване на Yaw Iterm"\r
  },\r
  "pidTuning_itermBankAngleFreezeHelp": {\r
    "message": "Замразява Yaw Iterm, когато самолетът е наклонен повече от този брой градуси. Това помага да се спре кормилото да противодейства на завоя. 0 изключва тази функция. Прилага се само за самолети."\r
  },\r
  "pidTuning_dTermMechanics": {\r
    "message": "D-term механика"\r
  },\r
  "pidTuning_d_boost_min": {\r
    "message": "Мин. мащаб на D-Boost"\r
  },\r
  "pidTuning_d_boost_min_help": {\r
    "message": "Определя максимално допустимото затихване на Dterm по време на фазата на ускорение на стика. Стойност 1.0 означава, че Dterm не се затихва. 0.5 означава, че е позволено да се свие наполовина. По-ниските стойности водят до по-бърза реакция при бързо движение на стика."\r
  },\r
  "pidTuning_d_boost_max": {\r
    "message": "Макс. мащаб на D-Boost"\r
  },\r
  "pidTuning_d_boost_max_help": {\r
    "message": "Определя максималното усилване на Dterm, когато се достигне максималното ъглово ускорение. 1.0 означава, че D-Boost е изключен, 2.0 означава, че Dterm може да нарасне със 100%. Стойностите между 1.5 и 1.7 обикновено са оптимални."\r
  },\r
  "pidTuning_d_boost_max_at_acceleration": {\r
    "message": "Макс. D-Boost при ускорение [dps^2]"\r
  },\r
  "pidTuning_d_boost_max_at_acceleration_help": {\r
    "message": "D-Boost е напълно активен, когато ъгловото ускорение (открито от жирото или зададено като целева скорост) достигне даденото ускорение. Между 0 и тази стойност, D-Boost факторът се мащабира линейно."\r
  },\r
  "pidTuning_d_boost_gyro_delta_lpf_hz": {\r
    "message": "D-Boost жиро LPF"\r
  },\r
  "pidTuning_d_boost_gyro_delta_lpf_hz_help": {\r
    "message": "Трябва да се настрои на честотата на трептенията от въздушния поток на витлото. 5-инчовите квадрокоптери работят най-добре при около 80Hz, 7-инчовите при около 50Hz."\r
  },\r
  "pidTuning_tpaMechanics": {\r
    "message": "PID атенюация според тягата"\r
  },\r
  "pidTuning_TPA": {\r
    "message": "PID атенюация според тягата (TPA)"\r
  },\r
  "pidTuning_TPABreakPoint": {\r
    "message": "TPA точка на пречупване"\r
  },\r
  "pidTuning_FW_TPATimeConstant": {\r
    "message": "Времеконстанта на TPA за самолети"\r
  },\r
  "pidTuning_FW_TPATimeConstantHelp": {\r
    "message": "Времеконстанта за изглаждане и забавяне на TPA, за да отрази не-мигновената реакция на скоростта/газта на самолета."\r
  },\r
  "pidTuning_fwLevelTrimMechanics": {\r
    "message": "Механика за самолети"\r
  },\r
  "pidTuning_fw_level_pitch_trim": {\r
    "message": "Корекция на ниво [°]"\r
  },\r
  "pidTuning_fw_level_pitch_trim_help": {\r
    "message": "Корекция на тангажа за режимите на полет със самоподравняване. В градуси. +5 означава, че носът на самолета трябва да се повдигне с 5° от нивото."\r
  },\r
  "pidTuning_ButtonSave": {\r
    "message": "Запази"\r
  },\r
  "pidTuning_ButtonRefresh": {\r
    "message": "Обнови"\r
  },\r
  "pidTuning_ProfileHead": {\r
    "message": "Профил"\r
  },\r
  "pidTuning_LoadedProfile": {\r
    "message": "Зареден профил: <strong style=\\"color: #37a8db\\">$1</strong>"\r
  },\r
  "pidTuning_Manual_Rates": {\r
    "message": "Ръчни скорости"\r
  },\r
  "pidTuning_Manual_Roll": {\r
    "message": "Рол (%)"\r
  },\r
  "pidTuning_Manual_Pitch": {\r
    "message": "Тангаж (%)"\r
  },\r
  "pidTuning_Manual_Yaw": {\r
    "message": "Рискане (%)"\r
  },\r
  "pidTuning_gyro_dyn_lpf_min_hz": {\r
    "message": "Мин. срязване на динамичния жиро LPF"\r
  },\r
  "pidTuning_gyro_dyn_lpf_max_hz": {\r
    "message": "Макс. срязване на динамичния жиро LPF"\r
  },\r
  "pidTuning_gyro_dyn_lpf_curve_expo": {\r
    "message": "Expo на кривата на динамичния жиро LPF"\r
  },\r
  "pidTuning_gyro_dyn_lpf_min_hz_help": {\r
    "message": "Определя честотата на срязване на жиро LPF при минимална газ. Когато газта се увеличи, честотата на срязване на LPF също се увеличава, до максималната честота на срязване."\r
  },\r
  "pidTuning_gyro_dyn_lpf_max_hz_help": {\r
    "message": "Определя честотата на срязване на жиро LPF при максимална газ. Когато газта се намали, честотата на срязване на LPF също се намалява, до минималната честота на срязване."\r
  },\r
  "loadedMixerProfile": {\r
    "message": "Зареден Mixer профил: <strong style=\\"color: #37a8db\\">$1</strong>, проверете раздела за режими: MIXER PROFILE 2, ако не виждате промените."\r
  },\r
  "loadedBatteryProfile": {\r
    "message": "Зареден Battery профил: <strong style=\\"color: #37a8db\\">$1</strong>"\r
  },\r
  "setControlProfile": {\r
    "message": "Задаване на Control профил: <strong style=\\"color: #37a8db\\">$1</strong>"\r
  },\r
  "setMixerProfile": {\r
    "message": "Задаване на Mixer профил: <strong style=\\"color: #37a8db\\">$1</strong>"\r
  },\r
  "setBatteryProfile": {\r
    "message": "Задаване на Battery профил: <strong style=\\"color: #37a8db\\">$1</strong>"\r
  },\r
  "pidTuningDataRefreshed": {\r
    "message": "PID данните са <strong>обновени</strong>"\r
  },\r
  "pidTuningEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: PID Tuning"\r
  },\r
\r
  "receiverHelp": {\r
    "message": "Моля, прочетете главата за приемника от документацията. Конфигурирайте сериен порт (ако е необходимо), режим на приемника (serial/ppm/pwm), доставчик (за серийни приемници), свържете приемника, задайте карта на каналите, конфигурирайте крайните точки/обхват на каналите на TX, така че всички канали да са от ~1000 до ~2000. Задайте средна точка (по подразбиране 1500), коригирайте каналите до 1500, конфигурирайте мъртва зона на стиковете, проверете поведението, когато TX е изключен или извън обхват. Уверете се, че стойностите на каналите се увеличават, когато бутате стиковете нагоре и надясно. Ако не, обърнете посоката на канала в TX. Не прилагайте никакво друго микширане в TX.<br /><span style=\\"color: red\\">ВАЖНО:</span> Преди да летите, прочетете главата за failsafe от документацията и конфигурирайте failsafe."\r
  },\r
  "receiverThrottleMid": {\r
    "message": "Средна точка на газта"\r
  },\r
  "receiverThrottleExpo": {\r
    "message": "Expo на газта"\r
  },\r
  "receiverRcRate": {\r
    "message": "RC скорост"\r
  },\r
  "receiverDeadband": {\r
    "message": "RC мъртва зона"\r
  },\r
  "receiverHelpDeadband": {\r
    "message": "Това са стойности (в us), с които RC входът може да се различава, преди да се счита за валиден. За предаватели с трептене на изходите, тази стойност може да се увеличи, ако RC входовете потрепват в празен ход."\r
  },\r
  "receiverHelpYawDeadband": {\r
    "message": "Това са стойности (в us), с които RC входът може да се различава, преди да се счита за валиден. За предаватели с трептене на изходите, тази стойност може да се увеличи, ако RC входовете потрепват в празен ход. <strong>Тази настройка е само за Рискане.</strong>"\r
  },\r
  "receiverYawDeadband": {\r
    "message": "Мъртва зона за рискане"\r
  },\r
  "receiverRcExpo": {\r
    "message": "RC Expo"\r
  },\r
  "receiverRcYawExpo": {\r
    "message": "RC Yaw Expo"\r
  },\r
  "receiverManualRcExpo": {\r
    "message": "Ръчно RC Expo"\r
  },\r
  "receiverManualRcYawExpo": {\r
    "message": "Ръчно RC Yaw Expo"\r
  },\r
  "receiverChannelMap": {\r
    "message": "Карта на каналите"\r
  },\r
  "receiverChannelMapTitle": {\r
    "message": "Можете да дефинирате своя собствена карта на каналите, като кликнете вътре в полето."\r
  },\r
  "receiverRssiChannel": {\r
    "message": "RSSI канал"\r
  },\r
  "receiverRssiSource": {\r
    "message": "RSSI източник"\r
  },\r
  "receiverRefreshRateTitle": {\r
    "message": "Честота на опресняване на графиката"\r
  },\r
  "receiverButtonSave": {\r
    "message": "Запази"\r
  },\r
  "receiverButtonRefresh": {\r
    "message": "Обнови"\r
  },\r
  "receiverButtonSticks": {\r
    "message": "Контролни стикове"\r
  },\r
  "receiverDataRefreshed": {\r
    "message": "RC настройките са <strong>обновени</strong>"\r
  },\r
  "receiverEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: Приемник"\r
  },\r
\r
  "auxiliaryHelp": {\r
    "message": "Използвайте диапазони, за да дефинирате ключовете на вашия предавател и съответните им режими. Канал на приемника, който дава показания между минималния и максималния диапазон, ще активира режима. Не забравяйте да запазите настройките си с бутона Save."\r
  },\r
  "auxiliaryToggleUnused": {\r
    "message": "Скрий неизползваните режими"\r
  },\r
  "auxiliaryMin": {\r
    "message": "Мин."\r
  },\r
  "auxiliaryMax": {\r
    "message": "Макс."\r
  },\r
  "auxiliaryAddRange": {\r
    "message": "Добави диапазон"\r
  },\r
  "auxiliaryAutoChannelSelect": {\r
    "message": "АВТОМ."\r
  },\r
  "auxiliaryButtonSave": {\r
    "message": "Запази"\r
  },\r
  "auxiliaryEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>"\r
  },\r
  "eepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>"\r
  },\r
  "adjustmentsHelp": {\r
    "message": "Конфигурирайте коригиращи ключове. Вижте раздела 'in-flight adjustments' от ръководството за подробности. Промените, които коригиращите функции правят, не се записват автоматично. Има 4 слота. Всеки ключ, използван за едновременни корекции, изисква изключително използване на слот."\r
  },\r
  "adjustmentsExamples": {\r
    "message": "Примери"\r
  },\r
  "adjustmentsExample1": {\r
    "message": "Използвайте Слот 1 и 3-позиционен ключ на CH5, за да избирате между Pitch/Roll P, I и D и друг 3-позиционен ключ на CH6, за да увеличавате или намалявате стойността, когато се държи нагоре или надолу."\r
  },\r
  "adjustmentsExample2": {\r
    "message": "Използвайте Слот 2 и 3-позиционен ключ на CH8, за да активирате избор на Rate Profile чрез същия 3-позиционен ключ на същия канал."\r
  },\r
  "adjustmentsColumnEnable": {\r
    "message": "Ако е активирано"\r
  },\r
  "adjustmentsColumnUsingSlot": {\r
    "message": "използвайки слот"\r
  },\r
  "adjustmentsColumnWhenChannel": {\r
    "message": "когато канал"\r
  },\r
  "adjustmentsColumnIsInRange": {\r
    "message": "е в диапазон"\r
  },\r
  "adjustmentsColumnThenApplyFunction": {\r
    "message": "тогава приложи"\r
  },\r
  "adjustmentsColumnViaChannel": {\r
    "message": "чрез канал"\r
  },\r
  "adjustmentsSlot0": {\r
    "message": "Слот 1"\r
  },\r
  "adjustmentsSlot1": {\r
    "message": "Слот 2"\r
  },\r
  "adjustmentsSlot2": {\r
    "message": "Слот 3"\r
  },\r
  "adjustmentsSlot3": {\r
    "message": "Слот 4"\r
  },\r
  "adjustmentsMin": {\r
    "message": "Мин."\r
  },\r
  "adjustmentsMax": {\r
    "message": "Макс."\r
  },\r
  "adjustmentsGroupRates": {\r
    "message": "Скорости и Expo"\r
  },\r
  "adjustmentsGroupPIDTuning": {\r
    "message": "PID настройка"\r
  },\r
  "adjustmentsGroupNavigationFlight": {\r
    "message": "Навигация и полет"\r
  },\r
  "adjustmentsGroupMisc": {\r
    "message": "Разни"\r
  },\r
  "adjustmentsFunction0": {\r
    "message": "Няма промени"\r
  },\r
  "adjustmentsFunction1": {\r
    "message": "Корекция на RC Rate"\r
  },\r
  "adjustmentsFunction2": {\r
    "message": "Корекция на RC Expo"\r
  },\r
  "adjustmentsFunction3": {\r
    "message": "Корекция на Throttle Expo"\r
  },\r
  "adjustmentsFunction4": {\r
    "message": "Корекция на скоростта Pitch & Roll"\r
  },\r
  "adjustmentsFunction5": {\r
    "message": "Корекция на скоростта Yaw"\r
  },\r
  "adjustmentsFunction6": {\r
    "message": "Корекция на Pitch & Roll P"\r
  },\r
  "adjustmentsFunction7": {\r
    "message": "Корекция на Pitch & Roll I"\r
  },\r
  "adjustmentsFunction8": {\r
    "message": "Корекция на Pitch & Roll D"\r
  },\r
  "adjustmentsFunction9": {\r
    "message": "Корекция на Pitch & Roll CD/FF"\r
  },\r
  "adjustmentsFunction10": {\r
    "message": "Корекция на Pitch P"\r
  },\r
  "adjustmentsFunction11": {\r
    "message": "Корекция на Pitch I"\r
  },\r
  "adjustmentsFunction12": {\r
    "message": "Корекция на Pitch D"\r
  },\r
  "adjustmentsFunction13": {\r
    "message": "Корекция на Pitch CD/FF"\r
  },\r
  "adjustmentsFunction14": {\r
    "message": "Корекция на Roll P"\r
  },\r
  "adjustmentsFunction15": {\r
    "message": "Корекция на Roll I"\r
  },\r
  "adjustmentsFunction16": {\r
    "message": "Корекция на Roll D"\r
  },\r
  "adjustmentsFunction17": {\r
    "message": "Корекция на Roll CD/FF"\r
  },\r
  "adjustmentsFunction18": {\r
    "message": "Корекция на Yaw P"\r
  },\r
  "adjustmentsFunction19": {\r
    "message": "Корекция на Yaw I"\r
  },\r
  "adjustmentsFunction20": {\r
    "message": "Корекция на Yaw D"\r
  },\r
  "adjustmentsFunction21": {\r
    "message": "Корекция на Yaw CD/FF"\r
  },\r
  "adjustmentsFunction22": {\r
    "message": "Избор на Rate Profile"\r
  },\r
  "adjustmentsFunction23": {\r
    "message": "Корекция на Pitch Rate"\r
  },\r
  "adjustmentsFunction24": {\r
    "message": "Корекция на Roll Rate"\r
  },\r
  "adjustmentsFunction25": {\r
    "message": "Корекция на RC Yaw Expo"\r
  },\r
  "adjustmentsFunction26": {\r
    "message": "Корекция на Manual RC Expo"\r
  },\r
  "adjustmentsFunction27": {\r
    "message": "Корекция на Manual RC Yaw Expo"\r
  },\r
  "adjustmentsFunction28": {\r
    "message": "Корекция на Manual Pitch & Roll Rate"\r
  },\r
  "adjustmentsFunction29": {\r
    "message": "Корекция на Manual Roll Rate"\r
  },\r
  "adjustmentsFunction30": {\r
    "message": "Корекция на Manual Pitch Rate"\r
  },\r
  "adjustmentsFunction31": {\r
    "message": "Корекция на Manual Yaw Rate"\r
  },\r
  "adjustmentsFunction32": {\r
    "message": "Корекция на Navigation FW Cruise Throttle"\r
  },\r
  "adjustmentsFunction33": {\r
    "message": "Корекция на Navigation FW Pitch To Throttle"\r
  },\r
  "adjustmentsFunction34": {\r
    "message": "Корекция на подравняването на платката по Рол"\r
  },\r
  "adjustmentsFunction35": {\r
    "message": "Корекция на подравняването на платката по Тангаж"\r
  },\r
  "adjustmentsFunction36": {\r
    "message": "Корекция на Level P"\r
  },\r
  "adjustmentsFunction37": {\r
    "message": "Корекция на Level I"\r
  },\r
  "adjustmentsFunction38": {\r
    "message": "Корекция на Level D"\r
  },\r
  "adjustmentsFunction39": {\r
    "message": "Корекция на Pos XY P"\r
  },\r
  "adjustmentsFunction40": {\r
    "message": "Корекция на Pos XY I"\r
  },\r
  "adjustmentsFunction41": {\r
    "message": "Корекция на Pos XY D"\r
  },\r
  "adjustmentsFunction42": {\r
    "message": "Корекция на Pos Z P"\r
  },\r
  "adjustmentsFunction43": {\r
    "message": "Корекция на Pos Z I"\r
  },\r
  "adjustmentsFunction44": {\r
    "message": "Корекция на Pos Z D"\r
  },\r
  "adjustmentsFunction45": {\r
    "message": "Корекция на Heading P"\r
  },\r
  "adjustmentsFunction46": {\r
    "message": "Корекция на Vel XY P"\r
  },\r
  "adjustmentsFunction47": {\r
    "message": "Корекция на Vel XY I"\r
  },\r
  "adjustmentsFunction48": {\r
    "message": "Корекция на Vel XY D"\r
  },\r
  "adjustmentsFunction49": {\r
    "message": "Корекция на Vel Z P"\r
  },\r
  "adjustmentsFunction50": {\r
    "message": "Корекция на Vel Z I"\r
  },\r
  "adjustmentsFunction51": {\r
    "message": "Корекция на Vel Z D"\r
  },\r
  "adjustmentsFunction52": {\r
    "message": "Корекция на FW min thr down pitch angle"\r
  },\r
  "adjustmentsFunction53": {\r
    "message": "Корекция на нивото на мощност на VTX"\r
  },\r
  "adjustmentsFunction54": {\r
    "message": "Корекция на PID атенюация според тягата (TPA)"\r
  },\r
  "adjustmentsFunction55": {\r
    "message": "Корекция на TPA точка на пречупване"\r
  },\r
  "adjustmentsFunction56": {\r
    "message": "Корекция на гладкост на управление"\r
  },\r
  "adjustmentsFunction57": {\r
    "message": "Корекция на времеконстанта на TPA за самолети"\r
  },\r
  "adjustmentsFunction58": {\r
    "message": "Корекция на ниво за самолети"\r
  },\r
  "adjustmentsFunction59": {\r
    "message": "Корекция на Multi Mission Index"\r
  },\r
  "adjustmentsFunction60": {\r
    "message": "Корекция на реакцията на управление на височина за самолети"\r
  },\r
  "adjustmentsSave": {\r
    "message": "Запази"\r
  },\r
  "adjustmentsEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: Корекции"\r
  },\r
  "programmingEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: Програмиране"\r
  },\r
  "servosChangeDirection": {\r
    "message": "Промени посоката в TX, за да съответства"\r
  },\r
  "servosName": {\r
    "message": "Име"\r
  },\r
  "servosMid": {\r
    "message": "СРЕДА"\r
  },\r
  "servosMin": {\r
    "message": "МИН."\r
  },\r
  "servosMax": {\r
    "message": "МАКС."\r
  },\r
  "servosReverse": {\r
    "message": "Обърни"\r
  },\r
  "servoOutput": {\r
    "message": "Изход"\r
  },\r
  "servosRate": {\r
    "message": "Скорост (%)"\r
  },\r
  "servosLiveMode": {\r
    "message": "Активирай Live режим"\r
  },\r
  "servosButtonSave": {\r
    "message": "Запази"\r
  },\r
  "servosNormal": {\r
    "message": "Нормално"\r
  },\r
  "servoEmptyTableInfo": {\r
    "message": "Няма конфигурирани сервосистеми. Добавете ги чрез раздела Mixer."\r
  },\r
  "servosEepromSave": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>"\r
  },\r
  "mixerSaved": {\r
    "message": "Миксерът <span style=\\"color: #37a8db\\">запазен</span>"\r
  },\r
  "mixerWizard": {\r
    "message": "Съветник за моторен миксер"\r
  },\r
  "mixerWizardInfo": {\r
    "message": "<ol><li>Свалете перките</li><li>Свържете LiPo и използвайте раздела Outputs, за да тествате всички мотори</li><li>Забележете позицията на всеки мотор (мотор #1 - горе вляво и т.н.)</li><li>Попълнете таблицата по-долу</li></ol>"\r
  },\r
  "gpsHead": {\r
    "message": "Позиция"\r
  },\r
  "gpsStatHead": {\r
    "message": "Статистика"\r
  },\r
  "gpsMapHead": {\r
    "message": "Текуща GPS локация"\r
  },\r
  "gpsMapMessage1": {\r
    "message": "Моля, проверете интернет връзката си."\r
  },\r
  "gpsMapMessage2": {\r
    "message": "Изчакване на GPS 3D fix…"\r
  },\r
  "gpsFix": {\r
    "message": "Тип на фиксация:"\r
  },\r
  "gpsFix2D": {\r
    "message": "<span class=\\"fix2d\\">2D</span>"\r
  },\r
  "gpsFix3D": {\r
    "message": "<span class=\\"fix3d\\">3D</span>"\r
  },\r
  "gpsFixNone": {\r
    "message": "<span class=\\"fixnone\\">Няма</span>"\r
  },\r
  "gpsAltitude": {\r
    "message": "Височина:"\r
  },\r
  "gpsLat": {\r
    "message": "Геогр. ширина:"\r
  },\r
  "gpsLon": {\r
    "message": "Геогр. дължина:"\r
  },\r
  "gpsSpeed": {\r
    "message": "Скорост:"\r
  },\r
  "gpsSats": {\r
    "message": "Сателити:"\r
  },\r
  "gpsDistToHome": {\r
    "message": "Разстояние до дома:"\r
  },\r
  "gpsHDOP": {\r
    "message": "HDOP:"\r
  },\r
  "gpsTotalMessages": {\r
    "message": "Общо съобщения:"\r
  },\r
  "gpsMessageRate": {\r
    "message": "Време за обновяване:"\r
  },\r
  "gpsErrors": {\r
    "message": "Грешки:"\r
  },\r
  "gpsTimeouts": {\r
    "message": "Timeout-и:"\r
  },\r
  "gpsEPH": {\r
    "message": "EPH:"\r
  },\r
  "gpsEPV": {\r
    "message": "EPV:"\r
  },\r
  "gpsSignalStr": {\r
    "message": "Сила на сигнала"\r
  },\r
  "gpsPort": {\r
    "message": "Сериен порт"\r
  },\r
  "gpsBaud": {\r
    "message": "Скорост на предаване"\r
  },\r
  "magnetometerHead": {\r
    "message": "Инструмент за подравняване"\r
  },\r
  "magnetometerHelp": {\r
    "message": "1. Коригирайте ориентацията на Flight Controller, за да съответства на физическата ориентация в самолета <u>според стрелката за \\"посока\\" на Flight Controller</u>.<br/>2. Коригирайте модела на магнитометъра, или чипа на магнитометъра, или ориентацията на осите на магнитометъра, за да съответства на физическата ориентация в самолета.<br/><strong>Забележка:</strong> Предварителната настройка за ориентация на магнитометъра (align_mag) е относителна спрямо FC. Уверете се, че първо сте подравнили FC (align_board_pitch, align_board_roll, align_board_yaw).<br/>Ако не се използва предварителна настройка (ориентацията се задава чрез align_mag_roll, align_mag_pitch и align_mag_yaw), тогава ориентацията на магнитометъра е независима."\r
  },\r
  "magnetometerOrientationPreset": {\r
    "message": "Предварителна настройка за ориентация (align_mag). Относително спрямо ориентацията на FC."\r
  },\r
  "boardInfo": {\r
    "message": "1. Изберете подравняване на Flight Controller<br>(align_board_roll, align_board_pitch, align_board_yaw)"\r
  },\r
  "magnetometerInfo": {\r
    "message": "2. Изберете предварителна настройка (align_mag) или създайте персонализирана конфигурация с помощта на плъзгачите<br>(align_mag_roll, align_mag_pitch, align_mag_yaw)"\r
  },\r
  "magnetometerElementToShow": {\r
    "message": "Елемент за показване: Модел на магнитометър или чип, или оси"\r
  },\r
  "magnetometerAxes": {\r
    "message": "XYZ (оси на магнитометъра)"\r
  },\r
  "axisTableTitleAxis": {\r
    "message": "Ос"\r
  },\r
  "axisTableTitleValue": {\r
    "message": "Стойност [°]"\r
  },\r
  "configurationSensorMagPreset": {\r
    "message": "Ориентацията е зададена от: ПРЕДВАРИТЕЛНА НАСТРОЙКА (align_mag)"\r
  },\r
  "configurationSensorMagAngles": {\r
    "message": "Ориентацията е зададена от: ЪГЛИ (align_mag_roll, align_mag_pitch ,align_mag_yaw)"\r
  },\r
  "configurationMagnetometerHelp": {\r
    "message": "<strong>Забележка:</strong> Не забравяйте да конфигурирате сериен порт (през раздела Ports), когато използвате функцията за магнитометър."\r
  },\r
  "magnetometerStatHead": {\r
    "message": "Статистика за магнитометъра"\r
  },\r
  "tabMAGNETOMETER": {\r
    "message": "Инструмент за подравняване"\r
  },\r
  "motors": {\r
    "message": "Мотори"\r
  },\r
  "servos": {\r
    "message": "Сервосистеми"\r
  },\r
  "motorsMaster": {\r
    "message": "Главен"\r
  },\r
  "motorsNotice": {\r
    "message": "<strong>Внимание за режима на тестване на мотори:</strong><br />Движенето на плъзгачите ще накара моторите да се <strong>завъртят</strong>.<br />За да избегнете нараняване, <strong style=\\"color: red\\">свалете ВСИЧКИ перки</strong>, преди да използвате тази функция.<br />"\r
  },\r
  "motorsEnableControl": {\r
    "message": "Разбирам рисковете, перките са свалени - Активирай контрола на моторите."\r
  },\r
\r
  "sensorsInfo": {\r
    "message": "Имайте предвид, че използването на бързи периоди на обновяване и визуализирането на множество графики едновременно натоварва ресурсите и ще изтощи батерията ви по-бързо, ако използвате лаптоп.<br />Препоръчваме да визуализирате само графики за сензорите, които ви интересуват, като използвате разумни периоди на обновяване."\r
  },\r
  "sensorsRefresh": {\r
    "message": "Обновяване:"\r
  },\r
  "sensorsScale": {\r
    "message": "Мащаб:"\r
  },\r
\r
  "cliInfo": {\r
    "message": "<strong>Забележка</strong>: Напускането на раздела CLI или натискането на Disconnect ще изпрати <strong>автоматично</strong> командата \\"<strong>exit</strong>\\" на платката. С най-новия фърмуер това ще накара контролера да се <span style=\\"color: red\\">рестартира</span> и незапазените промени ще бъдат <span style=\\"color: red\\">загубени</span>."\r
  },\r
  "cliInputPlaceholder": {\r
    "message": "Напишете командата си тук"\r
  },\r
  "cliEnter": {\r
    "message": "Открит е CLI режим"\r
  },\r
  "cliReboot": {\r
    "message": "Открито е рестартиране от CLI"\r
  },\r
  "cliDocsBtn": {\r
    "message": "Документация за CLI команди"\r
  },\r
  "cliSaveToFileBtn": {\r
    "message": "Запази във файл"\r
  },\r
  "cliSaveToFileFailed": {\r
    "message": "Неуспешно запазване на CLI изхода във файл"\r
  },\r
  "cliSaveToFileAborted": {\r
    "message": "Запазването на CLI изхода във файл беше прекратено"\r
  },\r
  "cliSaveToFileCompleted": {\r
    "message": "CLI изходът е успешно запазен във файл"\r
  },\r
  "cliClearOutputHistoryBtn": {\r
    "message": "Изчисти екрана"\r
  },\r
  "cliCopyToClipboardBtn": {\r
    "message": "Копирай в клипборда"\r
  },\r
  "cliExitBtn": {\r
    "message": "Изход"\r
  },\r
  "cliSaveSettingsBtn": {\r
    "message": "Запази настройките"\r
  },\r
  "cliMscBtn": {\r
    "message": "Blackbox (MSC)"\r
  },\r
  "cliDiffAllBtn": {\r
    "message": "Diff All"\r
  },\r
  "cliCommandsHelp": {\r
    "message": "Въведете или поставете команди в полето вляво. Можете да използвате стрелките нагоре и надолу, за да извикате предишни команди. Въведете 'help' или кликнете върху тази икона за повече информация."\r
  },\r
  "cliCopySuccessful": {\r
    "message": "Копирано!"\r
  },\r
  "cliLoadFromFileBtn": {\r
    "message": "Зареди от файл"\r
  },\r
  "cliConfirmSnippetDialogTitle": {\r
    "message": "Преглед на заредените команди"\r
  },\r
  "cliConfirmSnippetNote": {\r
    "message": "<strong>Забележка</strong>: Можете да прегледате и редактирате командите преди изпълнение."\r
  },\r
  "cliConfirmSnippetBtn": {\r
    "message": "Изпълни"\r
  },\r
\r
  "loggingNote": {\r
    "message": "Данните ще се записват в този раздел <span style=\\"color: red\\">само</span>, напускането на раздела ще <span style=\\"color: red\\">отмени</span> записа и приложението ще се върне в нормалното си състояние на <strong>\\"конфигуратор\\"</strong>.<br /> Можете свободно да изберете глобалния период на обновяване, данните ще се записват във файла на всеки <strong>1</strong> секунда от съображения за производителност."\r
  },\r
  "loggingSamplesSaved": {\r
    "message": "Запазени семпли:"\r
  },\r
  "loggingLogSize": {\r
    "message": "Размер на лога:"\r
  },\r
  "loggingButtonLogFile": {\r
    "message": "Избери файл за лог"\r
  },\r
  "loggingStart": {\r
    "message": "Стартирай логване"\r
  },\r
  "loggingStop": {\r
    "message": "Спри логване"\r
  },\r
  "loggingBack": {\r
    "message": "Напусни логването / Прекъсни връзката"\r
  },\r
  "loggingErrorNotConnected": {\r
    "message": "Трябва първо да се <strong>свържете</strong>"\r
  },\r
  "loggingErrorLogFile": {\r
    "message": "Моля, изберете файл за лога"\r
  },\r
  "loggingErrorOneProperty": {\r
    "message": "Моля, изберете поне едно свойство за логване"\r
  },\r
  "loggingAutomaticallyRetained": {\r
    "message": "Автоматично зареден предишен лог файл: <strong>$1</strong>"\r
  },\r
  "blackboxNotSupported": {\r
    "message": "Фърмуерът на вашия полетен контролер не поддържа Blackbox логване или функцията Blackbox не е активирана."\r
  },\r
  "blackboxConfiguration": {\r
    "message": "Blackbox конфигурация"\r
  },\r
  "blackboxButtonSave": {\r
    "message": "Запази и рестартирай"\r
  },\r
  "serialLogging": {\r
    "message": "Външно серийно записващо устройство"\r
  },\r
  "serialLoggingSupportedNote": {\r
    "message": "Можете да записвате върху външно записващо устройство (като OpenLog или съвместим клонинг), като използвате сериен порт. Конфигурирайте порта в раздела Ports."\r
  },\r
\r
  "onboardLoggingFlashLogger": {\r
    "message": "Вграден dataflash чип"\r
  },\r
  "OnboardSDCard": {\r
    "message": "Вградена SD карта"\r
  },\r
  "sdcardNote": {\r
    "message": "Полетните логове могат да се записват на вградения слот за SD карта на вашия полетен контролер."\r
  },\r
\r
  "dataflashNote": {\r
    "message": "Полетните логове могат да се записват на вградения dataflash чип на вашия полетен контролер."\r
  },\r
  "dataflashNotPresentNote": {\r
    "message": "Вашият полетен контролер няма наличен съвместим dataflash чип."\r
  },\r
  "dataflashFirmwareUpgradeRequired": {\r
    "message": "Dataflash изисква фърмуер &gt;= 1.8.0."\r
  },\r
  "dataflashButtonSaveFile": {\r
    "message": "Запази флаш паметта във файл..."\r
  },\r
  "dataflashButtonErase": {\r
    "message": "Изтрий флаш паметта"\r
  },\r
  "dataflashConfirmEraseTitle": {\r
    "message": "Потвърдете изтриването на dataflash"\r
  },\r
  "dataflashConfirmEraseNote": {\r
    "message": "Това ще изтрие всички Blackbox логове или други данни, съдържащи се в dataflash паметта, което ще отнеме около 20 секунди. Сигурни ли сте?"\r
  },\r
  "dataflashEraseing": {\r
    "message": "Изтриването е в ход, моля, изчакайте..."\r
  },\r
  "dataflashSavingTitle": {\r
    "message": "Запазване на dataflash във файл"\r
  },\r
  "dataflashSavingNote": {\r
    "message": "Запазването може да отнеме няколко минути, моля, изчакайте."\r
  },\r
  "dataflashSavingNoteAfter": {\r
    "message": "Запазването завърши! Натиснете \\"Ok\\", за да продължите."\r
  },\r
  "dataflashButtonSaveCancel": {\r
    "message": "Отказ"\r
  },\r
  "dataflashButtonSaveDismiss": {\r
    "message": "Ok"\r
  },\r
  "dataflashButtonEraseConfirm": {\r
    "message": "Да, изтрий dataflash"\r
  },\r
  "dataflashButtonEraseCancel": {\r
    "message": "Отказ"\r
  },\r
  "dataflashFileWriteFailed": {\r
    "message": "Неуспешен запис в избрания от вас файл. Сигурни ли сте, че имате права за запис в тази папка?"\r
  },\r
\r
  "firmwareFlasherReleaseSummaryHead": {\r
    "message": "Информация за версията"\r
  },\r
  "firmwareFlasherReleaseName": {\r
    "message": "Име/Версия:"\r
  },\r
  "firmwareFlasherReleaseVersionUrl": {\r
    "message": "Посетете страницата на версията."\r
  },\r
  "firmwareFlasherReleaseNotes": {\r
    "message": "Бележки към версията:"\r
  },\r
  "firmwareFlasherReleaseDate": {\r
    "message": "Дата:"\r
  },\r
  "firmwareFlasherReleaseStatus": {\r
    "message": "Състояние:"\r
  },\r
  "firmwareFlasherReleaseTarget": {\r
    "message": "Цел:"\r
  },\r
  "firmwareFlasherReleaseFile": {\r
    "message": "Бинарен файл:"\r
  },\r
  "firmwareFlasherReleaseStatusReleaseCandidate": {\r
    "message": "<span style=\\"color: red\\">ВАЖНО: Тази версия на фърмуера в момента е отбелязана като кандидат за издаване. Моля, докладвайте незабавно за всички проблеми.</span>"\r
  },\r
  "firmwareFlasherReleaseFileUrl": {\r
    "message": "Изтеглете ръчно."\r
  },\r
  "firmwareFlasherTargetWarning": {\r
    "message": "<span style=\\"color: red\\">ВАЖНО</span>: Уверете се, че флашвате файл, подходящ за вашата цел. Флашването на двоичен файл за грешна цел може да доведе до <span style=\\"color: red\\">лоши</span> неща."\r
  },\r
\r
  "firmwareFlasherPath": {\r
    "message": "Път:"\r
  },\r
  "firmwareFlasherSize": {\r
    "message": "Размер:"\r
  },\r
  "firmwareFlasherStatus": {\r
    "message": "Състояние:"\r
  },\r
  "firmwareFlasherProgress": {\r
    "message": "Прогрес:"\r
  },\r
  "firmwareFlasherLoadFirmwareFile": {\r
    "message": "Моля, заредете файл с фърмуер"\r
  },\r
  "firmwareFlasherNoReboot": {\r
    "message": "Няма последователност на рестартиране"\r
  },\r
  "firmwareFlasherOnlineSelectBoardDescription": {\r
    "message": "Изберете вашата платка, за да видите наличните онлайн версии на фърмуера - Изберете правилния фърмуер, подходящ за вашата платка. Моля, имайте предвид, че <strong>Автоматичният избор на цел</strong> ще работи само за INAV фърмуери версия 5.0 и по-нови."\r
  },\r
  "firmwareFlasherOnlineSelectFirmwareVersionDescription": {\r
    "message": "Изберете версия на фърмуера за вашата платка.<br />Забележка: въпреки че можете да флашвате различни версии на фърмуера с този конфигуратор, когато настройвате полетния контролер, трябва да съответствате на главния и второстепенния номер на версията както на фърмуера, така и на конфигуратора."\r
  },\r
  "firmwareFlasherNoRebootDescription": {\r
    "message": "Активирайте, ако сте включили захранването на FC, докато щифтовете на bootloader са били свързани или бутонът BOOT на FC е бил натиснат."\r
  },\r
  "firmwareFlasherFlashOnConnect": {\r
    "message": "Флашвай при свързване"\r
  },\r
  "firmwareFlasherFlashOnConnectDescription": {\r
    "message": "Опитайте автоматично да флашнете платката (задейства се от новооткрит сериен порт)."\r
  },\r
  "firmwareFlasherFullChipErase": {\r
    "message": "Пълно изтриване на чипа"\r
  },\r
  "firmwareFlasherFullChipEraseDescription": {\r
    "message": "Изтрива всички конфигурационни данни, съхранявани в момента на платката."\r
  },\r
  "firmwareFlasherFlashDevelopmentFirmware": {\r
    "message": "Използвай фърмуер в разработка"\r
  },\r
  "firmwareFlasherFlashDevelopmentFirmwareDescription": {\r
    "message": "Флашвай най-новия (не тестван) фърмуер в разработка."\r
  },\r
  "firmwareFlasherManualBaud": {\r
    "message": "Ръчна скорост на предаване"\r
  },\r
  "firmwareFlasherManualBaudDescription": {\r
    "message": "Ръчен избор на скорост на предаване за платки, които не поддържат стандартната скорост или за флашване чрез bluetooth.<br /><span style=\\"color: red\\">Забележка:</span> Не се използва при флашване чрез USB DFU."\r
  },\r
  "firmwareFlasherShowDevelopmentReleases": {\r
    "message": "Показвай нестабилни версии"\r
  },\r
  "firmwareFlasherShowDevelopmentReleasesDescription": {\r
    "message": "Показвай кандидати за издаване и версии в разработка."\r
  },\r
  "firmwareFlasherOptionLabelSelectFirmware": {\r
    "message": "Избери фърмуер / платка"\r
  },\r
  "firmwareFlasherOptionLabelSelectBoard": {\r
    "message": "Избери платка"\r
  },\r
  "firmwareFlasherOptionLabelSelectFirmwareVersion": {\r
    "message": "Избери версия на фърмуера"\r
  },\r
  "firmwareFlasherOptionLabelSelectFirmwareVersionFor": {\r
    "message": "Избери версия на фърмуера за"\r
  },\r
  "firmwareFlasherButtonAutoSelect": {\r
    "message": "Автоматичен избор на цел"\r
  },\r
  "firmwareFlasherButtonLoadLocal": {\r
    "message": "Зареди фърмуер [локален]"\r
  },\r
  "firmwareFlasherButtonLoadOnline": {\r
    "message": "Зареди фърмуер [онлайн]"\r
  },\r
  "firmwareFlasherButtonLoading": {\r
    "message": "Зареждане..."\r
  },\r
  "firmwareFlasherFlashFirmware": {\r
    "message": "Флашни фърмуера"\r
  },\r
  "firmwareFlasherGithubInfoHead": {\r
    "message": "GitHub информация за фърмуера"\r
  },\r
  "firmwareFlasherCommiter": {\r
    "message": "Автор на промяната:"\r
  },\r
  "firmwareFlasherDate": {\r
    "message": "Дата:"\r
  },\r
  "firmwareFlasherHash": {\r
    "message": "Хеш:"\r
  },\r
  "firmwareFlasherUrl": {\r
    "message": "Отидете в GitHub, за да прегледате този commit..."\r
  },\r
  "firmwareFlasherMessage": {\r
    "message": "Съобщение:"\r
  },\r
  "firmwareFlasherWarningHead": {\r
    "message": "Предупреждение"\r
  },\r
  "firmwareFlasherWarningText": {\r
    "message": "Моля, <span style=\\"color: red\\">не</span> се опитвайте да флашвате <strong>не-iNAV</strong> хардуер с този флашър.<br />Не <span style=\\"color: red\\">изключвайте</span> платката или <strong>изключвайте</strong> компютъра си по време на флашване.<br /><br /><strong>Забележка: </strong>STM32 bootloader-ът се съхранява в ROM, не може да бъде блокиран.<br /><!--strong>Забележка: </strong><span style=\\"color: red\\">Авто-свързването</span> винаги е изключено, докато сте във флашъра.<br / --><strong>Забележка: </strong>Уверете се, че имате архив; някои надстройки/връщания към по-стара версия ще изтрият конфигурацията ви.<br /><strong>Забележка:</strong> Ако имате проблеми с флашването, опитайте първо да изключите всички кабели от FC, опитайте да рестартирате, обновете Chrome, обновете драйверите.<br /><strong>Забележка:</strong> Когато флашвате платки, които имат директно свързани USB гнезда (Matek H743-SLIM, Holybro Kakute и др.), уверете се, че сте прочели раздела за USB флашване от ръководството на INAV и имате инсталиран правилния софтуер и драйвери."\r
  },\r
  "firmwareFlasherRecoveryHead": {\r
    "message": "<strong>Възстановяване / Загубена комуникация<strong>"\r
  },\r
  "firmwareFlasherRecoveryText": {\r
    "message": "Ако сте загубили комуникация с платката си, следвайте тези стъпки, за да възстановите комуникацията: <ul><li>Изключете захранването</li><li>Активирайте 'No reboot sequence', активирайте 'Full chip erase'.</li><li>Свържете щифтовете BOOT или задръжте бутона BOOT.</li><li>Включете захранването (активността LED няма да мига, ако е направено правилно).</li><li>Инсталирайте всички STM32 драйвери и Zadig, ако е необходимо (вижте раздела <a href=\\"https://github.com/iNavFlight/inav/blob/master/docs/USB%20Flashing.md\\"target=\\"_blank\\">USB Flashing</a> от ръководството на INAV).</li><li>Затворете конфигуратора, затворете всички работещи инстанции на Chrome, затворете всички Chrome приложения, рестартирайте конфигуратора.</li><li>Освободете бутона BOOT, ако вашият FC има такъв.</li><li>Флашнете с правилния фърмуер (като използвате ръчна скорост на предаване, ако е посочена в ръководството на вашия FC).</li><li>Изключете захранването.</li><li>Премахнете джъмпера BOOT.</li><li>Включете захранването (светодиодът за активност трябва да мига).</li><li>Свържете се нормално.</li></ul>"\r
  },\r
  "firmwareFlasherButtonLeave": {\r
    "message": "Напусни Firmware Flasher"\r
  },\r
  "firmwareFlasherFirmwareNotLoaded": {\r
    "message": "Фърмуерът не е зареден"\r
  },\r
  "firmwareFlasherHexCorrupted": {\r
    "message": "HEX файлът изглежда повреден"\r
  },\r
  "firmwareFlasherRemoteFirmwareLoaded": {\r
    "message": "<span style=\\"color: #37a8db\\">Отдалеченият фърмуер е зареден, готов за флашване</span>"\r
  },\r
  "firmwareFlasherFailedToLoadOnlineFirmware": {\r
    "message": "Неуспешно зареждане на отдалечения фърмуер"\r
  },\r
\r
  "ledStripHelp": {\r
    "message": "Полетният контролер може да управлява цветовете и ефектите на отделни LED диоди в лента.<br />Конфигурирайте LED диодите на мрежата, конфигурирайте реда на окабеляване, след което прикрепете LED диодите към вашия самолет според позициите в мрежата. LED диодите без номер на реда на окабеляване няма да бъдат записани.<br />Двукратно кликване върху цвят, за да редактирате HSV стойностите."\r
  },\r
  "ledStripButtonSave": {\r
    "message": "Запази"\r
  },\r
  "ledStripEepromSaved": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">запазена</span>: LED"\r
  },\r
  "controlAxisRoll": {\r
    "message": "Рол [A]"\r
  },\r
  "controlAxisPitch": {\r
    "message": "Тангаж [E]"\r
  },\r
  "controlAxisYaw": {\r
    "message": "Рискане [R]"\r
  },\r
  "controlAxisThrottle": {\r
    "message": "Газ [T]"\r
  },\r
  "controlAxisMotor": {\r
    "message": "Мотор"\r
  },\r
  "radioChannelShort": {\r
    "message": "CH "\r
  },\r
  "configHelp2": {\r
    "message": "Произволно завъртане на платката в градуси, за да позволи монтирането й настрани / с главата надолу / завъртяна и т.н. Когато използвате външни сензори, използвайте подравняванията на сензорите (Gyro, Acc, Mag), за да дефинирате позицията на сензора независимо от ориентацията на платката."\r
  },\r
  "failsafeFeaturesHelpOld": {\r
    "message": "Конфигурацията на Failsafe се е променила значително. Използвайте най-новия INAV."\r
  },\r
  "failsafePaneTitleOld": {\r
    "message": "Failsafe на приемника"\r
  },\r
  "failsafeFeatureItemOld": {\r
    "message": "Failsafe настройки при загуба на RX сигнал"\r
  },\r
  "failsafeThrottleItemOld": {\r
    "message": "Failsafe газ"\r
  },\r
  "failsafeFeaturesHelpNew": {\r
    "message": "Failsafe има два етапа. <strong>Етап 1</strong> се активира, когато полетен канал има невалидна продължителност на импулса, приемникът докладва режим на повреда или изобщо няма сигнал от приемника, настройките за връщане на канала се прилагат към <span style=\\"color: red\\">всички канали</span> и се предоставя кратко време за възстановяване. <strong>Етап 2</strong> се активира, когато грешката продължи повече от конфигурираното време за защита, докато дронът е <span style=\\"color: red\\">армиран</span>, всички канали ще останат на приложената настройка за връщане на канала, освен ако не бъдат отменени от избраната процедура. <br /><strong>Забележка:</strong> Преди влизане в етап 1, настройките за връщане на канала се прилагат и към отделни радио канали, които имат невалидни импулси."\r
  },\r
  "failsafePulsrangeTitle": {\r
    "message": "Настройки за валиден обхват на импулса"\r
  },\r
  "failsafePulsrangeHelp": {\r
    "message": "Импулси, по-къси от минималните или по-дълги от максималните, са невалидни и ще задействат прилагането на настройките за връщане на отделни канали за радио каналите или влизане в етап 1 за полетните канали."\r
  },\r
  "failsafeRxMinUsecItem": {\r
    "message": "Минимална продължителност"\r
  },\r
  "failsafeRxMaxUsecItem": {\r
    "message": "Максимална продължителност"\r
  },\r
  "failsafeChannelFallbackSettingsTitle": {\r
    "message": "Настройки за връщане на канала"\r
  },\r
  "failsafeChannelFallbackSettingsHelp": {\r
    "message": "Тези настройки се прилагат към невалидни отделни радио канали или към всички канали при влизане в етап 1. <strong>Забележка:</strong> стойностите се записват в стъпки от 25µs, така че малки промени изчезват."\r
  },\r
  "failsafeChannelFallbackSettingsAuto": {\r
    "message": "<strong>Auto</strong> означава Roll, Pitch и Yaw да са в центъра, а Throttle - ниска. <strong>Hold</strong> означава да се запази последната добра получена стойност."\r
  },\r
  "failsafeChannelFallbackSettingsHold": {\r
    "message": "<strong>Hold</strong> означава да се запази последната добра получена стойност. <strong>Set</strong> означава, че ще се използва дадената тук стойност."\r
  },\r
  "failsafeStageTwoSettingsTitle": {\r
    "message": "Настройки"\r
  },\r
  "failsafeFeatureItem": {\r
    "message": "Активирано"\r
  },\r
  "failsafeFeatureHelp": {\r
    "message": "<strong>Забележка:</strong> Когато Етап 2 е ИЗКЛЮЧЕН, настройката за връщане <strong>Auto</strong> се използва вместо потребителските настройки за всички полетни канали (Roll, Pitch, Yaw и Throttle)."\r
  },\r
  "failsafeDelayItem": {\r
    "message": "Време за защита преди активиране след загуба на сигнал [В децисекунди (ds): 1 = 0.1 сек.]"\r
  },\r
  "failsafeDelayHelp": {\r
    "message": "Време за етап 1 да изчака възстановяване."\r
  },\r
  "failsafeThrottleItem": {\r
    "message": "Стойност на газта, използвана по време на кацане"\r
  },\r
  "failsafeOffDelayItem": {\r
    "message": "Закъснение за изключване на моторите по време на Failsafe [В децисекунди (ds): 1 = 0.1 сек.]"\r
  },\r
  "failsafeOffDelayHelp": {\r
    "message": "Време за оставане в режим на кацане, докато моторите се изключат и дронът се деармира."\r
  },\r
  "failsafeSubTitle1": {\r
    "message": "Процедура"\r
  },\r
  "failsafeProcedureItemSelect1": {\r
    "message": "Кацане"\r
  },\r
  "failsafeProcedureItemSelect2": {\r
    "message": "Падане (Drop)"\r
  },\r
  "failsafeProcedureItemSelect3": {\r
    "message": "RTH (връщане у дома)"\r
  },\r
  "failsafeProcedureItemSelect4": {\r
    "message": "Не прави нищо"\r
  },\r
  "failsafeKillSwitchItem": {\r
    "message": "Failsafe авариен ключ (незабавно деармиране на дрона при failsafe)"\r
  },\r
  "failsafeKillSwitchHelp": {\r
    "message": "Задайте тази опция, за да накарате failsafe ключа, конфигуриран в раздела за режими, да действа като директен авариен ключ, заобикаляйки избраната failsafe процедура. <strong>Забележка:</strong> Армирането е блокирано, когато failsafe аварийният ключ е във включено положение."\r
  },\r
  "failsafeUseMinimumDistanceItem": {\r
    "message": "Използвай алтернативна процедура за Failsafe на минимално разстояние, когато сте близо до дома."\r
  },\r
  "failsafeUseMinimumDistanceHelp": {\r
    "message": "Задайте тази опция, ако се нуждаете от алтернативно failsafe поведение, когато дронът е близо до дома. Например, авторът на функцията има самолет, който преминава в failsafe, когато крилата се отделят при кацане; когато желаното RTH failsafe поведение по време на полет вече не е желано или необходимо."\r
  },\r
  "failsafeMinDistanceItem": {\r
    "message": "Failsafe минимално разстояние"\r
  },\r
  "failsafeMinDistanceHelp": {\r
    "message": "Дронът ще използва алтернативното failsafe поведение, когато е между 0 и това минимално разстояние в сантиметри от дома. Например, ако е зададено 2000 сантиметра (20 метра) и дронът е на 13 метра, ще се следва процедурата за Failsafe на минимално разстояние. Когато дронът е на 25 метра, ще се следва нормалната failsafe процедура. Ако е зададено 0, нормалната failsafe процедура ще се използва през цялото време."\r
  },\r
  "failsafeMinDistanceProcedureItem": {\r
    "message": "Процедура за Failsafe на минимално разстояние"\r
  },\r
  "failsafeMinDistanceProcedureHelp": {\r
    "message": "Това е failsafe процедурата, която ще се следва, когато дронът е по-близо от Failsafe минималното разстояние до дома."\r
  },\r
  "mainHelpArmed": {\r
    "message": "Армиране на мотори"\r
  },\r
  "mainHelpFailsafe": {\r
    "message": "Failsafe режим"\r
  },\r
  "mainHelpLink": {\r
    "message": "Състояние на серийната връзка"\r
  },\r
  "warning": {\r
    "message": "Предупреждение"\r
  },\r
  "escProtocol": {\r
    "message": "ESC протокол"\r
  },\r
  "escRefreshRate": {\r
    "message": "Честота на опресняване на ESC"\r
  },\r
  "escProtocolHelp": {\r
    "message": "ESC трябва да поддържа избрания протокол. Променяйте само ако знаете, че ESC го поддържа!"\r
  },\r
  "escRefreshRatelHelp": {\r
    "message": "ESC трябва да поддържа честотата на опресняване. Променяйте само ако знаете, че ESC я поддържа!"\r
  },\r
  "servoRefreshRate": {\r
    "message": "Честота на опресняване на серво"\r
  },\r
  "servoRefreshRatelHelp": {\r
    "message": "Сервото трябва да поддържа честотата на опресняване. Променяйте само ако знаете, че сервото я поддържа. Твърде висока честота на опресняване може да повреди сервото!"\r
  },\r
  "logPwmOutputDisabled": {\r
    "message": "PWM изходът е деактивиран. Моторите и сервосистемите няма да работят. Използвайте раздела <u>Outputs</u>, за да го активирате!"\r
  },\r
  "configurationGyroSyncTitle": {\r
    "message": "Синхронизиране на времето за цикъл с жироскопа"\r
  },\r
  "configurationGyroLpfTitle": {\r
    "message": "Честота на срязване на LPF за жироскопа"\r
  },\r
  "configurationGyroSyncDenominator": {\r
    "message": "Знаменател на жироскопа"\r
  },\r
  "yawJumpPreventionLimit": {\r
    "message": "Предотвратяване на скокове при рискане"\r
  },\r
  "yawJumpPreventionLimitHelp": {\r
    "message": "Предотвратява скокове при рискане по време на спирания и бързо въвеждане на YAW. За да деактивирате, задайте 500. Настройте това, ако вашият дрон 'поднася'. По-високите стойности увеличават YAW авторитета, но могат да причинят нестабилност на рол/тангаж при недостатъчно мощни UAV. По-ниските стойности правят корекциите на YAW по-плавни, но могат да доведат до невъзможност на UAV да задържи курс."\r
  },\r
  "yawPLimit": {\r
    "message": "Лимит на Yaw P"\r
  },\r
  "yawPLimitHelp": {\r
    "message": "Ограничител за Yaw P term. Увеличаването му подобрява YAW авторитета, но може да причини нестабилност на РОЛ и ТАНГАЖ."\r
  },\r
  "tabFiltering": {\r
    "message": "Филтриране"\r
  },\r
  "gyroLpfCutoffFrequency": {\r
    "message": "Честота на срязване на жиро LPF"\r
  },\r
  "gyroLpfCutoffFrequencyHelp": {\r
    "message": "Софтуерен филтър за премахване на механични вибрации от жиро сигнала. Стойността е честота на срязване (Hz). За по-големи рамки с по-големи витла задайте по-ниска стойност. Твърде високата стойност може да доведе до прегряване на мотора и ESC."\r
  },\r
  "accLpfCutoffFrequency": {\r
    "message": "Честота на срязване на акселерометър LPF"\r
  },\r
  "yawLpfCutoffFrequency": {\r
    "message": "Честота на срязване на Yaw LPF"\r
  },\r
  "yawLpfCutoffFrequencyHelp": {\r
    "message": "Честота на срязване на Yaw P-term LPF"\r
  },\r
  "rollPitchItermIgnoreRate": {\r
    "message": "Скорост на игнориране на Roll/Pitch I-term"\r
  },\r
  "rollPitchItermIgnoreRateHelp": {\r
    "message": "PID I-Term се игнорира над тази скорост на въртене. Това предотвратява натрупването на I-term по време на маневри."\r
  },\r
  "yawItermIgnoreRate": {\r
    "message": "Скорост на игнориране на Yaw I-term"\r
  },\r
  "yawItermIgnoreRateHelp": {\r
    "message": "PID I-Term се игнорира над тази скорост на въртене. Това предотвратява натрупването на I-term по време на маневри."\r
  },\r
  "axisAccelerationLimitRollPitch": {\r
    "message": "Лимит на ускорението за Roll/Pitch"\r
  },\r
  "axisAccelerationLimitRollPitchHelp": {\r
    "message": "Това е максималната скорост на ъглово ускорение, която пилотът има право да изисква от UAV. UAV трябва да може да удовлетвори тази скорост на ускорение. Като ориентир, колкото по-голям е UAV, толкова по-ниско ускорение може да понесе."\r
  },\r
  "axisAccelerationLimitYaw": {\r
    "message": "Лимит на ускорението за Yaw"\r
  },\r
  "axisAccelerationLimitYawHelp": {\r
    "message": "Това е максималната скорост на ъглово ускорение, която пилотът има право да изисква от UAV. UAV трябва да може да удовлетвори тази скорост на ускорение. Като ориентир, колкото по-голям е UAV, толкова по-ниско ускорение може да понесе."\r
  },\r
  "pidTuningTPAHelp": {\r
    "message": "Коефициент на PID атенюация според газта. PID коефициентите ще бъдат намалени линейно, започвайки от 0 при TPA точка на пречупване (газ) до TPA фактор при максимална газ."\r
  },\r
  "pidTuningTPABreakPointHelp": {\r
    "message": "PID атенюацията според газта започва, когато позицията на газта надвиши тази стойност."\r
  },\r
  "configurationAsyncMode": {\r
    "message": "Асинхронен режим"\r
  },\r
  "configurationGyroFrequencyTitle": {\r
    "message": "Честота на задачата за жироскоп"\r
  },\r
  "configurationAccelerometerFrequencyTitle": {\r
    "message": "Честота на задачата за акселерометър"\r
  },\r
  "configurationAttitudeFrequencyTitle": {\r
    "message": "Честота на задачата за ориентация"\r
  },\r
  "configurationGyroLpfHelp": {\r
    "message": "Хардуерна честота на срязване за жироскопа. Като цяло, по-голямата стойност е по-добра, но прави UAV по-чувствителен към вибрации."\r
  },\r
  "configurationAsyncModeHelp": {\r
    "message": "Вижте документацията на фърмуера \\"Looptime\\" за подробности."\r
  },\r
  "configurationGyroFrequencyHelp": {\r
    "message": "Като цяло, по-високата стойност е по-добра, но прави UAV по-чувствителен към вибрации. Трябва да се поддържа над честотата на 'Flight Controller Loop Time'. Максималната практическа стойност зависи от хардуера. Ако е зададена твърде висока, платката може да не работи правилно. Наблюдавайте използването на CPU."\r
  },\r
  "configurationAccelerometerFrequencyHelp": {\r
    "message": "За Acro цели, тази стойност може да бъде намалена от стойността по подразбиране."\r
  },\r
  "configurationAttitudeFrequencyHelp": {\r
    "message": "За Acro цели, тази стойност може да бъде намалена от стойността по подразбиране."\r
  },\r
  "configurationLoopTimeHelp": {\r
    "message": "Като цяло, по-високата стойност е по-добра. С асинхронен жироскоп, трябва да се поддържа под честотата на обновяване на жирото. Максималната практическа стойност зависи от хардуера. Ако е зададена твърде висока, платката може да не работи правилно. Наблюдавайте използването на CPU."\r
  },\r
  "tabOSD": {\r
    "message": "OSD"\r
  },\r
  "configurationSensors": {\r
    "message": "Сензори и шини"\r
  },\r
  "sensorAccelerometer": {\r
    "message": "Акселерометър"\r
  },\r
  "sensorMagnetometer": {\r
    "message": "Магнитометър"\r
  },\r
  "sensorBarometer": {\r
    "message": "Барометър"\r
  },\r
  "sensorPitot": {\r
    "message": "Пито тръба"\r
  },\r
  "sensorRangefinder": {\r
    "message": "Далномер"\r
  },\r
  "sensorOpflow": {\r
    "message": "Оптичен поток"\r
  },\r
  "manualEnablingTemplate": {\r
    "message": "За да активирате чрез CLI, използвайте командата <strong>feature {име}</strong>"\r
  },\r
  "armingFailureReasonTitle": {\r
    "message": "Проверки преди армиране"\r
  },\r
  "BLOCKED_UAV_NOT_LEVEL": {\r
    "message": "UAV е нивелиран"\r
  },\r
  "BLOCKED_SENSORS_CALIBRATING": {\r
    "message": "Калибриране по време на изпълнение"\r
  },\r
  "BLOCKED_SYSTEM_OVERLOADED": {\r
    "message": "Натоварване на CPU"\r
  },\r
  "BLOCKED_NAVIGATION_SAFETY": {\r
    "message": "Навигацията е безопасна"\r
  },\r
  "BLOCKED_COMPASS_NOT_CALIBRATED": {\r
    "message": "Компасът е калибриран"\r
  },\r
  "BLOCKED_ACCELEROMETER_NOT_CALIBRATED": {\r
    "message": "Акселерометърът е калибриран"\r
  },\r
  "BLOCKED_HARDWARE_FAILURE": {\r
    "message": "Здраве на хардуера"\r
  },\r
  "BLOCKED_INVALID_SETTING": {\r
    "message": "Настройките са валидирани"\r
  },\r
  "armingCheckPass": {\r
    "message": "<div class=\\"checkspass\\"></div>"\r
  },\r
  "armingCheckFail": {\r
    "message": "<div class=\\"checksfail\\"></div>"\r
  },\r
  "calibrationHead1": {\r
    "message": "Калибриране на акселерометър"\r
  },\r
  "calibrationHead2": {\r
    "message": "Стойности на акселерометъра"\r
  },\r
  "calibrationHead3": {\r
    "message": "Калибриране на ниво"\r
  },\r
  "calibrationHead4": {\r
    "message": "Калибриране на компас"\r
  },\r
  "calibrationHead5": {\r
    "message": "Калибриране на оптичен поток"\r
  },\r
  "OpflowCalText": {\r
    "message": "След натискане на бутона имате 30 секунди да държите модела във въздуха и да го накланяте настрани, без да го местите хоризонтално. Имайте предвид, че сензорът за оптичен поток трябва да наблюдава повърхността през цялото време."\r
  },\r
  "OpflowCalBtn": {\r
    "message": "Калибрирай сензора за оптичен поток"\r
  },\r
  "accZero": {\r
    "message": "Acc нула"\r
  },\r
  "accGain": {\r
    "message": "Acc коефициент"\r
  },\r
  "NoteCalibration": {\r
    "message": "Забележка: Ако IMU е монтиран под друг ъгъл или от долната страна на полетния контролер, изпълнете стъпките за калибриране, като IMU сочи както е показано на снимките, а не квадрокоптерът (в противен случай калибрирането няма да работи)."\r
  },\r
  "AccBtn": {\r
    "message": "Калибрирай акселерометър"\r
  },\r
\r
  "stepTitle1": {\r
    "message": "Стъпка 1"\r
  },\r
  "stepTitle2": {\r
    "message": "Стъпка 2"\r
  },\r
  "stepTitle3": {\r
    "message": "Стъпка 3"\r
  },\r
  "stepTitle4": {\r
    "message": "Стъпка 4"\r
  },\r
  "stepTitle5": {\r
    "message": "Стъпка 5"\r
  },\r
  "stepTitle6": {\r
    "message": "Стъпка 6"\r
  },\r
  "MagXText": {\r
    "message": "Нула X"\r
  },\r
  "MagYText": {\r
    "message": "Нула Y"\r
  },\r
  "MagZText": {\r
    "message": "Нула Z"\r
  },\r
  "MagGainXText": {\r
    "message": "Коефициент X"\r
  },\r
  "MagGainYText": {\r
    "message": "Коефициент Y"\r
  },\r
  "MagGainZText": {\r
    "message": "Коефициент Z"\r
  },\r
  "OpflowScaleText": {\r
    "message": "Мащаб"\r
  },\r
  "AccResetBtn": {\r
    "message": "Нулирай калибрирането на акселерометъра"\r
  },\r
  "MagCalText": {\r
    "message": "След натискане на бутона имате 30 секунди да държите модела във въздуха и да го завъртите така, че всяка страна (отпред, отзад, отляво, отдясно, отгоре и отдолу) да сочи надолу към земята. Уверете се, че компасът ви не е близо до магнити или електромагнити, когато е инсталиран в дрона или по време на калибриране."\r
  },\r
  "MagBtn": {\r
    "message": "Калибрирай компас"\r
  },\r
  "LevCalText": {\r
    "message": "Моля, добавете текст тук..."\r
  },\r
  "LevBtn": {\r
    "message": "Калибриране на ниво"\r
  },\r
  "tabMixer": {\r
    "message": "Миксер"\r
  },\r
  "presetsApplyHeader": {\r
    "message": "Внимание"\r
  },\r
  "presetApplyDescription": {\r
    "message": "<p style='color: darkred;'>Уверете се, че <strong>миксерът</strong> е бил конфигуриран, преди да приложите каквито и да е предварителни настройки!</p><p>Предварителната настройка презаписва избрани конфигурационни стойности, включително миксер, филтриране, PID и други. Настройки като: полетни режими, настройки на радиото, failsafe и OSD не се променят. Приложените стойности не трябва да се считат за окончателни, а за входни точки за окончателна настройка. <br> Винаги проверявайте новата конфигурация, преди да летите!</p>"\r
  },\r
  "OK": {\r
    "message": "ОК"\r
  },\r
  "accCalibrationStartTitle": {\r
    "message": "Калибриране на акселерометър"\r
  },\r
  "accCalibrationStartBody": {\r
    "message": "Поставете полетния контролер в позицията, показана на изображението, след което натиснете отново бутона <strong>Calibrate</strong>. Повторете за всяка от 6-те позиции. Задръжте го стабилно по време на калибриране."\r
  },\r
  "accCalibrationStopTitle": {\r
    "message": "Калибрирането завърши"\r
  },\r
  "accCalibrationStopBody": {\r
    "message": "Калибрирането на акселерометъра завърши, проверете дали стойностите са запазени."\r
  },\r
  "accCalibrationProcessing": {\r
    "message": "Обработка..."\r
  },\r
  "tabProgramming": {\r
    "message": "Програмиране"\r
  },\r
  "tabAdvancedTuning": {\r
    "message": "Разширена настройка"\r
  },\r
  "advancedTuningSave": {\r
    "message": "Запази и рестартирай"\r
  },\r
  "tabAdvancedTuningTitle": {\r
    "message": "Разширена настройка"\r
  },\r
  "tabAdvancedTuningAirplaneTuningTitle": {\r
    "message": ": Самолети"\r
  },\r
  "tabAdvancedTuningMultirotorTuningTitle": {\r
    "message": ": Мултиротори"\r
  },\r
  "tabAdvancedTuningGenericTitle": {\r
    "message": "Общи настройки"\r
  },\r
  "presetApplyHead": {\r
    "message": "Прилага следните настройки:"\r
  },\r
  "gyroNotchHz1": {\r
    "message": "Честота на първия жиро notch филтър"\r
  },\r
  "gyroNotchCutoff1": {\r
    "message": "Честота на срязване на първия жиро notch филтър"\r
  },\r
  "gyroNotchHz2": {\r
    "message": "Честота на втория жиро notch филтър"\r
  },\r
  "gyroNotchCutoff2": {\r
    "message": "Честота на срязване на втория жиро notch филтър"\r
  },\r
  "gyroNotchHz1Help": {\r
    "message": "Трябва да се настрои на хармоничната честота на витлото. Обикновено е равна на <i>[честота_на_мотора] * [брой_лопатки_на_витлото]</i><br><br>Трябва да е над честотата на срязване.<br><br><i>0</i> изключва филтъра."\r
  },\r
  "gyroNotchHz2Help": {\r
    "message": "Трябва да се настрои на честотата на мотора.<br><br>Трябва да е над честотата на срязване и под честотата на първия жиро notch филтър.<br><br><i>0</i> изключва филтъра."\r
  },\r
  "gyroNotchCutoff1Help": {\r
    "message": "Определя лентата на notch филтъра. <br><br>Трябва да се поддържа под честотата на notch филтъра."\r
  },\r
  "gyroNotchCutoff2Help": {\r
    "message": "Определя лентата на notch филтъра. <br><br>Трябва да се поддържа под честотата на notch филтъра."\r
  },\r
  "dtermNotchHz": {\r
    "message": "Честота на Dterm notch филтър"\r
  },\r
  "dtermNotchCutoff": {\r
    "message": "Честота на срязване на Dterm notch филтър"\r
  },\r
  "dtermNotchHzHelp": {\r
    "message": "Трябва да бъде разположена между честотата на първия и втория жиро notch филтър.<br><br>Трябва да е над честотата на срязване.<br><br><i>0</i> изключва филтъра."\r
  },\r
  "dtermNotchCutoffHelp": {\r
    "message": "Определя лентата на филтъра. <br><br>Трябва да се поддържа под честотата на notch филтъра."\r
  },\r
  "multiRotorNavigationConfiguration": {\r
    "message": "Настройки за навигация на мултиротор"\r
  },\r
  "userControlMode": {\r
    "message": "Режим на управление от потребителя"\r
  },\r
  "posholdDefaultSpeed": {\r
    "message": "Скорост на навигация по подразбиране"\r
  },\r
  "posholdDefaultSpeedHelp": {\r
    "message": "Скорост по подразбиране по време на RTH, също се използва за WP навигация, ако не е зададена скорост за WP отсечка. Ограничено до Макс. скорост на навигация."\r
  },\r
  "posholdMaxSpeed": {\r
    "message": "Макс. скорост на навигация"\r
  },\r
  "posholdMaxManualSpeed": {\r
    "message": "Макс. CRUISE скорост"\r
  },\r
  "posholdMaxManualSpeedHelp": {\r
    "message": "Максималната хоризонтална скорост, разрешена за ръчно управление от пилота по време на POSHOLD/CRUISE режим."\r
  },\r
  "posholdMaxClimbRate": {\r
    "message": "Макс. скорост на изкачване при навигация [cm/s]"\r
  },\r
  "posholdMaxManualClimbRate": {\r
    "message": "Макс. скорост на изкачване в ALTHOLD [cm/s]"\r
  },\r
  "posholdMaxBankAngle": {\r
    "message": "Макс. ъгъл на наклон за мултиротор"\r
  },\r
  "posholdMaxBankAngleHelp": {\r
    "message": "Максимален ъгъл на наклон в навигационните режими. Ограничено от максималния ъгъл на РОЛ в раздела за PID настройка."\r
  },\r
  "posholdHoverThrottle": {\r
    "message": "Газ за висене"\r
  },\r
  "navmcAltholdThrottle": {\r
    "message": "Позиция на стика за висене в althold"\r
  },\r
  "mcWpSlowdown": {\r
    "message": "Забавяне при приближаване към пътна точка"\r
  },\r
  "mcWpSlowdownHelp": {\r
    "message": "Когато е активирано, NAV двигателят ще забави при превключване към следващата пътна точка. Това дава приоритет на завоя пред движението напред. Когато е деактивирано, NAV двигателят ще продължи към следващата пътна точка и ще завива по пътя."\r
  },\r
  "positionEstimatorConfiguration": {\r
    "message": "Оценител на позицията"\r
  },\r
  "w_z_baro_p": {\r
    "message": "Тегло на барометъра за вертикална позиция"\r
  },\r
  "w_z_gps_p": {\r
    "message": "Тегло на GPS за вертикална позиция"\r
  },\r
  "w_z_gps_v": {\r
    "message": "Тегло на GPS за вертикална скорост"\r
  },\r
  "w_xy_gps_p": {\r
    "message": "Тегло на GPS за хоризонтална позиция"\r
  },\r
  "w_xy_gps_v": {\r
    "message": "Тегло на GPS за хоризонтална скорост"\r
  },\r
  "positionEstimatorConfigurationDisclaimer": {\r
    "message": "Тези стойности трябва да се променят много внимателно. В повечето случаи няма нужда да ги променяте. Само за напреднали потребители!"\r
  },\r
  "gps_min_sats": {\r
    "message": "Мин. GPS сателити за валидна фиксация"\r
  },\r
  "w_z_baro_p_help": {\r
    "message": "Когато тази стойност е зададена на <strong>0</strong>, барометърът не се използва за изчисляване на височината."\r
  },\r
  "w_z_gps_p_help": {\r
    "message": "Тази настройка се използва само когато няма инсталиран барометър и е конфигурирано <strong>inav_use_gps_no_baro</strong>."\r
  },\r
  "wirelessModeSwitch": {\r
    "message": "Безжичен режим"\r
  },\r
  "rthConfiguration": {\r
    "message": "RTH настройки"\r
  },\r
  "autoLandingSettings": {\r
    "message": "Настройки за автоматично кацане"\r
  },\r
  "minRthDistance": {\r
    "message": "Мин. RTH разстояние"\r
  },\r
  "minRthDistanceHelp": {\r
    "message": "Ако UAV е в рамките на това разстояние от началната точка, той ще кацне вместо RTH, последвано от кацане."\r
  },\r
  "rthClimbFirst": {\r
    "message": "Изкачване преди RTH"\r
  },\r
  "rthClimbFirstHelp": {\r
    "message": "Ако е зададено ON или ON_FW_SPIRAL, самолетът първо ще се изкачи до nav_rth_altitude, преди да се обърне към дома. Ако е зададено OFF, самолетът ще се обърне и веднага ще се насочи към дома, като се изкачва по пътя. За самолет, ON ще използва линейно изкачване, ON_FW_SPIRAL ще използва кръгово изкачване (loiter turning climb) със скорост на изкачване, зададена от nav_auto_climb_rate, и скорост на завой, зададена от nav_fw_loiter_radius (ON_FW_SPIRAL е настройка за самолети и се държи по същия начин като ON за мултиротор)."\r
  },\r
  "rthClimbIgnoreEmergency": {\r
    "message": "Изкачване независимо от здравето на сензорите за позиция"\r
  },\r
  "rthAltControlOverride": {\r
    "message": "Отмяна на RTH височината и настройката за изкачване със стик за рол/тангаж"\r
  },\r
  "rthAltControlOverrideHELP": {\r
    "message": "Когато е активирано, изкачването при RTH може да бъде отменено чрез задържане на пълен тангаж надолу за >1 секунда, така че самолетът да лети към дома на текущата височина. При самолети, настройката 'Climb before RTH' може да бъде отменена чрез задържане на пълен рол наляво или надясно за >1 секунда, така че самолетът да се обърне незабавно към дома."\r
  },\r
  "rthTailFirst": {\r
    "message": "Опашката напред"\r
  },\r
  "rthAllowLanding": {\r
    "message": "Кацане след RTH"\r
  },\r
  "rthAltControlMode": {\r
    "message": "RTH режим на височина"\r
  },\r
  "rthAbortThreshold": {\r
    "message": "RTH праг на прекъсване"\r
  },\r
  "rthAbortThresholdHelp": {\r
    "message": "Функцията за проверка на RTH ще забележи дали разстоянието до дома се увеличава по време на RTH и ако надвиши прага, определен от този параметър, вместо да продължи RTH, UAV ще влезе в аварийно кацане. По подразбиране е 500m, което е достатъчно безопасно както за мултиротори, така и за самолети."\r
  },\r
  "fsMissionDelay": {\r
    "message": "Failsafe забавяне на мисията"\r
  },\r
  "fsMissionDelayHelp": {\r
    "message": "Определя забавяне в секунди, колко дълго INAV трябва да изчака, преди да се активира Failsafe RTH, ако самолетът е в мисия с пътни точки. Задайте на -1, за да деактивирате напълно Failsafe [0-600s]."\r
  },\r
  "drNavigation": {\r
    "message": "Навигация по инерция (Dead Reckoning)"\r
  },\r
  "drNavigationHelp": {\r
    "message": "Позволява на INAV да продължи навигацията (пътна точка, връщане у дома, круиз, задържане на курс и т.н.) по време на кратки прекъсвания на GPS сигнала. Тази функция се нуждае от компас и сензор за въздушна скорост на самолети."\r
  },\r
  "rthAltitude": {\r
    "message": "RTH височина"\r
  },\r
  "rthAltitudeHelp": {\r
    "message": "Използва се в режимите на RTH височина Extra, Fixed и 'At Least'."\r
  },\r
  "rthTrackBack": {\r
    "message": "RTH Track Back режим"\r
  },\r
  "rthTrackBackHelp": {\r
    "message": "Когато е активирано, самолетът първо ще следва последния си път назад, преди да лети директно към дома. Самолетите ще летят обратно по пътя с изкачване, но без спускане. Режими на употреба за RTH Track Back. OFF = изключено, ON = нормално и Failsafe RTH, FS = само Failsafe RTH."\r
  },\r
  "rthTrackBackDistance": {\r
    "message": "RTH Track Back разстояние"\r
  },\r
  "rthTrackBackDistanceHelp": {\r
    "message": "Разстояние, изминато по време на Track Back. Нормалното RTH се изпълнява, след като това общо изминато разстояние бъде надвишено [m]."\r
  },\r
  "rthSafeHome": {\r
    "message": "Safe Home режим"\r
  },\r
  "rthSafeHomeHelp": {\r
    "message": "Използва се за управление кога да се използват безопасни домове. Възможните стойности са OFF, RTH и RTH_FS. Вижте документацията за Safehome за повече информация."\r
  },\r
  "rthSafeHomeDistance": {\r
    "message": "Макс. разстояние за Safe Home"\r
  },\r
  "rthSafeHomeDistanceHelp": {\r
    "message": "За да се използва безопасен дом, той трябва да бъде на разстояние, по-малко от това [в cm] от точката на армиране."\r
  },\r
  "navMaxAltitude": {\r
    "message": "Макс. височина за навигация"\r
  },\r
  "navMaxAltitudeHelp": {\r
    "message": "Максимално разрешената височина (над началната точка), която се прилага за всички NAV режими (включително задържане на височина). 0 означава, че ограничението е изключено."\r
  },\r
  "rthHomeAltitudeLabel": {\r
    "message": "RTH височина на дома"\r
  },\r
  "rthHomeAltitudeHelp": {\r
    "message": "Използва се, когато не се каца в началната точка. При пристигане в началната точка, самолетът ще кръжи и ще промени височината до RTH височината на дома. По подразбиране е 0, което означава, че функцията е изключена."\r
  },\r
  "rthTwoStage": {\r
    "message": "Метод на първия етап на изкачване"\r
  },\r
  "rthTwoStageHelp": {\r
    "message": "Функция за двуетапно връщане у дома, ако Climb First е активирано. Задайте Climb First Stage Altitude на 0, за да използвате класическото едноетапно RTH."\r
  },\r
  "rthTwoStageAlt": {\r
    "message": "Височина на първия етап на изкачване"\r
  },\r
  "rthTwoStageAltHelp": {\r
    "message": "Настройка на височината за първия етап на двуетапно RTH. Задайте на 0, за да деактивирате двуетапното RTH [0-65000cm]."\r
  },\r
  "rthUseLinearDescent": {\r
    "message": "Използвай линейно спускане"\r
  },\r
  "rthUseLinearDescentHelp": {\r
    "message": "Ако е активирано, самолетът бавно ще се спуска до RTH височината на дома по време на отсечката към дома от RTH."\r
  },\r
  "rthLinearDescentStart": {\r
    "message": "Начално разстояние за линейно спускане"\r
  },\r
  "rthLinearDescentStartHelp": {\r
    "message": "Това е разстоянието от началната позиция, на което да започне линейното спускане. Ако е зададено 0, линейното спускане ще започне веднага."\r
  },\r
  "landMaxAltVspd": {\r
    "message": "Дронът ще започне да се спуска с тази скорост, след като достигне локацията на <strong>дома</strong>."\r
  },\r
  "landMaxAltVspdHelp": {\r
    "message": "След RTH, ако автоматичното кацане е активирано, самолетът ще започне да се спуска с тази скорост, докато достигне <strong>височината за забавяне</strong>."\r
  },\r
  "landSlowdownMaxAlt": {\r
    "message": "Когато дронът се спусне до <i>тази</i> височина, той ще започне да забавя за кацане."\r
  },\r
  "landSlowdownMaxAltHelp": {\r
    "message": "Когато самолетът достигне тази височина, той ще започне да забавя линейно между <strong>началната скорост на кацане</strong> и <strong>крайната скорост на кацане</strong>, за да я достигне на <strong>височината за финален подход</strong>."\r
  },\r
  "landSlowdownMinAlt": {\r
    "message": "Когато дронът се спусне до <i>тази</i> височина, той ще е забавил до скоростта на докосване."\r
  },\r
  "landMinAltVspd": {\r
    "message": "Това е скоростта на докосване."\r
  },\r
  "landMinAltVspdHelp": {\r
    "message": "Целевата вертикална скорост на самолета ще бъде тази стойност, когато самолетът достигне <strong>височината за финален подход</strong>, след като се е забавил линейно от <strong>височината за забавяне</strong> при <strong>началната скорост на кацане</strong>."\r
  },\r
  "emergencyDescentRate": {\r
    "message": "Скорост на аварийно кацане"\r
  },\r
  "cruiseThrottle": {\r
    "message": "Круизна газ"\r
  },\r
  "cruiseYawRateLabel": {\r
    "message": "Скорост на рискане при круиз"\r
  },\r
  "cruiseYawRateHelp": {\r
    "message": "Това е скоростта на завиване в Cruise и 3D Cruise."\r
  },\r
  "cruiseManualThrottleLabel": {\r
    "message": "Позволи ръчно увеличаване на газта"\r
  },\r
  "cruiseManualThrottleHelp": {\r
    "message": "Включването на това ще ви позволи да отмените автоматичния контрол на газта във всички навигационни режими. Не можете да слезете под автоматичната стойност на газта, освен със спиране на мотора при нулева газ."\r
  },\r
  "minThrottle": {\r
    "message": "Мин. газ"\r
  },\r
  "maxThrottle": {\r
    "message": "Макс. газ"\r
  },\r
  "maxBankAngle": {\r
    "message": "Макс. ъгъл на наклон за навигация"\r
  },\r
  "maxBankAngleHelp": {\r
    "message": "Максимален ъгъл на наклон в навигационните режими. Ограничено от максималния ъгъл на РОЛ в раздела за PID настройка."\r
  },\r
  "maxClimbAngle": {\r
    "message": "Макс. ъгъл на изкачване за навигация"\r
  },\r
  "maxClimbAngleHelp": {\r
    "message": "Максимален ъгъл на изкачване в навигационните режими. Ограничено от максималния ъгъл на ТАНГАЖ в раздела за PID настройка."\r
  },\r
  "navManualClimbRate": {\r
    "message": "Макс. скорост на изкачване в Alt-hold"\r
  },\r
  "navManualClimbRateHelp": {\r
    "message": "Максималната скорост на изкачване/спускане, която фърмуерът има право да обработва при обработка на входните данни от пилота за режима на управление ALTHOLD [cm/s]."\r
  },\r
  "navAutoClimbRate": {\r
    "message": "Макс. скорост на изкачване за навигация"\r
  },\r
  "navAutoClimbRateHelp": {\r
    "message": "Максималната скорост на изкачване/спускане, която UAV има право да достигне по време на навигационни режими. [cm/s]."\r
  },\r
  "maxDiveAngle": {\r
    "message": "Макс. ъгъл на гмуркане за навигация"\r
  },\r
  "maxDiveAngleHelp": {\r
    "message": "Максимален ъгъл на гмуркане в навигационните режими. Ограничено от максималния ъгъл на ТАНГАЖ в раздела за PID настройка."\r
  },\r
  "pitchToThrottle": {\r
    "message": "Коефициент тангаж към газ"\r
  },\r
  "pitchToThrottleHelp": {\r
    "message": "В навигационните режими, всеки градус на изкачване ще добави този брой единици към круизната газ. Обратно, всеки градус на гмуркане ще извади от нея."\r
  },\r
  "minThrottleDownPitch": {\r
    "message": "Тангаж за минимална газ надолу"\r
  },\r
  "minThrottleDownPitchHelp": {\r
    "message": "Автоматичен ъгъл на наклон надолу, когато газта е 0 в ъглов режим. Прилага се прогресивно между круизна газ и нулева газ."\r
  },\r
  "pitchToThrottleSmoothing": {\r
    "message": "Изглаждане на газта"\r
  },\r
  "pitchToThrottleSmoothingHelp": {\r
    "message": "Колко плавно автопилотът регулира нивото на газта в отговор на промени в ъгъла на тангаж [0-9]."\r
  },\r
  "pitchToThrottleThreshold": {\r
    "message": "Праг за моментална корекция на газта"\r
  },\r
  "pitchToThrottleThresholdHelp": {\r
    "message": "Автопилотът незабавно ще коригира нивото на газта без изглаждане според pitch to throttle, ако ъгълът на тангаж е с повече от този брой сантиградуси от филтрираната стойност."\r
  },\r
  "loiterRadius": {\r
    "message": "Радиус на кръжене"\r
  },\r
  "loiterDirectionLabel": {\r
    "message": "Посока на кръжене"\r
  },\r
  "loiterDirectionHelp": {\r
    "message": "Тази настройка ви позволява да изберете посоката на кръжене. Избирането на YAW ви позволява да променяте посоката на кръжене със стика за рискане."\r
  },\r
  "controlSmoothness": {\r
    "message": "Гладкост на управление"\r
  },\r
  "controlSmoothnessHelp": {\r
    "message": "Колко плавно автопилотът управлява самолета, за да коригира навигационната грешка [0-9]."\r
  },\r
  "wpTrackingAccuracy": {\r
    "message": "Точност на следване на пътна точка"\r
  },\r
  "wpTrackingAccuracyHelp": {\r
    "message": "Мъртва зона за проследяване - колко точно дронът следва трасето на пътната точка в метри. По-ниските стойности проследяват по-точно, но причиняват повече корекции на управлението. 2 е добра начална точка [0-10]."\r
  },\r
  "wpTrackingAngle": {\r
    "message": "Ъгъл на следване на пътна точка"\r
  },\r
  "wpTrackingAngleHelp": {\r
    "message": "Ъгълът, под който дронът се приближава към трасето на пътната точка. По-ниските стойности правят подхода по-дълъг, докато по-високите могат да доведат до превишаване. 60° е добра начална точка [30-80]."\r
  },\r
  "powerConfiguration": {\r
    "message": "Настройки за оценка на батерията"\r
  },\r
  "idlePower": {\r
    "message": "Мощност на празен ход"\r
  },\r
  "idlePowerHelp": {\r
    "message": "Консумация на мощност при нулева газ, използвана за оценка на оставащото време/разстояние за полет, в единици от 0.01W."\r
  },\r
  "cruisePower": {\r
    "message": "Круизна мощност"\r
  },\r
  "cruisePowerHelp": {\r
    "message": "Консумация на мощност при круизна газ, използвана за оценка на оставащото време/разстояние за полет, в единици от 0.01W."\r
  },\r
  "cruiseSpeed": {\r
    "message": "Круизна скорост"\r
  },\r
  "cruiseSpeedHelp": {\r
    "message": "Скорост на самолета/крилото при круизна газ, използвана за оценка на оставащото време/разстояние за полет, в cm/s."\r
  },\r
  "rthEnergyMargin": {\r
    "message": "RTH енергиен марж"\r
  },\r
  "rthEnergyMarginHelp": {\r
    "message": "Желан енергиен марж след прибиране у дома (процент от енергийния капацитет на батерията). Използва се за изчисляване на оставащото време/разстояние за полет."\r
  },\r
  "generalNavigationSettings": {\r
    "message": "Общи навигационни настройки"\r
  },\r
  "waypointConfiguration": {\r
    "message": "Настройки за навигация по пътни точки"\r
  },\r
  "wpLoadBoot": {\r
    "message": "Зареди пътни точки при стартиране"\r
  },\r
  "wpLoadBootHelp": {\r
    "message": "Ако е активирано, мисиите с пътни точки в EEPROM ще бъдат заредени автоматично след стартиране."\r
  },\r
  "wpEnforceAlt": {\r
    "message": "Налагай височина при пътна точка"\r
  },\r
  "wpEnforceAltHelp": {\r
    "message": "Гарантира, че височината при всяка пътна точка е достигната, преди да се продължи към следващата. Дронът ще задържа позиция [кръжене за самолети] и ще се изкачва/спуска, докато височината не влезе в зададения диапазон [1-2000 cm] от височината на пътната точка. Задайте [0], за да деактивирате. За самолети не трябва да се задава под 500cm."\r
  },\r
  "waypointRadius": {\r
    "message": "Радиус на пътната точка"\r
  },\r
  "wpRestartMission": {\r
    "message": "Рестартиране на мисията с пътни точки"\r
  },\r
  "wpRestartMissionHelp": {\r
    "message": "Задава поведението при рестартиране за WP мисия, ако бъде прекъсната по средата на мисията. START от първата WP, RESUME от последната активна WP или SWITCH между START и RESUME всеки път, когато WP Mode бъде избран отново ON. SWITCH ефективно позволява възстановяване само веднъж от предишна пътна точка по средата на мисията, след което мисията ще се рестартира от първата пътна точка."\r
  },\r
  "wpTurnSmoothing": {\r
    "message": "Изглаждане на завоите при пътни точки"\r
  },\r
  "wpTurnSmoothingHelp": {\r
    "message": "Изглажда завоите по време на WP мисии, като превключва към завой с кръжене при пътни точки. Когато е зададено ON, дронът ще достигне пътната точка по време на завоя. Когато е зададено ON-CUT, дронът ще завива вътре в пътната точка, без действително да я достигне (срязва ъгъла)."\r
  },\r
  "navMotorStop": {\r
    "message": "Отмяна на спирането на мотора при навигация"\r
  },\r
  "navMotorStopHelp": {\r
    "message": "Когато е зададено OFF, навигационната система няма да поеме контрола над мотора, ако газта е ниска (моторът ще спре). Когато е зададено OFF_ALWAYS, навигационната система няма да поеме контрола над мотора, ако газта е била ниска, дори когато failsafe е задействан. Когато е зададено AUTO_ONLY, навигационната система ще поеме контрола над газта само в автономни навигационни режими (NAV WP и NAV RTH). Когато е зададено ALL_NAV (по подразбиране), навигационната система ще поеме напълно контрола над мотора и никога няма да позволи на мотора да спре, дори когато газта е ниска. Тази настройка има ефект само върху NAV режимите, които поемат контрола над газта, когато се комбинират с MOTOR_STOP, и вероятно ще доведе до глъхване (stall), ако fw_min_throttle_down_pitch не е зададен правилно или оценката на тангажа е грешна за самолети, когато не е зададено ALL_NAV."\r
  },\r
  "soarMotorStop": {\r
    "message": "Спиране на мотора в режим на реене"\r
  },\r
  "soarMotorStopHelp": {\r
    "message": "Спира мотора, когато режимът на реене е активиран."\r
  },\r
  "soarPitchDeadband": {\r
    "message": "Мъртва зона на тангажа в режим на реене"\r
  },\r
  "soarPitchDeadbandHelp": {\r
    "message": "Мъртва зона на ъгъла на тангаж, когато режимът на реене е активиран (градуси). Ъгловият режим е неактивен в мъртвата зона, позволявайки на тангажа да се носи свободно по време на реене."\r
  },\r
  "altControlResponse": {\r
    "message": "Фактор на реакция при управление на височина"\r
  },\r
  "altControlResponseHelp": {\r
    "message": "Регулира реакцията на управлението на височината за самолети при приближаване към целевата височина. По-високите стойности ще изострят реакцията на управление на височината, но могат също така да доведат до прекомерно превишаване или нестабилност на тангажа, ако са зададени твърде високо."\r
  },\r
  "waypointRadiusHelp": {\r
    "message": "Това задава разстоянието от пътната точка, което задейства отбелязването на пътната точка като достигната."\r
  },\r
  "waypointSafeDistance": {\r
    "message": "Безопасно разстояние за пътна точка"\r
  },\r
  "waypointSafeDistanceHelp": {\r
    "message": "Максималното разстояние между началната точка и първата пътна точка."\r
  },\r
  "fixedWingNavigationConfiguration": {\r
    "message": "Навигационни настройки за самолети"\r
  },\r
  "fixedWingLandingConfiguration": {\r
    "message": "Настройки за кацане на самолети"\r
  },\r
  "MissionPlannerOnlyOneLandWp": {\r
    "message": "Можете да зададете само една LAND пътна точка на мисия."\r
  },\r
  "fwLandApproachLength": {\r
    "message": "Дължина на финалния подход"\r
  },\r
  "fwLandApproachLengthHelp": {\r
    "message": "Дължина на финалния подход, също включва фазата на плъзгане и прехващане. Това е дължината от безопасната точка на дома до крайната точка на завой."\r
  },\r
  "fwLandFinalApproachPitch2throttle": {\r
    "message": "Модификатор за съотношението тангаж към газ при финален подход"\r
  },\r
  "fwLandFinalApproachPitch2throttleHelp": {\r
    "message": "Тази стойност се умножава по стойността на \\"pitch to throttle ratio\\" по време на финалния подход. Позволява скоростта да бъде намалена."\r
  },\r
  "fwLandGlideAlt": {\r
    "message": "Начална височина на фазата на плъзгане"\r
  },\r
  "fwLandGlideAltHelp": {\r
    "message": "На тази височина (измерена от височината на точката на кацане) двигателят се изключва и самолетът се плъзга оттук."\r
  },\r
  "fwLandFlareAlt": {\r
    "message": "Начална височина на фазата на изравняване (flare)"\r
  },\r
  "fwLandFlareAltHelp": {\r
    "message": "На тази височина (измерена от височината на точката на кацане) се изпълнява последната фаза на кацане."\r
  },\r
  "fwLandGlidePitch": {\r
    "message": "Стойност на тангажа за фазата на плъзгане"\r
  },\r
  "fwLandGlidePitchHelp": {\r
    "message": "Този ъгъл на тангаж се поддържа по време на фазата на плъзгане."\r
  },\r
  "fwLandFlarePitch": {\r
    "message": "Стойност на тангажа за фазата на изравняване (flare)"\r
  },\r
  "fwLandFlarePitchHelp": {\r
    "message": "Този ъгъл на тангаж се поддържа по време на фазата на изравняване (flare)."\r
  },\r
  "fwLandMaxTailwind": {\r
    "message": "Макс. попътен вятър"\r
  },\r
  "fwLandMaxTailwindHelp": {\r
    "message": "Тази стойност се използва, когато не е възможно кацане с насрещен вятър и скоростите на вятъра под тази стойност се игнорират (поради неточности в измерването на вятъра от INAV)."\r
  },\r
  "osd_unsupported_msg1": {\r
    "message": "Вашият полетен контролер не отговаря на OSD команди. Това вероятно означава, че той няма интегриран OSD."\r
  },\r
  "osd_unsupported_msg2": {\r
    "message": "Имайте предвид, че някои полетни контролери имат вграден <a href=\\"https://www.youtube.com/watch?v=ikKH_6SQ-Tk\\" target=\\"_blank\\">MinimOSD</a>, който може да бъде флашнат и конфигуриран с <a href=\\"https://github.com/ShikOfTheRa/scarab-osd/releases/latest\\" target=\\"_blank\\">scarab-osd</a>, но MinimOSD не може да се конфигурира през този интерфейс."\r
  },\r
  "osd_elements": {\r
    "message": "Елементи"\r
  },\r
  "osd_preview_title": {\r
    "message": "Преглед <span>(влачете за промяна на позицията)</span>"\r
  },\r
  "osd_preview_title_drag": {\r
    "message": ""\r
  },\r
  "osd_video_format": {\r
    "message": "Видео формат"\r
  },\r
  "osd_craft_name": {\r
    "message": "Име на дрона"\r
  },\r
  "osd_pilot_name": {\r
    "message": "Име на пилота"\r
  },\r
  "osdElement_PILOT_LOGO_HELP": {\r
    "message": "Показва вашето малко лого на пилота в OSD, където го позиционирате. Това изисква персонализиран шрифт с вашето лого."\r
  },\r
  "osd_use_pilot_logo": {\r
    "message": "Използвай лого на пилота"\r
  },\r
  "osd_use_large_pilot_logo_help": {\r
    "message": "Използвайте голямото си лого на пилота заедно/вместо INAV логото. Това изисква персонализиран шрифт с вашето лого. Вижда се на екрана за армиране."\r
  },\r
  "osd_units": {\r
    "message": "Мерни единици"\r
  },\r
  "osd_main_voltage_decimals": {\r
    "message": "Десетични знаци за напрежение"\r
  },\r
  "osd_decimals_altitude": {\r
    "message": "Десетични знаци за височина"\r
  },\r
  "osd_decimals_distance": {\r
    "message": "Десетични знаци за разстояние"\r
  },\r
  "osd_mah_precision": {\r
    "message": "Точност на mAh"\r
  },\r
  "osd_coordinate_digits": {\r
    "message": "Цифри за координати"\r
  },\r
  "osd_plus_code_digits": {\r
    "message": "Цифри за Plus Code"\r
  },\r
  "osd_plus_code_short": {\r
    "message": "Премахване на водещи цифри от Plus Code"\r
  },\r
  "osd_esc_rpm_precision": {\r
    "message": "Точност на ESC RPM"\r
  },\r
  "osd_esc_rpm_precision_help": {\r
    "message": "Броят на цифрите, показани в дисплея за RPM. Ако RPM е по-висок от броя на цифрите, той ще бъде показан в хиляди RPM с толкова десетични знаци, колкото е разрешено."\r
  },\r
  "osd_crosshairs_style": {\r
    "message": "Стил на мерника"\r
  },\r
  "osd_horizon_offset": {\r
    "message": "Отместване на AHI & HUD"\r
  },\r
  "osd_horizon_offset_help": {\r
    "message": "Преместете HUD и AHI нагоре или надолу в OSD, за да ги изравните с действителния хоризонт. AHI може да изглежда високо или ниско в зависимост от ъгъла на камерата по време на полет. <span style='color:red;'>ЗАБЕЛЕЖКА: </span> Това не работи с Pixel OSD. За него използвайте командата \`osd_ahi_vertical_offset\` в CLI."\r
  },\r
  "osd_left_sidebar_scroll": {\r
    "message": "Превъртане на лявата странична лента"\r
  },\r
  "osd_right_sidebar_scroll": {\r
    "message": "Превъртане на дясната странична лента"\r
  },\r
  "osd_crsf_lq_format": {\r
    "message": "Формат на Crossfire LQ"\r
  },\r
  "osd_sidebar_scroll_arrows": {\r
    "message": "Стрелки за превъртане на страничната лента"\r
  },\r
  "osd_home_position_arm_screen": {\r
    "message": "Начална позиция на екрана за армиране"\r
  },\r
  "osd_hud_settings": {\r
    "message": "Настройки на Heads-up Display"\r
  },\r
  "osd_custom_element_settings": {\r
    "message": "Персонализирани OSD елементи"\r
  },\r
  "osd_custom_element_settings_HELP": {\r
    "message": "За подробна информация как да използвате персонализирани OSD елементи, кликнете на този ?"\r
  },\r
  "osd_custom_element_settings_icons_HELP": {\r
    "message": "Можете да намерите номерата на иконите, като кликнете на този бутон за помощ."\r
  },\r
  "custom_element": {\r
    "message": "Персонализиран елемент"\r
  },\r
  "osd_hud_settings_HELP": {\r
    "message": "Този раздел позволява фина настройка на поведението на HUD елементите."\r
  },\r
  "osd_hud_radar_disp": {\r
    "message": "Максимален брой радарни елементи на екрана."\r
  },\r
  "osd_hud_radar_disp_help": {\r
    "message": "Използва се за INAV Radar/FormationFlight. 0 изключва тази функция."\r
  },\r
\r
  "osd_hud_radar_range_min": {\r
    "message": "Минимален обхват на радара"\r
  },\r
  "osd_hud_radar_range_min_help": {\r
    "message": "Радарни самолети по-близо от това няма да се показват в HUD."\r
  },\r
\r
  "osd_hud_radar_range_max": {\r
    "message": "Максимален обхват на радара"\r
  },\r
  "osd_hud_radar_range_max_help": {\r
    "message": "Радарни самолети по-далеч от това няма да се показват в HUD."\r
  },\r
\r
\r
  "osd_hud_wp_disp": {\r
    "message": "Максимален брой елементи за пътна точка на екрана."\r
  },\r
  "osd_hud_wp_disp_help": {\r
    "message": "Брой пътни точки за показване на екрана. 0 изключва тази функция."\r
  },\r
  "osd_camera_uptilt": {\r
    "message": "Ъгъл на камерата нагоре"\r
  },\r
  "osd_camera_uptilt_help": {\r
    "message": "Задайте ъгъла на камерата за FPV камерата в градуси, положителен е нагоре, отрицателен е надолу, спрямо хоризонтала. Използва се за правилно показване на HUD елементи и AHI (когато е активирано с osd_ahi_camera_uptilt_comp=ON)."\r
  },\r
  "osd_camera_fov_h": {\r
    "message": "Хоризонтално зрително поле на камерата"\r
  },\r
  "osd_camera_fov_h_help": {\r
    "message": "Хоризонтално зрително поле на камерата в градуси. Използва се за изчисляване на позицията на елементите в HUD дисплея."\r
  },\r
  "osd_camera_fov_v": {\r
    "message": "Вертикално зрително поле на камерата"\r
  },\r
  "osd_camera_fov_v_help": {\r
    "message": "Вертикално зрително поле на камерата в градуси. Използва се за изчисляване на позицията на елементите в HUD дисплея."\r
  },\r
\r
\r
  "osd_alarms": {\r
    "message": "Аларми"\r
  },\r
  "osdLayoutDefault": {\r
    "message": "Оформление по подразбиране"\r
  },\r
  "osdLayoutAlternative": {\r
    "message": "Алтернативно оформление #$1"\r
  },\r
  "osdUnitImperial": {\r
    "message": "Имперски"\r
  },\r
  "osdUnitMetric": {\r
    "message": "Метрични"\r
  },\r
  "osdUnitMetricMPH": {\r
    "message": "Метрични + мили/ч"\r
  },\r
  "osdUnitMetricMPHTip": {\r
    "message": "Използвай метрични единици, с изключение на скоростта, която се показва в мили в час."\r
  },\r
  "osdUnitUK": {\r
    "message": "Великобритания"\r
  },\r
  "osdUnitUKTip": {\r
    "message": "Използвай имперски единици, с изключение на температурата, която се показва в градуси по Целзий."\r
  },\r
  "osdUnitGA": {\r
    "message": "Обща авиация"\r
  },\r
  "osdUnitGATip": {\r
    "message": "Използвай GA стандартни единици (не-SI): морски мили, футове, възли, Целзий."\r
  },\r
  "osd_rssi_alarm": {\r
    "message": "RSSI (%)"\r
  },\r
  "osdAlarmBATT_CAP": {\r
    "message": "Използвана батерия"\r
  },\r
  "osdAlarmBATT_CAP_HELP": {\r
    "message": "Индикаторът за използван капацитет на батерията (изразходвани mAh) ще мига, когато общият изразходван mAh е по-голям от тази стойност. Изисква сензор за ток. Нула изключва тази аларма."\r
  },\r
  "osd_time_alarm": {\r
    "message": "Време на полет (минути)"\r
  },\r
  "osd_alt_alarm": {\r
    "message": "Височина"\r
  },\r
  "osd_dist_alarm": {\r
    "message": "Разстояние"\r
  },\r
  "osdAlarmDIST_HELP": {\r
    "message": "Индикаторът за разстояние до дома ще мига, когато разстоянието е по-голямо от тази стойност. Нула изключва тази аларма."\r
  },\r
  "osd_neg_alt_alarm": {\r
    "message": "Отрицателна височина"\r
  },\r
  "osdAlarmMAX_NEG_ALTITUDE_HELP": {\r
    "message": "Индикаторът за височина ще мига, когато височината е отрицателна и абсолютната ѝ стойност е по-голяма от тази аларма. Полезно при излитане от повишени места. Нула изключва тази аларма."\r
  },\r
  "osd_airspeed_min_alarm": {\r
    "message": "Минимална въздушна скорост"\r
  },\r
  "osd_airspeed_min_alarm_HELP": {\r
    "message": "Индикаторът за въздушна скорост ще мига, когато въздушната скорост е под този праг. Нула изключва тази аларма."\r
  },\r
  "osd_airspeed_max_alarm": {\r
    "message": "Максимална въздушна скорост"\r
  },\r
  "osd_airspeed_max_alarm_HELP": {\r
    "message": "Индикаторът за въздушна скорост ще мига, когато въздушната скорост е над този праг. Нула изключва тази аларма."\r
  },\r
  "osd_gforce_alarm": {\r
    "message": "g сила"\r
  },\r
  "osdAlarmGFORCE_HELP": {\r
    "message": "Елементът за g сила ще започне да мига, когато е по-голям от тази стойност."\r
  },\r
  "osd_gforce_axis_alarm_min": {\r
    "message": "Мин. g сила по ос"\r
  },\r
  "osdAlarmGFORCE_AXIS_MIN_HELP": {\r
    "message": "Елементите за g сила по осите ще започнат да мигат, когато са по-ниски от тази стойност."\r
  },\r
  "osd_gforce_axis_alarm_max": {\r
    "message": "Макс. g сила по ос"\r
  },\r
  "osdAlarmGFORCE_AXIS_MAX_HELP": {\r
    "message": "Елементите за g сила по осите ще започнат да мигат, когато са по-големи от тази стойност."\r
  },\r
  "osdAlarmADSB_MAX_DISTANCE_WARNING": {\r
    "message": "Разстояние в метри на ADSB самолет, което се показва"\r
  },\r
  "osdAlarmADSB_MAX_DISTANCE_ALERT": {\r
    "message": "Разстояние, в рамките на което ADSB данните мигат за предупреждение за близост"\r
  },\r
  "osd_current_alarm": {\r
    "message": "Ток (A)"\r
  },\r
  "osdAlarmCURRENT_HELP": {\r
    "message": "Елементът за консумация на ток ще започне да мига, когато консумацията е по-голяма от тази стойност. Нула изключва тази аларма."\r
  },\r
  "osd_imu_temp_alarm_min": {\r
    "message": "Минимална IMU температура"\r
  },\r
  "osd_imu_temp_alarm_max": {\r
    "message": "Максимална IMU температура"\r
  },\r
  "osd_baro_temp_alarm_min": {\r
    "message": "Минимална температура на барометъра"\r
  },\r
  "osd_baro_temp_alarm_max": {\r
    "message": "Максимална температура на барометъра"\r
  },\r
  "osd_esc_temp_alarm_min": {\r
    "message": "Минимална ESC температура"\r
  },\r
  "osd_esc_temp_alarm_max": {\r
    "message": "Максимална ESC температура"\r
  },\r
  "osd_snr_alarm": {\r
    "message": "Ниво на SNR аларма"\r
  },\r
  "osdalarmSNR_HELP": {\r
    "message": "SNR се показва само под тази стойност. 0dB (съотношение 1:1) показва, че полученият сигнал е равен на нивото на шума."\r
  },\r
  "osd_link_quality_alarm": {\r
    "message": "Аларма за качество на връзката"\r
  },\r
  "osdalarmLQ_HELP": {\r
    "message": "За Crossfire използвайте 70%. За Tracer използвайте 50%."\r
  },\r
  "osd_rssi_dbm_alarm": {\r
    "message": "RSSI dBm аларма"\r
  },\r
  "osd_adsb_distance_warning": {\r
    "message": "Предупреждение за ADSB разстояние"\r
  },\r
  "osd_adsb_distance_alert": {\r
    "message": "Тревога за ADSB разстояние"\r
  },\r
  "osd_rssi_dbm_alarm_HELP": {\r
    "message": "RSSI индикаторът мига под тази стойност. Диапазон: [-130,0]. Нула изключва тази аларма."\r
  },\r
  "osdGroupGeneral": {\r
    "message": "Общи"\r
  },\r
  "osdGroupAltitude": {\r
    "message": "Височина"\r
  },\r
  "osdGroupTimers": {\r
    "message": "Таймери"\r
  },\r
  "osdGroupGForce": {\r
    "message": "G сила"\r
  },\r
  "osdGroupTemperature": {\r
    "message": "Температура"\r
  },\r
  "osdGroupAttitude": {\r
    "message": "Ориентация"\r
  },\r
  "osdGroupCurrentMeter": {\r
    "message": "Измерване на ток"\r
  },\r
  "osdGroupGPS": {\r
    "message": "GPS"\r
  },\r
  "osdGroupPowerLimits": {\r
    "message": "Ограничения на мощността"\r
  },\r
  "osdGroupPIDs": {\r
    "message": "Регулируеми стойности от RC"\r
  },\r
  "osdGroupPIDOutputs": {\r
    "message": "Изходи на PID контролери"\r
  },\r
  "osdGroupVTX": {\r
    "message": "VTX"\r
  },\r
  "osdGroupRx": {\r
    "message": "RX статистика"\r
  },\r
  "osdGroupMapsAndRadars": {\r
    "message": "Карти и радари"\r
  },\r
  "osdGroupMapsAndRadars_HELP": {\r
    "message": "Картите и радарите позволяват подреждането на допълнителни елементи върху тях, стига да не застъпват никоя от частите на картата, видими в прегледа."\r
  },\r
  "osdElement_ONTIME_FLYTIME": {\r
    "message": "Време включено / Време на полет"\r
  },\r
  "osdElement_RSSI_VALUE": {\r
    "message": "RSSI (сила на сигнала)"\r
  },\r
  "osdElement_RSSI_VALUE_HELP": {\r
    "message": "Показва качеството на сигнала, получен от RC радиото (колкото по-високо, толкова по-добре)."\r
  },\r
  "osdElement_MAIN_BATT_VOLTAGE": {\r
    "message": "Напрежение на батерията"\r
  },\r
  "osdElement_SAG_COMP_MAIN_BATT_VOLTAGE": {\r
    "message": "Компенсирано за спад напрежение на батерията"\r
  },\r
  "osdElement_SAG_COMP_MAIN_BATT_VOLTAGE_HELP": {\r
    "message": "Изчислено напрежение, което батерията би трябвало да има без товар (симулира идеална батерия)."\r
  },\r
  "osdElement_MESSAGES": {\r
    "message": "Системни съобщения"\r
  },\r
  "osdElement_MESSAGES_HELP": {\r
    "message": "Показва различни системни съобщения като предупреждения, хардуерни повреди и разширени подробности за текущия полетен режим (напр. AUTOTUNE и AUTOTRIM режими и RTH етапи)."\r
  },\r
  "osdElement_MAIN_BATT_CELL_VOLTAGE": {\r
    "message": "Напрежение на клетка на батерията"\r
  },\r
  "osdElement_SAG_COMP_MAIN_BATT_CELL_VOLTAGE": {\r
    "message": "Компенсирано за спад напрежение на клетка на батерията"\r
  },\r
  "osdElement_SAG_COMP_MAIN_BATT_CELL_VOLTAGE_HELP": {\r
    "message": "Изчислено средно напрежение на клетка, което батерията би трябвало да има без товар (симулира идеална батерия)."\r
  },\r
  "osdElement_MAIN_BATT_REMAINING_PERCENTAGE": {\r
    "message": "Оставащ процент на батерията"\r
  },\r
  "osdElement_MAIN_BATT_REMAINING_CAPACITY": {\r
    "message": "Оставащ капацитет на батерията"\r
  },\r
  "osdElement_REMAINING_FLIGHT_TIME_HELP": {\r
    "message": "Очаквано оставащо време на полет, преди дронът да трябва да се върне у дома, базирано на оставащата енергия на батерията, средната мощност и разстоянието до дома (само за самолети, моля, прочетете документацията)."\r
  },\r
  "osdElement_REMAINING_FLIGHT_DISTANCE_HELP": {\r
    "message": "Очаквано оставащо разстояние за полет, преди дронът да трябва да се върне у дома, базирано на оставащата енергия на батерията, средната мощност и разстоянието до дома (само за самолети, моля, прочетете документацията)."\r
  },\r
  "osdElement_MAIN_BATT_CELL_VOLTAGE_HELP": {\r
    "message": "Показва средното напрежение на клетка от основната батерия."\r
  },\r
  "osdElement_MAH_DRAWN": {\r
    "message": "Изразходвани mAh"\r
  },\r
  "osdElement_EFFICIENCY_MAH": {\r
    "message": "Ефективност mAh/Km"\r
  },\r
  "osdElement_EFFICIENCY_WH": {\r
    "message": "Ефективност Wh/Km"\r
  },\r
  "osdElement_PLIMIT_REMAINING_BURST_TIME": {\r
    "message": "Оставащо време за burst"\r
  },\r
  "osdElement_PLIMIT_ACTIVE_CURRENT_LIMIT": {\r
    "message": "Активен лимит на тока"\r
  },\r
  "osdElement_PLIMIT_ACTIVE_POWER_LIMIT": {\r
    "message": "Активен лимит на мощността"\r
  },\r
  "osdElement_THROTTLE_POSITION_HELP": {\r
    "message": "Показва позицията на стика за газ в полетни режими, където <i>той</i> контролира изходящата газ. При навигационни режими показва стойността на газта, командвана от INAV."\r
  },\r
  "osdElement_SCALED_THROTTLE_POSITION_HELP": {\r
    "message": "Показва позицията на стика за газ в полетни режими, където <i>той</i> контролира изходящата газ. При навигационни режими показва стойността на газта, командвана от INAV. Тази газ е мащабирана спрямо газта на празен ход и максималната газ."\r
  },\r
  "osdElement_GPS_SPEED": {\r
    "message": "Скорост спрямо земята"\r
  },\r
  "osdElement_GPS_SPEED_HELP": {\r
    "message": "Показва GPS скорост спрямо земята."\r
  },\r
  "osdElement_GPS_MAX_SPEED": {\r
    "message": "GPS максимална скорост"\r
  },\r
  "osdElement_GPS_MAX_SPEED_HELP": {\r
    "message": "Показва най-високата GPS скорост спрямо земята."\r
  },\r
  "osdElement_MSL_ALTITUDE": {\r
    "message": "MSL височина"\r
  },\r
  "osdElement_MSL_ALTITUDE_HELP": {\r
    "message": "Височина над средното морско ниво."\r
  },\r
  "osdElement_3D_SPEED": {\r
    "message": "3D скорост"\r
  },\r
  "osdElement_3D_SPEED_HELP": {\r
    "message": "Показва 3D скорост, отчитаща както хоризонталната, така и вертикалната скорост."\r
  },\r
  "osdElement_3D_MAX_SPEED": {\r
    "message": "3D максимална скорост"\r
  },\r
  "osdElement_3D_MAX_SPEED_HELP": {\r
    "message": "Показва най-високата 3D скорост, отчитаща както хоризонталната, така и вертикалната скорост."\r
  },\r
  "osdElement_AIR_MAX_SPEED": {\r
    "message": "Максимална въздушна скорост"\r
  },\r
  "osdElement_AIR_MAX_SPEED_HELP": {\r
    "message": "Показва най-високата въздушна скорост."\r
  },\r
  "osdElement_GPS_SATS": {\r
    "message": "GPS сателити"\r
  },\r
  "osdElement_GPS_SATS_HELP": {\r
    "message": "Показва броя на GPS сателитите, открити от GPS приемника."\r
  },\r
  "osdElement_GPS_HDOP": {\r
    "message": "GPS HDOP"\r
  },\r
  "osdElement_GPS_HDOP_HELP": {\r
    "message": "Показва хоризонталната дилуция на точността от GPS. Колкото по-ниска, толкова по-точна е GPS фиксацията."\r
  },\r
  "osdElement_PLUS_CODE": {\r
    "message": "Plus Code (геогр. ширина + дължина)"\r
  },\r
  "osdElement_PLUS_CODE_HELP": {\r
    "message": "Plus кодовете кодират както географската ширина, така и дължината в една стойност, която може да бъде въведена директно в Google Maps. Тя осигурява същото ниво на точност като географската ширина и дължина, като използва по-малко място на екрана."\r
  },\r
  "osdElement_AZIMUTH": {\r
    "message": "Азимут"\r
  },\r
  "osdElement_AZIMUTH_HELP": {\r
    "message": "Азимутът е посоката на дрона спрямо началната точка. Полезно е да се поддържа дронът на правилния курс или да се държи дронът пред фиксирана насочена антена."\r
  },\r
  "osdElement_TRIP_DIST": {\r
    "message": "Изминато разстояние"\r
  },\r
  "osdElement_VARIO_HELP": {\r
    "message": "Показва вертикалната скорост със стрелки нагоре или надолу. Всяка стрелка представлява 10cm (~4 инча) в секунда."\r
  },\r
  "osdElement_VERTICAL_SPEED_INDICATOR": {\r
    "message": "Индикатор за вертикална скорост"\r
  },\r
  "osdElement_VERTICAL_SPEED_INDICATOR_HELP": {\r
    "message": "Показва вертикалната скорост с число."\r
  },\r
  "osdElement_G_FORCE": {\r
    "message": "g сила"\r
  },\r
  "osdElement_G_FORCE_HELP": {\r
    "message": "Показва g силата, отчитайки всички оси."\r
  },\r
  "osdElement_G_FORCE_X": {\r
    "message": "Надлъжна g сила в координатната система на тялото (X)"\r
  },\r
  "osdElement_G_FORCE_X_HELP": {\r
    "message": "Показва g силата по оста X (надлъжна)."\r
  },\r
  "osdElement_G_FORCE_Y": {\r
    "message": "Напречна g сила в координатната система на тялото (Y)"\r
  },\r
  "osdElement_G_FORCE_Y_HELP": {\r
    "message": "Показва g силата по оста Y (напречна)."\r
  },\r
  "osdElement_G_FORCE_Z": {\r
    "message": "Вертикална g сила в координатната система на тялото (Z)"\r
  },\r
  "osdElement_G_FORCE_Z_HELP": {\r
    "message": "Показва g силата по оста Z (вертикална)."\r
  },\r
  "osdElement_ROLL_PIDS": {\r
    "message": "Roll PIDs"\r
  },\r
  "osdElement_PITCH_PIDS": {\r
    "message": "Pitch PIDs"\r
  },\r
  "osdElement_YAW_PIDS": {\r
    "message": "Yaw PIDs"\r
  },\r
  "osdElement_ONTIME_FLYTIME_HELP": {\r
    "message": "Показва \\"Време включено\\", докато е деармиран, и \\"Време на полет\\", докато е армиран."\r
  },\r
  "osdElement_RTC_TIME": {\r
    "message": "Време на деня"\r
  },\r
  "osdElement_RTC_TIME_HELP": {\r
    "message": "Показва текущото време, получено от GPS или зададено чрез радиото."\r
  },\r
  "osdElement_RC_SOURCE": {\r
    "message": "RC източник"\r
  },\r
  "osdElement_RC_SOURCE_HELP": {\r
    "message": "Показва текущия RC източник, STD или MSP (полезно при използване на MSP заместване)."\r
  },\r
  "osdElement_VTX_POWER": {\r
    "message": "Ниво на мощност на видео предавателя"\r
  },\r
  "osdElement_VTX_POWER_HELP": {\r
    "message": "Показва текущото ниво на мощност на VTX. Мига, когато съответната RC корекция е избрана."\r
  },\r
  "osdElement_ESC_RPM": {\r
    "message": "Обороти на мотора от ESC телеметрия"\r
  },\r
  "osdElement_GLIDESLOPE": {\r
    "message": "Ъгъл на планиране"\r
  },\r
  "osdElement_GLIDESLOPE_HELP": {\r
    "message": "Количество изминато хоризонтално разстояние на единица загубена височина."\r
  },\r
  "osdElement_PAN_SERVO_CENTRED": {\r
    "message": "Pan серво центрирано"\r
  },\r
  "osdElement_PAN_SERVO_CENTRED_HELP": {\r
    "message": "Показва дали pan сервото е центрирано (0) или отместено (стрелки). Проверете настройките <b>osd_pan_servo_</b> за конфигуриране на pan сервото."\r
  },\r
  "osdElement_VTX_CHANNEL": {\r
    "message": "Обхват и канал на видео предавателя"\r
  },\r
  "osdElement_VTX_CHANNEL_HELP": {\r
    "message": "Показва текущия обхват и канал на VTX. Изисква или VTX със SmartAudio или Tramp, или VTX, интегриран в полетния контролер."\r
  },\r
  "osdElement_RSSI_DBM": {\r
    "message": "RX RSSI в dBm"\r
  },\r
  "osdElement_LQ_UPLINK": {\r
    "message": "Качество на възходящата връзка (Uplink) в %"\r
  },\r
  "osdElement_LQ_UPLINK_HELP": {\r
    "message": "Ако използвате CRSF, използвайте настройката Crossfire LQ Format, за да изберете типа формат."\r
  },\r
  "osdElement_LQ_DOWNLINK": {\r
    "message": "Качество на низходящата връзка (Downlink) в %"\r
  },\r
  "osdElement_SNR_DB": {\r
    "message": "Uplink SNR в dB"\r
  },\r
  "osdElement_SNR_DB_HELP": {\r
    "message": "Показва се само когато SNR падне под нивото на аларма. При 0dB, нивото на получения сигнал е равно на нивото на шума."\r
  },\r
  "osdElement_TX_POWER_UPLINK": {\r
    "message": "TX мощност в mW"\r
  },\r
  "osdElement_OSD_RX_POWER_DOWNLINK": {\r
    "message": "RX мощност в mW"\r
  },\r
  "osdElement_MAP_NORTH": {\r
    "message": "Карта (нагоре е север)"\r
  },\r
  "osdElement_MAP_TAKEOFF": {\r
    "message": "Карта (нагоре е посоката на излитане)"\r
  },\r
  "osdElement_RADAR": {\r
    "message": "Радар"\r
  },\r
  "osdElement_MAP_SCALE": {\r
    "message": "Мащаб на картата"\r
  },\r
  "osdElement_MAP_SCALE_HELP": {\r
    "message": "Мащаб на текущо показаната карта/радар."\r
  },\r
  "osdElement_MAP_REFERENCE": {\r
    "message": "Референтна точка на картата"\r
  },\r
  "osdElement_MAP_REFERENCE_HELP": {\r
    "message": "Референтна точка (посоката, която сочи нагоре) на текущата карта. N за север и T за посока на излитане."\r
  },\r
  "osdElement_FORMATION_FLIGHT": {\r
    "message": "Фиксиран Inav радар"\r
  },\r
  "osdElement_FORMATION_FLIGHT_HELP": {\r
    "message": "Най-близкият самолет от Inav радар/Formation flight."\r
  },\r
  "osdElement_WIND_SPEED_HORIZONTAL": {\r
    "message": "Хоризонтална скорост на вятъра"\r
  },\r
  "osdElement_WIND_SPEED_HORIZONTAL_HELP": {\r
    "message": "Показва приблизителна хоризонтална скорост и посока на вятъра."\r
  },\r
  "osdElement_WIND_SPEED_VERTICAL": {\r
    "message": "Вертикална скорост на вятъра"\r
  },\r
  "osdElement_WIND_SPEED_VERTICAL_HELP": {\r
    "message": "Показва приблизителна вертикална скорост и посока на вятъра (нагоре или надолу)."\r
  },\r
  "osdElement_ACTIVE_PROFILE": {\r
    "message": "Покажи активния профил"\r
  },\r
  "osdElement_LEVEL_PIDS": {\r
    "message": "Level PIDs"\r
  },\r
  "osdElement_POS_XY_PIDS": {\r
    "message": "Position XY PIDs"\r
  },\r
  "osdElement_POS_Z_PIDS": {\r
    "message": "Position Z PIDs"\r
  },\r
  "osdElement_VEL_XY_PIDS": {\r
    "message": "Velocity XY PIDs"\r
  },\r
  "osdElement_VEL_Z_PIDS": {\r
    "message": "Velocity Z PIDs"\r
  },\r
  "osdElement_FW_ALT_PID_OUTPUTS": {\r
    "message": "Изходи на PID контролера за височина (FW)"\r
  },\r
  "osdElement_FW_POS_PID_OUTPUTS": {\r
    "message": "Изходи на PID контролера за позиция (FW)"\r
  },\r
  "osdElement_MC_VEL_X_PID_OUTPUTS": {\r
    "message": "Изходи на PID контролера за Velocity X (MC)"\r
  },\r
  "osdElement_MC_VEL_Y_PID_OUTPUTS": {\r
    "message": "Изходи на PID контролера за Velocity Y (MC)"\r
  },\r
  "osdElement_MC_VEL_Z_PID_OUTPUTS": {\r
    "message": "Изходи на PID контролера за Velocity Z (MC)"\r
  },\r
  "osdElement_MC_POS_XYZ_P_OUTPUTS": {\r
    "message": "Изходи на P контролерите за Position XYZ (MC)"\r
  },\r
  "osdElement_IMU_TEMPERATURE": {\r
    "message": "IMU температура"\r
  },\r
  "osdElement_IMU_TEMPERATURE_HELP": {\r
    "message": "Температура на IMU."\r
  },\r
  "osdElement_BARO_TEMPERATURE": {\r
    "message": "Температура на барометъра"\r
  },\r
  "osdElement_BARO_TEMPERATURE_HELP": {\r
    "message": "Температура на барометъра."\r
  },\r
  "osdElement_ESC_TEMPERATURE": {\r
    "message": "ESC температура"\r
  },\r
  "osdElement_ESC_TEMPERATURE_HELP": {\r
    "message": "Температура на ESC, прочетена от DSHOT телеметрия."\r
  },\r
  "osdGroupSwitchIndicators": {\r
    "message": "Индикатори за ключове"\r
  },\r
  "osdElement_SWITCH_INDICATOR_0": {\r
    "message": "Индикатор за ключ 1"\r
  },\r
  "osdElement_SWITCH_INDICATOR_1": {\r
    "message": "Индикатор за ключ 2"\r
  },\r
  "osdElement_SWITCH_INDICATOR_2": {\r
    "message": "Индикатор за ключ 3"\r
  },\r
  "osdElement_SWITCH_INDICATOR_3": {\r
    "message": "Индикатор за ключ 4"\r
  },\r
  "osd_pan_servo_settings": {\r
    "message": "Настройки на Pan серво OSD"\r
  },\r
  "osd_pan_servo_settings_HELP": {\r
    "message": "Този раздел активира и конфигурира функцията за отместване на pan серво. Използва се, за да поддържа OSD елементи, като стрелката към дома и POI, сочещи в или към правилната посока, дори когато сте завъртели камерата."\r
  },\r
  "osdPanServoIndex": {\r
    "message": "Pan серво изход"\r
  },\r
  "osdPanServoIndex_HELP": {\r
    "message": "Задайте това на номера на изхода на pan сервото, както е показано в таблицата с миксери. Например изход S6."\r
  },\r
  "osdPanServoRangeDecadegrees": {\r
    "message": "Общ градус на движение на pan сервото"\r
  },\r
  "osdPanServoRangeDecadegrees_HELP": {\r
    "message": "Градуси на въртене на pan сервото. Серво със 180 градуса въртене обикновено се нуждае от 180 за тази настройка. Направете стойността отрицателна, за да обърнете посоката."\r
  },\r
  "osdPanServoIndicatorShowDegrees": {\r
    "message": "Покажи градусите на отместване до pan индикатора"\r
  },\r
  "osdPanServoOffcentreWarning": {\r
    "message": "Предупреждение за извън център"\r
  },\r
  "osdPanServoOffcentreWarning_HELP": {\r
    "message": "Градуси от двете страни на центъра на pan сервото, където се приема, че камерата трябва да гледа напред, но не е на 0. Ако е в този диапазон и не е 0 за повече от 10 секунди, OSD елементът за отместване на pan сервото ще мига. 0 означава, че предупреждението е изключено."\r
  },\r
  "osdGroupOSDCustomElements": {\r
    "message": "Персонализирани OSD елементи"\r
  },\r
  "osdGroupGVars": {\r
    "message": "Глобални променливи"\r
  },\r
  "osdElement_GVAR_0": {\r
    "message": "Глобална променлива 0"\r
  },\r
  "osdElement_GVAR_1": {\r
    "message": "Глобална променлива 1"\r
  },\r
  "osdElement_GVAR_2": {\r
    "message": "Глобална променлива 2"\r
  },\r
  "osdElement_GVAR_3": {\r
    "message": "Глобална променлива 3"\r
  },\r
  "osdElement_SENSOR1_TEMPERATURE": {\r
    "message": "Температурен сензор 1"\r
  },\r
  "osdElement_SENSOR2_TEMPERATURE": {\r
    "message": "Температурен сензор 2"\r
  },\r
  "osdElement_SENSOR3_TEMPERATURE": {\r
    "message": "Температурен сензор 3"\r
  },\r
  "osdElement_SENSOR4_TEMPERATURE": {\r
    "message": "Температурен сензор 4"\r
  },\r
  "osdElement_SENSOR5_TEMPERATURE": {\r
    "message": "Температурен сензор 5"\r
  },\r
  "osdElement_SENSOR6_TEMPERATURE": {\r
    "message": "Температурен сензор 6"\r
  },\r
  "osdElement_SENSOR7_TEMPERATURE": {\r
    "message": "Температурен сензор 7"\r
  },\r
  "osdElement_SENSOR8_TEMPERATURE": {\r
    "message": "Температурен сензор 8"\r
  },\r
  "osdSettingMainVoltageDecimals": {\r
    "message": "Десетични знаци за основното напрежение"\r
  },\r
  "osdElement_OSD_RANGEFINDER": {\r
    "message": "Разстояние от далекомер"\r
  },\r
  "osdElement_COURSE_NEXT_GEOZONE": {\r
    "message": "Курс към следващата геозона"\r
  },\r
  "osdElement_HOR_DIST_TO_NEXT_GEOZONE": {\r
    "message": "Хоризонтално разстояние до следващата геозона"\r
  },\r
  "osdElement_VERT_DIST_TO_NEXT_GEOZONE": {\r
    "message": "Вертикално разстояние до следващата геозона"\r
  },\r
  "osdSettingPLUS_CODE_DIGITS_HELP": {\r
    "message": "Точност на екватора: 10=13.9x13.9м; 11=2.8x3.5м; 12=56x87см; 13=11x22см."\r
  },\r
  "osdSettingPLUS_CODE_SHORT_HELP": {\r
    "message": "Премахването на 2, 4 и 6 водещи цифри изисква референтно местоположение съответно в рамките на ~800km, ~40km и ~2km, за да се възстановят оригиналните координати."\r
  },\r
  "osdSettingCRSF_LQ_FORMAT_HELP": {\r
    "message": "TYPE1 показва LQ% както се използва от TBS хардуер. TYPE2 показва RF Profile Modes (2=150Hz, 1=50Hz, 0=4Hz честота на обновяване) и LQ % [0..100%]. Tracer показва RFMode 1 (1=250Hz) и LQ % [0..100%]."\r
  },\r
  "osd_video_show_guides": {\r
    "message": "Покажи помощни линии за преглед"\r
  },\r
  "osd_video_HELP": {\r
    "message": "За HD: червените линии показват 4:3 екран, HDZero: дръжте в рамките на синята кутия за по-висока честота на опресняване, AUTO/PAL: зелената линия е NTSC лимит."\r
  },\r
  "osd_dji_HD_FPV": {\r
    "message": "DJI HD FPV"\r
  },\r
  "osd_dji_hide_unsupported": {\r
    "message": "Скрий неподдържаните елементи"\r
  },\r
  "osd_dji_ESC_temp": {\r
    "message": "Източник на <i>ESC температура</i>"\r
  },\r
  "osd_dji_RSSI_source": {\r
    "message": "Източник на <i>RSSI</i>"\r
  },\r
  "osd_dji_GPS_source": {\r
    "message": "Източник на <i>GPS скорост</i>"\r
  },\r
  "osd_dji_speed_source": {\r
    "message": "Източник на <i>3D скорост</i>"\r
  },\r
  "osd_dji_use_craft_name_elements": {\r
    "message": "Използвай име на дрона за съобщения и допълнителни елементи.</span><br/>Елементите в <span class=\\"blue\\">синьо</span> се появяват в името на дрона."\r
  },\r
  "osd_dji_adjustments": {\r
    "message": "Покажи корекциите в името на дрона"\r
  },\r
  "osd_dji_cn_alternating_duration": {\r
    "message": "Продължителност на редуване на името на дрона (в 1/10 сек)"\r
  },\r
  "osd_switch_indicator_settings": {\r
    "message": "Настройки на индикаторите за ключове"\r
  },\r
  "osd_switch_indicator_settings_HELP": {\r
    "message": "Препоръчва се да използвате Персонализирани OSD елементи като заместител на индикаторите за ключове. Те са много по-мощни. Кликнете, за да видите пример."\r
  },\r
  "osd_switch_indicators_align_left": {\r
    "message": "Подравни имената на ключовете отляво на ключовете"\r
  },\r
  "osdSwitchInd0": {\r
    "message": "Ключ 1"\r
  },\r
  "osdSwitchInd1": {\r
    "message": "Ключ 2"\r
  },\r
  "osdSwitchInd2": {\r
    "message": "Ключ 3"\r
  },\r
  "osdSwitchInd3": {\r
    "message": "Ключ 4"\r
  },\r
  "osd_font_default": {\r
    "message": "По подразбиране"\r
  },\r
  "osd_font_vision": {\r
    "message": "Vision"\r
  },\r
  "osd_font_impact": {\r
    "message": "Impact"\r
  },\r
  "osd_font_impact_mini": {\r
    "message": "Impact mini"\r
  },\r
  "osd_font_clarity": {\r
    "message": "Clarity"\r
  },\r
  "osd_font_clarity_medium": {\r
    "message": "Clarity medium"\r
  },\r
  "osd_font_bold": {\r
    "message": "Bold"\r
  },\r
  "osd_font_large": {\r
    "message": "Large"\r
  },\r
  "osd_font_load_file": {\r
    "message": "Отвори файл с шрифт"\r
  },\r
  "osd_font_upload": {\r
    "message": "Качи шрифт"\r
  },\r
  "osd_font_manager": {\r
    "message": "Мениджър на аналогови шрифтове"\r
  },\r
  "uploadingCharacters": {\r
    "message": "Качване..."\r
  },\r
  "uploadedCharacters": {\r
    "message": "Качени $1 символа"\r
  },\r
  "portsIdentifier": {\r
    "message": "Идентификатор"\r
  },\r
  "portsConfiguration": {\r
    "message": "Данни"\r
  },\r
  "portsTelemetryOut": {\r
    "message": "Телеметрия"\r
  },\r
  "portsSerialRx": {\r
    "message": "RX"\r
  },\r
  "portColumnSensors": {\r
    "message": "Сензори"\r
  },\r
  "portsPeripherals": {\r
    "message": "Периферия"\r
  },\r
  "appUpdateNotificationHeader": {\r
    "message": "Налична е нова версия на конфигуратора."\r
  },\r
  "appUpdateNotificationDescription": {\r
    "message": "Моля, посетете <a href=\\"https://github.com/iNavFlight/inav-configurator/releases\\" target=\\"_blank\\">уебсайта</a>, за да прочетете бележките по изданието и да изтеглите."\r
  },\r
  "closeUpdateBtn": {\r
    "message": "Затвори"\r
  },\r
  "downloadUpdatesBtn": {\r
    "message": "Изтегли новото приложение"\r
  },\r
  "tabMissionControl": {\r
    "message": "Mission Control"\r
  },\r
  "loadMissionButton": {\r
    "message": "Зареди мисия от FC"\r
  },\r
  "saveMissionButton": {\r
    "message": "Запази мисия във FC"\r
  },\r
  "loadEepromMissionButton": {\r
    "message": "Зареди Eeprom мисия"\r
  },\r
  "saveEepromMissionButton": {\r
    "message": "Запази Eeprom мисия"\r
  },\r
  "loadFileMissionButton": {\r
    "message": "Зареди файл"\r
  },\r
  "saveFileMissionButton": {\r
    "message": "Запази файл"\r
  },\r
  "missionSettingsSave": {\r
    "message": "Запази"\r
  },\r
  "missionSettingsCancel": {\r
    "message": "Отказ"\r
  },\r
  "editPointHead": {\r
    "message": "Редактиране на точка"\r
  },\r
  "editPointButtonSave": {\r
    "message": "Запази"\r
  },\r
  "editPointButtonRemove": {\r
    "message": "Премахни"\r
  },\r
  "removeAllPointButtonSave": {\r
    "message": "Премахни всички точки"\r
  },\r
  "missionTotalInformationHead": {\r
    "message": "Обща информация"\r
  },\r
  "missionTotalInfoFilenameLoaded": {\r
    "message": "Зареден файл:"\r
  },\r
  "missionTotalInfoDistance": {\r
    "message": "Разстояние (m):"\r
  },\r
  "missionTotalInfoAvailablePoints": {\r
    "message": "Налични точки"\r
  },\r
  "missionTotalInfoMissionValid": {\r
    "message": "Мисията е валидна"\r
  },\r
  "missionDefaultPointAlt": {\r
    "message": "Височина (cm): "\r
  },\r
  "missionDefaultPointSpeed": {\r
    "message": "Скорост (cm/s): "\r
  },\r
  "missionDefaultSafeRangeSH": {\r
    "message": "Радиус (m): "\r
  },\r
  "missionMultiMissionsInfo": {\r
    "message": "Информация за мисии:"\r
  },\r
  "missionMultiActiveMission": {\r
    "message": "Активна мисия:"\r
  },\r
  "missionMultiMissionNo": {\r
    "message": "Мисия №"\r
  },\r
  "missionMultiUpdateAll": {\r
    "message": "Обнови всички"\r
  },\r
  "missionMultiAddNewMission": {\r
    "message": "Добави нова мисия"\r
  },\r
  "missionEllipsoidEarthDEMModel": {\r
    "message": "Използвай елипсоид вместо SL DEM: "\r
  },\r
  "SafehomeLegend": {\r
    "message": "Легенда : "\r
  },\r
  "SafehomeMaxDistance": {\r
    "message": "Макс. разстояние (m):"\r
  },\r
  "SafehomeSafeRadius": {\r
    "message": "Безопасен радиус (m):"\r
  },\r
  "SafehomeFwAppraoch": {\r
    "message": "FW подход:"\r
  },\r
  "safehomeEdit": {\r
    "message": "Редактиране на безопасен дом"\r
  },\r
  "missionTitleHide": {\r
    "message": "Скрий"\r
  },\r
  "missionTitleCancel": {\r
    "message": "Отказ"\r
  },\r
  "missionTitleSave": {\r
    "message": "Запази"\r
  },\r
  "missionTitlRemove": {\r
    "message": "Премахни"\r
  },\r
  "missionTitleLoadMissionFile": {\r
    "message": "Зареди файл с мисия"\r
  },\r
  "missionTitleSaveMissionFile": {\r
    "message": "Запази файл с мисия"\r
  },\r
  "missionTitleLoadMissionFromFC": {\r
    "message": "Зареди мисия от FC"\r
  },\r
  "missionTitleSaveMissionToFC": {\r
    "message": "Запази мисия във FC"\r
  },\r
  "missionTitleLoadEepromMission": {\r
    "message": "Зареди Eeprom мисия"\r
  },\r
  "missionTitleSaveEepromMission": {\r
    "message": "Запази Eeprom мисия"\r
  },\r
  "missionTitleDelete": {\r
    "message": "Изтрий"\r
  },\r
  "missionTitleRemoveAll": {\r
    "message": "Премахни всички"\r
  },\r
  "missionTitleSetActive": {\r
    "message": "Задай като активна"\r
  },\r
  "missionTitleUpdateAll": {\r
    "message": "Обнови всички"\r
  },\r
  "missionTitleAdd": {\r
    "message": "Добави"\r
  },\r
  "missionTitleMoveToCenterView": {\r
    "message": "премести в центъра на изгледа"\r
  },\r
  "missionTitleSaveEepromSafehome": {\r
    "message": "Запази Eeprom безопасен дом"\r
  },\r
  "missionTitleLoadEepromSafehome": {\r
    "message": "Зареди Eeprom безопасен дом"\r
  },\r
  "missionTitlEditMission": {\r
    "message": "Редактирай мисия"\r
  },\r
  "MissionPlannerFwLAndingAltitudeChangeReset": {\r
    "message": "Височината е под минималната височина за кацане. Промяната е игнорирана."\r
  },\r
  "missionWpType": {\r
    "message": "Тип:"\r
  },\r
  "missionWpLat": {\r
    "message": "Геогр. ширина:"\r
  },\r
  "missionWpLon": {\r
    "message": "Геогр. дължина:"\r
  },\r
  "missionSeaLevelRef": {\r
    "message": "Реф. морско ниво: "\r
  },\r
  "missionElevation": {\r
    "message": "Надморска височина (m):"\r
  },\r
  "missionNA": {\r
    "message": "Н/Д"\r
  },\r
  "missionGroundDist": {\r
    "message": "Земно разст. (m):"\r
  },\r
  "missionParameter1": {\r
    "message": "Параметър 1:"\r
  },\r
  "missionParameter2": {\r
    "message": "Параметър 2:"\r
  },\r
  "missionUserActions": {\r
    "message": "Потребителски действия:"\r
  },\r
  "missionFwLandingSettings": {\r
    "message": "Настройки за кацане на самолети:"\r
  },\r
  "missionFwApproachAlt": {\r
    "message": "Височина на подход: (cm):"\r
  },\r
  "missionFwLandAlt": {\r
    "message": "Височина за кацане: (cm):"\r
  },\r
  "missionFwApproachDir": {\r
    "message": "Посока на подход:"\r
  },\r
  "missionFwLandHeading1": {\r
    "message": "Курс 1: (градуси):"\r
  },\r
  "missionFwLandHeading2": {\r
    "message": "Курс 2: (градуси):"\r
  },\r
  "missionExclusive": {\r
    "message": "Изключ."\r
  },\r
  "missionRTHsettingsTitle": {\r
    "message": "RTH настройки"\r
  },\r
  "missionDefaultSettingsHead": {\r
    "message": "Настройки по подразбиране"\r
  },\r
  "missionDefaultElevationHead": {\r
    "message": "Профил на височина"\r
  },\r
  "missionHomeHead": {\r
    "message": "Излитане от дома"\r
  },\r
  "missionSafehomeHead": {\r
    "message": "Мениджър на безопасен дом"\r
  },\r
  "missionSafehomeAvailableSafehomes": {\r
    "message": "Налични безопасни домове:"\r
  },\r
  "missionSafehomeMaxSafehomesReached": {\r
    "message": "Достигнат е максималният брой безопасни домове."\r
  },\r
  "missionGeozoneHead": {\r
    "message": "Геозони"\r
  },\r
  "missionGeozoneEdit": {\r
    "message": "Редактиране на геозона $1"\r
  },\r
  "missionGeozoneSaveAndReboot": {\r
    "message": "Запази Eeprom геозони и рестартирай"\r
  },\r
  "missionGeozoneLoad": {\r
    "message": "Зареди Eeprom геозони"\r
  },\r
  "missionGeozone": {\r
    "message": "-Геозона "\r
  },\r
  "missionGezoneType": {\r
    "message": "Тип"\r
  },\r
  "missionGezoneShape": {\r
    "message": "Форма"\r
  },\r
  "missionGeozoneTypePolygon": {\r
    "message": "Многоъгълник"\r
  },\r
  "missionGeozoneTypeCircular": {\r
    "message": "Кръгла"\r
  },\r
  "missionGeozoneMaxZonesReached": {\r
    "message": "Достигнат е максималният брой геозони."\r
  },\r
  "missionGeozoneMaxVerticesReached": {\r
    "message": "Достигнат е максималният брой върхове на геозона."\r
  },\r
  "missionGeozoneWarning": {\r
    "message": "Поне една мисия и една геозона са конфигурирани, моля, уверете се, че мисията не нарушава геозоната."\r
  },\r
  "geozoneEdit": {\r
    "message": "Редактиране на геозона "\r
  },\r
  "geozoneShape": {\r
    "message": "Форма"\r
  },\r
  "geozoneInclusive": {\r
    "message": "Включваща"\r
  },\r
  "geozoneExcusive": {\r
    "message": "Изключваща"\r
  },\r
  "geozoneMinAlt": {\r
    "message": "Мин. височина (cm):"\r
  },\r
  "geozoneMaxAlt": {\r
    "message": "Макс. височина (cm):"\r
  },\r
  "geozoneInfiniteAlt": {\r
    "message": "0 = Безкрайна височина"\r
  },\r
  "geozoneAction": {\r
    "message": "Действие:"\r
  },\r
  "geozoneActionNone": {\r
    "message": "Няма"\r
  },\r
  "geozoneActionAvoid": {\r
    "message": "Избягвай"\r
  },\r
  "geozoneActionPosHold": {\r
    "message": "Задържане на позиция"\r
  },\r
  "geozoneActionRTH": {\r
    "message": "RTH"\r
  },\r
  "geozoneRadius": {\r
    "message": "Радиус (cm):"\r
  },\r
  "geozoneVerices": {\r
    "message": "Върхове:"\r
  },\r
  "": {\r
    "message": ""\r
  },\r
  "featureGEOZONE": {\r
    "message": "Геозона"\r
  },\r
  "geozone": {\r
    "message": "Геозона"\r
  },\r
  "featureGEOZONETip": {\r
    "message": "Виртуални периметри за географски области (наричани също гео-ограда) с автоматично задействани действия при нарушаване на периметрите."\r
  },\r
  "GeozoneSettings": {\r
    "message": "Настройки на геозона"\r
  },\r
  "geozoneDetectionDistance": {\r
    "message": "Разстояние за откриване"\r
  },\r
  "geozoneDetectionDistanceHelp": {\r
    "message": "Разстояние, от което се открива геозона."\r
  },\r
  "geozoneAvoidAltitudeRange": {\r
    "message": "Диапазон на височина за избягване"\r
  },\r
  "geozoneAvoidAltitudeRangeHelp": {\r
    "message": "Диапазон на височина, в който се прави опит за избягване на геозона нагоре."\r
  },\r
  "geozoneSafeAltitudeDistance": {\r
    "message": "Безопасно разстояние по височина"\r
  },\r
  "geozoneSafeAltitudeDistanceHelp": {\r
    "message": "Вертикално разстояние, което трябва да се поддържа до горната и долната граница на зоната."\r
  },\r
  "geozoneSafehomeAsInclusive": {\r
    "message": "Безопасен дом като включващ"\r
  },\r
  "geozoneSafehomeAsInclusiveHelp": {\r
    "message": "Третирай най-близкия безопасен дом като включваща геозона."\r
  },\r
  "geozoneSafehomeZoneAction": {\r
    "message": "Действие за зона на безопасен дом"\r
  },\r
  "geozoneSafehomeZoneActionHelp": {\r
    "message": "Ограничително действие за зона на безопасен дом."\r
  },\r
  "geozoneMrStopDistance": {\r
    "message": "Спри разстояние за мултиротор"\r
  },\r
  "geozoneMrStopDistanceHelp": {\r
    "message": "Разстояние, на което мултироторите спират преди границата."\r
  },\r
  "geozoneNoWayHomeAction": {\r
    "message": "Действие при липса на път до дома"\r
  },\r
  "geozoneNoWayHomeActionHelp": {\r
    "message": "Действие, ако RTH с активни геозони не може да изчисли курс до дома. RTH: Върни се у дома и игнорирай всички геозони."\r
  },\r
  "missionGeozoneReboot": {\r
    "message": "Искате ли да запазите и рестартирате?"\r
  },\r
  "missionGeozoneAvailableZones": {\r
    "message": "Налични геозони:"\r
  },\r
  "missionGeozoneAvailableVertices": {\r
    "message": "Налични върхове:"\r
  },\r
  "geozoneInvalidzone": {\r
    "message": "Открити са невалидни геозони:"\r
  },\r
  "geozoneInvalidLat": {\r
    "message": "Невалидна геогр. ширина"\r
  },\r
  "geozoneInvalidLon": {\r
    "message": "Невалидна геогр. дължина"\r
  },\r
  "gezoneInvalidReasonNotCC": {\r
    "message": "Не е обратно на часовниковата стрелка"\r
  },\r
  "gezoneInvalidReasonComplex": {\r
    "message": "Комплексна"\r
  },\r
  "gezoneInvalidReasonMinMaxAlt": {\r
    "message": "Макс. височина <= Мин. височина"\r
  },\r
  "geozoneUnableToSave": {\r
    "message": "Неуспешно запазване на геозони: Невалидни зони"\r
  },\r
  "missionMultiMissionHead": {\r
    "message": "Множество мисии"\r
  },\r
  "missionTemplateHead": {\r
    "message": "Шаблон за мисия"\r
  },\r
  "missionActionMenuHead": {\r
    "message": "Меню с действия"\r
  },\r
  "useOnlyStandalone": {\r
    "message": "Използвайте самостоятелно приложение.<br> Моля, посетете <a href=\\"https://github.com/iNavFlight/inav-configurator/releases\\" target=\\"_blank\\">уебсайта</a>, за да прочетете бележките по изданието и да изтеглите."\r
  },\r
  "eeprom_load_ok": {\r
    "message": "EEPROM <span style=\\"color: #37a8db\\">заредена</span>"\r
  },\r
  "confirm_delete_all_points": {\r
    "message": "Наистина ли искате да изтриете всички точки?"\r
  },\r
  "confirm_delete_point_with_options": {\r
    "message": "Наистина ли искате да изтриете тази пътна точка с негеографски JUMP/SET_HEAD/RTH опции? \\nАко да, прикачените негеографски опции също ще бъдат премахнати!"\r
  },\r
  "confirm_multimission_file_load": {\r
    "message": "Това е файл с множество мисии. Зареждането ще презапише текущата множество мисии.\\nДа продължа ли?"\r
  },\r
  "confirm_overwrite_multimission_file_load_option": {\r
    "message": "Това ще презапише текущата множество мисии.\\nДа продължа ли?"\r
  },\r
  "multimission_active_index_saved_eeprom": {\r
    "message": "Индексът на активната мисия е запазен."\r
  },\r
  "no_waypoints_to_load": {\r
    "message": "Няма пътни точки за зареждане!"\r
  },\r
  "no_waypoints_to_save": {\r
    "message": "Няма пътни точки за запис!"\r
  },\r
  "mixerThrottleWarning": {\r
    "message": "Предупреждение: стойност извън нормалния работен диапазон."\r
  },\r
  "servoMixer": {\r
    "message": "Серво миксер"\r
  },\r
  "servoMixerDelete": {\r
    "message": "Изтрий"\r
  },\r
  "servoMixerAdd": {\r
    "message": "Добави ново правило за миксер"\r
  },\r
  "platformType": {\r
    "message": "Тип платформа"\r
  },\r
  "platformConfiguration": {\r
    "message": "Конфигурация на платформата"\r
  },\r
  "output_modeTitle": {\r
    "message": "Режим на изход"\r
  },\r
  "mixerPreset": {\r
    "message": "Предварителна настройка за миксер"\r
  },\r
  "mixerNotLoaded": {\r
    "message": "Миксерът не е зареден.<br />Кликнете <b>Load and apply</b> или <b>Load mixer</b>, за да използвате избрания миксер.<br />Или кликнете <b>Refresh mixer</b>, за да използвате текущия миксер."\r
  },\r
  "mixerLoadPresetRules": {\r
    "message": "Зареди миксер"\r
  },\r
  "mixerRefreshCurrentRules": {\r
    "message": "Обнови миксера"\r
  },\r
  "mixerLoadAndApplyPresetRules": {\r
    "message": "Зареди и приложи"\r
  },\r
  "mixerApplyModalTitle": {\r
    "message": "Потвърждение"\r
  },\r
  "mixerButtonSaveAndReboot": {\r
    "message": "Запази и рестартирай"\r
  },\r
  "mixerApplyDescription": {\r
    "message": "Това действие отменя всички текущи настройки на миксера и ги заменя със стойности по подразбиране. Няма опция за 'Отмяна'!"\r
  },\r
  "mixerWizardModalTitle": {\r
    "message": "Съветник за Quadcopter миксер"\r
  },\r
  "mixerWizardModalApply": {\r
    "message": "Приложи"\r
  },\r
  "motorWizard0": {\r
    "message": "Заден-десен"\r
  },\r
  "motorWizard1": {\r
    "message": "Преден-десен"\r
  },\r
  "motorWizard2": {\r
    "message": "Заден-ляв"\r
  },\r
  "motorWizard3": {\r
    "message": "Преден-ляв"\r
  },\r
  "mixerWizardMotorPosition": {\r
    "message": "Позиция на мотора"\r
  },\r
  "mixerWizardMotorIndex": {\r
    "message": "Индекс на мотора"\r
  },\r
  "settings": {\r
    "message": "Настройки"\r
  },\r
  "decimals": {\r
    "message": "Десетични знаци"\r
  },\r
  "motorMixer": {\r
    "message": "Моторен миксер"\r
  },\r
  "servo": {\r
    "message": "Серво"\r
  },\r
  "input": {\r
    "message": "Вход"\r
  },\r
  "fixedValue": {\r
    "message": "Фиксирана стойност (µs)"\r
  },\r
  "weight": {\r
    "message": "Тегло (%)"\r
  },\r
  "speed": {\r
    "message": "Скорост (10µs/s)"\r
  },\r
  "mixerPresetTitle": {\r
    "message": "Предварителна настройка за миксер"\r
  },\r
  "fcFirmwareUpdateRequired": {\r
    "message": "Фърмуерът на полетния контролер трябва да бъде обновен до най-новата версия, за да използвате тази функция."\r
  },\r
  "mixerNotConfigured": {\r
    "message": "Миксерът не е конфигуриран. Използвайте раздела <u>Mixer</u>, за да го настроите!"\r
  },\r
  "confirm_reset_settings": {\r
    "message": "Наистина ли искате да нулирате всички настройки?\\nВНИМАНИЕ: Всички настройки се губят! Трябва да настроите целия самолет след тази операция!"\r
  },\r
  "confirm_select_defaults": {\r
    "message": "Това ще позволи да изберете нови стойности по подразбиране за всички настройки. Съществуващата PID настройка и други настройки може да бъдат загубени!\\nИскате ли да продължите?"\r
  },\r
  "confirm_reset_pid": {\r
    "message": "Това ще нулира всички PID настройки до стойностите по подразбиране на фърмуера и ще ги запише.\\nИскате ли да продължите?"\r
  },\r
  "mappingTableOutput": {\r
    "message": "Изход (таймер)"\r
  },\r
  "mappingTableFunction": {\r
    "message": "Функция"\r
  },\r
  "mappingTableTitle": {\r
    "message": "Картографиране на изходи"\r
  },\r
  "NONE": {\r
    "message": "Няма"\r
  },\r
  "DEFAULT": {\r
    "message": "По подразбиране"\r
  },\r
  "AIRCRAFT": {\r
    "message": "Самолет"\r
  },\r
  "ALTITUDE": {\r
    "message": "Височина"\r
  },\r
  "GROUND_SPEED": {\r
    "message": "Скорост спрямо земята"\r
  },\r
  "HOME_DISTANCE": {\r
    "message": "Разстояние до дома"\r
  },\r
  "brakingSpeedThreshold": {\r
    "message": "Мин. праг на скорост"\r
  },\r
  "brakingSpeedThresholdTip": {\r
    "message": "Спирането ще бъде активирано само ако действителната скорост е по-висока от прага."\r
  },\r
  "brakingDisengageSpeed": {\r
    "message": "Скорост за изключване на спирането"\r
  },\r
  "brakingDisengageSpeedTip": {\r
    "message": "Спирането ще приключи, когато скоростта падне под тази стойност."\r
  },\r
  "brakingTimeout": {\r
    "message": "Макс. продължителност на спиране"\r
  },\r
  "brakingTimeoutTip": {\r
    "message": "Предпазна мярка. Това е най-дългият период от време, през който спирането може да е активно."\r
  },\r
  "brakingBoostFactor": {\r
    "message": "Коефициент на усилване"\r
  },\r
  "brakingBoostFactorTip": {\r
    "message": "Определя колко силно ще бъде усилването на спирането. 100% означава, че навигационният двигател има право да удвои скоростта на наклон и ускорението."\r
  },\r
  "brakingBoostTimeout": {\r
    "message": "Макс. продължителност на усилване на спирането"\r
  },\r
  "brakingBoostTimeoutTip": {\r
    "message": "Предпазна мярка. Това е най-дългият период от време, през който усилването на спирането може да е активно."\r
  },\r
  "brakingBoostSpeedThreshold": {\r
    "message": "Мин. праг на скорост за усилване"\r
  },\r
  "brakingBoostSpeedThresholdTip": {\r
    "message": "Усилването на спирането ще бъде активирано само ако действителната скорост е по-висока от прага."\r
  },\r
  "brakingBoostDisengageSpeed": {\r
    "message": "Скорост за изключване на усилването на спирането"\r
  },\r
  "brakingBoostDisengageSpeedTip": {\r
    "message": "Усилването на спирането ще приключи, когато скоростта падне под тази стойност."\r
  },\r
  "brakingBankAngle": {\r
    "message": "Макс. ъгъл на наклон"\r
  },\r
  "brakingBankAngleTip": {\r
    "message": "Макс. ъгъл на наклон, разрешен по време на фазата на спиране."\r
  },\r
  "multirotorBrakingConfiguration": {\r
    "message": "Конфигурация на режима на спиране за мултиротор"\r
  },\r
  "mapProvider": {\r
    "message": "Доставчик на карти"\r
  },\r
  "proxyURL": {\r
    "message": "MapProxy URL"\r
  },\r
  "proxyLayer": {\r
    "message": "MapProxy слой"\r
  },\r
  "accNotchHz": {\r
    "message": "Честота на Acc notch филтър"\r
  },\r
  "accNotchHzHelp": {\r
    "message": "Позволява задаването на единичен notch филтър за отчитането на акселерометъра. Трябва да се конфигурира по същия начин като жиро notch, ако акселерометърът записва шумов пик над acc. LPF филтъра."\r
  },\r
  "accNotchCutoff": {\r
    "message": "Честота на срязване на Acc notch филтър"\r
  },\r
  "accNotchCutoffHelp": {\r
    "message": "Трябва да се поддържа под честотата на Acc notch филтъра."\r
  },\r
  "gyroStage2LpfCutoffFrequency": {\r
    "message": "Честота на срязване на жиро етап 2 LPF"\r
  },\r
  "gyroStage2LpfCutoffFrequencyHelp": {\r
    "message": "Втори етап нискочестотен филтър за жиро, който е еквивалент на Betaflight not-Kalman stage2 филтър. Трябва да бъде настроен над първия етап жиро LPF. За 5 и 6-инчови мини-квадрокоптери това обикновено означава над 150Hz. За 7-инчови квадрокоптери над 125Hz."\r
  },\r
  "escProtocolNotAdvised": {\r
    "message": "Този ESC протокол не се препоръчва, използвайте го на свой собствен риск."\r
  },\r
  "escProtocolExperimental": {\r
    "message": "Експериментален ESC протокол, използвайте на свой собствен риск."\r
  },\r
  "looptimeNotAdvised": {\r
    "message": "PID цикълът може да не е стабилен, ако се използва GPS."\r
  },\r
  "gyroLpfSuggestedMessage": {\r
    "message": "Това е препоръчителната настройка за всички мултиротори с размер на витлото под 8 инча. Винаги проверявайте температурата на моторите след първия полет."\r
  },\r
  "gyroLpfNotAdvisedMessage": {\r
    "message": "Препоръчително е да изберете по-висока честота на срязване."\r
  },\r
  "gyroLpfNotFlyableMessage": {\r
    "message": "Тази настройка вероятно ще направи UAV нелетим."\r
  },\r
  "gyroLpfWhyNotHigherMessage": {\r
    "message": "Ако моторите не прегряват, опитайте да настроите 256Hz вместо това."\r
  },\r
  "gyroLpfWhyNotSlightlyHigherMessage": {\r
    "message": "Ако няма проблеми с вибрациите и моторите не прегряват, опитайте да настроите 188Hz вместо това."\r
  },\r
  "tabLogicConditions": {\r
    "message": "Логически условия"\r
  },\r
  "logicId": {\r
    "message": "#"\r
  },\r
  "logicEnabled": {\r
    "message": "Активирано"\r
  },\r
  "logicOperation": {\r
    "message": "Операция"\r
  },\r
  "logicOperandA": {\r
    "message": "Операнд A"\r
  },\r
  "logicOperandB": {\r
    "message": "Операнд B"\r
  },\r
  "logicFlags": {\r
    "message": "Флагове"\r
  },\r
  "logicStatus": {\r
    "message": "Състояние"\r
  },\r
  "logicSave": {\r
    "message": "Запази"\r
  },\r
  "logicClose": {\r
    "message": "Затвори"\r
  },\r
  "logicActivator": {\r
    "message": "Активно когато"\r
  },\r
  "save": {\r
    "message": "Запази"\r
  },\r
  "copy": {\r
    "message": "Копирай"\r
  },\r
  "paste": {\r
    "message": "Постави"\r
  },\r
  "clear": {\r
    "message": "Изчисти"\r
  },\r
  "active": {\r
    "message": "Активно"\r
  },\r
  "itermRelax": {\r
    "message": "Iterm Relax"\r
  },\r
  "itermRelaxHelp": {\r
    "message": "Определя активирането на алгоритъма за отпускане на Iterm. PR означава, че е активен на осите Roll и Pitch. PRY е активен и на Yaw."\r
  },\r
  "dterm_lpf_type": {\r
    "message": "Тип D-term LPF"\r
  },\r
  "dterm_lpf_type_help": {\r
    "message": "BIQUAD предлага по-добро затихване на шума за сметка на по-голямо забавяне. PT1 има по-слабо затихване, но предлага по-малко забавяне."\r
  },\r
  "dterm_lpf2_type": {\r
    "message": "Тип D-term етап 2 LPF"\r
  },\r
  "dterm_lpf2_type_help": {\r
    "message": "BIQUAD предлага по-добро затихване на шума за сметка на по-голямо забавяне. PT1 има по-слабо затихване, но предлага по-малко забавяне."\r
  },\r
  "dterm_lpf2_hz": {\r
    "message": "Честота на срязване на D-term етап 2 LPF"\r
  },\r
  "dterm_lpf2_hz_help": {\r
    "message": "Нискочестотен срязващ филтър за D-term на осите ROLL и PITCH. 0 означава, че филтърът е изключен."\r
  },\r
  "tabFilteringAdvanced": {\r
    "message": "Други филтри"\r
  },\r
  "gps_map_center": {\r
    "message": "Център"\r
  },\r
  "ouptputsConfiguration": {\r
    "message": "Конфигурация"\r
  },\r
  "vtxDisclaimer": {\r
    "message": "Използвайте само обхвати, канали и нива на мощност, които са законни на мястото, където летите! Винаги се обръщайте към ръководството на потребителя на VTX и местните разпоредби!"\r
  },\r
  "defaultsDialogTitle": {\r
    "message": "Стойности по подразбиране"\r
  },\r
  "defaultsDialogInfo": {\r
    "message": "INAV Configurator би искал да знае какъв тип UAV конфигурирате. Въз основа на тази информация той ще промени някои стойности по подразбиране, за да отключи най-добрите летателни характеристики."\r
  },\r
  "defaultsDialogInfo2": {\r
    "message": "Избягвайте сляпото възстановяване на всички PID и филтър конфигурации от предишната версия на INAV. Най-добрият резултат може да се получи чрез пренастройване от стойностите по подразбиране!"\r
  },\r
  "throttleIdle": {\r
    "message": "Мощност на празен ход на моторите [%]"\r
  },\r
  "throttleIdleDigitalInfo": {\r
    "message": "За цифровите протоколи, IDLE може да се намали дори до 5-7%, без моторите да спрат във въздуха. Ако дронът се клати след намаляване на газта, опитайте да увеличите IDLE, за да настроите това поведение."\r
  },\r
  "throttleIdleAnalogInfo": {\r
    "message": "За аналоговите протоколи, IDLE може да се намали под 10%, ако моторите работят гладко без заекване. Ако дронът се клати след намаляване на газта, опитайте да увеличите IDLE, за да настроите това поведение."\r
  },\r
  "motor_poles": {\r
    "message": "Брой полюси на мотора (брой магнити)"\r
  },\r
  "motorStopWarning": {\r
    "message": "Трябва да бъде активирано на самолети, превозни средства и лодки. Не трябва да се активира на мултиротори! На мултиротори, когато Airmode е активен, моторите няма да спрат."\r
  },\r
  "reversibleEscWarning": {\r
    "message": "Когато се използват обратими мотори, задайте IDLE мощност на моторите на 0%."\r
  },\r
  "dynamic_gyro_notch_enabled_help": {\r
    "message": "Матричният жиро филтър е новото поколение динамични жиро notch филтри, налични в INAV. Препоръчително е да се активира на всички мултироторни конфигурации на F4 и F7 полетни контролери."\r
  },\r
  "globalFunctions": {\r
    "message": "Глобални функции"\r
  },\r
  "functionId": {\r
    "message": "#"\r
  },\r
  "functionEnabled": {\r
    "message": "Активирано"\r
  },\r
  "functionLogicId": {\r
    "message": "Логическо условие за активиране"\r
  },\r
  "functionAction": {\r
    "message": "Действие"\r
  },\r
  "functionOperand": {\r
    "message": "Операнд"\r
  },\r
  "functionFlags": {\r
    "message": "Флагове"\r
  },\r
  "configurationI2cSpeed": {\r
    "message": "I2C скорост"\r
  },\r
  "configurationI2cSpeedHelp": {\r
    "message": "I2C скоростта трябва да се поддържа на най-високото ниво, което позволява на всички свързани устройства да работят. По подразбиране 400kHz е безопасна стойност и се препоръчва да се премине на 800kHz в случай на мултиротори."\r
  },\r
  "i2cSpeedSuggested800khz": {\r
    "message": "Моля, преминете на 800kHz, ако свързаният хардуер го позволява."\r
  },\r
  "i2cSpeedTooLow": {\r
    "message": "Тази I2C скорост е твърде ниска!"\r
  },\r
  "configurationVoltageMeterType": {\r
    "message": "Тип волтметър"\r
  },\r
  "configurationCurrentMeterType": {\r
    "message": "Тип амперметър"\r
  },\r
  "MissionPlannerJumpSettingsCheck": {\r
    "message": "JUMP настройките са неправилни: Проверете отново! \\nПринудително насочване към WP 1!"\r
  },\r
  "MissionPlannerJump2SettingsCheck": {\r
    "message": "JUMP настройките са неправилни: Повторението не трябва да надвишава 10! \\nПроверете отново! Принудително задаване на брой повторения равно на 0!"\r
  },\r
  "MissionPlannerJump3SettingsCheck": {\r
    "message": "JUMP настройките са неправилни: невъзможно е да се прескочи към POI! \\nПринудително насочване към WP 1!"\r
  },\r
  "MissionPlannerHeadSettingsCheck": {\r
    "message": "Стойността на курса е неправилна: Проверете отново! Принудително задаване по подразбиране на -1."\r
  },\r
  "MissionPlannerRTHSettingsCheck": {\r
    "message": "RTH опцията е неправилна: Трябва да бъде 0 или 1. Проверете отново! \\nПринудително задаване по подразбиране на 0, т.е. без LAND след RTH!"\r
  },\r
  "MissionPlannerJumpTargetRemoval": {\r
    "message": "Не можете да премахнете пътна точка, която е дефинирана като JUMP цел! \\nПърво трябва да премахнете целта на пътната точка, задействаща JUMP."\r
  },\r
  "MissionPlannerAltitudeChangeReset": {\r
    "message": "Височина под нивото на земята. Промяната е игнорирана."\r
  },\r
  "SafehomeSelected": {\r
    "message": ""\r
  },\r
  "SafehomeId": {\r
    "message": "#"\r
  },\r
  "SafehomeEnabled": {\r
    "message": "Активирано"\r
  },\r
  "SafehomeLon": {\r
    "message": "Геогр. дължина"\r
  },\r
  "SafehomeLat": {\r
    "message": "Геогр. ширина"\r
  },\r
  "SafehomeAlt": {\r
    "message": "Надм. височина"\r
  },\r
  "WaypointOptionSelected": {\r
    "message": "+"\r
  },\r
  "WaypointOptionId": {\r
    "message": "#"\r
  },\r
  "WaypointOptionAction": {\r
    "message": "Тип"\r
  },\r
  "WaypointOptionP1": {\r
    "message": "P1"\r
  },\r
  "WaypointOptionP2": {\r
    "message": "P2"\r
  },\r
  "pidId": {\r
    "message": "#"\r
  },\r
  "pidEnabled": {\r
    "message": "Активирано"\r
  },\r
  "pidSetpoint": {\r
    "message": "Зададена точка"\r
  },\r
  "pidMeasurement": {\r
    "message": "Измерване"\r
  },\r
  "pidP": {\r
    "message": "P-коефициент"\r
  },\r
  "pidI": {\r
    "message": "I-коефициент"\r
  },\r
  "pidD": {\r
    "message": "D-коефициент"\r
  },\r
  "pidFF": {\r
    "message": "FF-коефициент"\r
  },\r
  "pidOutput": {\r
    "message": "Изход"\r
  },\r
  "reset": {\r
    "message": "Нулирай"\r
  },\r
  "illegalStateRestartRequired": {\r
    "message": "Невалидно състояние. Изисква се рестарт."\r
  },\r
  "motor_direction_inverted": {\r
    "message": "Нормална посока на мотора / Конфигурация с перки навътре"\r
  },\r
  "motor_direction_isInverted": {\r
    "message": "Обърната посока на мотора / Конфигурация с перки навън"\r
  },\r
  "motor_direction_inverted_hint": {\r
    "message": "Активирайте, ако посоката на мотора е обърната и перките са монтирани в обратна посока."\r
  },\r
  "mixer_control_profile_linking": {\r
    "message": "Control Profile ще използва същия индекс като Mixer Profile индекса"\r
  },\r
  "mixer_control_profile_linking_hint": {\r
    "message": "mixer_control_profile_linking: Активирайте и на двата Mixer Profile, ако искате превключването на Control Profile да се управлява от превключването на Mixer Profile (Препоръчително при vtol/смесена настройка на типа платформа)."\r
  },\r
  "blackboxFields": {\r
    "message": "Blackbox полета"\r
  },\r
  "BLACKBOX_FEATURE_NAV_ACC": {\r
    "message": "Навигационен акселерометър"\r
  },\r
  "BLACKBOX_FEATURE_NAV_POS": {\r
    "message": "Оценка на навигационната позиция"\r
  },\r
  "BLACKBOX_FEATURE_NAV_PID": {\r
    "message": "Навигационен PID"\r
  },\r
  "BLACKBOX_FEATURE_MAG": {\r
    "message": "Магнитометър"\r
  },\r
  "BLACKBOX_FEATURE_ACC": {\r
    "message": "Акселерометър"\r
  },\r
  "BLACKBOX_FEATURE_ATTITUDE": {\r
    "message": "Ориентация"\r
  },\r
  "BLACKBOX_FEATURE_RC_DATA": {\r
    "message": "RC данни"\r
  },\r
  "BLACKBOX_FEATURE_RC_COMMAND": {\r
    "message": "RC команда"\r
  },\r
  "BLACKBOX_FEATURE_MOTORS": {\r
    "message": "Изход на мотори"\r
  },\r
  "BLACKBOX_FEATURE_GYRO_RAW": {\r
    "message": "Суров жиро (без филтриране)"\r
  },\r
  "BLACKBOX_FEATURE_GYRO_PEAKS_ROLL": {\r
    "message": "Пикова честота на шум на жирото - Рол"\r
  },\r
  "BLACKBOX_FEATURE_GYRO_PEAKS_PITCH": {\r
    "message": "Пикова честота на шум на жирото - Тангаж"\r
  },\r
  "BLACKBOX_FEATURE_GYRO_PEAKS_YAW": {\r
    "message": "Пикова честота на шум на жирото - Рискане"\r
  },\r
  "BLACKBOX_FEATURE_SERVOS": {\r
    "message": "Изход на серво"\r
  },\r
  "axisRoll": {\r
    "message": "Рол"\r
  },\r
  "axisPitch": {\r
    "message": "Тангаж"\r
  },\r
  "axisYaw": {\r
    "message": "Рискане"\r
  },\r
  "showAdvancedPIDs": {\r
    "message": "Покажи разширени PID контролери"\r
  },\r
  "rc_filter_lpf_hz": {\r
    "message": "Ръчен LPF Hz"\r
  },\r
  "rc_filter_smoothing_factor": {\r
    "message": "Автоматичен фактор на изглаждане"\r
  },\r
  "rc_filter_auto": {\r
    "message": "Използвай автоматично RC изглаждане"\r
  },\r
  "rcSmoothing": {\r
    "message": "RC изглаждане"\r
  },\r
  "throttle_scale": {\r
    "message": "Мащаб на газта"\r
  },\r
  "throttle_scale_help": {\r
    "message": "Позволява ограничаване на ефективната мощност, подавана към моторите. Мащаб на газта 1 означава, че няма ограничаване на мощността. Мащаб на газта 0.5 означава, че позицията на газта ще бъде намалена наполовина, преди да бъде предадена на моторите."\r
  },\r
  "pidTuning_MatrixFilterType": {\r
    "message": "Тип на матричния филтър"\r
  },\r
  "pidTuning_MatrixFilterTypeHelp": {\r
    "message": "Определя типа на матричния филтър. Филтърът 2D по подразбиране се препоръчва за повечето потребители. 7-инчовите и по-големите квадрокоптери могат да се възползват от 3D филтър."\r
  },\r
  "softSerialWarning": {\r
    "message": "Не е препоръчително да използвате softserial за критични за полета устройства като GPS или приемник, или устройства с голям трафик като MSP DisplayPort."\r
  },\r
  "ledStripColorSetupTitle": {\r
    "message": "Настройка на цветовете"\r
  },\r
  "ledStripH": {\r
    "message": "H"\r
  },\r
  "ledStripS": {\r
    "message": "S"\r
  },\r
  "ledStripV": {\r
    "message": "V"\r
  },\r
  "ledStripRemainingText": {\r
    "message": "Оставащи"\r
  },\r
  "ledStripClearSelectedButton": {\r
    "message": "Изчисти избраните"\r
  },\r
  "ledStripClearAllButton": {\r
    "message": "Изчисти ВСИЧКО"\r
  },\r
  "ledStripFunctionSection": {\r
    "message": "LED функции"\r
  },\r
  "ledStripFunctionTitle": {\r
    "message": "Функция"\r
  },\r
  "ledStripFunctionNoneOption": {\r
    "message": "Няма"\r
  },\r
  "ledStripFunctionColorOption": {\r
    "message": "Цвят"\r
  },\r
  "ledStripFunctionModesOption": {\r
    "message": "Режими и ориентация"\r
  },\r
  "ledStripFunctionArmOption": {\r
    "message": "Състояние на армиране"\r
  },\r
  "ledStripFunctionBatteryOption": {\r
    "message": "Батерия"\r
  },\r
  "ledStripFunctionRSSIOption": {\r
    "message": "RSSI"\r
  },\r
  "ledStripFunctionGPSOption": {\r
    "message": "GPS"\r
  },\r
  "ledStripFunctionRingOption": {\r
    "message": "Пръстен"\r
  },\r
  "ledStripFunctionChannelOption": {\r
    "message": "Канал"\r
  },\r
  "ledStripColorModifierTitle": {\r
    "message": "Модификатор на цвета"\r
  },\r
  "ledStripThrottleText": {\r
    "message": "Газ"\r
  },\r
  "ledStripLarsonscannerText": {\r
    "message": "Larson скенер"\r
  },\r
  "ledStripBlinkTitle": {\r
    "message": "Мигане"\r
  },\r
  "ledStripBlinkAlwaysOverlay": {\r
    "message": "Мига винаги"\r
  },\r
  "ledStripBlinkLandingOverlay": {\r
    "message": "Мига при кацане"\r
  },\r
  "ledStripStrobeText": {\r
    "message": "Строб"\r
  },\r
  "ledStripEnableStrobeLightEffectText": {\r
    "message": "Активирай ефект на строб светлина"\r
  },\r
  "ledStripOverlayTitle": {\r
    "message": "Наслагване"\r
  },\r
  "ledStripWarningsOverlay": {\r
    "message": "Предупреждения"\r
  },\r
  "ledStripIndecatorOverlay": {\r
    "message": "Индикатор"\r
  },\r
  "colorBlack": {\r
    "message": "черен"\r
  },\r
  "colorWhite": {\r
    "message": "бял"\r
  },\r
  "colorRed": {\r
    "message": "червен"\r
  },\r
  "colorOrange": {\r
    "message": "оранжев"\r
  },\r
  "colorYellow": {\r
    "message": "жълт"\r
  },\r
  "colorLimeGreen": {\r
    "message": "светлозелен"\r
  },\r
  "colorGreen": {\r
    "message": "зелен"\r
  },\r
  "colorMintGreen": {\r
    "message": "ментовозелен"\r
  },\r
  "colorCyan": {\r
    "message": "циан"\r
  },\r
  "colorLightBlue": {\r
    "message": "светлосин"\r
  },\r
  "colorBlue": {\r
    "message": "син"\r
  },\r
  "colorDarkViolet": {\r
    "message": "тъмновиолетов"\r
  },\r
  "colorMagenta": {\r
    "message": "магента"\r
  },\r
  "colorDeepPink": {\r
    "message": "наситено розово"\r
  },\r
  "ledStripSelectChannelFromColorList": {\r
    "message": "Избери канал от списъка с цветове"\r
  },\r
  "ledStripModeColorsTitle": {\r
    "message": "Цветове на режимите"\r
  },\r
  "ledStripModeColorsModeOrientation": {\r
    "message": "Ориентация"\r
  },\r
  "ledStripModeColorsModeHeadfree": {\r
    "message": "Headfree"\r
  },\r
  "ledStripModeColorsModeHorizon": {\r
    "message": "Хоризонт"\r
  },\r
  "ledStripModeColorsModeAngle": {\r
    "message": "Ъглов"\r
  },\r
  "ledStripModeColorsModeMag": {\r
    "message": "Mag"\r
  },\r
  "ledStripModeColorsModeBaro": {\r
    "message": "Baro"\r
  },\r
\r
  "ledStripDirN": {\r
    "message": "С"\r
  },\r
  "ledStripDirE": {\r
    "message": "И"\r
  },\r
  "ledStripDirS": {\r
    "message": "Ю"\r
  },\r
  "ledStripDirW": {\r
    "message": "З"\r
  },\r
  "ledStripDirU": {\r
    "message": "Г"\r
  },\r
  "ledStripDirD": {\r
    "message": "Д"\r
  },\r
  "ledStripModesOrientationTitle": {\r
    "message": "LED ориентация и цвят"\r
  },\r
  "ledStripModesSpecialColorsTitle": {\r
    "message": "Специални цветове"\r
  },\r
  "ledStripModeColorsModeDisarmed": {\r
    "message": "Деармиран"\r
  },\r
  "ledStripModeColorsModeArmed": {\r
    "message": "Армиран"\r
  },\r
  "ledStripModeColorsModeAnimation": {\r
    "message": "Анимация"\r
  },\r
  "ledStripModeColorsModeBlinkBg": {\r
    "message": "Мигащ фон"\r
  },\r
  "ledStripModeColorsModeGPSNoSats": {\r
    "message": "GPS: няма сателити"\r
  },\r
  "ledStripModeColorsModeGPSNoLock": {\r
    "message": "GPS: няма фиксация"\r
  },\r
  "ledStripModeColorsModeGPSLocked": {\r
    "message": "GPS: фиксиран"\r
  },\r
  "ledStripWiring": {\r
    "message": "Окабеляване на LED лента"\r
  },\r
  "ledStripWiringMode": {\r
    "message": "Режим на подреждане на окабеляването"\r
  },\r
  "ledStripWiringClearControl": {\r
    "message": "Изчисти избраните"\r
  },\r
  "ledStripWiringClearAllControl": {\r
    "message": "Изчисти ВСИЧКО окабеляване"\r
  },\r
  "ledStripWiringMessage": {\r
    "message": "LED диодите без номер на реда на окабеляване няма да бъдат записани."\r
  },\r
  "ledStripQuickPresets": {\r
    "message": "Бързи предварителни настройки:"\r
  },\r
  "ledStripStep1Header": {\r
    "message": "Ред на окабеляване"\r
  },\r
  "ledStripStep2Header": {\r
    "message": "Позиция и посока"\r
  },\r
  "ledStripStep3Header": {\r
    "message": "Функция"\r
  },\r
  "ledStripStep4Header": {\r
    "message": "Цвят"\r
  },\r
  "ledStripEditPalette": {\r
    "message": "Редактиране на цветовете на палитрата"\r
  },\r
\r
\r
  "mainLogoText": {\r
    "message": "КОНФИГУРАТОР"\r
  },\r
  "mainLogoTextFirmware": {\r
    "message": "FC ФЪРМУЕР"\r
  },\r
  "mainPortOverrideLabel": {\r
    "message": "Порт: "\r
  },\r
  "mainManual": {\r
    "message": "Ръчно"\r
  },\r
  "sensorDataFlashNotFound": {\r
    "message": "Не е намерен <br>dataflash чип"\r
  },\r
  "sensorDataFlashFreeSpace": {\r
    "message": "Dataflash: <br />свободни "\r
  },\r
  "mixerProfile1": {\r
    "message": "Mixer профил 1"\r
  },\r
  "mixerProfile2": {\r
    "message": "Mixer профил 2"\r
  },\r
  "sensorProfile1": {\r
    "message": "Control профил 1"\r
  },\r
  "sensorProfile2": {\r
    "message": "Control профил 2"\r
  },\r
  "sensorProfile3": {\r
    "message": "Control профил 3"\r
  },\r
  "sensorBatteryProfile1": {\r
    "message": "Battery профил 1"\r
  },\r
  "sensorBatteryProfile2": {\r
    "message": "Battery профил 2"\r
  },\r
  "sensorBatteryProfile3": {\r
    "message": "Battery профил 3"\r
  },\r
  "sensorStatusGyro": {\r
    "message": "Жироскоп"\r
  },\r
  "sensorStatusGyroShort": {\r
    "message": "Жиро",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorStatusAccel": {\r
    "message": "Акселерометър"\r
  },\r
  "sensorStatusAccelShort": {\r
    "message": "Аксел",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorStatusMag": {\r
    "message": "Магнитометър"\r
  },\r
  "sensorStatusMagShort": {\r
    "message": "Маг",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorStatusBaro": {\r
    "message": "Барометър"\r
  },\r
  "sensorStatusBaroShort": {\r
    "message": "Баро",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorStatusGPS": {\r
    "message": "GPS"\r
  },\r
  "sensorStatusGPSShort": {\r
    "message": "GPS",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorOpticalFlow": {\r
    "message": "Оптичен поток"\r
  },\r
  "sensorOpticalFlowShort": {\r
    "message": "Поток"\r
  },\r
  "sensorStatusSonar": {\r
    "message": "Сонар / Далекомер"\r
  },\r
  "sensorStatusSonarShort": {\r
    "message": "Сонар",\r
    "description": "Текст на иконата на сензорите в горната част. Моля, поддържайте го кратко."\r
  },\r
  "sensorAirspeed": {\r
    "message": "Въздушна скорост"\r
  },\r
  "sensorAirspeedShort": {\r
    "message": "Скорост"\r
  },\r
  "sensorBatteryVoltage": {\r
    "message": "Напрежение на батерията"\r
  },\r
  "mainShowLog": {\r
    "message": "Покажи лог"\r
  },\r
  "mainHideLog": {\r
    "message": "Скрий лог"\r
  },\r
  "waitingForData": {\r
    "message": "Изчакване на данни..."\r
  },\r
  "outputStatsTableAcc": {\r
    "message": "Шум на Acc RMS"\r
  },\r
  "outputStatsTableCurrent": {\r
    "message": "Ток [A]"\r
  },\r
  "outputStatsTableVoltage": {\r
    "message": "Напрежение [V]"\r
  },\r
  "LogicConditions": {\r
    "message": "Логически условия"\r
  },\r
  "PIDControllers": {\r
    "message": "PID контролери"\r
  },\r
  "sensorsGyroSelect": {\r
    "message": "Жироскоп"\r
  },\r
  "sensorsAccelSelect": {\r
    "message": "Акселерометър"\r
  },\r
  "sensorsMagSelect": {\r
    "message": "Магнитометър"\r
  },\r
  "sensorsAltitudeSelect": {\r
    "message": "Барометър"\r
  },\r
  "sensorsSonarSelect": {\r
    "message": "Сонар"\r
  },\r
  "sensorsAirSpeedSelect": {\r
    "message": "Въздушна скорост"\r
  },\r
  "sensorsTemperaturesSelect": {\r
    "message": "Температури"\r
  },\r
\r
  "sensorsDebugSelect": {\r
    "message": "Отстраняване на грешки"\r
  },\r
  "sensorsDebugTrace": {\r
    "message": "Отвори Debug Trace"\r
  },\r
  "sensorsGyroscope": {\r
    "message": "Жироскоп - °/s"\r
  },\r
  "sensorsAccelerometer": {\r
    "message": "Акселерометър - g"\r
  },\r
  "sensorsMagnetometer": {\r
    "message": "Магнитометър - Ga"\r
  },\r
  "sensorsBarometer": {\r
    "message": "Барометър - метри"\r
  },\r
  "sensorsSonar": {\r
    "message": "Сонар - cm"\r
  },\r
  "sensorsAirspeed": {\r
    "message": "Въздушна скорост - cm/s"\r
  },\r
  "sensorsTemperature0": {\r
    "message": "Температура 0 - °C"\r
  },\r
  "sensorsTemperature1": {\r
    "message": "Температура 1 - °C"\r
  },\r
  "sensorsTemperature2": {\r
    "message": "Температура 2 - °C"\r
  },\r
  "sensorsTemperature3": {\r
    "message": "Температура 3 - °C"\r
  },\r
  "sensorsTemperature4": {\r
    "message": "Температура 4 - °C"\r
  },\r
  "sensorsTemperature5": {\r
    "message": "Температура 5 - °C"\r
  },\r
  "sensorsTemperature6": {\r
    "message": "Температура 6 - °C"\r
  },\r
  "sensorsTemperature7": {\r
    "message": "Температура 7 - °C"\r
  },\r
  "sensorsTemperatureValue": {\r
    "message": "стойност:"\r
  },\r
  "getRunningOS": {\r
    "message": "Работеща - ОС: <strong>"\r
  },\r
  "getConfiguratorVersion": {\r
    "message": "Конфигуратор: <strong>"\r
  },\r
  "loadedReleaseInfo": {\r
    "message": "Заредена информация за версиите от GitHub."\r
  },\r
  "newVersionAvailable": {\r
    "message": "Налична е нова версия!"\r
  },\r
  "ReceiveTime": {\r
    "message": "Време за получаване: "\r
  },\r
  "SendTime": {\r
    "message": "Време за изпращане: "\r
  },\r
  "ErrorWritingFile": {\r
    "message": "<span style=\\"color: red\\">Грешка при запис на файл</span>"\r
  },\r
  "FileSaved": {\r
    "message": "Файлът е запазен"\r
  },\r
  "selectedTarget": {\r
    "message": "избрана цел = "\r
  },\r
  "toggledRCs": {\r
    "message": "превключени RC"\r
  },\r
  "noFirmwareSelectedToLoad": {\r
    "message": "<b>Не е избран фърмуер за зареждане</b>"\r
  },\r
  "selectValidSerialPort": {\r
    "message": "<span style=\\"color: red\\">Моля, изберете валиден сериен порт</span>"\r
  },\r
  "writePermissionsForFile": {\r
    "message": "Нямате <span style=\\"color: red\\">права за запис</span> за този файл."\r
  },\r
  "automaticTargetSelect": {\r
    "message": "Опит за автоматичен избор на цел"\r
  },\r
  "notAWAYPOINT": {\r
    "message": "Предишният избор не беше ПЪТНА ТОЧКА!"\r
  },\r
  "startGettingSafehomePoints": {\r
    "message": "Начало на получаване на точки за безопасен дом"\r
  },\r
  "endGettingSafehomePoints": {\r
    "message": "Край на получаване на точки за безопасен дом"\r
  },\r
  "startSendingSafehomePoints": {\r
    "message": "Начало на изпращане на точки за безопасен дом"\r
  },\r
  "endSendingSafehomePoints": {\r
    "message": "Край на изпращане на точки за безопасен дом"\r
  },\r
  "startGetPoint": {\r
    "message": "Начало на получаване на точка"\r
  },\r
  "startSendPoint": {\r
    "message": "Начало на изпращане на точка"\r
  },\r
  "errorReadingFileXml2jsNotFound": {\r
    "message": "<span style=\\"color: red\\">Грешка при четене на файл (xml2js не е намерен)</span>"\r
  },\r
  "errorReadingFile": {\r
    "message": "<span style=\\"color: red\\">Грешка при четене на файл</span>"\r
  },\r
  "errorParsingFile": {\r
    "message": "<span style=\\"color: red\\">Грешка при анализиране на файл</span>"\r
  },\r
  "loadedSuccessfully": {\r
    "message": " е зареден успешно!"\r
  },\r
  "errorWritingFileXml2jsNotFound": {\r
    "message": "<span style=\\"color: red\\">Грешка при запис на файл (xml2js не е намерен)</span>"\r
  },\r
  "savedSuccessfully": {\r
    "message": " е запазен успешно!"\r
  },\r
  "endGetPoint": {\r
    "message": "Край на получаване на точка"\r
  },\r
  "endSendPoint": {\r
    "message": "Край на изпращане на точка"\r
  },\r
  "osdSettingsSaved": {\r
    "message": "OSD настройките са запазени"\r
  },\r
  "osdLayoutInsertedIntoClipboard": {\r
    "message": "Оформлението е запазено в клипборда"\r
  },\r
  "osdLayoutPasteFromClipboard": {\r
    "message": "Оформлението е възстановено от клипборда"\r
  },\r
  "osdClearLayout": {\r
    "message": "Оформлението е изчистено"\r
  },\r
  "failedToOpenSerialPort": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> отваряне на сериен порт"\r
  },\r
  "failedToFlash": {\r
    "message": "<span style=\\"color: red\\">Неуспешно</span> флашване"\r
  },\r
  "targetPrefetchsuccessful": {\r
    "message": "Предварителното извличане на целта е успешно: "\r
  },\r
  "targetPrefetchFail": {\r
    "message": "Не може да се извлече предварително целта: "\r
  },\r
  "targetPrefetchFailDFU": {\r
    "message": "Не може да се извлече предварително целта: Полетният контролер е в DFU режим"\r
  },\r
  "targetPrefetchFailOld": {\r
    "message": "Не може да се извлече предварително целта: INAV фърмуерът е твърде стар"\r
  },\r
  "targetPrefetchFailNonINAV": {\r
    "message": "Не може да се извлече предварително целта: Не е INAV фърмуер"\r
  },\r
  "targetPrefetchFailNoPort": {\r
    "message": "Не може да се извлече предварително целта: Няма порт"\r
  },\r
  "timerOutputs": {\r
    "message": "Таймерни изходи"\r
  },\r
  "ezTuneFilterHz": {\r
    "message": "Филтър Hz"\r
  },\r
  "ezTuneAxisRatio": {\r
    "message": "Съотношение на осите"\r
  },\r
  "ezTuneResponse": {\r
    "message": "Реакция"\r
  },\r
  "ezTuneDamping": {\r
    "message": "Затихване"\r
  },\r
  "ezTuneStability": {\r
    "message": "Стабилност"\r
  },\r
  "ezTuneAggressiveness": {\r
    "message": "Агресивност"\r
  },\r
  "ezTuneRate": {\r
    "message": "Скорост"\r
  },\r
  "ezTuneExpo": {\r
    "message": "Expo"\r
  },\r
  "ezTuneSnappiness": {\r
    "message": "Отзивчивост"\r
  },\r
  "ezTuneSnappinessTips": {\r
    "message": "Помага за отзивчиво усещане на стиковете. Когато правите бързо движение на стика, високата Отзивчивост ще ускори реакцията на дрона. Както когато започвате, така и когато спирате маневрата. Опитайте различни стойности, за да намерите тази, която ви подхожда най-добре."\r
  },\r
  "ezTuneFilterHzTips": {\r
    "message": "Това задава основната честота на срязване за всички INAV жиро и D-term филтри. По-високите стойности ще доведат до по-малко забавяне на филтъра и по-добра стабилизация, но повече шум ще премине през филтрите и моторите ще се нагорещят, UAV може да осцилира и да стане нелетим. Вашата цел е да увеличите тази стойност колкото е възможно повече, преди да се появят негативни ефекти. Негативните ефекти включват: горещи мотори, чуваеми осцилации, бързо тресене на UAV, самоволно покачване на височина. Обичайни начални точки за 'Filter Hz' са: <strong>3-инчови витла</strong>: 90, <strong>5-инчови витла</strong>: 110, <strong>7-инчови витла</strong>: 90, <strong>10-инчови витла</strong>: 75, <strong>12-инчови витла</strong>: 60. Използвайте Blackbox и здравия разум, за да намерите стойността, която е най-подходяща за вашия UAV."\r
  },\r
  "ezTuneAxisRatioTips": {\r
    "message": "Описва разпределението на теглото/инерционния момент на вашия UAV. Колкото по-дълга е рамката (повече маса на оста отпред-отзад), толкова повече Axis Ratio е необходимо. Перфектна X рамка е със съотношение 100. Повечето съвременни рамки би трябвало да попаднат някъде между 110 и 130. По подразбиране 110 е добра начална точка."\r
  },\r
  "ezTuneResponseTips": {\r
    "message": "Тази настройка определя колко бързо UAV ще реагира на движения на стиковете и жиро сигнал. По-високите стойности ще доведат до по-бърза реакция, но също и до повече превишения и осцилации. Ако UAV се усеща муден или има бавно клатушкане, увеличете Response. Ако има горещи мотори, чуваеми осцилации, превишения или се усеща твърде нервен, намалете Response. Повечето съвременни квадрокоптери с мощни мотори ще летят най-добре с Response под 80. Трябва да се настройва заедно с Damping. Това е еквивалент на P-term."\r
  },\r
  "ezTuneDampingTips": {\r
    "message": "Описва силата на силата, която се противопоставя на всяка промяна на скоростта на въртене. Тя затихва ускорението на рол и тангаж и води до по-плавен и стабилен полет. Вашата задача по време на настройка е да разберете колко можете да я увеличите, преди да се появят негативни симптоми: горещи мотори, чуваеми осцилации, превишения. Повечето съвременни квадрокоптери би трябвало да приемат 'Damping' до 150-180. Това е еквивалент на D-term."\r
  },\r
  "ezTuneStabilityTips": {\r
    "message": "Определя дългосрочната стабилизираща сила. Повечето съвременни квадрокоптери би трябвало да толерират 'Stability' дори до 120-130. Обикновено изобщо не се налага да се настройва. Ако UAV страда от силно разклащане от въздушния поток на витлото по време на вертикално спускане, намаляването на 'Stability' може да помогне. Това е еквивалент на I-term."\r
  },\r
  "ezTuneAggressivenessTips": {\r
    "message": "Определя колко бързо вашият UAV ще реагира на бързи движения на стиковете. По-високата 'Aggressiveness' води до по-отзивчиви бързи маневри. Не влияе на стабилизацията, само на усещането на стиковете. Това е еквивалент на FF-term."\r
  },\r
  "ezTuneRateTips": {\r
    "message": "Определя колко бързо вашият UAV ще се върти около осите рол, тангаж и рискане. По-високата 'Rate' води до по-бързо въртене. Стойност 0 е еквивалентна на 300dps, 100 е еквивалентна на 600dps, 200 е еквивалентна на 900dps."\r
  },\r
  "ezTuneExpoTips": {\r
    "message": "Определя expo на RC входа. По-ниските стойности водят до по-чувствителен стик в центъра. По-високите стойности водят до по-малко чувствителен център и по-бърза реакция в края на стика. Стойност 0 е еквивалентна на 0 expo, 100 е еквивалентна на 0.7 expo, 200 е еквивалентна на 1.0 expo."\r
  },\r
  "ezTunePidPreview": {\r
    "message": "Преглед на PID"\r
  },\r
  "ezTuneRatePreview": {\r
    "message": "Преглед на скоростта"\r
  },\r
  "ezTuneRatePreviewAxis": {\r
    "message": "Ос"\r
  },\r
  "ezTuneRatePreviewRate": {\r
    "message": "Скорост"\r
  },\r
  "ezTuneRatePreviewExpo": {\r
    "message": "Expo"\r
  },\r
  "ezTuneEnabledTips": {\r
    "message": "Когато е активирано, <strong>Ez Tune</strong> ще замени множество INAV настройки, за да опрости процеса на настройка. Вместо да задавате всяка PID и филтър настройка поотделно, трябва да работите само със 7 плъзгача. Ez Tune автоматично ще коригира всички други настройки, за да отговарят на вашите нужди. Ez Tune е чудесна отправна точка за нови потребители и чудесен начин за бърза настройка на нов UAV. Не се препоръчва да използвате Ez Tune на усъвършенствани конфигурации, тъй като той ще замени всичките ви настройки и няма да можете да настроите фино вашия UAV. Когато Ez Tune е активиран, настройките от раздела <strong>PID tuning</strong> ще бъдат заменени от EzTune."\r
  },\r
  "ezTuneDisclaimer": {\r
    "message": "<strong>Предупреждение:</strong> Ez Tune е експериментална функция. Не е гарантирано, че ще работи на всички UAV. Не е гарантирано, че ще работи с всички типове рамки. Не е гарантирано, че ще работи с всички витла. Всички изчисления и резултати от настройката могат да се променят в бъдещи версии на INAV. Все пак ви насърчаваме да я разгледате и да споделите опита си в INAV Discord в канала <strong>#ez-tune</strong>."\r
  },\r
  "ezTuneNote": {\r
    "message": "<strong>Важно</strong> Ez Tune е активиран. Всички настройки в този раздел се задават и контролират от Ez Tune. За да използвате раздела PID Tuning, трябва да деактивирате Ez Tune. За да го направите, премахнете отметката от квадратчето <strong>Enabled</strong> в раздела Ez Tune."\r
  },\r
  "gsActivated": {\r
    "message": "Режимът на наземна станция е активиран"\r
  },\r
  "gsDeactivated": {\r
    "message": "Режимът на наземна станция е деактивиран"\r
  },\r
  "gsTelemetry": {\r
    "message": "Телеметрия"\r
  },\r
  "gsTelemetryLatitude": {\r
    "message": "Геогр. ширина"\r
  },\r
  "gsTelemetryLongitude": {\r
    "message": "Геогр. дължина"\r
  },\r
  "gsTelemetryAltitude": {\r
    "message": "Височина"\r
  },\r
  "gsTelemetryAltitudeShort": {\r
    "message": "Вис"\r
  },\r
  "gsTelemetryVoltageShort": {\r
    "message": "Vbat"\r
  },\r
  "gsTelemetrySats": {\r
    "message": "Сат"\r
  },\r
  "gsTelemetryFix": {\r
    "message": "Фикс"\r
  },\r
  "gsTelemetrySpeed": {\r
    "message": "Скорост"\r
  },\r
  "maintenance": {\r
    "message": "Поддръжка"\r
  },\r
  "maintenanceFlushSettingsCache": {\r
    "message": "Изчисти кеша с настройки"\r
  },\r
  "gpsOptions": {\r
    "message": "GPS опции"\r
  },\r
  "gpsOptionsAssistnowToken": {\r
    "message": "AssitNow токен"\r
  },\r
  "gpsLoadAssistnowOfflineButton": {\r
    "message": "Зареди AssistNow офлайн"\r
  },\r
  "gpsLoadAssistnowOnlineButton": {\r
    "message": "Зареди AssistNow онлайн"\r
  },\r
  "gpsAssistnowStart": {\r
    "message": "Трансферът на AssistNow данни започва..."\r
  },\r
  "gpsAssistnowDone": {\r
    "message": "Трансферът на AssistNow данни завърши."\r
  },\r
  "gpsAssistnowUpdate": {\r
    "message": "AssistNow съобщенията са изпратени."\r
  },\r
  "gpsAssistnowLoadDataError": {\r
    "message": "Грешка при зареждане на AssistNow данни."\r
  },\r
  "adsbVehicleTotalMessages": {\r
    "message": "Съобщения за превозни средства"\r
  },\r
  "adsbHeartbeatTotalMessages": {\r
    "message": "Heartbeat съобщения"\r
  },\r
  "currentLanguage": {\r
    "message": "bg"\r
  },\r
  "search": {\r
    "message": "Търсене"\r
  },\r
  "tabJavaScriptProgramming": {\r
    "message": "JavaScript програмиране"\r
  },\r
  "javascriptProgrammingDescription": {\r
    "message": "Пишете JavaScript код за управление на вашия дрон. Транспилаторът преобразува вашия код в INAV логически условия."\r
  },\r
  "javascriptBetaWarning": {\r
    "message": "<strong>В момента е в бета версия, за тестване. Не използвайте за критични за безопасността приложения!</strong>"\r
  },\r
  "javascriptEditorTitle": {\r
    "message": "JavaScript редактор (shift-ctrl-v за поставяне, щракнете с десен бутон върху променлива, за да я преименувате)"\r
  },\r
  "javascriptLoadExample": {\r
    "message": "Зареди пример:"\r
  },\r
  "javascriptSelectExample": {\r
    "message": "-- Избери пример --"\r
  },\r
  "javascriptTranspile": { "message": "Транспилирай в INAV" },\r
  "javascriptLoad": { "message": "Зареди от FC" },\r
  "javascriptSave": { "message": "Запази във FC" },\r
  "javascriptClear": { "message": "Изчисти редактора" },\r
  "javascriptOutputTitle": {\r
    "message": "Изход на INAV логически условия"\r
  },\r
  "javascriptLcCount": {\r
    "message": "$1 / $2 LC"\r
  },\r
  "javascriptOptimizationsApplied": {\r
    "message": "Приложени оптимизации:"\r
  },\r
  "javascriptApiReference": {\r
    "message": "API справка и примери"\r
  },\r
  "javascriptQuickReference": {\r
    "message": "Бърза справка"\r
  },\r
  "javascriptFlightParameters": {\r
    "message": "Полетни параметри (само за четене)"\r
  },\r
  "javascriptRcChannels": {\r
    "message": "RC канали"\r
  },\r
  "javascriptOverrides": {\r
    "message": "Замени (за запис)"\r
  },\r
  "javascriptGlobalVariables": {\r
    "message": "Глобални променливи"\r
  },\r
  "javascriptCompleteExample": {\r
    "message": "Пълен пример"\r
  }\r
\r
}`;export{n as default};
