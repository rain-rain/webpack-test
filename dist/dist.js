/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache 缓存模块对象
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function 模拟 commonjs 实现的 require
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache require 模块时先判断是否已经缓存, 已经缓存的模块直接返回
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache) 创建一个模块, 并把新模块的引用保存到缓存中
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,  // 模块 id
/******/ 			l: false, // 模块是否已加载
/******/ 			exports: {} // 模块主体内容, 会被重写
/******/ 		};
/******/
/******/ 		// Execute the module function 执行以下模块的包装函数
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded 将模块标记为已加载
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module 返回模块主体内容
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__) 向外暴露所有的模块
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache 向外暴露已缓存的模块
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports require 一下入口模块, 让项目跑起来
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./foo.js":
/*!****************!*\
  !*** ./foo.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

  eval("module.exports = {\n  name: 'zhy',\n  value: 'hello webpack',\n};\n\n//# sourceURL=webpack:///./foo.js?");

  /***/ }),

  /***/ "./index.js":
  /*!******************!*\
    !*** ./index.js ***!
    \******************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

  eval("const foo = __webpack_require__(/*! ./foo */ \"./foo.js\");\n\nconsole.log(foo);\n\nconsole.log('hi webpack~');\n\n\n//# sourceURL=webpack:///./index.js?");

  /***/ })

  /******/ });