webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/Hero/Hero.js":
/*!*******************************************************!*\
  !*** ./src/views/BlogArticle/components/Hero/Hero.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data */ "./src/data/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "./src/views/BlogArticle/components/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\Hero\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/blog/hero.png')",
    background: 'white',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  },
  textWhite: {
    color: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.85rem'
  },
  subtitle: {
    fontSize: '1.25rem'
  },
  section: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 1,
    animationName: 'fadeInOpacity',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in',
    animationDuration: '2s'
  },
  SearchBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  searchInputContainer: {
    marginTop: '1.75rem',
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important'
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2)
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0
    },
    '& .MuiOutlinedInput-input': {
      padding: 0
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  },
  searchButton: {
    background: '#3BB0E5',
    padding: '1rem 2rem',
    color: 'white',
    '&:hover': {
      color: 'white',
      background: '#e9511c'
    },
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto'
    }
  }
}));

const Hero = (_ref) => {
  _s();

  let {
    themeMode,
    className
  } = _ref,
      rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["themeMode", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  const {
    0: openSidebar,
    1: setOpenSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = openSidebar;
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_10__["Topbar"], {
    onSidebarOpen: handleSidebarOpen,
    openSidebar: openSidebar,
    pages: _data__WEBPACK_IMPORTED_MODULE_9__["menu_items"],
    themeMode: themeMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_10__["Sidebar"], {
    onClose: handleSidebarClose,
    open: open,
    variant: "temporary",
    pages: _data__WEBPACK_IMPORTED_MODULE_9__["menu_items"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    align: "left",
    "data-aos": "fade-up",
    titleProps: {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.title, classes.textWhite),
      variant: 'h3'
    },
    subtitleProps: {
      className: classes.textWhite
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }), __jsx(List, {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(ListItem, {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(ListItemAvatar, {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(Avatar, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }))), __jsx(ListItemText, {
    primary: `Published by ${author.name}`,
    secondary: `on ${author.date}`,
    primaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    },
    secondaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }))))));
};

_s(Hero, "nhO10hnwUFZVBqH3XG2Bqwj6KSk=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["useMediaQuery"]];
});

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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

/***/ "./src/views/BlogArticle/components/Hero/index.js":
/*!********************************************************!*\
  !*** ./src/views/BlogArticle/components/Hero/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./src/views/BlogArticle/components/Hero/Hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hero__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/views/BlogArticle/components/HeroNew/Hero.js":
false,

/***/ "./src/views/BlogArticle/components/HeroNew/index.js":
false,

/***/ "./src/views/BlogArticle/components/index.js":
/*!***************************************************!*\
  !*** ./src/views/BlogArticle/components/index.js ***!
  \***************************************************/
/*! exports provided: Topbar, Sidebar, Content, FooterNewsletter, Hero, SidebarArticles, SidebarNewsletter, SimilarStories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _layouts_Main_components_Topbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/Main/components/Topbar */ "./src/layouts/Main/components/Topbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Topbar", function() { return _layouts_Main_components_Topbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _layouts_Main_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/Main/components/Sidebar */ "./src/layouts/Main/components/Sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _layouts_Main_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./src/views/BlogArticle/components/Content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Content__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FooterNewsletter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterNewsletter */ "./src/views/BlogArticle/components/FooterNewsletter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterNewsletter", function() { return _FooterNewsletter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hero */ "./src/views/BlogArticle/components/Hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _Hero__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _SidebarArticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarArticles */ "./src/views/BlogArticle/components/SidebarArticles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarArticles", function() { return _SidebarArticles__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SidebarNewsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarNewsletter */ "./src/views/BlogArticle/components/SidebarNewsletter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarNewsletter", function() { return _SidebarNewsletter__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SimilarStories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SimilarStories */ "./src/views/BlogArticle/components/SimilarStories/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimilarStories", function() { return _SimilarStories__WEBPACK_IMPORTED_MODULE_7__["default"]; });










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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdmlld3MvSW5kZXhWaWV3L2NvbXBvbmVudHMvSGVyby9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZCIsIm9iamVjdEZpdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIm1pbkhlaWdodCIsInRleHRXaGl0ZSIsImNvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJzdWJ0aXRsZSIsInNlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm9wYWNpdHkiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwiU2VhcmNoQnRuV3JhcHBlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsInNlYXJjaElucHV0Q29udGFpbmVyIiwicGFsZXR0ZSIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nTGVmdCIsImJyZWFrcG9pbnRzIiwiZG93biIsInNlYXJjaEJ1dHRvbiIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwiSGVybyIsInRoZW1lTW9kZSIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsInVwIiwiZGVmYXVsdE1hdGNoZXMiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwidXNlU3RhdGUiLCJoYW5kbGVTaWRlYmFyT3BlbiIsImhhbmRsZVNpZGViYXJDbG9zZSIsIm9wZW4iLCJjbHN4IiwibWVudV9pdGVtcyIsInZhcmlhbnQiLCJsaXN0SXRlbUF2YXRhciIsImF1dGhvciIsInBob3RvIiwibmFtZSIsImF2YXRhciIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRSw2Q0FGYjtBQUdKQyxjQUFVLEVBQUUsT0FIUjtBQUlKQyxhQUFTLEVBQUUsT0FKUDtBQUtKQyxrQkFBYyxFQUFFLE9BTFo7QUFNSkMsb0JBQWdCLEVBQUUsV0FOZDtBQU9KQyxhQUFTLEVBQUU7QUFQUCxHQUQrQjtBQVVyQ0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFBRTtBQURFLEdBVjBCO0FBYXJDQyxPQUFLLEVBQUU7QUFDTEMsY0FBVSxFQUFFLE1BRFA7QUFFTEMsWUFBUSxFQUFFO0FBRkwsR0FiOEI7QUFpQnJDQyxVQUFRLEVBQUU7QUFDUkQsWUFBUSxFQUFFO0FBREYsR0FqQjJCO0FBb0JyQ0UsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBDLE9BQUcsRUFBRSxLQUZFO0FBR1BDLFFBQUksRUFBRSxLQUhDO0FBSVBDLGFBQVMsRUFBRSx1QkFKSjtBQUtQQyxjQUFVLEVBQUUsQ0FMTDtBQU1QQyxpQkFBYSxFQUFFLENBTlI7QUFPUEMsV0FBTyxFQUFFLENBUEY7QUFRUEMsaUJBQWEsRUFBRSxlQVJSO0FBU1BD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ZS44YjAzMDQ2NjE1ODFkNTc2Y2YzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIEdyaWQsXHJcbiAgY29sb3JzLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIE91dGxpbmVkSW5wdXQsXHJcbiAgSW5wdXRBZG9ybm1lbnQsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWVudV9pdGVtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBUb3BiYXIsIFNpZGViYXIgfSBmcm9tICcuLic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYmxvZy9oZXJvLnBuZycpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcyLjg1cmVtJyxcclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc0MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgcGFkZGluZ1RvcDogMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbk9wYWNpdHknLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4nLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcycycsXHJcbiAgfSxcclxuICBTZWFyY2hCdG5XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6ICcxcmVtJyxcclxuICB9LFxyXG4gIHNlYXJjaElucHV0Q29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcxLjc1cmVtJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKScsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LW5vdGNoZWRPdXRsaW5lJzoge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlJbnB1dEFkb3JubWVudC1wb3NpdGlvblN0YXJ0Jzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1hZG9ybmVkU3RhcnQnOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LWlucHV0Jzoge1xyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZDogJyMzQkIwRTUnLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMnJlbScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNlOTUxMWMnLFxyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDogNDUsXHJcbiAgICBtaW5XaWR0aDogMTM1LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1pbldpZHRoOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm8gPSAoeyB0aGVtZU1vZGUsIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW29wZW5TaWRlYmFyLCBzZXRPcGVuU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lkZWJhckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBvcGVuU2lkZWJhcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8VG9wYmFyXHJcbiAgICAgICAgb25TaWRlYmFyT3Blbj17aGFuZGxlU2lkZWJhck9wZW59XHJcbiAgICAgICAgb3BlblNpZGViYXI9e29wZW5TaWRlYmFyfVxyXG4gICAgICAgIHBhZ2VzPXttZW51X2l0ZW1zfVxyXG4gICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lkZWJhclxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZVNpZGViYXJDbG9zZX1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgIHBhZ2VzPXttZW51X2l0ZW1zfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2gzJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3VidGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgey4uLmF1dGhvci5waG90b31cclxuICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtgUHVibGlzaGVkIGJ5ICR7YXV0aG9yLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YG9uICR7YXV0aG9yLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSGVybyc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVG9wYmFyIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0cy9NYWluL2NvbXBvbmVudHMvVG9wYmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZWJhciB9IGZyb20gJy4uLy4uLy4uL2xheW91dHMvTWFpbi9jb21wb25lbnRzL1NpZGViYXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXJOZXdzbGV0dGVyIH0gZnJvbSAnLi9Gb290ZXJOZXdzbGV0dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vSGVybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGViYXJBcnRpY2xlcyB9IGZyb20gJy4vU2lkZWJhckFydGljbGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZWJhck5ld3NsZXR0ZXIgfSBmcm9tICcuL1NpZGViYXJOZXdzbGV0dGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2ltaWxhclN0b3JpZXMgfSBmcm9tICcuL1NpbWlsYXJTdG9yaWVzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=