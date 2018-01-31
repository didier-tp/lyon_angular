cordova.define("xyz-my-echo-plugin.MyEchoProxy", function(require, exports, module) { module.exports={
 echo:  function(success, error, opts) {
	  if (opts && typeof(opts[0]) === 'string' && opts[0].length > 0) {
		success(">>"+opts[0]+"<<");
	  } else {
		 error('Empty message!');
	  }
	}
};

require('cordova/exec/proxy').add('MyEcho', module.exports);
});
