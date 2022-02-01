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
  link: {
    color: 'inherit'
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
      lineNumber: 106,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    className: classes.tag,
    key: index + 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, props.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, "Read more")));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 158,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cardProduct, index % 2 === 1 ? classes.cardProductReverse : {}),
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
        lineNumber: 178,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Qb3B1bGFyTmV3cy9Qb3B1bGFyTmV3cy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkUHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIm1pbkhlaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNhcmRQcm9kdWN0UmV2ZXJzZSIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsImJvcmRlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInVwIiwiYmxvZ1RpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJsaW5rIiwidGFnIiwicGFkZGluZyIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIm1hcmdpbiIsImF1dGhvciIsIlBvcHVsYXJOZXdzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwiZGVmYXVsdE1hdGNoZXMiLCJCbG9nTWVkaWFDb250ZW50IiwiQmxvZ0NvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsIm5hbWUiLCJkYXRlIiwic3VidGl0bGUiLCJjbHN4IiwiY292ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGdFQUFEO0FBQ0UsYUFBUyxFQUFFSyxvREFBSSxDQUNiZCxPQUFPLENBQUM5QyxXQURLLEVBRWJ1RCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0JULE9BQU8sQ0FBQzlCLGtCQUExQixHQUErQyxFQUZsQyxDQURqQjtBQUtFLGdCQUFZLEVBQ1YsTUFBQyxnQkFBRCwwSkFBc0JzQyxJQUFJLENBQUNPLEtBQTNCO0FBQWtDLFNBQUcsRUFBRVAsSUFBSSxDQUFDRSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTko7QUFRRSxlQUFXLEVBQ1QsTUFBQyxXQUFEO0FBQ0UsV0FBSyxFQUFFRixJQUFJLENBQUNFLEtBRGQ7QUFFRSxjQUFRLEVBQUVGLElBQUksQ0FBQ0ssUUFGakI7QUFHRSxZQUFNLEVBQUVMLElBQUksQ0FBQ2QsTUFIZjtBQUlFLFVBQUksRUFBRWMsSUFBSSxDQUFDSSxJQUpiO0FBS0UsVUFBSSxFQUFFSixJQUFJLENBQUN2QixJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxDQURILENBVEYsQ0FERjtBQW9DRCxDQWhHRDs7R0FBTVUsVztVQUVZNUMsUyxFQUVGa0QsaUUsRUFDREUsK0Q7OztLQUxUUixXO0FBa0dOQSxXQUFXLENBQUNxQixTQUFaLEdBQXdCO0FBQ3RCO0FBQ0Y7QUFDQTtBQUNFbEIsV0FBUyxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFKQzs7QUFLdEI7QUFDRjtBQUNBO0FBQ0VyQixNQUFJLEVBQUVvQixpREFBUyxDQUFDRSxLQUFWLENBQWdCQztBQVJBLENBQXhCO0FBV2V6QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjczOWZmMDg1NmJlZmQ4MmFiODFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgQnV0dG9uLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XG5pbXBvcnQgeyBDYXJkUHJvZHVjdCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjYXJkUHJvZHVjdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgZmxleDogJzEgMSA1MCUnLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZmxleDogJzEgMSA1MCUnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbiAhaW1wb3J0YW50JyxcbiAgICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICB9LFxuICAgICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY2FyZFByb2R1Y3RSZXZlcnNlOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzQkIwRTUnLFxuICAgIHdpZHRoOiAxNzYsXG4gICAgaGVpZ2h0OiA0MixcbiAgICBjb2xvcjogJyMzQkIwRTUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzNCQjBFNScsXG4gICAgfSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgdGFnczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxuICBsaW5rOiB7XG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgfSxcbiAgdGFnOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxIC8gMiwgMSksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSwgMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDIsIDIsIDApLFxuICAgIH0sXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUG9wdWxhck5ld3MgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2VcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0NvbnRlbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgIHtwcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9IGtleT17aW5kZXggKyAxfT5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgPlxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cIi9ibG9nLWFydGljbGVcIj5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfVxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCIvYmxvZy1hcnRpY2xlXCI+XG4gICAgICAgICAgUmVhZCBtb3JlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgdGl0bGU9XCJUaGUgTW9zdCBQb3B1bGFyIE5ld3NcIlxuICAgICAgICBzdWJ0aXRsZT1cIktlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLCBhbmQgcnVuIHJlcG9ydHMgYWdhaW5zdCB5b3VyIGRhdGEgYW55d2hlcmUgaW4gdGhlIHdvcmxkLiBLZWVwIHRyYWNrIG9mIHdoYXQncyBoYXBwZW5pbmcgd2l0aCB5b3VyIGRhdGEsIGNoYW5nZSBwZXJtaXNzaW9ucy5cIlxuICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0ga2V5PXtpbmRleH0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8Q2FyZFByb2R1Y3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgIGNsYXNzZXMuY2FyZFByb2R1Y3QsXG4gICAgICAgICAgICAgICAgaW5kZXggJSAyID09PSAxID8gY2xhc3Nlcy5jYXJkUHJvZHVjdFJldmVyc2UgOiB7fSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBvcHVsYXJOZXdzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhck5ld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9