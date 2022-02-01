webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/PopularNews/PopularNews.js":
/*!**************************************************************!*\
  !*** ./src/views/Blog/components/PopularNews/PopularNews.js ***!
  \**************************************************************/
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
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\PopularNews\\PopularNews.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flex: '1 1 50%'
    },
    '& .card-product__media': {
      minHeight: 300,
      height: '100%',
      flex: '1 1 50%',
      paddingRight: 20
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      '& .card-product__content': {
        flex: '1 1 100%'
      },
      '& .card-product__media': {
        paddingRight: 0,
        flex: '1 1 100%',
        width: '100%'
      }
    }
  },
  cardProductReverse: {
    flexDirection: 'row-reverse'
  },
  image: {
    objectFit: 'cover'
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  button: {
    border: '1px solid #3BB0E5',
    width: 176,
    height: 42,
    color: '#3BB0E5',
    '&:hover': {
      color: 'white',
      background: '#3BB0E5'
    },
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  blogTitle: {
    textTransform: 'uppercase',
    fontWeight: 700
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0)
    }
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0)
    }
  }
}));

const PopularNews = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const BlogMediaContent = props => __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    className: classes.tag,
    key: index + 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, props.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, props.subtitle), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outlined",
    color: "primary",
    size: "large",
    className: classes.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "Read more")));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_8__["SectionHeader"], {
    title: "The Most Popular News",
    subtitle: "Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",
    subtitleProps: {
      color: 'textPrimary'
    },
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cardProduct, index % 2 === 1 ? classes.cardProductReverse : {}),
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    })),
    cardContent: __jsx(BlogContent, {
      title: item.title,
      subtitle: item.subtitle,
      author: item.author,
      date: item.date,
      tags: item.tags,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  })))));
};

_s(PopularNews, "9025em9jOQdmzpWvV0plUgcVqs8=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"]];
});

_c = PopularNews;
PopularNews.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PopularNews);

var _c;

$RefreshReg$(_c, "PopularNews");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Qb3B1bGFyTmV3cy9Qb3B1bGFyTmV3cy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkUHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIm1pbkhlaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNhcmRQcm9kdWN0UmV2ZXJzZSIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsImJvcmRlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInVwIiwiYmxvZ1RpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJwYWRkaW5nIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibWFyZ2luIiwiYXV0aG9yIiwiUG9wdWxhck5ld3MiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJ0aXRsZSIsIm5hbWUiLCJkYXRlIiwic3VidGl0bGUiLCJjbHN4IiwiY292ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFdBREssRUFFYnNELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQlQsT0FBTyxDQUFDN0Isa0JBQTFCLEdBQStDLEVBRmxDLENBRGpCO0FBS0UsZ0JBQVksRUFDVixNQUFDLGdCQUFELDBKQUFzQnFDLElBQUksQ0FBQ1EsS0FBM0I7QUFBa0MsU0FBRyxFQUFFUixJQUFJLENBQUNHLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FOSjtBQVFFLGVBQVcsRUFDVCxNQUFDLFdBQUQ7QUFDRSxXQUFLLEVBQUVILElBQUksQ0FBQ0csS0FEZDtBQUVFLGNBQVEsRUFBRUgsSUFBSSxDQUFDTSxRQUZqQjtBQUdFLFlBQU0sRUFBRU4sSUFBSSxDQUFDZCxNQUhmO0FBSUUsVUFBSSxFQUFFYyxJQUFJLENBQUNLLElBSmI7QUFLRSxVQUFJLEVBQUVMLElBQUksQ0FBQ3RCLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELENBREgsQ0FURixDQURGO0FBb0NELENBNUZEOztHQUFNUyxXO1VBRVkzQyxTLEVBRUZpRCxpRSxFQUNERSwrRDs7O0tBTFRSLFc7QUE4Rk5BLFdBQVcsQ0FBQ3NCLFNBQVosR0FBd0I7QUFDdEI7QUFDRjtBQUNBO0FBQ0VuQixXQUFTLEVBQUVvQixpREFBUyxDQUFDQyxNQUpDOztBQUt0QjtBQUNGO0FBQ0E7QUFDRXRCLE1BQUksRUFBRXFCLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDO0FBUkEsQ0FBeEI7QUFXZTFCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMWQyZGFiNjY4Zjc2OTViZDQxN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBCdXR0b24sIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBmbGV4OiAnMSAxIDUwJScsXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIG1pbkhlaWdodDogMzAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBmbGV4OiAnMSAxIDUwJScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uICFpbXBvcnRhbnQnLFxuICAgICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgIH0sXG4gICAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjYXJkUHJvZHVjdFJldmVyc2U6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ0NvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcbiAgICB9LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIHRhZzoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSAvIDIsIDEpLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxIC8gMiksXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDEsIDApLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAyLCAyLCAwKSxcbiAgICB9LFxuICB9LFxuICBhdXRob3I6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IFBvcHVsYXJOZXdzID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dDb250ZW50fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICB7cHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e2luZGV4ICsgMX0+XG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dUaXRsZX1cbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCIvYmxvZy1hcnRpY2xlXCI+e3Byb3BzLnRpdGxlfTwvYT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfVxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCIvYmxvZy1hcnRpY2xlXCI+UmVhZCBtb3JlPC9hPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XG4gICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICB0aXRsZT1cIlRoZSBNb3N0IFBvcHVsYXIgTmV3c1wiXG4gICAgICAgIHN1YnRpdGxlPVwiS2VlcCB0cmFjayBvZiB3aGF0J3MgaGFwcGVuaW5nIHdpdGggeW91ciBkYXRhLCBjaGFuZ2UgcGVybWlzc2lvbnMsIGFuZCBydW4gcmVwb3J0cyBhZ2FpbnN0IHlvdXIgZGF0YSBhbnl3aGVyZSBpbiB0aGUgd29ybGQuIEtlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLlwiXG4gICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jYXJkUHJvZHVjdCxcbiAgICAgICAgICAgICAgICBpbmRleCAlIDIgPT09IDEgPyBjbGFzc2VzLmNhcmRQcm9kdWN0UmV2ZXJzZSA6IHt9LFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtZWRpYUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nTWVkaWFDb250ZW50IHsuLi5pdGVtLmNvdmVyfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FyZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nQ29udGVudFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9wdWxhck5ld3MucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyTmV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=