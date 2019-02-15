(function(modules) {})({
	"./foo.js": (function(module, exports) {
		eval("module.exports = {\n  name: 'zhy',\n  value: 'hello webpack',\n};\n\n// export default {\n//   name: 'zhy',\n//   value: 'hello webpack',\n// };\n\n//# sourceURL=webpack:///./foo.js?");
	}),
	"./index.js": (function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo */ \"./foo.js\");\n/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foo__WEBPACK_IMPORTED_MODULE_0__);\n// const foo = require('./foo');\n\n\nconsole.log(_foo__WEBPACK_IMPORTED_MODULE_0___default.a);\n\nconsole.log('hi webpack~');\n\n\n//# sourceURL=webpack:///./index.js?");
	})
});