const e=`'use strict';\r
\r
import * as THREE from 'three';\r
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';\r
import './../js/libraries/jquery.flightindicators';\r
\r
import MSPChainerClass from './../js/msp/MSPchainer';\r
import FC from './../js/fc';\r
import GUI from './../js/gui';\r
import MSP from './../js/msp';\r
import MSPCodes from './../js/msp/MSPCodes';\r
import i18n from './../js/localization';\r
import mspHelper from './../js/msp/MSPHelper';\r
import interval from './../js/intervals';\r
import SerialBackend from './../js/serial_backend';\r
import { mixer } from './../js/model';\r
import BitHelper from './../js/bitHelper';\r
import dialog from '../js/dialog';\r
\r
const setupTab = {\r
    yaw_fix: 0.0\r
};\r
\r
setupTab.initialize = function (callback) {\r
    var self = this;\r
\r
    if (GUI.active_tab !== this) {\r
        GUI.active_tab = this;\r
    }\r
\r
    var loadChainer = new MSPChainerClass();\r
\r
    var loadChain = [\r
        mspHelper.loadFeatures,\r
        //mspHelper.queryFcStatus,\r
        mspHelper.loadMixerConfig,\r
        mspHelper.loadMiscV2,\r
        mspHelper.loadSerialPorts\r
    ];\r
\r
    loadChainer.setChain(loadChain);\r
    loadChainer.setExitPoint(load_html);\r
    loadChainer.execute();\r
\r
    let attitudeInstrument;\r
    let headingnstrument;\r
\r
    function load_html() {\r
        import('./setup.html?raw').then(({default: html}) => GUI.load(html, process_html));\r
    }\r
\r
    function updateInstruments () {\r
        if (headingnstrument && attitudeInstrument) {\r
            attitudeInstrument.setRoll(FC.SENSOR_DATA.kinematics[0]);\r
            attitudeInstrument.setPitch(FC.SENSOR_DATA.kinematics[1]);\r
            headingnstrument.setHeading(FC.SENSOR_DATA.kinematics[2]);\r
        }\r
    };\r
\r
    async function initializeInstruments() {\r
        var options = {size:90, showBox : false, img_directory: './../../images/flightindicators/'};\r
        \r
        attitudeInstrument = await $.flightIndicator('#attitude', 'attitude', options);\r
        headingnstrument = await $.flightIndicator('#heading', 'heading', options);\r
    };\r
\r
    function process_html() {\r
        // translate to user-selected language\r
       i18n.localize();\r
\r
        if (!FC.isMotorOutputEnabled()) {\r
            GUI.log("<span style='color: red; font-weight: bolder'><strong>" + i18n.getMessage("logPwmOutputDisabled") + "</strong></span>");\r
        }\r
\r
        // initialize 3D\r
        self.initialize3D();\r
\r
		// set roll in interactive block\r
        $('span.roll').text(i18n.getMessage('initialSetupAttitude', [0]));\r
		// set pitch in interactive block\r
        $('span.pitch').text(i18n.getMessage('initialSetupAttitude', [0]));\r
        // set heading in interactive block\r
        $('span.heading').text(i18n.getMessage('initialSetupAttitude', [0]));\r
\r
\r
        // check if we have magnetometer\r
        if (!BitHelper.bit_check(FC.CONFIG.activeSensors, 2)) {\r
            $('a.calibrateMag').addClass('disabled');\r
            $('default_btn').addClass('disabled');\r
        }\r
\r
        initializeInstruments();\r
\r
        $('a.resetSettings').on('click', async function () {\r
            if (await dialog.confirm(i18n.getMessage('confirm_reset_settings'))) {\r
                interval.remove('global_data_refresh');\r
                MSP.send_message(MSPCodes.MSP_RESET_CONF, false, false, function () {\r
                    GUI.log(i18n.getMessage('initialSetupSettingsRestored'));\r
    \r
                    GUI.tab_switch_cleanup(function () {\r
                        MSP.send_message(MSPCodes.MSP_SET_REBOOT, false, false, function() {\r
                            GUI.log(i18n.getMessage('deviceRebooting'));\r
                            GUI.handleReconnect();\r
                        });\r
                    });\r
                });\r
            }\r
        });\r
\r
        // display current yaw fix value (important during tab re-initialization)\r
        $('div#interactive_block > a.reset').text(i18n.getMessage('initialSetupButtonResetZaxisValue', [self.yaw_fix]));\r
\r
        // reset yaw button hook\r
        $('div#interactive_block > a.reset').on('click', function () {\r
            self.yaw_fix = FC.SENSOR_DATA.kinematics[2] * - 1.0;\r
            $(this).text(i18n.getMessage('initialSetupButtonResetZaxisValue', [self.yaw_fix]));\r
\r
            console.log('YAW reset to 0 deg, fix: ' + self.yaw_fix + ' deg');\r
        });\r
\r
        // cached elements\r
        var bat_voltage_e = $('.bat-voltage'),\r
            bat_percent_e = $('.bat-percent'),\r
            bat_remaining_e = $('.bat-remain-cap'),\r
            bat_cells_e = $('.bat-cells'),\r
            bat_thresh_e = $('.bat-thresh'),\r
            bat_full_e = $('.bat-full'),\r
            bat_mah_drawn_e = $('.bat-mah-drawn'),\r
            bat_wh_drawn_e = $('.bat-mwh-drawn'),\r
            bat_current_draw_e = $('.bat-current-draw'),\r
            bat_power_draw_e = $('.bat-power-draw'),\r
            rssi_e = $('.rssi'),\r
            gpsFix_e = $('.gpsFixType'),\r
            gpsSats_e = $('.gpsSats'),\r
            gpsLat_e = $('.gpsLat'),\r
            gpsLon_e = $('.gpsLon'),\r
            roll_e = $('dd.roll'),\r
            pitch_e = $('dd.pitch'),\r
            heading_e = $('dd.heading');\r
\r
        function get_slow_data() {\r
            if (SerialBackend.have_sensor(FC.CONFIG.activeSensors, 'gps')) {\r
                MSP.send_message(MSPCodes.MSP_RAW_GPS, false, false, function () {\r
                    var gpsFixType = i18n.getMessage('gpsFixNone');\r
                    if (FC.GPS_DATA.fix >= 2)\r
                        gpsFixType = i18n.getMessage('gpsFix3D');\r
                    else if (FC.GPS_DATA.fix >= 1)\r
                        gpsFixType = i18n.getMessage('gpsFix2D');\r
                    gpsFix_e.html(gpsFixType);\r
                    gpsSats_e.text(FC.GPS_DATA.numSat);\r
                    gpsLat_e.text((FC.GPS_DATA.lat / 10000000).toFixed(4) + ' deg');\r
                    gpsLon_e.text((FC.GPS_DATA.lon / 10000000).toFixed(4) + ' deg');\r
                });\r
            } else {\r
                gpsFix_e.html(i18n.getMessage('gpsFixNotConnected'));\r
            }\r
        }\r
\r
        function get_fast_data() {\r
            MSP.send_message(MSPCodes.MSP_ATTITUDE, false, false, function () {\r
	            roll_e.text(i18n.getMessage('initialSetupAttitude', [FC.SENSOR_DATA.kinematics[0]]));\r
	            pitch_e.text(i18n.getMessage('initialSetupAttitude', [FC.SENSOR_DATA.kinematics[1]]));\r
                heading_e.text(i18n.getMessage('initialSetupAttitude', [FC.SENSOR_DATA.kinematics[2]]));\r
                self.render3D();\r
                updateInstruments();\r
            });\r
        }\r
\r
        interval.add('setup_data_pull_fast', get_fast_data, 50);\r
        interval.add('setup_data_pull_slow', get_slow_data, 250);\r
\r
        interval.add('gui_analog_update', function () {\r
            bat_cells_e.text(i18n.getMessage('initialSetupBatteryDetectedCellsValue', [FC.ANALOG.cell_count]));\r
            bat_voltage_e.text(i18n.getMessage('initialSetupBatteryVoltageValue', [FC.ANALOG.voltage]));\r
            let remaining_capacity_wh_decimals = FC.ANALOG.battery_remaining_capacity.toString().length < 5 ? 3 : (7 - FC.ANALOG.battery_remaining_capacity.toString().length);\r
            let remaining_capacity_value = FC.MISC.battery_capacity_unit == 'mAh' ? FC.ANALOG.battery_remaining_capacity : (FC.ANALOG.battery_remaining_capacity / 1000).toFixed(remaining_capacity_wh_decimals < 0 ? 0 : remaining_capacity_wh_decimals);\r
            let remaining_capacity_unit = FC.MISC.battery_capacity_unit == 'mAh' ? 'mAh' : 'Wh';\r
            bat_remaining_e.text(i18n.getMessage('initialSetupBatteryRemainingCapacityValue', ((FC.MISC.battery_capacity > 0) && FC.ANALOG.battery_full_when_plugged_in) ? [remaining_capacity_value, remaining_capacity_unit] : ['NA', '']));\r
            bat_percent_e.text(i18n.getMessage('initialSetupBatteryPercentageValue', [FC.ANALOG.battery_percentage]));\r
            bat_full_e.text(i18n.getMessage('initialSetupBatteryFullValue', [FC.ANALOG.battery_full_when_plugged_in]));\r
            bat_thresh_e.text(i18n.getMessage('initialSetupBatteryThresholdsValue', [FC.ANALOG.use_capacity_thresholds]));\r
            bat_mah_drawn_e.text(i18n.getMessage('initialSetupBatteryMahValue', [FC.ANALOG.mAhdrawn]));\r
            let capacity_drawn_decimals = FC.ANALOG.mWhdrawn.toString().length < 5 ? 3 : (7 - FC.ANALOG.mWhdrawn.toString().length);\r
            bat_wh_drawn_e.text(i18n.getMessage('initialSetup_Wh_drawnValue', [(FC.ANALOG.mWhdrawn / 1000).toFixed(capacity_drawn_decimals < 0 ? 0 : capacity_drawn_decimals)]));\r
            bat_current_draw_e.text(i18n.getMessage('initialSetupCurrentDrawValue', [FC.ANALOG.amperage.toFixed(2)]));\r
            bat_power_draw_e.text(i18n.getMessage('initialSetupPowerDrawValue', [FC.ANALOG.power.toFixed(2)]));\r
            rssi_e.text(i18n.getMessage('initialSetupRSSIValue', [((FC.ANALOG.rssi / 1023) * 100).toFixed(0)]));\r
        }, 100, true);\r
\r
        function updateArminFailure() {\r
            var flagNames = FC.getArmingFlags();\r
            for (var bit in flagNames) {\r
                if (flagNames.hasOwnProperty(bit)) {\r
                    if (BitHelper.bit_check(FC.CONFIG.armingFlags, bit)) {\r
                        $('#reason-' + flagNames[bit]).html(i18n.getMessage('armingCheckFail'));\r
                    }\r
                    else {\r
                        $('#reason-' + flagNames[bit]).html(i18n.getMessage('armingCheckPass'));\r
                    }\r
                }\r
            }\r
        }\r
\r
        /*\r
         * 1fps update rate will be fully enough\r
         */\r
        interval.add('updateArminFailure', updateArminFailure, 500, true);\r
\r
        GUI.content_ready(callback);\r
    }\r
};\r
\r
setupTab.initialize3D = function () {\r
    var self = this,\r
        loader,\r
        canvas,\r
        wrapper,\r
        renderer,\r
        camera,\r
        scene,\r
        light,\r
        light2,\r
        modelWrapper,\r
        model,\r
        model_file,\r
        useWebGlRenderer = false;\r
\r
    canvas = $('.model-and-info #canvas');\r
    wrapper = $('.model-and-info #canvas_wrapper');\r
\r
    // Robust WebGL capability detection with fallback\r
    function tryCreateWebGLContext() {\r
        if (!window.WebGLRenderingContext) {\r
            return null;\r
        }\r
\r
        const detector_canvas = document.createElement('canvas');\r
        let gl = null;\r
        let renderMethod = null;\r
\r
        // Try 1: Hardware-accelerated WebGL (best performance)\r
        try {\r
            gl = detector_canvas.getContext('webgl') || detector_canvas.getContext('experimental-webgl');\r
            if (gl) {\r
                renderMethod = 'hardware';\r
                console.log('[3D] Using hardware-accelerated WebGL');\r
            }\r
        } catch (e) {\r
            console.warn('[3D] Hardware WebGL failed:', e);\r
        }\r
\r
        // Try 2: Software-rendered WebGL (slower but more compatible)\r
        if (!gl) {\r
            try {\r
                gl = detector_canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||\r
                     detector_canvas.getContext('experimental-webgl', { failIfMajorPerformanceCaveat: false });\r
                if (gl) {\r
                    renderMethod = 'software';\r
                    console.log('[3D] Using software-rendered WebGL (slower performance)');\r
                }\r
            } catch (e) {\r
                console.warn('[3D] Software WebGL failed:', e);\r
            }\r
        }\r
\r
        return gl ? { context: gl, method: renderMethod } : null;\r
    }\r
\r
    const webglResult = tryCreateWebGLContext();\r
\r
    if (webglResult) {\r
        try {\r
            renderer = new THREE.WebGLRenderer({canvas: canvas.get(0), alpha: true, antialias: true});\r
            useWebGlRenderer = true;\r
\r
            // Show performance notice if using software rendering\r
            if (webglResult.method === 'software') {\r
                GUI.log('<span style="color: orange;">3D view using software rendering (slower). Consider updating graphics drivers or disabling hardware acceleration in Options.</span>');\r
            }\r
        } catch (e) {\r
            console.error('[3D] Failed to create THREE.WebGLRenderer:', e);\r
            renderer = null;\r
            useWebGlRenderer = false;\r
        }\r
    }\r
\r
    // Check if WebGL is available\r
    if (!renderer) {\r
        // WebGL not supported - show fallback message\r
        wrapper.html('<div class="webgl-fallback" style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888; text-align: center; padding: 20px;">' +\r
            '<div>' +\r
            '<p style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">3D view unavailable</p>' +\r
            '<p style="margin: 0 0 10px 0; font-size: 12px;">WebGL could not be initialized. This may be due to:</p>' +\r
            '<ul style="text-align: left; margin: 10px 0; padding-left: 20px; font-size: 12px;">' +\r
            '<li>Graphics drivers need updating</li>' +\r
            '<li>Hardware acceleration issues</li>' +\r
            '<li>Browser or system limitations</li>' +\r
            '</ul>' +\r
            '<p style="margin: 10px 0 0 0; font-size: 12px; font-style: italic;">Try: Options → Disable 3D Hardware Acceleration, then restart</p>' +\r
            '</div>' +\r
            '</div>');\r
\r
        // Provide no-op functions so the rest of the tab doesn't break\r
        this.render3D = function () {};\r
        this.resize3D = function () {};\r
        return;\r
    }\r
\r
    // initialize render size for current canvas size\r
    renderer.setSize(wrapper.width()*2, wrapper.height()*2);\r
\r
\r
    // modelWrapper adds an extra axis of rotation to avoid gimbal lock with the euler angles\r
    modelWrapper = new THREE.Object3D();\r
\r
    // load the model including materials\r
    if (useWebGlRenderer) {\r
        if (FC.MIXER_CONFIG.appliedMixerPreset === -1) {\r
            model_file = 'custom';\r
            GUI.log("<span style='color: red; font-weight: bolder'><strong>" + i18n.getMessage("mixerNotConfigured") + "</strong></span>");\r
        } else {\r
            model_file = mixer.getById(FC.MIXER_CONFIG.appliedMixerPreset).model;\r
        }\r
    } else {\r
        model_file = 'fallback'\r
    }\r
\r
    // Temporary workaround for 'custom' model until akfreak's custom model is merged.\r
    if (model_file == 'custom') {\r
        model_file = 'fallback';\r
    }\r
\r
    // setup scene\r
    scene = new THREE.Scene();\r
    const manager = new THREE.LoadingManager();\r
    loader = new GLTFLoader(manager);\r
    import(\`./../resources/models/model_\${model_file}.gltf\`).then(({default: gltf}) => {\r
        loader.load(gltf,  (obj) =>{\r
            model = obj.scene;\r
            model.scale.set(15, 15, 15);\r
            modelWrapper.add(model);\r
        });\r
    });\r
\r
    // stationary camera\r
    camera = new THREE.PerspectiveCamera(50, wrapper.width() / wrapper.height(), 1, 10000);\r
\r
    // some light\r
    light = new THREE.AmbientLight(0x404040);\r
    light2 = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 1.5);\r
    light2.position.set(0, 1, 0);\r
\r
    // move camera away from the model\r
    camera.position.z = 125;\r
\r
    // add camera, model, light to the foreground scene\r
    scene.add(light);\r
    scene.add(light2);\r
    scene.add(camera);\r
    scene.add(modelWrapper);\r
\r
    this.render3D = function () {\r
        if (!model) {\r
            return;\r
        }\r
\r
        // compute the changes\r
        model.rotation.x = (FC.SENSOR_DATA.kinematics[1] * -1.0) * 0.017453292519943295;\r
        modelWrapper.rotation.y = ((FC.SENSOR_DATA.kinematics[2] * -1.0) - self.yaw_fix) * 0.017453292519943295;\r
        model.rotation.z = (FC.SENSOR_DATA.kinematics[0] * -1.0) * 0.017453292519943295;\r
\r
        // draw\r
        renderer.render(scene, camera);\r
    };\r
\r
    // handle canvas resize\r
    this.resize3D = function () {\r
        renderer.setSize(wrapper.width()*2, wrapper.height()*2);\r
        camera.aspect = wrapper.width() / wrapper.height();\r
        camera.updateProjectionMatrix();\r
\r
        self.render3D();\r
    };\r
\r
    $(window).on('resize', this.resize3D);\r
};\r
\r
setupTab.cleanup = function (callback) {\r
    $(window).off('resize', this.resize3D);\r
\r
    if (callback) callback();\r
};\r
\r
export default setupTab;\r
`;export{e as default};
