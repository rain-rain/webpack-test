// es6 Module 模块化的处理
({
  "./foo.js": (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n// module.exports = {\n//   name: 'zhy',\n//   value: 'hello webpack',\n// };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'zhy',\n  value: 'hello webpack',\n});\n\n//# sourceURL=webpack:///./foo.js?");
  }),
  "./index.js": (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo */ \"./foo.js\");\n// const foo = require('./foo');\n\n\nconsole.log(_foo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconsole.log('hi webpack~');\n\n\n//# sourceURL=webpack:///./index.js?");
  })
});


// commonjs 模块化的处理
({
  "./foo.js": (function (module, exports) {
    eval("module.exports = {\n  name: 'zhy',\n  value: 'hello webpack',\n};\n\n//# sourceURL=webpack:///./foo.js?");
  }),
  "./index.js": (function (module, exports, __webpack_require__) {
    eval("const foo = __webpack_require__(/*! ./foo */ \"./foo.js\");\n\nconsole.log(foo);\n\nconsole.log('hi webpack~');\n\n\n//# sourceURL=webpack:///./index.js?");
  })
});