webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CReact%20Templates%5Ctda-v2-front-end%5Cpages%5C_error.js!./":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CReact%20Templates%5Ctda-v2-front-end%5Cpages%5C_error.js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_ServerError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/ServerError */ "./src/views/ServerError/index.js");
/* harmony import */ var layouts_Minimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/Minimal */ "./src/layouts/Minimal/index.js");
/* harmony import */ var WithLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! WithLayout */ "./src/WithLayout.js");
var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ErrorPage = () => {
  return __jsx(WithLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: views_ServerError__WEBPACK_IMPORTED_MODULE_1__["default"],
    layout: layouts_Minimal__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  });
};

_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layouts/Minimal/Minimal.js":
/*!****************************************!*\
  !*** ./src/layouts/Minimal/Minimal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/layouts/Minimal/components/index.js");
var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\layouts\\Minimal\\Minimal.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({
  root: {},
  content: {
    height: '100%'
  }
}));

const Minimal = ({
  themeMode,
  children,
  className
}) => {
  _s();

  const classes = useStyles();
  return __jsx("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Topbar"], {
    themeMode: themeMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: classes.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, children));
};

_s(Minimal, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Minimal;
Minimal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Minimal);

var _c;

$RefreshReg$(_c, "Minimal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layouts/Minimal/components/Topbar/Topbar.js":
/*!*********************************************************!*\
  !*** ./src/layouts/Minimal/components/Topbar/Topbar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\layouts\\Minimal\\components\\Topbar\\Topbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8)
    }
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32
    }
  },
  logoImage: {
    width: '100%',
    height: '100%'
  }
}));

const Topbar = (_ref) => {
  _s();

  let {
    themeMode,
    className
  } = _ref,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["themeMode", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.toolbar, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.logoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/",
    title: "thefront",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: classes.logoImage,
    src: themeMode === 'light' ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg',
    alt: "thefront",
    lazy: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))));
};

_s(Topbar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Topbar;
Topbar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  themeMode: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Topbar);

var _c;

$RefreshReg$(_c, "Topbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layouts/Minimal/components/Topbar/index.js":
/*!********************************************************!*\
  !*** ./src/layouts/Minimal/components/Topbar/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/Minimal/components/Topbar/Topbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layouts/Minimal/components/index.js":
/*!*************************************************!*\
  !*** ./src/layouts/Minimal/components/index.js ***!
  \*************************************************/
/*! exports provided: Topbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Topbar */ "./src/layouts/Minimal/components/Topbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Topbar", function() { return _Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/layouts/Minimal/index.js":
/*!**************************************!*\
  !*** ./src/layouts/Minimal/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minimal */ "./src/layouts/Minimal/Minimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Minimal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/ServerError/ServerError.js":
/*!**********************************************!*\
  !*** ./src/views/ServerError/ServerError.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\ServerError\\ServerError.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
}));

const ServerError = () => {
  _s();

  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.formContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_4__["SectionHeader"], {
    label: "500",
    title: "Internal Server Error",
    subtitle: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, "There\u2019s nothing here, but if you feel this is an error please", ' ', __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_3__["LearnMoreLink"], {
      title: "let us know",
      href: "#",
      typographyProps: {
        variant: 'h6'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    })),
    titleProps: {
      variant: 'h3'
    },
    labelProps: {
      color: 'secondary',
      className: classes.label,
      variant: 'h5'
    },
    ctaGroup: [__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "large",
      variant: "contained",
      color: "primary",
      onClick: handleClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, "Go Back")],
    disableGutter: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))));
};

_s(ServerError, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ServerError;
/* harmony default export */ __webpack_exports__["default"] = (ServerError);

var _c;

$RefreshReg$(_c, "ServerError");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/ServerError/index.js":
/*!****************************************!*\
  !*** ./src/views/ServerError/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ServerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerError */ "./src/views/ServerError/ServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ServerError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL01pbmltYWwvTWluaW1hbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvTWluaW1hbC9jb21wb25lbnRzL1RvcGJhci9Ub3BiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL01haW4vY29tcG9uZW50cy9Ub3BiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL01pbmltYWwvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvTWluaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL1NlcnZlckVycm9yL1NlcnZlckVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdmlld3MvU2VydmVyRXJyb3IvaW5kZXguanMiXSwibmFtZXMiOlsiRXJyb3JQYWdlIiwiU2VydmVyRXJyb3IiLCJNaW5pbWFsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJjb250ZW50IiwiaGVpZ2h0IiwidGhlbWVNb2RlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwidGhlbWUiLCJ0b29sYmFyIiwibWF4V2lkdGgiLCJsYXlvdXQiLCJjb250ZW50V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImxvZ29Db250YWluZXIiLCJsb2dvSW1hZ2UiLCJUb3BiYXIiLCJyZXN0IiwiZm9ybUNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWluSGVpZ2h0IiwibWl4aW5zIiwic2VjdGlvbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGFiZWwiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImhhbmRsZUNsaWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJ2YXJpYW50IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyw0Q0FBeUQ7QUFDbEY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsYUFBUyxFQUFFQyx5REFEYjtBQUVFLFVBQU0sRUFBRUMsdURBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBTUQsQ0FQRDs7S0FBTUYsUztBQVNTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRyxTQUFTLEdBQUdDLDJFQUFVLENBQUMsT0FBTztBQUNsQ0MsTUFBSSxFQUFFLEVBRDRCO0FBR2xDQyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFO0FBREQ7QUFIeUIsQ0FBUCxDQUFELENBQTVCOztBQVFBLE1BQU1MLE9BQU8sR0FBRyxDQUFDO0FBQUVNLFdBQUY7QUFBYUMsVUFBYjtBQUF1QkM7QUFBdkIsQ0FBRCxLQUF3QztBQUFBOztBQUN0RCxRQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFFQSxTQUNFO0FBQUss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QUVDLE9BQU8sQ0FBQ2dDLEtBRlQ7QUFHVk8sYUFBTyxFQUFFO0FBSEMsS0FoQmQ7QUFxQkUsWUFBUSxFQUFFLENBQ1IsTUFBQyx3REFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxXQUFLLEVBQUMsU0FIUjtBQUlFLGFBQU8sRUFBRUosV0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRLENBckJaO0FBK0JFLGlCQUFhLE1BL0JmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERjtBQXlDRCxDQWhERDs7R0FBTTdDLFc7VUFDWUUsUzs7O0tBRFpGLFc7QUFrRFNBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLmVkN2FjMzA5Zjg4ZWZlOTY4NzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgICBcIi9fZXJyb3JcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcUmVhY3QgVGVtcGxhdGVzXFxcXHRkYS12Mi1mcm9udC1lbmRcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlcnZlckVycm9yIGZyb20gJ3ZpZXdzL1NlcnZlckVycm9yJztcbmltcG9ydCBNaW5pbWFsIGZyb20gJ2xheW91dHMvTWluaW1hbCc7XG5pbXBvcnQgV2l0aExheW91dCBmcm9tICdXaXRoTGF5b3V0JztcblxuY29uc3QgRXJyb3JQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXaXRoTGF5b3V0XG4gICAgICBjb21wb25lbnQ9e1NlcnZlckVycm9yfVxuICAgICAgbGF5b3V0PXtNaW5pbWFsfVxuICAgIC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbn0pKTtcblxuY29uc3QgTWluaW1hbCA9ICh7IHRoZW1lTW9kZSwgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0+XG4gICAgICA8VG9wYmFyIHRoZW1lTW9kZT17dGhlbWVNb2RlfSAvPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWluaW1hbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aGVtZU1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmltYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUb29sYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0b29sYmFyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLmxheW91dC5jb250ZW50V2lkdGgsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA4KSxcbiAgICB9LFxuICB9LFxuICBsb2dvQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDI4LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHdpZHRoOiAxMjAsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgIH0sXG4gIH0sXG4gIGxvZ29JbWFnZToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFRvcGJhciA9ICh7IHRoZW1lTW9kZSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudG9vbGJhciwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NvbnRhaW5lcn0+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgdGl0bGU9XCJ0aGVmcm9udFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29JbWFnZX1cbiAgICAgICAgICAgIHNyYz17dGhlbWVNb2RlID09PSAnbGlnaHQnID8gJ2h0dHBzOi8vYXNzZXRzLm1hY2NhcmlhbmFnZW5jeS5jb20vdGhlLWZyb250L2xvZ29zL2xvZ28uc3ZnJyA6ICdodHRwczovL2Fzc2V0cy5tYWNjYXJpYW5hZ2VuY3kuY29tL3RoZS1mcm9udC9sb2dvcy9sb2dvLW5lZ2F0aXZlLnN2Zyd9XG4gICAgICAgICAgICBhbHQ9XCJ0aGVmcm9udFwiXG4gICAgICAgICAgICBsYXp5PXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59O1xuXG5Ub3BiYXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRoZW1lTW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wYmFyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVG9wYmFyJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVG9wYmFyIH0gZnJvbSAnLi9Ub3BiYXInO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWluaW1hbCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBmb3JtQ29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0aGVtZS5taXhpbnMudG9vbGJhclsnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJ10ubWluSGVpZ2h0fXB4KWAsXG4gICAgbWF4V2lkdGg6IDUwMCxcbiAgICBtYXJnaW46IGAwIGF1dG9gLFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgfSxcbn0pKTtcblxuY29uc3QgU2VydmVyRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgICAgbGFiZWw9XCI1MDBcIlxuICAgICAgICAgICAgdGl0bGU9XCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIlxuICAgICAgICAgICAgc3VidGl0bGU9e1xuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBUaGVyZeKAmXMgbm90aGluZyBoZXJlLCBidXQgaWYgeW91IGZlZWwgdGhpcyBpcyBhbiBlcnJvciBwbGVhc2V7JyAnfVxuICAgICAgICAgICAgICAgIDxMZWFybk1vcmVMaW5rXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cImxldCB1cyBrbm93XCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIHR5cG9ncmFwaHlQcm9wcz17eyB2YXJpYW50OiAnaDYnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgICAgICB2YXJpYW50OiAnaDMnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMubGFiZWwsXG4gICAgICAgICAgICAgIHZhcmlhbnQ6ICdoNScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3RhR3JvdXA9e1tcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlckVycm9yO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2VydmVyRXJyb3InO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==