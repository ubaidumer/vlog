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
  lastSection: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 30
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["PopularNews"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["popularNews"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["FeaturedArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["featuredArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["LatestStories"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["latestStories"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["sidebarArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["MostViewedArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["mostViewedArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarNewsletter"], {
    className: classes.sidebarNewsletter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: classes.lastSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Archive"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["archive"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Tags"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["tags"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvQmxvZ1ZpZXcuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImhlaWdodCIsIndpZHRoIiwic2lkZWJhck5ld3NsZXR0ZXIiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwic2VjdGlvbiIsInVwIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsYXN0U2VjdGlvbiIsImZvb3Rlck5ld3NsZXR0ZXJTZWN0aW9uIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZGFyayIsIkJsb2dOZXdzcm9vbSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwiZGVmYXVsdE1hdGNoZXMiLCJwb3B1bGFyTmV3cyIsImZlYXR1cmVkQXJ0aWNsZXMiLCJsYXRlc3RTdG9yaWVzIiwic2lkZWJhckFydGljbGVzIiwicGFkZGluZyIsIm1vc3RWaWV3ZWRBcnRpY2xlcyIsImFyY2hpdmUiLCJ0YWdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBVUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsTUFESjtBQUVKQyxTQUFLLEVBQUU7QUFGSCxHQUQrQjtBQUtyQ0MsbUJBQWlCLEVBQUU7QUFDakIsS0FBQ0osS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCQyxlQUFTLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFEbUI7QUFEZixHQUxrQjtBQVVyQ0MsU0FBTyxFQUFFO0FBQ1AsS0FBQ1QsS0FBSyxDQUFDSyxXQUFOLENBQWtCSyxFQUFsQixDQUFxQixJQUFy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QUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUMsMENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixDQWhDRixDQURGO0FBNkNELENBckREOztHQUFNYixZO1VBQ1lyQixTLEVBRUZ1QixpRSxFQUNERSwrRDs7O0tBSlRKLFk7QUF1RFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNWQ0Yzc4ZWEyOGVjNmJhY2NiNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcbmltcG9ydCB7XG4gIEFyY2hpdmUsXG4gIEZlYXR1cmVkQXJ0aWNsZXMsXG4gIEZvb3Rlck5ld3NsZXR0ZXIsXG4gIEhlcm8sXG4gIExhdGVzdFN0b3JpZXMsXG4gIE1vc3RWaWV3ZWRBcnRpY2xlcyxcbiAgUG9wdWxhck5ld3MsXG4gIFNpZGViYXJBcnRpY2xlcyxcbiAgU2lkZWJhck5ld3NsZXR0ZXIsXG4gIFRhZ3MsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIHBvcHVsYXJOZXdzLFxuICBmZWF0dXJlZEFydGljbGVzLFxuICBsYXRlc3RTdG9yaWVzLFxuICBzaWRlYmFyQXJ0aWNsZXMsXG4gIG1vc3RWaWV3ZWRBcnRpY2xlcyxcbiAgYXJjaGl2ZSxcbiAgdGFncyxcbn0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgc2lkZWJhck5ld3NsZXR0ZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IDc1LFxuICAgIH0sXG4gIH0sXG4gIGxhc3RTZWN0aW9uOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IDMwLFxuICAgIH0sXG4gIH0sXG5cbiAgZm9vdGVyTmV3c2xldHRlclNlY3Rpb246IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgfSxcbn0pKTtcblxuY29uc3QgQmxvZ05ld3Nyb29tID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPFBvcHVsYXJOZXdzIGRhdGE9e3BvcHVsYXJOZXdzfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8RmVhdHVyZWRBcnRpY2xlcyBkYXRhPXtmZWF0dXJlZEFydGljbGVzfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgICAgPExhdGVzdFN0b3JpZXMgZGF0YT17bGF0ZXN0U3Rvcmllc30gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgIDxTaWRlYmFyQXJ0aWNsZXMgZGF0YT17c2lkZWJhckFydGljbGVzfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDUwLCBiYWNrZ3JvdW5kOiAnI0Y1RjdGRicgfX1cbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXtpc01kID8gNCA6IDB9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxuICAgICAgICAgICAgPE1vc3RWaWV3ZWRBcnRpY2xlcyBkYXRhPXttb3N0Vmlld2VkQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8U2lkZWJhck5ld3NsZXR0ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJOZXdzbGV0dGVyfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxhc3RTZWN0aW9ufT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XG4gICAgICAgICAgICA8QXJjaGl2ZSBkYXRhPXthcmNoaXZlfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFRhZ3MgZGF0YT17dGFnc30gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dOZXdzcm9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=