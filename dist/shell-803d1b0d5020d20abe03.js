/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + {"0":"86a1c3085e135767dd99","1":"afe436fe358f24997858","2":"2b1b28982bbce9a8fb90","3":"f57ea59692eeddb5f9ff"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["open"] = open;
/* harmony export (immutable) */ __webpack_exports__["close"] = close;
function open(name) {
	document.body.innerHTML = "<h1></h1>";
	document.querySelector("h1").innerText = `Loading ${name}...`;
	return Promise.resolve();
}

function close() {
	return Promise.resolve();
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bootstrap */
/* harmony export (immutable) */ __webpack_exports__["a"] = bootstrapAsync;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCurrentPage;
/* harmony export (immutable) */ __webpack_exports__["c"] = navigate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__);




// Router state
let currentPage;
let currentAction;

// The application shell
// Here it's only a color, but it could be your title bar with logo.
document.body.style.background = "lightblue";

// Bootstraping for Page Shell.
// "page" is the already available page
function bootstrap(page) {
	currentPage = page;
	currentAction = currentPage.open()
		.then(() => {
			__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default.a.install();
		});
	registerRouter();
}

// Bootstrapping for App Shell (or hybrid Page Shell page)
// "pageName" is only the name of the page.
// This page will be loaded while bootstrapping
function bootstrapAsync(pageName) {
	currentAction = Promise.resolve();
	openPage({
		page: pageName
	}).then(() => {
		__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default.a.install();
	});
	registerRouter();
}

// Bind router to events (modern browsers only)
function registerRouter() {
	window.addEventListener("popstate", event => {
		openPage(event.state || {
			page: getCurrentPage()
		});
	});
}

// get current page from URL
function getCurrentPage() {
	var m = /([^\/]+)\.html/.exec(location.pathname);
	return m ? m[1] : "unknown";
}

// Start loading loading page
//const loadingPage = import("./loading/page");

// Router logic for loading and opening a page.
function openPage(state) {
	const pageName = state.page;
	currentAction = currentAction
		// Close the current page
		.then(() => currentPage && currentPage.close())
		// Start loading the next page
		.then(() => __webpack_require__(3)(`./${pageName}/page`))
		// Display the loading page while loading the next page
		/*.then(() => loadingPage
			.then(loading => loading.open(pageName)
				.then(() => import(`./${pageName}/page`))
				.then(page => loading.close().then(() => page))
		))*/
		// Open the next page
		.then(newPage => {
			currentPage = newPage;
			return currentPage.open();
		})
		// Display error page
		.catch(err => {
			return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2))
				.then(newPage => {
					currentPage = newPage;
					return currentPage.open(err);
				});
		});
	return currentAction;
}

// Router logic, Called by pages
// Starts navigating to another page
function navigate(pageName) {
	const state = { page: pageName };
	window.history.pushState(state, pageName, `${pageName}.html`);
	openPage(state);
}


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/page": [
		6,
		3
	],
	"./dashboard/page": [
		7,
		1
	],
	"./error/page": [
		2,
		0
	],
	"./loading/page": [
		0
	],
	"./login/page": [
		8,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_page__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(1);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app__["a" /* bootstrapAsync */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app__["b" /* getCurrentPage */])());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var appCacheIframe;

function hasSW() {
  return 'serviceWorker' in navigator &&
    // This is how I block Chrome 40 and detect Chrome 41, because first has
    // bugs with history.pustState and/or hashchange
    (window.fetch || 'imageRendering' in document.documentElement.style) &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname.indexOf('127.') === 0)
}

function install(options) {
  options || (options = {});

  
    if (hasSW()) {
      var registration = navigator.serviceWorker
        .register(
          "sw.js"
          
        );

      

      return;
    }
  

  
    if (window.applicationCache) {
      var directory = "appcache/";
      var name = "manifest";

      var doLoad = function() {
        var page = directory + name + '.html';
        var iframe = document.createElement('iframe');

        

        iframe.src = page;
        iframe.style.display = 'none';

        appCacheIframe = iframe;
        document.body.appendChild(iframe);
      };

      if (document.readyState === 'complete') {
        setTimeout(doLoad);
      } else {
        window.addEventListener('load', doLoad);
      }

      return;
    }
  
}

function applyUpdate(callback, errback) {
  

  
}

function update() {
  
    if (hasSW()) {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        if (!registration) return;
        return registration.update();
      });
    }
  

  
    if (appCacheIframe) {
      try {
        appCacheIframe.contentWindow.applicationCache.update();
      } catch (e) {}
    }
  
}



exports.install = install;
exports.applyUpdate = applyUpdate;
exports.update = update;


/***/ })
/******/ ]);