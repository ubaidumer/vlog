webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/BlogView.js":
/*!************************************!*\
  !*** ./src/views/Blog/BlogView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/views/Blog/components/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/views/Blog/data/index.js");
var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\BlogView.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  sidebarNewsletter: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  section: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 75
    }
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark
  }
}));

const BlogNewsroom = () => {
  _s();

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["PopularNews"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["popularNews"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["FeaturedArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["featuredArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["LatestStories"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["latestStories"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["sidebarArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    style: {
      padding: 50,
      background: '#F5F7FF'
    },
    container: true,
    spacing: isMd ? 4 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["MostViewedArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["mostViewedArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarNewsletter"], {
    className: classes.sidebarNewsletter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Archive"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["archive"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Tags"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["tags"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })))));
};

_s(BlogNewsroom, "9025em9jOQdmzpWvV0plUgcVqs8=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c = BlogNewsroom;
/* harmony default export */ __webpack_exports__["default"] = (BlogNewsroom);

var _c;

$RefreshReg$(_c, "BlogNewsroom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvQmxvZ1ZpZXcuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIndpZHRoIiwic2lkZWJhck5ld3NsZXR0ZXIiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwic2VjdGlvbiIsInVwIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmb290ZXJOZXdzbGV0dGVyU2VjdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJCbG9nTmV3c3Jvb20iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwicG9wdWxhck5ld3MiLCJmZWF0dXJlZEFydGljbGVzIiwibGF0ZXN0U3RvcmllcyIsInNpZGViYXJBcnRpY2xlcyIsInBhZGRpbmciLCJtb3N0Vmlld2VkQXJ0aWNsZXMiLCJhcmNoaXZlIiwidGFncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQVVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLE1BREo7QUFFSkMsU0FBSyxFQUFFO0FBRkgsR0FEK0I7QUFLckNDLG1CQUFpQixFQUFFO0FBQ2pCLEtBQUNKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsZUFBUyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkO0FBRG1CO0FBRGYsR0FMa0I7QUFVckNDLFNBQU8sRUFBRTtBQUNQLEtBQUNULEtBQUssQ0FBQ0ssV0FBTixDQUFrQkssRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtB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OztHQUFNYixZO1VBQ1lwQixTLEVBRUZzQixpRSxFQUNERSwrRDs7O0tBSlRKLFk7QUF1RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMWYyMTc5NDQ5MGZhMjg3NmJmMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcbmltcG9ydCB7XG4gIEFyY2hpdmUsXG4gIEZlYXR1cmVkQXJ0aWNsZXMsXG4gIEZvb3Rlck5ld3NsZXR0ZXIsXG4gIEhlcm8sXG4gIExhdGVzdFN0b3JpZXMsXG4gIE1vc3RWaWV3ZWRBcnRpY2xlcyxcbiAgUG9wdWxhck5ld3MsXG4gIFNpZGViYXJBcnRpY2xlcyxcbiAgU2lkZWJhck5ld3NsZXR0ZXIsXG4gIFRhZ3MsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIHBvcHVsYXJOZXdzLFxuICBmZWF0dXJlZEFydGljbGVzLFxuICBsYXRlc3RTdG9yaWVzLFxuICBzaWRlYmFyQXJ0aWNsZXMsXG4gIG1vc3RWaWV3ZWRBcnRpY2xlcyxcbiAgYXJjaGl2ZSxcbiAgdGFncyxcbn0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgc2lkZWJhck5ld3NsZXR0ZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IDc1LFxuICAgIH0sXG4gIH0sXG4gIGZvb3Rlck5ld3NsZXR0ZXJTZWN0aW9uOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gIH0sXG59KSk7XG5cbmNvbnN0IEJsb2dOZXdzcm9vbSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XG4gICAgICAgIDxQb3B1bGFyTmV3cyBkYXRhPXtwb3B1bGFyTmV3c30gLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEZlYXR1cmVkQXJ0aWNsZXMgZGF0YT17ZmVhdHVyZWRBcnRpY2xlc30gLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxMYXRlc3RTdG9yaWVzIGRhdGE9e2xhdGVzdFN0b3JpZXN9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8U2lkZWJhckFydGljbGVzIGRhdGE9e3NpZGViYXJBcnRpY2xlc30gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiA1MCwgYmFja2dyb3VuZDogJyNGNUY3RkYnIH19XG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3BhY2luZz17aXNNZCA/IDQgOiAwfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxNb3N0Vmlld2VkQXJ0aWNsZXMgZGF0YT17bW9zdFZpZXdlZEFydGljbGVzfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFNpZGViYXJOZXdzbGV0dGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyTmV3c2xldHRlcn0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XG4gICAgICAgICAgICA8QXJjaGl2ZSBkYXRhPXthcmNoaXZlfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRhZ3MgZGF0YT17dGFnc30gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dOZXdzcm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=