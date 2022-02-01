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
      background: rgb(245, 247, 255)
    },
    '& .MuiOutlinedInput-input': {
      background: rgb(245, 247, 255)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvU2lkZWJhck5ld3NsZXR0ZXIvU2lkZWJhck5ld3NsZXR0ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwic3BhY2luZyIsImJvcmRlciIsInBhbGV0dGUiLCJhbHRlcm5hdGUiLCJkYXJrIiwiYm9yZGVyUmFkaXVzIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNvdmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwiZm9ybSIsInJnYiIsImlucHV0VGl0bGUiLCJmb250V2VpZ2h0IiwiYnV0dG9uIiwiY29sb3IiLCJhbGlnblNlbGYiLCJGb3JtIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsImNsc3giLCJ2YXJpYW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUUsT0FEUjtBQUVKQyxXQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FGTDtBQUdKQyxVQUFNLEVBQUcsYUFBWUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBQUssRUFIOUM7QUFJSkMsZ0JBQVksRUFBRSxDQUpWO0FBS0osS0FBQ1QsS0FBSyxDQUFDVSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCUixhQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFEbUI7QUFMMUIsR0FEK0I7QUFVckNRLE9BQUssRUFBRTtBQUNMQyxTQUFLLEVBQUUsR0FERjtBQUVMQyxVQUFNLEVBQUUsR0FGSDtBQUdMQyxXQUFPLEVBQUUsTUFISjtBQUlMQyxrQkFBYyxFQUFFLFFBSlg7QUFLTEMsY0FBVSxFQUFFLFFBTFA7QUFNTEMsVUFBTSxFQUFFLFFBTkg7QUFPTEMsZ0JBQVksRUFBRW5CLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFQVCxHQVY4QjtBQW1CckNnQixNQUFJLEVBQUU7QUFDSiw0QkFBd0I7QUFDdEJsQixnQkFBVSxFQUFFbUIsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWDtBQURPLEtBRHBCO0FBSUosaUNBQTZCO0FBQzNCbkIsZ0JBQVUsRUFBRW1CLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVg7QUFEWTtBQUp6QixHQW5CK0I7QUEyQnJDQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFLEdBREY7QUFFVkosZ0JBQVksRUFBRW5CLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGSixHQTNCeUI7QUErQnJDb0IsUUFBTSxFQUFFO0FBQ05uQixVQUFNLEVBQUUsbUJBREY7QUFFTlEsU0FBSyxFQUFFLEdBRkQ7QUFHTkMsVUFBTSxFQUFFLEVBSEY7QUFJTlcsU0FBSyxFQUFFLE9BSkQ7QUFLTixlQUFXO0FBQ1RBLFdBQUssRUFBRSxTQURFO0FBRVR2QixnQkFBVSxFQUFFO0FBRkgsS0FMTDtBQVNOd0IsYUFBUyxFQUFFO0FBVEw7QUEvQjZCLENBQUwsQ0FBTixDQUE1Qjs7QUE0Q0EsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLElBQUk7QUFBQTs7QUFDcEIsUUFBTTtBQUFFQztBQUFGLE1BQXlCRCxLQUEvQjtBQUFBLFFBQXNCRSxJQUF0Qix1S0FBK0JGLEtBQS9COztBQUNBLFFBQU1HLE9BQU8sR0FBR2pDLFNBQVMsRUFBekI7QUFFQSxRQUFNRSxLQUFLLEdBQUdnQyx5RUFBUSxFQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsdUVBQWEsQ0FBQ2xDLEtBQUssQ0FBQ1UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxFQUE2QjtBQUNyRHdCLGtCQUFjLEVBQUU7QUFEcUMsR0FBN0IsQ0FBMUI7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxvREFBSSxDQUFDTCxPQUFPLENBQUM5QixJQUFULEVBQWU0QixTQUFmO0FBQXBCLEtBQW1EQyxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyxrRUFBRDtBQUNFLFNBQUssRUFBQyxrQkFEUjtBQUVFLFlBQVEsRUFBQyxtRUFGWDtBQUdFLGNBQVUsRUFBRTtBQUNWTyxhQUFPLEVBQUUsSUFEQztBQUVWWixXQUFLLEVBQUU7QUFGRyxLQUhkO0FBT0UsaUJBQWEsRUFBRTtBQUNiWSxhQUFPLEVBQUUsT0FESTtBQUViWixXQUFLLEVBQUU7QUFGTSxLQVBqQjtBQVdFLGdCQUFTLFNBWFg7QUFZRSxTQUFLLEVBQUMsTUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFlRTtBQUFLLGFBQVMsRUFBRU0sT0FBTyxDQUFDWCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUVhLElBQUksR0FBRyxDQUFILEdBQU8sQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixnQkFBUyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFDLGFBRlI7QUFHRSxhQUFTLEVBQUVGLE9BQU8sQ0FBQ1QsVUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQVFFLE1BQUMsMkRBQUQ7QUFDRSxlQUFXLEVBQUMsZ0JBRGQ7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsUUFBSSxFQUFDLFVBSlA7QUFLRSxhQUFTLE1BTFg7QUFNRSxRQUFJLEVBQUMsTUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixFQWtCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsZ0JBQVMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxhQUZSO0FBR0UsYUFBUyxFQUFFUyxPQUFPLENBQUNULFVBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFFLE1BQUMsMkRBQUQ7QUFDRSxlQUFXLEVBQUMsb0JBRGQ7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxhQUFTLE1BTFg7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FsQkYsRUFtQ0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRVMsT0FBTyxDQUFDUCxNQURyQjtBQUVFLFdBQU8sRUFBQyxXQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsU0FKUjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FuQ0YsRUE4Q0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLGFBQVMsTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxTQUFwQjtBQUE4QixTQUFLLEVBQUMsZUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFERixDQTlDRixDQURGLENBZkYsQ0FERjtBQXdFRCxDQWpGRDs7R0FBTUcsSTtVQUVZN0IsUyxFQUVGa0MsaUUsRUFDREUsK0Q7OztLQUxUUCxJO0FBbUZOQSxJQUFJLENBQUNXLFNBQUwsR0FBaUI7QUFDZjtBQUNGO0FBQ0E7QUFDRVQsV0FBUyxFQUFFVSxpREFBUyxDQUFDQztBQUpOLENBQWpCO0FBT2ViLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS4wOWY3OTBmNTVhMzJhZDVlZWQ3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIHVzZU1lZGlhUXVlcnksXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLmRhcmt9YCxcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICB9LFxuICBjb3Zlcjoge1xuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbiAgZm9ybToge1xuICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDI0NywgMjU1KSxcbiAgICB9LFxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LWlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ3LCAyNTUpLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0VGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICcjM0JCMEU1JyxcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgfSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgfSxcbn0pKTtcblxuY29uc3QgRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgdGl0bGU9XCJFbWFpbCBOZXdzbGV0dGVyXCJcbiAgICAgICAgc3VidGl0bGU9XCJTdWJzY3JpYmUgdG8gb3VyIE5ld3NsZXR0ZXIgZm9yIG5ldyBibG9nIHBvc3RzLCB0aXBzICYgbmV3IHBob3Rvc1wiXG4gICAgICAgIHRpdGxlUHJvcHM9e3tcbiAgICAgICAgICB2YXJpYW50OiAnaDQnLFxuICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxuICAgICAgICB9fVxuICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XG4gICAgICAgICAgdmFyaWFudDogJ2JvZHkxJyxcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgICAgYWxpZ249XCJsZWZ0XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRUaXRsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRnVsbCBuYW1lXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBmdWxsIG5hbWVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0VGl0bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gb3VyIE5ld3NsZXR0ZXIgZm9yIG5ldyBibG9nIHBvc3RzLCB0aXBzICYgbmV3IHBob3Rvcy5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==