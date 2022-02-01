webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/SidebarNewsletter/SidebarNewsletter.js":
/*!*********************************************************************************!*\
  !*** ./src/views/BlogArticle/components/SidebarNewsletter/SidebarNewsletter.js ***!
  \*********************************************************************************/
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\SidebarNewsletter\\SidebarNewsletter.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    background: 'white',
    padding: theme.spacing(3, 2),
    border: `1px solid ${theme.palette.alternate.dark}`,
    borderRadius: 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3)
    }
  },
  cover: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper
    }
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  button: {
    border: '1px solid #3BB0E5',
    width: 176,
    height: 42,
    color: 'white',
    '&:hover': {
      color: '#3BB0E5',
      background: 'white'
    },
    alignSelf: 'flex-start'
  }
}));

const Form = props => {
  _s();

  const {
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_8__["SectionHeader"], {
    title: "Email Newsletter",
    subtitle: "Subscribe to our Newsletter for new blog posts, tips & new photos",
    titleProps: {
      variant: 'h4',
      color: 'textPrimary'
    },
    subtitleProps: {
      variant: 'body1',
      color: 'textPrimary'
    },
    "data-aos": "fade-up",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Full name"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    placeholder: "Your full name",
    variant: "outlined",
    size: "medium",
    name: "fullname",
    fullWidth: true,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Email"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    placeholder: "Your email address",
    variant: "outlined",
    size: "medium",
    name: "email",
    fullWidth: true,
    type: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: classes.button,
    variant: "contained",
    type: "submit",
    color: "primary",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Subscribe")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    container: true,
    justify: "center",
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Subscribe to our Newsletter for new blog posts, tips & new photos.")))));
};

_s(Form, "9025em9jOQdmzpWvV0plUgcVqs8=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"]];
});

_c = Form;
Form.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9TaWRlYmFyTmV3c2xldHRlci9TaWRlYmFyTmV3c2xldHRlci5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm9yZGVyIiwicGFsZXR0ZSIsImFsdGVybmF0ZSIsImRhcmsiLCJib3JkZXJSYWRpdXMiLCJicmVha3BvaW50cyIsInVwIiwiY292ZXIiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJmb3JtIiwicGFwZXIiLCJpbnB1dFRpdGxlIiwiZm9udFdlaWdodCIsImJ1dHRvbiIsImNvbG9yIiwiYWxpZ25TZWxmIiwiRm9ybSIsInByb3BzIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwiZGVmYXVsdE1hdGNoZXMiLCJjbHN4IiwidmFyaWFudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLE9BRFI7QUFFSkMsV0FBTyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBRkw7QUFHSkMsVUFBTSxFQUFHLGFBQVlMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQUFLLEVBSDlDO0FBSUpDLGdCQUFZLEVBQUUsQ0FKVjtBQUtKLEtBQUNULEtBQUssQ0FBQ1UsV0FB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RUFBQyxTQUpSO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQW5DRixFQThDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLFNBQXBCO0FBQThCLFNBQUssRUFBQyxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQURGLENBOUNGLENBREYsQ0FmRixDQURGO0FBd0VELENBakZEOztHQUFNRyxJO1VBRVk3QixTLEVBRUZrQyxpRSxFQUNERSwrRDs7O0tBTFRQLEk7QUFtRk5BLElBQUksQ0FBQ1csU0FBTCxHQUFpQjtBQUNmO0FBQ0Y7QUFDQTtBQUNFVCxXQUFTLEVBQUVVLGlEQUFTLENBQUNDO0FBSk4sQ0FBakI7QUFPZWIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjJlOWVmMmI3Y2ZiNzNlZjdhMzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgdXNlTWVkaWFRdWVyeSxcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBCdXR0b24sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMiksXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUuZGFya31gLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gIH0sXG4gIGNvdmVyOiB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDIwMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBmb3JtOiB7XG4gICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIH0sXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgfSxcbiAgfSxcbiAgaW5wdXRUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjM0JCMEU1JyxcbiAgICB3aWR0aDogMTc2LFxuICAgIGhlaWdodDogNDIsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyMzQkIwRTUnLFxuICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICB9LFxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxuICB9LFxufSkpO1xuXG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICB0aXRsZT1cIkVtYWlsIE5ld3NsZXR0ZXJcIlxuICAgICAgICBzdWJ0aXRsZT1cIlN1YnNjcmliZSB0byBvdXIgTmV3c2xldHRlciBmb3IgbmV3IGJsb2cgcG9zdHMsIHRpcHMgJiBuZXcgcGhvdG9zXCJcbiAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdoNCcsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgIH19XG4gICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcbiAgICAgICAgICB2YXJpYW50OiAnYm9keTEnLFxuICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxuICAgICAgICB9fVxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dFRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGdWxsIG5hbWVcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGZ1bGwgbmFtZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBuYW1lPVwiZnVsbG5hbWVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRUaXRsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIFN1YnNjcmliZSB0byBvdXIgTmV3c2xldHRlciBmb3IgbmV3IGJsb2cgcG9zdHMsIHRpcHMgJiBuZXcgcGhvdG9zLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9