const n=`'use strict';\r
\r
import GUI from './../js/gui';\r
import i18n from './../js/localization';\r
\r
const landing = {};\r
landing.initialize = function (callback) {\r
\r
    if (GUI.active_tab !== this) {\r
        GUI.active_tab = this;\r
    }\r
    import('./landing.html?raw').then(({default: html}) => {\r
        GUI.load(html, () => {\r
            i18n.localize();\r
            GUI.content_ready(callback);\r
        });\r
    });\r
};\r
\r
landing.cleanup = function (callback) {\r
    if (callback) callback();\r
};\r
\r
const landingTab = landing;\r
\r
export default landingTab;\r
`;export{n as default};
