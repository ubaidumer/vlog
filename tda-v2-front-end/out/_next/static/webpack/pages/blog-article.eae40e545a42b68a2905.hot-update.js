webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/BlogArticle.js":
/*!**********************************************!*\
  !*** ./src/views/BlogArticle/BlogArticle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/views/BlogArticle/components/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/views/BlogArticle/data/index.js");
var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\BlogArticle.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  section: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 30
    }
  },
  lastSection: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: 30
    }
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2)
    }
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark
  }
}));

const BlogArticle = () => {
  _s();

  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    cover: _data__WEBPACK_IMPORTED_MODULE_5__["content"].cover,
    title: _data__WEBPACK_IMPORTED_MODULE_5__["content"].title,
    subtitle: _data__WEBPACK_IMPORTED_MODULE_5__["content"].subtitle,
    author: _data__WEBPACK_IMPORTED_MODULE_5__["content"].author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["content"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["sidebarArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarNewsletter"], {
    className: classes.sidebarNewsletter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SimilarStories"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["similarStories"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })));
};

_s(BlogArticle, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = BlogArticle;
/* harmony default export */ __webpack_exports__["default"] = (BlogArticle);

var _c;

$RefreshReg$(_c, "BlogArticle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL0Jsb2dBcnRpY2xlLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJ3aWR0aCIsInNlY3Rpb24iLCJicmVha3BvaW50cyIsInVwIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwibGFzdFNlY3Rpb24iLCJzaWRlYmFyTmV3c2xldHRlciIsIm1hcmdpblRvcCIsImRvd24iLCJmb290ZXJOZXdzbGV0dGVyU2VjdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJCbG9nQXJ0aWNsZSIsImNsYXNzZXMiLCJjb250ZW50IiwiY292ZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYXV0aG9yIiwic2lkZWJhckFydGljbGVzIiwic2ltaWxhclN0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxNQURKO0FBRUpDLFNBQUssRUFBRTtBQUZILEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUCxLQUFDSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJDLGdCQUFVLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsQ0FEZ0I7QUFFNUJDLG1CQUFhLEVBQUU7QUFGYTtBQUR2QixHQUw0QjtBQVdyQ0MsYUFBVyxFQUFFO0FBQ1gsS0FBQ1YsS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxnQkFBVSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBRGdCO0FBRTVCQyxtQkFBYSxFQUFFO0FBRmE7QUFEbkIsR0FYd0I7QUFpQnJDRSxtQkFBaUIsRUFBRTtBQUNqQkMsYUFBUyxFQUFFWixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakIsS0FBQ1IsS0FBSyxDQUFDSyxXQUFOLENBQWtCUSxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCRCxlQUFTLEVBQUVaLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFEbUI7QUFGZixHQWpCa0I7QUF1QnJDTSx5QkFBdUIsRUFBRTtBQUN2QkMsY0FBVSxFQUFFZixLQUFLLENBQUNnQixPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRFg7QUF2QlksQ0FBTCxDQUFOLENBQTVCOztBQTRCQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNQyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRXNCLE9BQU8sQ0FBQ25CLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFb0IsNkNBQU8sQ0FBQ0MsS0FEakI7QUFFRSxTQUFLLEVBQUVELDZDQUFPLENBQUNFLEtBRmpCO0FBR0UsWUFBUSxFQUFFRiw2Q0FBTyxDQUFDRyxRQUhwQjtBQUlFLFVBQU0sRUFBRUgsNkNBQU8sQ0FBQ0ksTUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBUyxRQUFJLEVBQUVKLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFpQixRQUFJLEVBQUVLLHFEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZEQUFEO0FBQW1CLGFBQVMsRUFBRU4sT0FBTyxDQUFDVCxpQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSkYsQ0FERixDQVBGLEVBa0JFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBZ0IsUUFBSSxFQUFFZ0Isb0RBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixDQURGO0FBd0JELENBM0JEOztHQUFNUixXO1VBQ1lyQixTOzs7S0FEWnFCLFc7QUE2QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS5lYWU0MGU1NDVhNDJiNjhhMjkwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25BbHRlcm5hdGUgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5pbXBvcnQge1xuICBDb250ZW50LFxuICBGb290ZXJOZXdzbGV0dGVyLFxuICBIZXJvLFxuICBTaWRlYmFyQXJ0aWNsZXMsXG4gIFNpZGViYXJOZXdzbGV0dGVyLFxuICBTaW1pbGFyU3Rvcmllcyxcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgY29udGVudCwgc2lkZWJhckFydGljbGVzLCBzaW1pbGFyU3RvcmllcyB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgfSxcbiAgfSxcbiAgbGFzdFNlY3Rpb246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMzAsXG4gICAgfSxcbiAgfSxcbiAgc2lkZWJhck5ld3NsZXR0ZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgfSxcbiAgZm9vdGVyTmV3c2xldHRlclNlY3Rpb246IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgfSxcbn0pKTtcblxuY29uc3QgQmxvZ0FydGljbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlcm9cbiAgICAgICAgY292ZXI9e2NvbnRlbnQuY292ZXJ9XG4gICAgICAgIHRpdGxlPXtjb250ZW50LnRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17Y29udGVudC5zdWJ0aXRsZX1cbiAgICAgICAgYXV0aG9yPXtjb250ZW50LmF1dGhvcn1cbiAgICAgIC8+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XG4gICAgICAgICAgICA8Q29udGVudCBkYXRhPXtjb250ZW50fSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFNpZGViYXJBcnRpY2xlcyBkYXRhPXtzaWRlYmFyQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICA8U2lkZWJhck5ld3NsZXR0ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJOZXdzbGV0dGVyfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxTaW1pbGFyU3RvcmllcyBkYXRhPXtzaW1pbGFyU3Rvcmllc30gLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==