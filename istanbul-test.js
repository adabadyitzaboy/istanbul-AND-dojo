dojoConfig = {
    async: 1, // We want to make sure we are using the "modern" loader
    hasCache: {
        "host-node": 1, // Ensure we "force" the loader into Node.js mode
        "dom": 0 // Ensure that none of the code assumes we have a DOM
    },
    packages: [{name: "dojo",location: "dojo"}]
};
require('./dojo/dojo.js');
//global.require is dojo's require
global.require(dojoConfig, ["./test.js"], function(){
	console.log('It is finished!');
});
