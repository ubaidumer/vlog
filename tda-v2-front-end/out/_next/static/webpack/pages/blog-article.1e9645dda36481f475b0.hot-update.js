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
      background: '#F5F7FF'
    },
    '& .MuiOutlinedInput-input': {
      background: '#F5F7FF'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvU2lkZWJhck5ld3NsZXR0ZXIvU2lkZWJhck5ld3NsZXR0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwic3BhY2luZyIsImJvcmRlciIsInBhbGV0dGUiLCJhbHRlcm5hdGUiLCJkYXJrIiwiYm9yZGVyUmFkaXVzIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwiZm9ybSIsImlucHV0VGl0bGUiLCJmb250V2VpZ2h0IiwiYnV0dG9uIiwiY29sb3IiLCJhbGlnblNlbGYiLCJGb3JtIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImNsc3giLCJ2YXJpYW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUUsT0FEUjtBQUVKQyxXQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FGTDtBQUdKQyxVQUFNLEVBQUcsYUFBWUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBQUssRUFIOUM7QUFJSkMsZ0JBQVksRUFBRSxDQUpWO0FBS0osS0FBQ1QsS0FBSyxDQUFDVSxXQUFO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bkNGLEVBOENFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxNQUFFLEVBQUUsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsU0FBcEI7QUFBOEIsU0FBSyxFQUFDLGVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBREYsQ0E5Q0YsQ0FERixDQWZGLENBREY7QUF3RUQsQ0FqRkQ7O0dBQU1HLEk7VUFFWTVCLFMsRUFFRmlDLGlFLEVBQ0RFLCtEOzs7S0FMVFAsSTtBQW1GTkEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCO0FBQ2Y7QUFDRjtBQUNBO0FBQ0VULFdBQVMsRUFBRVUsaURBQVMsQ0FBQ0M7QUFKTixDQUFqQjtBQU9lYixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLWFydGljbGUuMWU5NjQ1ZGRhMzY0ODFmNDc1YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICB1c2VNZWRpYVF1ZXJ5LFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBUZXh0RmllbGQsXG4gIEJ1dHRvbixcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5kYXJrfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgY292ZXI6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIGZvcm06IHtcbiAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI0Y1RjdGRicsXG4gICAgfSxcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjRjVGN0ZGJyxcbiAgICB9LFxuICB9LFxuICBpbnB1dFRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzQkIwRTUnLFxuICAgIHdpZHRoOiAxNzYsXG4gICAgaGVpZ2h0OiA0MixcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIH0sXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IEZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHRpdGxlPVwiRW1haWwgTmV3c2xldHRlclwiXG4gICAgICAgIHN1YnRpdGxlPVwiU3Vic2NyaWJlIHRvIG91ciBOZXdzbGV0dGVyIGZvciBuZXcgYmxvZyBwb3N0cywgdGlwcyAmIG5ldyBwaG90b3NcIlxuICAgICAgICB0aXRsZVByb3BzPXt7XG4gICAgICAgICAgdmFyaWFudDogJ2g0JyxcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgICAgc3VidGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdib2R5MScsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0VGl0bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZ1bGwgbmFtZVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dFRpdGxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgU3Vic2NyaWJlIHRvIG91ciBOZXdzbGV0dGVyIGZvciBuZXcgYmxvZyBwb3N0cywgdGlwcyAmIG5ldyBwaG90b3MuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=