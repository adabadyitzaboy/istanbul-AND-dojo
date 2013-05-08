dojoConfig = {
    async: 1, // We want to make sure we are using the "modern" loader
    hasCache: {
        "host-node": 1, // Ensure we "force" the loader into Node.js mode
        "dom": 0 // Ensure that none of the code assumes we have a DOM
    },
    packages: [{name: "dojo",location: "dojo"}]
};
var dojo = require('./dojo/dojo.js');
require( "./test.js");