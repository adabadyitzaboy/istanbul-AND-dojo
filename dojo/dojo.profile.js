var profile = (function() {
    var testResourceRe = /^dojo\/tests\//,
        copyOnly = function(filename, mid) {
            var list = {
                "dojo/dojo.profile": 1,
                "dojo/package.json": 1,
                "dojo/OpenAjax": 1,
                "dojo/tests": 1,
                // these are test modules that are not intended to ever be built
                "dojo/tests/_base/loader/requirejs/requirejs-setup": 1,
                "dojo/tests/_base/loader/requirejs/dataMain": 1,
                "dojo/tests/_base/loader/requirejs/depoverlap": 1,
                "dojo/tests/_base/loader/requirejs/simple-tests": 1,
                "dojo/tests/_base/loader/requirejs/relative/relative-tests": 1,
                "dojo/tests/_base/loader/requirejs/exports/exports-tests": 1
            };
            return (mid in list) ||
                /^dojo\/_base\/config\w+$/.test(mid) ||
                (/^dojo\/resources\//.test(mid) && !/\.css$/.test(filename)) ||
                /(png|jpg|jpeg|gif|tiff)$/.test(filename) ||
                /built\-i18n\-test\/152\-build/.test(mid);
        };
        //miniArgoIncludes = { "dojo/data/ObjectStore":1, "dojo/data/ItemFileReadStore": 1, "dojo/data/ItemFileWriteStore": 1, "dojo/selector/lite": 1, "dojo/selector/acme": 1, "dojo/promise/all": 1},
        //miniDependencies = { "dojo/require":1, "dojo/number": 1, "dojo/store/Observable": 1, "dojo/_firebug/firebug": 1, "dojo/promise/tracer": 1, "dojo/promise/instrumentation": 1, "dojo/_base/loader": 1, "dojo/_base/browser": 1, "dojo/domReady": 1, "dojo/errors/RequestError": 1, "dojo/request/handlers": 1, "dojo/_base/NodeList": 1, "dojo/dnd/Container": 1, "dojo/request/default": 1, "dojo/errors/RequestTimeoutError": 1, "dojo/data/util/sorter": 1, "dojo/errors/create": 1, "dojo/dojo": 1, "dojo/cldr/supplemental": 1, "dojo/DeferredList": 1, "dojo/json": 1, "dojo/request/xhr": 1, "dojo/hash": 1, "dojo/io-query": 1, "dojo/Deferred": 1, "dojo/request": 1, "dojo/behavior": 1, "dojo/dom-form": 1, "dojo/request/watch": 1, "dojo/request/util": 1, "dojo/data/util/simpleFetch": 1, "dojo/dnd/Mover": 1, "dojo/promise/Promise": 1, "dojo/errors/CancelError": 1, "dojo/_base/Color": 1, "dojo/store/util/SimpleQueryEngine": 1, "dojo/dnd/autoscroll": 1, "dojo/dom-prop": 1, "dojo/selector/_loader": 1, "dojo/dnd/Selector": 1, "dojo/touch": 1, "dojo/store/util/QueryResults": 1, "dojo/date/locale": 1, "dojo/date/stamp": 1, "dojo/topic": 1, "dojo/mouse": 1, "dojo/regexp": 1, "dojo/fx": 1, "dojo/hccss": 1, "dojo/Stateful": 1, "dojo/store/Memory": 1, "dojo/html": 1, "dojo/text": 1, "dojo/aspect": 1, "dojo/_base/config": 1, "dojo/has": 1, "dojo/uacss": 1, "dojo/data/util/filter": 1, "dojo/when": 1, "dojo/NodeList-dom": 1, "dojo/cookie": 1, "dojo/dom-style": 1, "dojo/i18n": 1, "dojo/main": 1, "dojo/_base/unload": 1, "dojo/cache": 1, "dojo/parser": 1, "dojo/_base/xhr": 1, "dojo/_base/Deferred": 1, "dojo/dnd/Source": 1, "dojo/dnd/Avatar": 1, "dojo/dnd/Manager": 1, "dojo/dnd/Moveable": 1, "dojo/Evented": 1, "dojo/on": 1, "dojo/sniff": 1, "dojo/window": 1, "dojo/_base/window": 1, "dojo/_base/json": 1, "dojo/string": 1, "dojo/query": 1, "dojo/dnd/common": 1, "dojo/date": 1, "dojo/dom-geometry": 1, "dojo/keys": 1, "dojo/_base/fx": 1, "dojo/dom-class": 1, "dojo/AdapterRegistry": 1, "dojo/_base/url": 1, "dojo/ready": 1, "dojo/_base/lang": 1, "dojo/_base/html": 1, "dojo/_base/kernel": 1, "dojo/_base/declare": 1, "dojo/_base/event": 1, "dojo/_base/connect": 1, "dojo/_base/array": 1, "dojo/_base/sniff": 1, "dojo/dom": 1, "dojo/dom-attr": 1, "dojo/dom-construct": 1, "dojo/dnd/TimedMoveable": 1};

	return {
	    resourceTags: {
	        test: function (filename, mid)
	        {
	            return testResourceRe.test(mid) || mid == "dojo/tests" || mid == "dojo/robot" || mid == "dojo/robotx";
	        },

	        copyOnly: function (filename, mid)
	        {
	            return copyOnly(filename, mid);
	        },

	        amd: function (filename, mid)
	        {
	            return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
	        },
	        miniExclude: function (filename, mid)
	        {
	            //if (/\/nls\/*/.test(mid) || (mid in miniArgoIncludes) || (mid in miniDependencies) || /\.(css|png|jpg|gif|ico|html)$/.test(mid))
	            //    return false;

	            //return true;
	            return false;
	        }
	    }
	};
})();
