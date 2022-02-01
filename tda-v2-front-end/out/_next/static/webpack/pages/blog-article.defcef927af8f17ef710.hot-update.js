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
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["content"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["sidebarArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarNewsletter"], {
    className: classes.sidebarNewsletter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SimilarStories"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["similarStories"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL0Jsb2dBcnRpY2xlLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJoZWlnaHQiLCJ3aWR0aCIsImxhc3RTZWN0aW9uIiwiYnJlYWtwb2ludHMiLCJ1cCIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwicGFkZGluZ0JvdHRvbSIsInNpZGViYXJOZXdzbGV0dGVyIiwibWFyZ2luVG9wIiwiZG93biIsImZvb3Rlck5ld3NsZXR0ZXJTZWN0aW9uIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZGFyayIsIkJsb2dBcnRpY2xlIiwiY2xhc3NlcyIsImNvbnRlbnQiLCJjb3ZlciIsInRpdGxlIiwic3VidGl0bGUiLCJhdXRob3IiLCJzaWRlYmFyQXJ0aWNsZXMiLCJzaW1pbGFyU3RvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLE1BREo7QUFFSkMsU0FBSyxFQUFFO0FBRkgsR0FEK0I7QUFLckNDLGFBQVcsRUFBRTtBQUNYLEtBQUNKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QkMsZ0JBQVUsRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxDQURnQjtBQUU1QkMsbUJBQWEsRUFBRTtBQUZhO0FBRG5CLEdBTHdCO0FBV3JDQyxtQkFBaUIsRUFBRTtBQUNqQkMsYUFBUyxFQUFFWCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakIsS0FBQ1IsS0FBSyxDQUFDSyxXQUFOLENBQWtCTyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCRCxlQUFTLEVBQUVYLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFEbUI7QUFGZixHQVhrQjtBQWlCckNLLHlCQUF1QixFQUFFO0FBQ3ZCQyxjQUFVLEVBQUVkLEtBQUssQ0FBQ2UsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURYO0FBakJZLENBQUwsQ0FBTixDQUE1Qjs7QUFzQkEsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDeEIsUUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVxQixPQUFPLENBQUNsQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUNFLFNBQUssRUFBRW1CLDZDQUFPLENBQUNDLEtBRGpCO0FBRUUsU0FBSyxFQUFFRCw2Q0FBTyxDQUFDRSxLQUZqQjtBQUdFLFlBQVEsRUFBRUYsNkNBQU8sQ0FBQ0csUUFIcEI7QUFJRSxVQUFNLEVBQUVILDZDQUFPLENBQUNJLE1BSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQVMsUUFBSSxFQUFFSiw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBaUIsUUFBSSxFQUFFSyxxREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw2REFBRDtBQUFtQixhQUFTLEVBQUVOLE9BQU8sQ0FBQ1QsaUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUpGLENBREYsQ0FQRixFQWtCRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQWdCLFFBQUksRUFBRWdCLG9EQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQkYsQ0FERjtBQXdCRCxDQTNCRDs7R0FBTVIsVztVQUNZcEIsUzs7O0tBRFpvQixXO0FBNkJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLWFydGljbGUuZGVmY2VmOTI3YWY4ZjE3ZWY3MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbiAgRm9vdGVyTmV3c2xldHRlcixcbiAgSGVybyxcbiAgU2lkZWJhckFydGljbGVzLFxuICBTaWRlYmFyTmV3c2xldHRlcixcbiAgU2ltaWxhclN0b3JpZXMsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGNvbnRlbnQsIHNpZGViYXJBcnRpY2xlcywgc2ltaWxhclN0b3JpZXMgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBsYXN0U2VjdGlvbjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nQm90dG9tOiAzMCxcbiAgICB9LFxuICB9LFxuICBzaWRlYmFyTmV3c2xldHRlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICB9LFxuICBmb290ZXJOZXdzbGV0dGVyU2VjdGlvbjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICB9LFxufSkpO1xuXG5jb25zdCBCbG9nQXJ0aWNsZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVyb1xuICAgICAgICBjb3Zlcj17Y29udGVudC5jb3Zlcn1cbiAgICAgICAgdGl0bGU9e2NvbnRlbnQudGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtjb250ZW50LnN1YnRpdGxlfVxuICAgICAgICBhdXRob3I9e2NvbnRlbnQuYXV0aG9yfVxuICAgICAgLz5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxDb250ZW50IGRhdGE9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8U2lkZWJhckFydGljbGVzIGRhdGE9e3NpZGViYXJBcnRpY2xlc30gLz5cbiAgICAgICAgICAgIDxTaWRlYmFyTmV3c2xldHRlciBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhck5ld3NsZXR0ZXJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFNpbWlsYXJTdG9yaWVzIGRhdGE9e3NpbWlsYXJTdG9yaWVzfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0FydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9