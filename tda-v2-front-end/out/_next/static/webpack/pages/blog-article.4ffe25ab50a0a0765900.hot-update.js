webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/Content/Content.js":
/*!*************************************************************!*\
  !*** ./src/views/BlogArticle/components/Content/Content.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Pinterest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Pinterest */ "./node_modules/@material-ui/icons/Pinterest.js");
/* harmony import */ var _material_ui_icons_Pinterest__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pinterest__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\Content\\Content.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1)
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    '&:last-child': {
      marginRight: 0
    }
  }
}));

const Content = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, data.headline)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_10__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.cover, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h5",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, data.quoteHeadline)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, data.quoteSubTitle)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h4",
    color: "primary",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "\"", data.quote, "\"")), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, data.text1)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["GridList"], {
    cellHeight: isMd ? 360 : 260,
    cols: 2,
    spacing: isMd ? 24 : 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, data.images.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["GridListTile"], {
    key: index,
    cols: isMd ? item.cols : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_10__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })))))), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, data.text2)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Pinterest__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }))));
};

_s(Content, "9025em9jOQdmzpWvV0plUgcVqs8=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"]];
});

_c = Content;
Content.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

var _c;

$RefreshReg$(_c, "Content");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImltYWdlIiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwic29jaWFsSWNvbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInByaW1hcnkiLCJiYWNrZ3JvdW5kIiwiYWx0ZXJuYXRlIiwibWFpbiIsIkNvbnRlbnQiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImhlYWRsaW5lIiwiY292ZXIiLCJ3aWR0aCIsImhlaWdodCIsInF1b3RlSGVhZGxpbmUiLCJxdW90ZVN1YlRpdGxlIiwicXVvdGUiLCJ0ZXh0MSIsImltYWdlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbHMiLCJ0ZXh0MiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLFNBQU8sRUFBRTtBQUNQQyxnQkFBWSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRFA7QUFFUCxLQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJILGtCQUFZLEVBQUVGLEtBQUss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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBdkRGLENBREY7QUF3RUQsQ0FqRkQ7O0dBQU1TLE87VUFFWXBCLFMsRUFFRjBCLGlFLEVBQ0RFLCtEOzs7S0FMVFIsTztBQW1GTkEsT0FBTyxDQUFDd0IsU0FBUixHQUFvQjtBQUNsQjtBQUNGO0FBQ0E7QUFDRXJCLFdBQVMsRUFBRXNCLGlEQUFTLENBQUNDLE1BSkg7O0FBS2xCO0FBQ0Y7QUFDQTtBQUNFeEIsTUFBSSxFQUFFdUIsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkM7QUFSTCxDQUFwQjtBQVdlNUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjRmZmUyNWFiNTBhMGEwNzY1OTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIHVzZU1lZGlhUXVlcnksXG4gIFR5cG9ncmFwaHksXG4gIEdyaWRMaXN0LFxuICBHcmlkTGlzdFRpbGUsXG4gIEljb25CdXR0b24sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcbmltcG9ydCBQaW50ZXJlc3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaW50ZXJlc3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBzZWN0aW9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNvY2lhbEljb246IHtcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLm1haW4sXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENvbnRlbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS5oZWFkbGluZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgey4uLmRhdGEuY292ZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS5xdW90ZUhlYWRsaW5lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICAgIHtkYXRhLnF1b3RlU3ViVGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInByaW1hcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIFwie2RhdGEucXVvdGV9XCJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS50ZXh0MX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWRMaXN0XG4gICAgICAgICAgY2VsbEhlaWdodD17aXNNZCA/IDM2MCA6IDI2MH1cbiAgICAgICAgICBjb2xzPXsyfVxuICAgICAgICAgIHNwYWNpbmc9e2lzTWQgPyAyNCA6IDh9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YS5pbWFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fSBjb2xzPXtpc01kID8gaXRlbS5jb2xzIDogMn0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgICAgICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZExpc3RUaWxlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWRMaXN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS50ZXh0Mn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxJY29ufT5cbiAgICAgICAgICA8SW5zdGFncmFtSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NpYWxJY29ufT5cbiAgICAgICAgICA8VHdpdHRlckljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPFBpbnRlcmVzdEljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9