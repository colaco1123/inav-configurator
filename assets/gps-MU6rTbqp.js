const t=`<div class="tab-gps toolbar_fixed_bottom">\r
    <div class="content_wrapper">\r
        <div class="tab_title" data-i18n="tabGPS">GPS</div>\r
        <div class="cf_column third_left">\r
            <div class="spacer_right">\r
\r
                <div class="config-section gui_box grey">\r
                    <div class="gui_box_titlebar">\r
                        <div class="spacer_box_title" data-i18n="configurationGPS"></div>\r
                    </div>\r
                    <div class="spacer_box">\r
                        <div class="checkbox">\r
                            <input type="checkbox" data-bit="7" class="feature toggle" name="GPS" title="GPS" id="feature-7">\r
                            <label for="feature-7"><span data-i18n="featureGPS"></span></label>\r
                            <div for="feature-7" class="helpicon cf_tip" data-i18n_title="featureGPSTip"></div>\r
                        </div>\r
                        <div class="select">\r
                            <select id="gps_port" class="gps_port"></select>\r
                            <label for="gps_port"><span data-i18n="gpsPort"></span></label>\r
                        </div>\r
                        <div class="select">\r
                            <select id="gps_baud" class="gps_baud"></select>\r
                            <label for="gps_baud"><span data-i18n="gpsBaud"></span></label>\r
                        </div>\r
                        <div class="select">\r
                            <select id="gps_protocol" class="gps_protocol">\r
                                <!-- list generated here -->\r
                            </select>\r
                            <label for="gps_protocol"><span data-i18n="configurationGPSProtocol"></span></label>\r
                        </div>\r
                        <div class="select">\r
                            <select id="gps_ubx_sbas" class="gps_ubx_sbas">\r
                                <!-- list generated here -->\r
                            </select>\r
                            <label for="gps_ubx_sbas"><span data-i18n="configurationGPSubxSbas"></span></label>\r
                        </div>\r
                        <div class="number is-hidden">\r
                            <input type="number" id="mag_declination" name="mag_declination" step="0.1" min="-180" max="180" />\r
                            <label for="mag_declination"><span data-i18n="configurationMagDeclination"></span></label>\r
                        </div>\r
                        <!-- GPS Optimization Preset -->\r
                        <div class="select">\r
                            <select id="gps_preset_mode">\r
                                <option value="auto">Auto-detect GPS Type</option>\r
                                <option value="manual" selected>Manual Settings</option>\r
                                <option value="m8">u-blox M8</option>\r
                                <option value="m9-precision">u-blox M9 (Precision Mode)</option>\r
                                <option value="m9-sport">u-blox M9 (Sport Mode)</option>\r
                                <option value="m10">u-blox M10</option>\r
                                <option value="m10-highperf">u-blox M10 (High-Performance)</option>\r
                            </select>\r
                            <label for="gps_preset_mode">\r
                                <span data-i18n="gpsPresetMode">GPS Configuration Preset</span>\r
                            </label>\r
                            <div for="gps_preset_mode" class="helpicon cf_tip" data-i18n_title="gpsPresetModeHelp"></div>\r
                        </div>\r
                        <!-- Hardware detection status -->\r
                        <div id="gps_hardware_status" style="display: none; padding: 5px; margin: 5px 0; font-size: 12px; color: #28a745;">\r
                            <span style="margin-right: 5px;">✓</span>\r
                            <span id="gps_hardware_name"></span>\r
                            <a href="#" id="gps_apply_optimal" style="margin-left: 10px; color: #007bff; text-decoration: none;">[Use optimal settings]</a>\r
                        </div>\r
                        <!-- GPS Preset Info (shown when preset selected) -->\r
                        <div class="preset-info" id="preset_info" style="display: none; padding: 5px; margin: 5px 0; background: #f0f0f0; border-radius: 3px;">\r
                            <strong><span id="preset_name"></span></strong>\r
                            <ul id="preset_details" style="margin: 5px 0; padding-left: 20px;"></ul>\r
                        </div>\r
                        <!-- GPS Update Rate -->\r
                        <div class="number">\r
                            <input type="number" id="gps_ublox_nav_hz" data-setting="gps_ublox_nav_hz" step="1" min="5" max="20" />\r
                            <label for="gps_ublox_nav_hz">\r
                                <span data-i18n="gpsUpdateRate">GPS Update Rate (Hz)</span>\r
                            </label>\r
                            <div for="gps_ublox_nav_hz" class="helpicon cf_tip" data-i18n_title="gpsUpdateRateHelp"></div>\r
                        </div>\r
                        <div class="checkbox">\r
                            <input type="checkbox" id="gps_use_galileo" class="toggle update_preview preset-controlled" data-setting="gps_ublox_use_galileo">\r
                            <label for="gps_use_galileo"><span data-i18n="configurationGPSUseGalileo"></span></label>\r
                        </div>\r
                        <div class="checkbox">\r
                            <input type="checkbox" id="gps_use_beidou" class="toggle update_preview preset-controlled" data-setting="gps_ublox_use_beidou">\r
                            <label for="gps_use_beidou"><span data-i18n="configurationGPSUseBeidou"></span></label>\r
                        </div>\r
                        <div class="checkbox">\r
                            <input type="checkbox" id="gps_use_glonass" class="toggle update_preview preset-controlled" data-setting="gps_ublox_use_glonass">\r
                            <label for="gps_use_glonass"><span data-i18n="configurationGPSUseGlonass"></span></label>\r
                        </div>\r
                        <div class="number">\r
                            <input type="number" id="tzOffset" data-setting="tz_offset" data-unit="tzmins" data-setting-multiplier="1" step="1" min="-1440" max="1440" />\r
                            <label for="tzOffset"><span data-i18n="tzOffset"></span></label>\r
                            <div for="tzOffset" class="helpicon cf_tip" data-i18n_title="tzOffsetHelp"></div>\r
                        </div>\r
                        <div class="select">\r
                            <select id="tzAutomaticDST" data-setting="tz_automatic_dst"></select>\r
                            <label for="tzAutomaticDST"><span data-i18n="tzAutomaticDST"></span></label>\r
                            <div for="tzAutomaticDST" class="helpicon cf_tip" data-i18n_title="tzAutomaticDSTHelp"></div>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
\r
                <div class="gui_box grey">\r
                    <div class="gui_box_titlebar">\r
                        <div class="spacer_box_title" data-i18n="gpsHead"></div>\r
                    </div>\r
                    <div class="spacer_box GPS_info">\r
                        <table class="cf_table">\r
                            <tr>\r
                                <td style="width: 85px" data-i18n="gpsFix"></td>\r
                                <td class="fix" data-i18n="gpsFixNone"></td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsAltitude"></td>\r
                                <td class="alt">0 m</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsLat"></td>\r
                                <td class="lat">0.0000 deg</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsLon"></td>\r
                                <td class="lon">0.0000 deg</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsSpeed"></td>\r
                                <td class="speed">0 cm/s</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsSats"></td>\r
                                <td class="sats">0</td>\r
                            </tr>\r
                            <tr class="noboarder">\r
                                <td data-i18n="gpsDistToHome"></td>\r
                                <td class="distToHome"></td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </div>\r
                <div class="gui_box grey">\r
                    <div class="gui_box_titlebar">\r
                        <div class="spacer_box_title" data-i18n="gpsStatHead"></div>\r
                    </div>\r
                    <div class="spacer_box GPS_stat">\r
                        <table class="cf_table">\r
                            <tr>\r
                                <td data-i18n="gpsHDOP"></td>\r
                                <td class="hdop"></td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsEPH"></td>\r
                                <td class="eph">0</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsEPV"></td>\r
                                <td class="epv">0</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsMessageRate"></td>\r
                                <td class="rate">0</td>\r
                            </tr>\r
                            <tr>\r
                                <td style="width: 85px" data-i18n="gpsTotalMessages"></td>\r
                                <td class="messages">0</td>\r
                            </tr>\r
                            <tr>\r
                                <td data-i18n="gpsErrors"></td>\r
                                <td class="errors">0</td>\r
                            </tr>\r
                            <tr class="noboarder">\r
                                <td data-i18n="gpsTimeouts"></td>\r
                                <td class="timeouts">0</td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </div>\r
                <div class="gui_box grey adsb_info_block">\r
                    <div class="gui_box_titlebar">\r
                        <div class="spacer_box_title">ADSB</div>\r
                    </div>\r
                    <div class="spacer_box GPS_stat">\r
                        <table class="cf_table">\r
                            <tr>\r
                                <td style="width: 85px" data-i18n="adsbVehicleTotalMessages"></td>\r
                                <td class="adsbVehicleTotalMessages">0</td>\r
                            </tr>\r
                            <tr>\r
                                <td style="width: 85px" data-i18n="adsbHeartbeatTotalMessages"></td>\r
                                <td class="adsbHeartbeatTotalMessages">0</td>\r
                            </tr>\r
                        </table>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="cf_column twothird">\r
            <div class="gui_box grey gps_map">\r
                <div class="gui_box_titlebar" style="margin-bottom: 0;">\r
                    <div class="spacer_box_title" data-i18n="gpsMapHead"></div>\r
                </div>\r
                <div id="loadmap">\r
                    <div id="gps-map">\r
                        <button class="map-button" id="center_button" data-i18n="gps_map_center"></button>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </div>\r
    </div>\r
    <div class="content_toolbar">\r
        <div class="btn save_btn">\r
            <a class="save" href="#" data-i18n="configurationButtonSave"></a>\r
        </div>\r
        <div class="btn save_btn">\r
            <a class="loadAssistnowOnline" href="#" data-i18n="gpsLoadAssistnowOnlineButton"></a>\r
        </div>\r
        <div class="btn save_btn">\r
            <a class="loadAssistnowOffline" href="#" data-i18n="gpsLoadAssistnowOfflineButton"></a>\r
        </div>\r
    </div>\r
</div>`;export{t as default};
