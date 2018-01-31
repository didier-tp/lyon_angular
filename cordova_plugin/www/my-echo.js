module.exports={
 echo: function(str, callback){
    cordova.exec(callback,
                 function(err) {  callback('Nothing to echo.');    }, 
                 "MyEcho",
				 "echo",
				 [str]);
 }
};
