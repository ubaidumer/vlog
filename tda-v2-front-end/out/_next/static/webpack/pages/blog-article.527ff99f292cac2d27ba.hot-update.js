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
      paddingBottom: 75
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
    className: classes.section,
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
    className: classes.lastSection,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL0Jsb2dBcnRpY2xlLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJ3aWR0aCIsInNlY3Rpb24iLCJicmVha3BvaW50cyIsInVwIiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwibGFzdFNlY3Rpb24iLCJzaWRlYmFyTmV3c2xldHRlciIsIm1hcmdpblRvcCIsImRvd24iLCJmb290ZXJOZXdzbGV0dGVyU2VjdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJCbG9nQXJ0aWNsZSIsImNsYXNzZXMiLCJjb250ZW50IiwiY292ZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYXV0aG9yIiwic2lkZWJhckFydGljbGVzIiwic2ltaWxhclN0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxNQURKO0FBRUpDLFNBQUssRUFBRTtBQUZILEdBRCtCO0FBS3JDQyxTQUFPLEVBQUU7QUFDUCxLQUFDSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJDLGdCQUFVLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsQ0FEZ0I7QUFFNUJDLG1CQUFhLEVBQUU7QUFGYTtBQUR2QixHQUw0QjtBQVdyQ0MsYUFBVyxFQUFFO0FBQ1gsS0FBQ1YsS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxnQkFBVSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBRGdCO0FBRTVCQyxtQkFBYSxFQUFFO0FBRmE7QUFEbkIsR0FYd0I7QUFpQnJDRSxtQkFBaUIsRUFBRTtBQUNqQkMsYUFBUyxFQUFFWixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakIsS0FBQ1IsS0FBSyxDQUFDSyxXQUFOLENBQWtCUSxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCRCxlQUFTLEVBQUVaLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFEbUI7QUFGZixHQWpCa0I7QUF1QnJDTSx5QkFBdUIsRUFBRTtBQUN2QkMsY0FBVSxFQUFFZixLQUFLLENBQUNnQixPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRFg7QUF2QlksQ0FBTCxDQUFOLENBQTVCOztBQTRCQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUFBOztBQUN4QixRQUFNQyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRXNCLE9BQU8sQ0FBQ25CLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFb0IsNkNBQU8sQ0FBQ0MsS0FEakI7QUFFRSxTQUFLLEVBQUVELDZDQUFPLENBQUNFLEtBRmpCO0FBR0UsWUFBUSxFQUFFRiw2Q0FBTyxDQUFDRyxRQUhwQjtBQUlFLFVBQU0sRUFBRUgsNkNBQU8sQ0FBQ0ksTUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyw0REFBRDtBQUFTLGFBQVMsRUFBRUwsT0FBTyxDQUFDaEIsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQVMsUUFBSSxFQUFFaUIsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWlCLFFBQUksRUFBRUsscURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBbUIsYUFBUyxFQUFFTixPQUFPLENBQUNULGlCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGLENBUEYsRUFrQkUsTUFBQyw0REFBRDtBQUFTLGFBQVMsRUFBRVMsT0FBTyxDQUFDVixXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFnQixRQUFJLEVBQUVpQixvREFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEJGLENBREY7QUF3QkQsQ0EzQkQ7O0dBQU1SLFc7VUFDWXJCLFM7OztLQURacUIsVztBQTZCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjUyN2ZmOTlmMjkyY2FjMmQyN2JhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkFsdGVybmF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcbmltcG9ydCB7XG4gIENvbnRlbnQsXG4gIEZvb3Rlck5ld3NsZXR0ZXIsXG4gIEhlcm8sXG4gIFNpZGViYXJBcnRpY2xlcyxcbiAgU2lkZWJhck5ld3NsZXR0ZXIsXG4gIFNpbWlsYXJTdG9yaWVzLFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBjb250ZW50LCBzaWRlYmFyQXJ0aWNsZXMsIHNpbWlsYXJTdG9yaWVzIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nQm90dG9tOiA3NSxcbiAgICB9LFxuICB9LFxuICBsYXN0U2VjdGlvbjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICB9LFxuICB9LFxuICBzaWRlYmFyTmV3c2xldHRlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICB9LFxuICBmb290ZXJOZXdzbGV0dGVyU2VjdGlvbjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICB9LFxufSkpO1xuXG5jb25zdCBCbG9nQXJ0aWNsZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVyb1xuICAgICAgICBjb3Zlcj17Y29udGVudC5jb3Zlcn1cbiAgICAgICAgdGl0bGU9e2NvbnRlbnQudGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtjb250ZW50LnN1YnRpdGxlfVxuICAgICAgICBhdXRob3I9e2NvbnRlbnQuYXV0aG9yfVxuICAgICAgLz5cbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XG4gICAgICAgICAgICA8Q29udGVudCBkYXRhPXtjb250ZW50fSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFNpZGViYXJBcnRpY2xlcyBkYXRhPXtzaWRlYmFyQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICA8U2lkZWJhck5ld3NsZXR0ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJOZXdzbGV0dGVyfSAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxhc3RTZWN0aW9ufT5cbiAgICAgICAgPFNpbWlsYXJTdG9yaWVzIGRhdGE9e3NpbWlsYXJTdG9yaWVzfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0FydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9