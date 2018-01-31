cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "xyz-my-echo-plugin.MyEcho",
    "file": "plugins/xyz-my-echo-plugin/www/my-echo.js",
    "pluginId": "xyz-my-echo-plugin",
    "clobbers": [
      "xyz.MyEcho"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "xyz-my-echo-plugin": "0.1.0"
};
// BOTTOM OF METADATA
});