// 混合
(function(modules) {})({
  "./foo.js": (function (module, exports) {
    module.exports = {
      name: 'zhy',
      value: 'hello webpack',
    };
    export default {
      name: 'zhy',
      value: 'hello webpack',
    };
  }),
  "./index.js": (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./foo.js");
    var _foo__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_foo__WEBPACK_IMPORTED_MODULE_0__);
    const foo = require('./foo');
    console.log(_foo__WEBPACK_IMPORTED_MODULE_0___default.a);
    console.log('hi webpack~');
  })
});


// es6 Module 模块化的处理
(function(modules) {})({
  "./foo.js": (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    module.exports = {
      name: 'zhy',
      value: 'hello webpack',
    };
    __webpack_exports__["default"] = ({
      name: 'zhy',
      value: 'hello webpack'
    });
  }),
  "./index.js": (function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./foo.js");
    const foo = require('./foo');
    console.log(_foo__WEBPACK_IMPORTED_MODULE_0__["default"]);
    console.log('hi webpack~');
  })
});


// commonjs 模块化的处理
(function(modules) {})({
  "./foo.js": (function (module, exports) {
    module.exports = {
      name: 'zhy',
      value: 'hello webpack',
    };
  }),
  "./index.js": (function (module, exports, __webpack_require__) {
    const foo = __webpack_require__("./foo.js");
    console.log(foo);
    console.log('hi webpack~');
  })
});