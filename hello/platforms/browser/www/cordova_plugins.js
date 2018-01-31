cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/xyz-my-echo-plugin/www/my-echo.js",
        "id": "xyz-my-echo-plugin.MyEcho",
        "pluginId": "xyz-my-echo-plugin",
        "clobbers": [
            "xyz.MyEcho"
        ]
    },
    {
        "file": "plugins/xyz-my-echo-plugin/src/browser/MyEchoProxy.js",
        "id": "xyz-my-echo-plugin.MyEchoProxy",
        "pluginId": "xyz-my-echo-plugin",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "xyz-my-echo-plugin": "0.1.0"
}
// BOTTOM OF METADATA
});