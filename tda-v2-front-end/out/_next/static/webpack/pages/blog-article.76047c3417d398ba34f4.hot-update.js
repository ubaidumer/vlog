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
    variant: "h4",
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
    variant: "h4",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, data.quoteHeadline)), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvQ29udGVudC9Db250ZW50LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInNlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImltYWdlIiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwic29jaWFsSWNvbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInByaW1hcnkiLCJiYWNrZ3JvdW5kIiwiYWx0ZXJuYXRlIiwibWFpbiIsIkNvbnRlbnQiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImhlYWRsaW5lIiwiY292ZXIiLCJ3aWR0aCIsImhlaWdodCIsInF1b3RlSGVhZGxpbmUiLCJxdW90ZSIsInRleHQxIiwiaW1hZ2VzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29scyIsInRleHQyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FEUDtBQUVQLEtBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1Qkgsa0JBQVksRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMs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O0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixDQXZERixDQURGO0FBd0VELENBakZEOztHQUFNUyxPO1VBRVlwQixTLEVBRUYwQixpRSxFQUNERSwrRDs7O0tBTFRSLE87QUFtRk5BLE9BQU8sQ0FBQ3VCLFNBQVIsR0FBb0I7QUFDbEI7QUFDRjtBQUNBO0FBQ0VwQixXQUFTLEVBQUVxQixpREFBUyxDQUFDQyxNQUpIOztBQUtsQjtBQUNGO0FBQ0E7QUFDRXZCLE1BQUksRUFBRXNCLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDO0FBUkwsQ0FBcEI7QUFXZTNCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS43NjA0N2MzNDE3ZDM5OGJhMzRmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICB1c2VNZWRpYVF1ZXJ5LFxuICBUeXBvZ3JhcGh5LFxuICBHcmlkTGlzdCxcbiAgR3JpZExpc3RUaWxlLFxuICBJY29uQnV0dG9uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgUGludGVyZXN0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGludGVyZXN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgc2VjdGlvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzb2NpYWxJY29uOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5tYWluLFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5SaWdodDogMCxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBDb250ZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEuaGVhZGxpbmV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHsuLi5kYXRhLmNvdmVyfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEucXVvdGVIZWFkbGluZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNFwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICB7ZGF0YS5xdW90ZUhlYWRsaW5lfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg0XCIgY29sb3I9XCJwcmltYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICBcIntkYXRhLnF1b3RlfVwiXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEudGV4dDF9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxHcmlkTGlzdFxuICAgICAgICAgIGNlbGxIZWlnaHQ9e2lzTWQgPyAzNjAgOiAyNjB9XG4gICAgICAgICAgY29scz17Mn1cbiAgICAgICAgICBzcGFjaW5nPXtpc01kID8gMjQgOiA4fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEuaW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0gY29scz17aXNNZCA/IGl0ZW0uY29scyA6IDJ9PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICB7Li4uaXRlbX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWRMaXN0VGlsZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAge2RhdGEudGV4dDJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259PlxuICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPEluc3RhZ3JhbUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc29jaWFsSWNvbn0+XG4gICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY2lhbEljb259PlxuICAgICAgICAgIDxQaW50ZXJlc3RJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==