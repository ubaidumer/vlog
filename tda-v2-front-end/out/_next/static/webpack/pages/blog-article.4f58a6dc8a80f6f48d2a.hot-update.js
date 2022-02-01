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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\SidebarNewsletter\\SidebarNewsletter.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    background: '#F5F7FF',
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
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 95,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.inputTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 112,
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
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    color: "textSecondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvU2lkZWJhck5ld3NsZXR0ZXIvU2lkZWJhck5ld3NsZXR0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwic3BhY2luZyIsImJvcmRlciIsInBhbGV0dGUiLCJhbHRlcm5hdGUiLCJkYXJrIiwiYm9yZGVyUmFkaXVzIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwiZm9ybSIsInBhcGVyIiwiaW5wdXRUaXRsZSIsImZvbnRXZWlnaHQiLCJidXR0b24iLCJjb2xvciIsImFsaWduU2VsZiIsIkZvcm0iLCJwcm9wcyIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwiY2xzeCIsInZhcmlhbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxTQURSO0FBRUpBLGNBQVUsRUFBRSxPQUZSO0FBR0pDLFdBQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUhMO0FBSUpDLFVBQU0sRUFBRyxhQUFZTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsSUFBSyxFQUo5QztBQUtKQyxnQkFBWSxFQUFFLENB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R0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsU0FKUjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FuQ0YsRUE4Q0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxTQUFwQjtBQUE4QixTQUFLLEVBQUMsZUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFERixDQTlDRixDQURGLENBZkYsQ0FERjtBQXdFRCxDQWpGRDs7R0FBTUcsSTtVQUVZN0IsUyxFQUVGa0MsaUUsRUFDREUsK0Q7OztLQUxUUCxJO0FBbUZOQSxJQUFJLENBQUNXLFNBQUwsR0FBaUI7QUFDZjtBQUNGO0FBQ0E7QUFDRVQsV0FBUyxFQUFFVSxpREFBUyxDQUFDQztBQUpOLENBQWpCO0FBT2ViLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS40ZjU4YTZkYzhhODBmNmY0OGQyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIHVzZU1lZGlhUXVlcnksXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogJyNGNUY3RkYnLFxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5kYXJrfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgY292ZXI6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIGZvcm06IHtcbiAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgfSxcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICB9LFxuICB9LFxuICBpbnB1dFRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzQkIwRTUnLFxuICAgIHdpZHRoOiAxNzYsXG4gICAgaGVpZ2h0OiA0MixcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIH0sXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IEZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHRpdGxlPVwiRW1haWwgTmV3c2xldHRlclwiXG4gICAgICAgIHN1YnRpdGxlPVwiU3Vic2NyaWJlIHRvIG91ciBOZXdzbGV0dGVyIGZvciBuZXcgYmxvZyBwb3N0cywgdGlwcyAmIG5ldyBwaG90b3NcIlxuICAgICAgICB0aXRsZVByb3BzPXt7XG4gICAgICAgICAgdmFyaWFudDogJ2g0JyxcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgICAgc3VidGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdib2R5MScsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0VGl0bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZ1bGwgbmFtZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dFRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG91ciBOZXdzbGV0dGVyIGZvciBuZXcgYmxvZyBwb3N0cywgdGlwcyAmIG5ldyBwaG90b3MuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=