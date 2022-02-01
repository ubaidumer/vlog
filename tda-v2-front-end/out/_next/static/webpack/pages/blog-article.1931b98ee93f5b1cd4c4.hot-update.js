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
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Content"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["content"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarArticles"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["sidebarArticles"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SidebarNewsletter"], {
    className: classes.sidebarNewsletter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_3__["SectionAlternate"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["SimilarStories"], {
    data: _data__WEBPACK_IMPORTED_MODULE_5__["similarStories"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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

/***/ }),

/***/ "./src/views/BlogArticle/data/index.js":
/*!*********************************************!*\
  !*** ./src/views/BlogArticle/data/index.js ***!
  \*********************************************/
/*! exports provided: sidebarArticles, similarStories, content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarArticles", function() { return sidebarArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "similarStories", function() { return similarStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
const sidebarArticles = [{
  cover: {
    src: 'https://assets.it22.nl/article/blog-img-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-1.png 2x'
  },
  title: 'Remote Work is the Future, but Should You Go Remote?',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Kate Segelson'
  },
  date: 'May 20, 2020',
  tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing']
}, {
  cover: {
    src: 'https://assets.it22.nl/article/blog-img-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-1.png 2x'
  },
  title: 'NIKE Online Store launches the website‎',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Jack Smith'
  },
  date: 'May 21, 2020',
  tags: ['nike', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.it22.nl/article/blog-img-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-1.png 2x'
  },
  title: 'Adidas will release your favourite shoes',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Akachi Luccini'
  },
  date: 'May 22, 2020',
  tags: ['adidas', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.it22.nl/article/blog-img-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-1.png 2x'
  },
  title: 'Simple approach to Australian cafe',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Veronica Adams'
  },
  date: 'May 23, 2020',
  tags: ['coffee', 'cups', 'morning coffee', 'breakfast']
}];
const similarStories = [{
  cover: {
    src: 'https://assets.it22.nl/article/similar-posts-1.png',
    srcSet: 'https://assets.it22.nl/article/similar-posts-1.png 2x'
  },
  title: 'One of Saturn’s largest rings may be newer than anyone',
  subtitle: 'Get your favourite adidas shoes, clothing & accessories at the official website! adidas Training.',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Akachi Luccini'
  },
  date: 'May 23, 2020',
  tags: ['adidas', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.it22.nl/article/similar-posts-2.png',
    srcSet: 'https://assets.it22.nl/article/similar-posts-2.png 2x'
  },
  title: 'One of Saturn’s largest rings may be newer than anyone',
  subtitle: 'Be Your Best Every Time With Nike Shoes And Clothing. Shop Online. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! Types: Shoes, Tops.',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Jack Smith'
  },
  date: 'May 23, 2020',
  tags: ['nike', 'sport', 'shop', 'training']
}, {
  cover: {
    src: 'https://assets.it22.nl/article/similar-posts-3.png',
    srcSet: 'https://assets.it22.nl/article/similar-posts-3.png 2x'
  },
  title: 'One of Saturn’s largest rings may be newer than anyone',
  subtitle: "A self-cleaning water bottle that'll help you reach your hydration goal. Neutralizes up to 99%* of harmful, odor-causing bacteria using UV-C light.",
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Kate Segelson'
  },
  date: 'May 23, 2020',
  tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing']
}];
const content = {
  headline: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly. It is advisable to plan the event around a theme in order to create a focal point for the barbecue party. This way, all aspects of the party such as the food, games and decorations can be fashioned around a central theme. Favorite themes for barbecue parties include a Hawaiian motif, nostalgic seventies get-together, or, if you are near the sea, opt for a beach bbq party!',
  quoteHeadline: 'The Most Popular News',
  quoteSubTitle: "Keep track of what's happening with your data, change permissions, against your data anywhere in the world.",
  quote: "Keep track of what's happening with your data, change permissions, against your data anywhere in the world.",
  text1: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.',
  text2: 'Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.',
  title: 'Adidas will release your favourite shoes',
  subtitle: 'Get your favourite Adidas shoes, clothing & accessories at the official website! Adidas Training.',
  author: {
    photo: {
      src: 'https://assets.it22.nl/article/avatar.png',
      srcSet: 'https://assets.it22.nl/article/avatar.png 2x'
    },
    name: 'Jack Smith',
    date: 'May 20, 2019'
  },
  cover: {
    src: 'https://assets.it22.nl/article/blog-img-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-1.png 2x'
  },
  images: [{
    src: 'https://assets.it22.nl/article/blog-img-2-3.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-2-3.png 2x',
    cols: 2
  }, {
    src: 'https://assets.it22.nl/article/blog-img-2-2.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-2-2.png 2x',
    cols: 1
  }, {
    src: 'https://assets.it22.nl/article/blog-img-2-1.png',
    srcSet: 'https://assets.it22.nl/article/blog-img-2-1.png 2x',
    cols: 1
  }]
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL0Jsb2dBcnRpY2xlLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvdmlld3MvQmxvZ0FydGljbGUvZGF0YS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJzaWRlYmFyTmV3c2xldHRlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJmb290ZXJOZXdzbGV0dGVyU2VjdGlvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJCbG9nQXJ0aWNsZSIsImNsYXNzZXMiLCJjb250ZW50IiwiY292ZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYXV0aG9yIiwic2lkZWJhckFydGljbGVzIiwic2ltaWxhclN0b3JpZXMiLCJzcmMiLCJzcmNTZXQiLCJwaG90byIsIm5hbWUiLCJkYXRlIiwidGFncyIsImhlYWRsaW5lIiwicXVvdGVIZWFkbGluZSIsInF1b3RlU3ViVGl0bGUiLCJxdW90ZSIsInRleHQxIiwidGV4dDIiLCJpbWFnZXMiLCJjb2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsTUFESjtBQUVKQyxTQUFLLEVBQUU7QUFGSCxHQUQrQjtBQUtyQ0MsbUJBQWlCLEVBQUU7QUFDakJDLGFBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQURNO0FBRWpCLEtBQUNOLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkgsZUFBUyxFQUFFTCxLQUFLLENBQUNNLE9B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eURBLE1BQU1aLE9BQU8sR0FBRztBQUNyQmEsVUFBUSxFQUNOLDh1QkFGbUI7QUFHckJDLGVBQWEsRUFBRSx1QkFITTtBQUlyQkMsZUFBYSxFQUNYLDZHQUxtQjtBQU1yQkMsT0FBSyxFQUNILDZHQVBtQjtBQVFyQkMsT0FBSyxFQUNILHVYQVRtQjtBQVVyQkMsT0FBSyxFQUNILHVYQVhtQjtBQVlyQmhCLE9BQUssRUFBRSwwQ0FaYztBQWFyQkMsVUFBUSxFQUNOLG1HQWRtQjtBQWVyQkMsUUFBTSxFQUFFO0FBQ05LLFNBQUssRUFBRTtBQUNMRixTQUFHLEVBQUUsMkNBREE7QUFFTEMsWUFBTSxFQUFFO0FBRkgsS0FERDtBQUtORSxRQUFJLEVBQUUsWUFMQTtBQU1OQyxRQUFJLEVBQUU7QUFOQSxHQWZhO0FBdUJyQlYsT0FBSyxFQUFFO0FBQ0xNLE9BQUcsRUFBRSwrQ0FEQTtBQUVMQyxVQUFNLEVBQUU7QUFGSCxHQXZCYztBQTJCckJXLFFBQU0sRUFBRSxDQUNOO0FBQ0VaLE9BQUcsRUFBRSxpREFEUDtBQUVFQyxVQUFNLEVBQUUsb0RBRlY7QUFHRVksUUFBSSxFQUFFO0FBSFIsR0FETSxFQU1OO0FBQ0ViLE9BQUcsRUFBRSxpREFEUDtBQUVFQyxVQUFNLEVBQUUsb0RBRlY7QUFHRVksUUFBSSxFQUFFO0FBSFIsR0FOTSxFQVdOO0FBQ0ViLE9BQUcsRUFBRSxpREFEUDtBQUVFQyxVQUFNLEVBQUUsb0RBRlY7QUFHRVksUUFBSSxFQUFFO0FBSFIsR0FYTTtBQTNCYSxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLWFydGljbGUuMTkzMWI5OGVlOTNmNWIxY2Q0YzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uQWx0ZXJuYXRlIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbiAgRm9vdGVyTmV3c2xldHRlcixcbiAgSGVybyxcbiAgU2lkZWJhckFydGljbGVzLFxuICBTaWRlYmFyTmV3c2xldHRlcixcbiAgU2ltaWxhclN0b3JpZXMsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGNvbnRlbnQsIHNpZGViYXJBcnRpY2xlcywgc2ltaWxhclN0b3JpZXMgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBzaWRlYmFyTmV3c2xldHRlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICB9LFxuICBmb290ZXJOZXdzbGV0dGVyU2VjdGlvbjoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICB9LFxufSkpO1xuXG5jb25zdCBCbG9nQXJ0aWNsZSA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVyb1xuICAgICAgICBjb3Zlcj17Y29udGVudC5jb3Zlcn1cbiAgICAgICAgdGl0bGU9e2NvbnRlbnQudGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtjb250ZW50LnN1YnRpdGxlfVxuICAgICAgICBhdXRob3I9e2NvbnRlbnQuYXV0aG9yfVxuICAgICAgLz5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxDb250ZW50IGRhdGE9e2NvbnRlbnR9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICA8U2lkZWJhckFydGljbGVzIGRhdGE9e3NpZGViYXJBcnRpY2xlc30gLz5cbiAgICAgICAgICAgIDxTaWRlYmFyTmV3c2xldHRlciBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhck5ld3NsZXR0ZXJ9IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8U2VjdGlvbkFsdGVybmF0ZT5cbiAgICAgICAgPFNpbWlsYXJTdG9yaWVzIGRhdGE9e3NpbWlsYXJTdG9yaWVzfSAvPlxuICAgICAgPC9TZWN0aW9uQWx0ZXJuYXRlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0FydGljbGU7XG4iLCJleHBvcnQgY29uc3Qgc2lkZWJhckFydGljbGVzID0gW1xuICB7XG4gICAgY292ZXI6IHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0xLnBuZycsXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMS5wbmcgMngnLFxuICAgIH0sXG4gICAgdGl0bGU6ICdSZW1vdGUgV29yayBpcyB0aGUgRnV0dXJlLCBidXQgU2hvdWxkIFlvdSBHbyBSZW1vdGU/JyxcbiAgICBhdXRob3I6IHtcbiAgICAgIHBob3RvOiB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nJyxcbiAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2F2YXRhci5wbmcgMngnLFxuICAgICAgfSxcbiAgICAgIG5hbWU6ICdLYXRlIFNlZ2Vsc29uJyxcbiAgICB9LFxuICAgIGRhdGU6ICdNYXkgMjAsIDIwMjAnLFxuICAgIHRhZ3M6IFsnbGFycScsICdib3R0bGUnLCAnc2hvcCcsICdkcmlua3MnLCAnZWNvJywgJ3NlbGYgd2FzaGluZyddLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0xLnBuZycsXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMS5wbmcgMngnLFxuICAgIH0sXG4gICAgdGl0bGU6ICdOSUtFIE9ubGluZSBTdG9yZSBsYXVuY2hlcyB0aGUgd2Vic2l0ZeKAjicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBwaG90bzoge1xuICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZycsXG4gICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nIDJ4JyxcbiAgICAgIH0sXG4gICAgICBuYW1lOiAnSmFjayBTbWl0aCcsXG4gICAgfSxcbiAgICBkYXRlOiAnTWF5IDIxLCAyMDIwJyxcbiAgICB0YWdzOiBbJ25pa2UnLCAnc3BvcnQnLCAnc2hvcCcsICd0cmFpbmluZyddLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0xLnBuZycsXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMS5wbmcgMngnLFxuICAgIH0sXG4gICAgdGl0bGU6ICdBZGlkYXMgd2lsbCByZWxlYXNlIHlvdXIgZmF2b3VyaXRlIHNob2VzJyxcbiAgICBhdXRob3I6IHtcbiAgICAgIHBob3RvOiB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nJyxcbiAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2F2YXRhci5wbmcgMngnLFxuICAgICAgfSxcbiAgICAgIG5hbWU6ICdBa2FjaGkgTHVjY2luaScsXG4gICAgfSxcbiAgICBkYXRlOiAnTWF5IDIyLCAyMDIwJyxcbiAgICB0YWdzOiBbJ2FkaWRhcycsICdzcG9ydCcsICdzaG9wJywgJ3RyYWluaW5nJ10sXG4gIH0sXG4gIHtcbiAgICBjb3Zlcjoge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2Jsb2ctaW1nLTEucG5nJyxcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0xLnBuZyAyeCcsXG4gICAgfSxcbiAgICB0aXRsZTogJ1NpbXBsZSBhcHByb2FjaCB0byBBdXN0cmFsaWFuIGNhZmUnLFxuICAgIGF1dGhvcjoge1xuICAgICAgcGhvdG86IHtcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2F2YXRhci5wbmcnLFxuICAgICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZyAyeCcsXG4gICAgICB9LFxuICAgICAgbmFtZTogJ1Zlcm9uaWNhIEFkYW1zJyxcbiAgICB9LFxuICAgIGRhdGU6ICdNYXkgMjMsIDIwMjAnLFxuICAgIHRhZ3M6IFsnY29mZmVlJywgJ2N1cHMnLCAnbW9ybmluZyBjb2ZmZWUnLCAnYnJlYWtmYXN0J10sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2ltaWxhclN0b3JpZXMgPSBbXG4gIHtcbiAgICBjb3Zlcjoge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL3NpbWlsYXItcG9zdHMtMS5wbmcnLFxuICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL3NpbWlsYXItcG9zdHMtMS5wbmcgMngnLFxuICAgIH0sXG4gICAgdGl0bGU6ICdPbmUgb2YgU2F0dXJu4oCZcyBsYXJnZXN0IHJpbmdzIG1heSBiZSBuZXdlciB0aGFuIGFueW9uZScsXG4gICAgc3VidGl0bGU6XG4gICAgICAnR2V0IHlvdXIgZmF2b3VyaXRlIGFkaWRhcyBzaG9lcywgY2xvdGhpbmcgJiBhY2Nlc3NvcmllcyBhdCB0aGUgb2ZmaWNpYWwgd2Vic2l0ZSEgYWRpZGFzIFRyYWluaW5nLicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBwaG90bzoge1xuICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZycsXG4gICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nIDJ4JyxcbiAgICAgIH0sXG4gICAgICBuYW1lOiAnQWthY2hpIEx1Y2NpbmknLFxuICAgIH0sXG4gICAgZGF0ZTogJ01heSAyMywgMjAyMCcsXG4gICAgdGFnczogWydhZGlkYXMnLCAnc3BvcnQnLCAnc2hvcCcsICd0cmFpbmluZyddLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9zaW1pbGFyLXBvc3RzLTIucG5nJyxcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9zaW1pbGFyLXBvc3RzLTIucG5nIDJ4JyxcbiAgICB9LFxuICAgIHRpdGxlOiAnT25lIG9mIFNhdHVybuKAmXMgbGFyZ2VzdCByaW5ncyBtYXkgYmUgbmV3ZXIgdGhhbiBhbnlvbmUnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgJ0JlIFlvdXIgQmVzdCBFdmVyeSBUaW1lIFdpdGggTmlrZSBTaG9lcyBBbmQgQ2xvdGhpbmcuIFNob3AgT25saW5lLiBUaGUgT2ZmaWNpYWwgV2Vic2l0ZS4gSG9tZSBPZiBFdmVyeXRoaW5nIE5pa2UuIFNob3AgVGhlIExhdGVzdCBSZWxlYXNlcyBUb2RheSEgVHlwZXM6IFNob2VzLCBUb3BzLicsXG4gICAgYXV0aG9yOiB7XG4gICAgICBwaG90bzoge1xuICAgICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZycsXG4gICAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nIDJ4JyxcbiAgICAgIH0sXG4gICAgICBuYW1lOiAnSmFjayBTbWl0aCcsXG4gICAgfSxcbiAgICBkYXRlOiAnTWF5IDIzLCAyMDIwJyxcbiAgICB0YWdzOiBbJ25pa2UnLCAnc3BvcnQnLCAnc2hvcCcsICd0cmFpbmluZyddLFxuICB9LFxuICB7XG4gICAgY292ZXI6IHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9zaW1pbGFyLXBvc3RzLTMucG5nJyxcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9zaW1pbGFyLXBvc3RzLTMucG5nIDJ4JyxcbiAgICB9LFxuICAgIHRpdGxlOiAnT25lIG9mIFNhdHVybuKAmXMgbGFyZ2VzdCByaW5ncyBtYXkgYmUgbmV3ZXIgdGhhbiBhbnlvbmUnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgXCJBIHNlbGYtY2xlYW5pbmcgd2F0ZXIgYm90dGxlIHRoYXQnbGwgaGVscCB5b3UgcmVhY2ggeW91ciBoeWRyYXRpb24gZ29hbC4gTmV1dHJhbGl6ZXMgdXAgdG8gOTklKiBvZiBoYXJtZnVsLCBvZG9yLWNhdXNpbmcgYmFjdGVyaWEgdXNpbmcgVVYtQyBsaWdodC5cIixcbiAgICBhdXRob3I6IHtcbiAgICAgIHBob3RvOiB7XG4gICAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9hdmF0YXIucG5nJyxcbiAgICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2F2YXRhci5wbmcgMngnLFxuICAgICAgfSxcbiAgICAgIG5hbWU6ICdLYXRlIFNlZ2Vsc29uJyxcbiAgICB9LFxuICAgIGRhdGU6ICdNYXkgMjMsIDIwMjAnLFxuICAgIHRhZ3M6IFsnbGFycScsICdib3R0bGUnLCAnc2hvcCcsICdkcmlua3MnLCAnZWNvJywgJ3NlbGYgd2FzaGluZyddLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbnRlbnQgPSB7XG4gIGhlYWRsaW5lOlxuICAgICdCYXJiZWN1ZSBwYXJ0eSB0aXBzIGNhbiBoZWxwIGEgaG9zdCBwdXQgdG9nZXRoZXIgYW4gZXh0cmFvcmRpbmFyeSBldmVudCBmb3IgZmFtaWx5IGFuZCBmcmllbmRzLiBFYXRpbmcgb3V0ZG9vcnMgaXMgYSBmYXZvcml0ZSBwYXN0aW1lIGVuam95ZWQgYnkgZXZlcnlvbmUgYW5kIHBsYW5uaW5nIHRoZSBldmVudCBjYW4gaGVscCBtYWtlIGl0IG1vcmUgbWVtb3JhYmxlIGFuZCBzdHJlc3MtZnJlZSBmb3IgdGhlIGhvc3QuIEJpZyBvciBzbWFsbCwgYSBiYXJiZWN1ZSBwYXJ0eSByZXF1aXJlcyBhbiBhZGVxdWF0ZSBhbW91bnQgb2YgcGxhbm5pbmcgYW5kIHByZXBhcmF0aW9uIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgbGFpZCBvdXQgcHJvcGVybHkuIEl0IGlzIGFkdmlzYWJsZSB0byBwbGFuIHRoZSBldmVudCBhcm91bmQgYSB0aGVtZSBpbiBvcmRlciB0byBjcmVhdGUgYSBmb2NhbCBwb2ludCBmb3IgdGhlIGJhcmJlY3VlIHBhcnR5LiBUaGlzIHdheSwgYWxsIGFzcGVjdHMgb2YgdGhlIHBhcnR5IHN1Y2ggYXMgdGhlIGZvb2QsIGdhbWVzIGFuZCBkZWNvcmF0aW9ucyBjYW4gYmUgZmFzaGlvbmVkIGFyb3VuZCBhIGNlbnRyYWwgdGhlbWUuIEZhdm9yaXRlIHRoZW1lcyBmb3IgYmFyYmVjdWUgcGFydGllcyBpbmNsdWRlIGEgSGF3YWlpYW4gbW90aWYsIG5vc3RhbGdpYyBzZXZlbnRpZXMgZ2V0LXRvZ2V0aGVyLCBvciwgaWYgeW91IGFyZSBuZWFyIHRoZSBzZWEsIG9wdCBmb3IgYSBiZWFjaCBiYnEgcGFydHkhJyxcbiAgcXVvdGVIZWFkbGluZTogJ1RoZSBNb3N0IFBvcHVsYXIgTmV3cycsXG4gIHF1b3RlU3ViVGl0bGU6XG4gICAgXCJLZWVwIHRyYWNrIG9mIHdoYXQncyBoYXBwZW5pbmcgd2l0aCB5b3VyIGRhdGEsIGNoYW5nZSBwZXJtaXNzaW9ucywgYWdhaW5zdCB5b3VyIGRhdGEgYW55d2hlcmUgaW4gdGhlIHdvcmxkLlwiLFxuICBxdW90ZTpcbiAgICBcIktlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLCBhZ2FpbnN0IHlvdXIgZGF0YSBhbnl3aGVyZSBpbiB0aGUgd29ybGQuXCIsXG4gIHRleHQxOlxuICAgICdCYXJiZWN1ZSBwYXJ0eSB0aXBzIGNhbiBoZWxwIGEgaG9zdCBwdXQgdG9nZXRoZXIgYW4gZXh0cmFvcmRpbmFyeSBldmVudCBmb3IgZmFtaWx5IGFuZCBmcmllbmRzLiBFYXRpbmcgb3V0ZG9vcnMgaXMgYSBmYXZvcml0ZSBwYXN0aW1lIGVuam95ZWQgYnkgZXZlcnlvbmUgYW5kIHBsYW5uaW5nIHRoZSBldmVudCBjYW4gaGVscCBtYWtlIGl0IG1vcmUgbWVtb3JhYmxlIGFuZCBzdHJlc3MtZnJlZSBmb3IgdGhlIGhvc3QuIEJpZyBvciBzbWFsbCwgYSBiYXJiZWN1ZSBwYXJ0eSByZXF1aXJlcyBhbiBhZGVxdWF0ZSBhbW91bnQgb2YgcGxhbm5pbmcgYW5kIHByZXBhcmF0aW9uIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgbGFpZCBvdXQgcHJvcGVybHkuJyxcbiAgdGV4dDI6XG4gICAgJ0JhcmJlY3VlIHBhcnR5IHRpcHMgY2FuIGhlbHAgYSBob3N0IHB1dCB0b2dldGhlciBhbiBleHRyYW9yZGluYXJ5IGV2ZW50IGZvciBmYW1pbHkgYW5kIGZyaWVuZHMuIEVhdGluZyBvdXRkb29ycyBpcyBhIGZhdm9yaXRlIHBhc3RpbWUgZW5qb3llZCBieSBldmVyeW9uZSBhbmQgcGxhbm5pbmcgdGhlIGV2ZW50IGNhbiBoZWxwIG1ha2UgaXQgbW9yZSBtZW1vcmFibGUgYW5kIHN0cmVzcy1mcmVlIGZvciB0aGUgaG9zdC4gQmlnIG9yIHNtYWxsLCBhIGJhcmJlY3VlIHBhcnR5IHJlcXVpcmVzIGFuIGFkZXF1YXRlIGFtb3VudCBvZiBwbGFubmluZyBhbmQgcHJlcGFyYXRpb24gdG8gZW5zdXJlIHRoYXQgZXZlcnl0aGluZyBpcyBsYWlkIG91dCBwcm9wZXJseS4nLFxuICB0aXRsZTogJ0FkaWRhcyB3aWxsIHJlbGVhc2UgeW91ciBmYXZvdXJpdGUgc2hvZXMnLFxuICBzdWJ0aXRsZTpcbiAgICAnR2V0IHlvdXIgZmF2b3VyaXRlIEFkaWRhcyBzaG9lcywgY2xvdGhpbmcgJiBhY2Nlc3NvcmllcyBhdCB0aGUgb2ZmaWNpYWwgd2Vic2l0ZSEgQWRpZGFzIFRyYWluaW5nLicsXG4gIGF1dGhvcjoge1xuICAgIHBob3RvOiB7XG4gICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZycsXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYXZhdGFyLnBuZyAyeCcsXG4gICAgfSxcbiAgICBuYW1lOiAnSmFjayBTbWl0aCcsXG4gICAgZGF0ZTogJ01heSAyMCwgMjAxOScsXG4gIH0sXG4gIGNvdmVyOiB7XG4gICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2Jsb2ctaW1nLTEucG5nJyxcbiAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMS5wbmcgMngnLFxuICB9LFxuICBpbWFnZXM6IFtcbiAgICB7XG4gICAgICBzcmM6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMi0zLnBuZycsXG4gICAgICBzcmNTZXQ6ICdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2FydGljbGUvYmxvZy1pbWctMi0zLnBuZyAyeCcsXG4gICAgICBjb2xzOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2Jsb2ctaW1nLTItMi5wbmcnLFxuICAgICAgc3JjU2V0OiAnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9hcnRpY2xlL2Jsb2ctaW1nLTItMi5wbmcgMngnLFxuICAgICAgY29sczogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0yLTEucG5nJyxcbiAgICAgIHNyY1NldDogJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYXJ0aWNsZS9ibG9nLWltZy0yLTEucG5nIDJ4JyxcbiAgICAgIGNvbHM6IDEsXG4gICAgfSxcbiAgXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9