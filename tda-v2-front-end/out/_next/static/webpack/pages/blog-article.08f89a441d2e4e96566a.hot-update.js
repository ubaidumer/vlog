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
  quoteHeadline: {
    fontWeight: 700
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
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, data.headline)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.quoteHeadline,
    component: "p",
    variant: "h5",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, data.quoteHeadline)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, data.quoteSubTitle)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 9
    }
  }, "\"", data.quote, "\"")), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, data.text1)), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["GridList"], {
    cellHeight: isMd ? 360 : 260,
    cols: 2,
    spacing: isMd ? 24 : 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, data.images.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["GridListTile"], {
    key: index,
    cols: isMd ? item.cols : 2,
    cols: isMd ? item.cols : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 102,
      columnNumber: 15
    }
  })))))), __jsx("div", {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "p",
    variant: "h6",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, data.text2)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classes.socialIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Pinterest__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsInF1b3RlSGVhZGxpbmUiLCJmb250V2VpZ2h0IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJib3JkZXJSYWRpdXMiLCJzb2NpYWxJY29uIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0IiwicHJpbWFyeSIsImJhY2tncm91bmQiLCJhbHRlcm5hdGUiLCJtYWluIiwiQ29udGVudCIsInByb3BzIiwiZGF0YSIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwiaGVhZGxpbmUiLCJjb3ZlciIsIndpZHRoIiwiaGVpZ2h0IiwicXVvdGVTdWJUaXRsZSIsInF1b3RlIiwidGV4dDEiLCJpbWFnZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjb2xzIiwidGV4dDIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxTQUFPLEVBQUU7QUFDUEMsZ0JBQVksRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURQO0FBRVAsS0FBQ0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCSCxrQkFBWSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBRGM7QUFGdkIsR0FENEI7QUFPckNHLGVBQWEsRUFBRTtBQUNiQyxjQUFVLEVBQUU7QUFEQyxHQVBzQjtBQVVyQ0MsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRSxPQUROO0FBRUxDLGdCQUFZLEVBQUVWLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFGVCxHQVY4QjtBQWNyQ1EsWUFBVSxFQUFFO0FBQ1ZELGdCQUFZLEVBQUUsQ0FESjtBQUVWRSxlQUFXLEVBQUVaLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FGSDtBQUdWVSxTQUFLLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjQyxJQUFkLENBQW1CQyxPQUhoQjtBQUlWQyxjQUFVLEVBQUVqQixLQUFLLENBQUNjLE9BQU4sQ0FBY0ksU0FBZCxDQUF3QkMsSUFKMUI7QUFLVixvQkFBZ0I7QUFDZFAsaUJBQVcsRUFBRTtBQURDO0FBTE47QUFkeUIsQ0FBTCxDQUFOLENBQTVCOztBQXlCQSxNQUFNUSxPQUFPLEdBQUdDLEtBQUssSUFBSTtBQUFBOztBQUN2QixRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUErQkYsS0FBckM7QUFBQSxRQUE0QkcsSUFBNUIsdUtBQXFDSCxLQUFyQzs7QUFDQSxRQUFNSSxPQUFPLEdBQUczQixTQUFTLEVBQXpCO0FBRUEsUUFBTUUsS0FBSyxHQUFHMEIseUVBQVEsRUFBdEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHVFQUFhLENBQUM1QixLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsRUFBNkI7QUFDckR3QixrQkFBYyxFQUFFO0FBRHFDLEdBQTdCLENBQTFCO0FBSUEsU0FDRTtBQUFLLGFBQVMsRUFBRU47QUFBaEIsS0FBK0JDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDeEIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUMsR0FBdEI7QUFBMEIsV0FBTyxFQUFDLElBQWxDO0FBQXVDLFNBQUssRUFBQyxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dxQixJQUFJLENBQUNRLFFBRFIsQ0FERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ3hCLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELDBKQUNNcUIsSUFBSSxDQUFDUyxLQURYO0FBRUUsYUFBUyxFQUFFTixPQUFPLENBQUNqQixLQUZyQjtBQUdFLGFBQVMsRUFBRTtBQUFFd0IsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQU5GLEVBYUU7QUFBSyxhQUFTLEVBQUVSLE9BQU8sQ0FBQ3hCLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFFd0IsT0FBTyxDQUFDbkIsYUFEckI7QUFFRSxhQUFTLEVBQUMsR0FGWjtBQUdFLFdBQU8sRUFBQyxJQUhWO0FBSUUsU0FBSyxFQUFDLGFBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HZ0IsSUFBSSxDQUFDaEIsYUFOUixDQURGLENBYkYsRUF1QkU7QUFBSyxhQUFTLEVBQUVtQixPQUFPLENBQUN4QixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBQyxHQUF0QjtBQUEwQixXQUFPLEVBQUMsSUFBbEM7QUFBdUMsU0FBSyxFQUFDLGFBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3FCLElBQUksQ0FBQ1ksYUFEUixDQURGLENBdkJGLEVBNEJFO0FBQUssYUFBUyxFQUFFVCxPQUFPLENBQUN4QixPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBQyxHQUF0QjtBQUEwQixXQUFPLEVBQUMsSUFBbEM7QUFBdUMsU0FBSyxFQUFDLFNBQTdDO0FBQXVELFNBQUssRUFBQyxRQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0lxQixJQUFJLENBQUNhLEtBRFQsT0FERixDQTVCRixFQWlDRTtBQUFLLGFBQVMsRUFBRVYsT0FBTyxDQUFDeEIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUMsR0FBdEI7QUFBMEIsV0FBTyxFQUFDLElBQWxDO0FBQXVDLFNBQUssRUFBQyxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dxQixJQUFJLENBQUNjLEtBRFIsQ0FERixDQWpDRixFQXNDRTtBQUFLLGFBQVMsRUFBRVgsT0FBTyxDQUFDeEIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxjQUFVLEVBQUUwQixJQUFJLEdBQUcsR0FBSCxHQUFTLEdBRDNCO0FBRUUsUUFBSSxFQUFFLENBRlI7QUFHRSxXQUFPLEVBQUVBLElBQUksR0FBRyxFQUFILEdBQVEsQ0FIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHTCxJQUFJLENBQUNlLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FDZixNQUFDLDhEQUFEO0FBQ0UsT0FBRyxFQUFFQSxLQURQO0FBRUUsUUFBSSxFQUFFYixJQUFJLEdBQUdZLElBQUksQ0FBQ0UsSUFBUixHQUFlLENBRjNCO0FBR0UsUUFBSSxFQUFFZCxJQUFJLEdBQUdZLElBQUksQ0FBQ0UsSUFBUixHQUFlLENBSDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHVEQUFELDBKQUNNRixJQUROO0FBRUUsYUFBUyxFQUFFZCxPQUFPLENBQUNqQixLQUZyQjtBQUdFLGFBQVMsRUFBRTtBQUFFd0IsV0FBSyxFQUFFLE1BQVQ7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixDQURELENBTEgsQ0FERixDQXRDRixFQTJERTtBQUFLLGFBQVMsRUFBRVIsT0FBTyxDQUFDeEIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUMsR0FBdEI7QUFBMEIsV0FBTyxFQUFDLElBQWxDO0FBQXVDLFNBQUssRUFBQyxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dxQixJQUFJLENBQUNvQixLQURSLENBREYsQ0EzREYsRUFnRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVqQixPQUFPLENBQUNkLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRWMsT0FBTyxDQUFDZCxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVjLE9BQU8sQ0FBQ2QsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsRUFVRSxNQUFDLDREQUFEO0FBQVksYUFBUyxFQUFFYyxPQUFPLENBQUNkLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBaEVGLENBREY7QUFpRkQsQ0ExRkQ7O0dBQU1TLE87VUFFWXRCLFMsRUFFRjRCLGlFLEVBQ0RFLCtEOzs7S0FMVFIsTztBQTRGTkEsT0FBTyxDQUFDdUIsU0FBUixHQUFvQjtBQUNsQjtBQUNGO0FBQ0E7QUFDRXBCLFdBQVMsRUFBRXFCLGlEQUFTLENBQUNDLE1BSkg7O0FBS2xCO0FBQ0Y7QUFDQTtBQUNFdkIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkM7QUFSTCxDQUFwQjtBQVdlM0Isc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjA4Zjg5YTQ0MWQyZTRlOTY1NjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIHVzZU1lZGlhUXVlcnksXG4gIFR5cG9ncmFwaHksXG4gIEdyaWRMaXN0LFxuICBHcmlkTGlzdFRpbGUsXG4gIEljb25CdXR0b24sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcbmltcG9ydCBQaW50ZXJlc3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaW50ZXJlc3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBzZWN0aW9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICB9LFxuICBxdW90ZUhlYWRsaW5lOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNvY2lhbEljb246IHtcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLm1haW4sXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IENvbnRlbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS5oZWFkbGluZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgey4uLmRhdGEuY292ZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucXVvdGVIZWFkbGluZX1cbiAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEucXVvdGVIZWFkbGluZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS5xdW90ZVN1YlRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg0XCIgY29sb3I9XCJwcmltYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBcIntkYXRhLnF1b3RlfVwiXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEudGV4dDF9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxHcmlkTGlzdFxuICAgICAgICAgIGNlbGxIZWlnaHQ9e2lzTWQgPyAzNjAgOiAyNjB9XG4gICAgICAgICAgY29scz17Mn1cbiAgICAgICAgICBzcGFjaW5nPXtpc01kID8gMjQgOiA4fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEuaW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxHcmlkTGlzdFRpbGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY29scz17aXNNZCA/IGl0ZW0uY29scyA6IDJ9XG4gICAgICAgICAgICAgIGNvbHM9e2lzTWQgPyBpdGVtLmNvbHMgOiAyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEudGV4dDJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259PlxuICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259PlxuICAgICAgICAgIDxQaW50ZXJlc3RJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==