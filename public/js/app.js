/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module '@babel/parser'\nRequire stack:\n- /home/vagrant/code/weibo/node_modules/@babel/template/lib/parse.js\n- /home/vagrant/code/weibo/node_modules/@babel/template/lib/string.js\n- /home/vagrant/code/weibo/node_modules/@babel/template/lib/builder.js\n- /home/vagrant/code/weibo/node_modules/@babel/template/lib/index.js\n- /home/vagrant/code/weibo/node_modules/@babel/core/lib/index.js\n- /home/vagrant/code/weibo/node_modules/laravel-mix/src/FileCollection.js\n- /home/vagrant/code/weibo/node_modules/laravel-mix/src/tasks/ConcatenateFilesTask.js\n- /home/vagrant/code/weibo/node_modules/laravel-mix/src/components/Combine.js\n- /home/vagrant/code/weibo/node_modules/laravel-mix/src/components/ComponentFactory.js\n- /home/vagrant/code/weibo/node_modules/laravel-mix/setup/webpack.config.js\n- /home/vagrant/code/weibo/node_modules/webpack-cli/bin/utils/convert-argv.js\n- /home/vagrant/code/weibo/node_modules/webpack-cli/bin/cli.js\n- /home/vagrant/code/weibo/node_modules/webpack/bin/webpack.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:772:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:677:27)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/home/vagrant/code/weibo/node_modules/@babel/template/lib/parse.js:10:15)\n    at Module._compile (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)\n    at Module.load (internal/modules/cjs/loader.js:790:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:703:12)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/home/vagrant/code/weibo/node_modules/@babel/template/lib/string.js:10:37)\n    at Module._compile (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)\n    at Module.load (internal/modules/cjs/loader.js:790:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:703:12)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/home/vagrant/code/weibo/node_modules/@babel/template/lib/builder.js:10:38)\n    at Module._compile (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)\n    at Module.load (internal/modules/cjs/loader.js:790:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:703:12)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at Object.<anonymous> (/home/vagrant/code/weibo/node_modules/@babel/template/lib/index.js:10:39)\n    at Module._compile (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)\n    at Module.load (internal/modules/cjs/loader.js:790:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:703:12)\n    at Module.require (internal/modules/cjs/loader.js:830:19)\n    at require (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:161:20)\n    at _template (/home/vagrant/code/weibo/node_modules/@babel/core/lib/index.js:225:39)\n    at Object.get [as template] (/home/vagrant/code/weibo/node_modules/@babel/core/lib/index.js:58:12)\n    at Object.<anonymous> (/home/vagrant/code/weibo/node_modules/@babel/plugin-transform-parameters/lib/params.js:10:37)\n    at Module._compile (/home/vagrant/code/weibo/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vagrant/code/weibo/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/vagrant/code/weibo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });