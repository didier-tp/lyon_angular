cordova.define("xyz-my-echo-plugin.MyEcho", function(require, exports, module) { module.exports={
 echo: function(str, callback){
    cordova.exec(callback,
                 function(err) {  callback('Nothing to echo.');    }, 
                 "MyEcho",
				 "echo",
				 [str]);
 }
};

});
