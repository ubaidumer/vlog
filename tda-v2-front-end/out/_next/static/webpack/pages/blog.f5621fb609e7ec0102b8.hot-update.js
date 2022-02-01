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
    color: 'initial',
    te
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
      lineNumber: 107,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    className: classes.tag,
    key: index + 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, props.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, "Read more")));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 165,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cardProduct, index % 2 === 1 ? classes.cardProductReverse : {}),
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
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
        lineNumber: 175,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Qb3B1bGFyTmV3cy9Qb3B1bGFyTmV3cy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkUHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIm1pbkhlaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNhcmRQcm9kdWN0UmV2ZXJzZSIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsImJvcmRlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInVwIiwiYmxvZ1RpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJsaW5rIiwidGUiLCJ0YWciLCJwYWRkaW5nIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibWFyZ2luIiwiYXV0aG9yIiwiUG9wdWxhck5ld3MiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwibmFtZSIsImRhdGUiLCJzdWJ0aXRsZSIsImNsc3giLCJjb3ZlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFSyxvREFBSSxDQUNiZCxPQUFPLENBQUMvQyxXQURLLEVBRWJ3RCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0JULE9BQU8sQ0FBQy9CLGtCQUExQixHQUErQyxFQUZsQyxDQURqQjtBQUtFLGdCQUFZLEVBQ1YsTUFBQyxnQkFBRCwwSkFBc0J1QyxJQUFJLENBQUNPLEtBQTNCO0FBQWtDLFNBQUcsRUFBRVAsSUFBSSxDQUFDRSxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTko7QUFRRSxlQUFXLEVBQ1QsTUFBQyxXQUFEO0FBQ0UsV0FBSyxFQUFFRixJQUFJLENBQUNFLEtBRGQ7QUFFRSxjQUFRLEVBQUVGLElBQUksQ0FBQ0ssUUFGakI7QUFHRSxZQUFNLEVBQUVMLElBQUksQ0FBQ2QsTUFIZjtBQUlFLFVBQUksRUFBRWMsSUFBSSxDQUFDSSxJQUpiO0FBS0UsVUFBSSxFQUFFSixJQUFJLENBQUN4QixJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxDQURILENBVEYsQ0FERjtBQW9DRCxDQTVGRDs7R0FBTVcsVztVQUVZN0MsUyxFQUVGbUQsaUUsRUFDREUsK0Q7OztLQUxUUixXO0FBOEZOQSxXQUFXLENBQUNxQixTQUFaLEdBQXdCO0FBQ3RCO0FBQ0Y7QUFDQTtBQUNFbEIsV0FBUyxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFKQzs7QUFLdEI7QUFDRjtBQUNBO0FBQ0VyQixNQUFJLEVBQUVvQixpREFBUyxDQUFDRSxLQUFWLENBQWdCQztBQVJBLENBQXhCO0FBV2V6QiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmY1NjIxZmI2MDllN2VjMDEwMmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgQnV0dG9uLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XG5pbXBvcnQgeyBDYXJkUHJvZHVjdCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjYXJkUHJvZHVjdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgZmxleDogJzEgMSA1MCUnLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZmxleDogJzEgMSA1MCUnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbiAhaW1wb3J0YW50JyxcbiAgICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICB9LFxuICAgICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY2FyZFByb2R1Y3RSZXZlcnNlOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzQkIwRTUnLFxuICAgIHdpZHRoOiAxNzYsXG4gICAgaGVpZ2h0OiA0MixcbiAgICBjb2xvcjogJyMzQkIwRTUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzNCQjBFNScsXG4gICAgfSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgdGFnczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxuICBsaW5rOiB7XG4gICAgY29sb3I6ICdpbml0aWFsJyxcbiAgICB0ZVxuICB9LFxuICB0YWc6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEgLyAyLCAxKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSAvIDIpLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxLCAxLCAwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMiwgMiwgMCksXG4gICAgfSxcbiAgfSxcbiAgYXV0aG9yOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBQb3B1bGFyTmV3cyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBCbG9nTWVkaWFDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxJbWFnZVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBCbG9nQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nQ29udGVudH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAge3Byb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30ga2V5PXtpbmRleCArIDF9PlxuICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nVGl0bGV9XG4gICAgICA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiL2Jsb2ctYXJ0aWNsZVwiPntwcm9wcy50aXRsZX08L2E+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgID5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICB7cHJvcHMuc3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiL2Jsb2ctYXJ0aWNsZVwiPlJlYWQgbW9yZTwvYT5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgdGl0bGU9XCJUaGUgTW9zdCBQb3B1bGFyIE5ld3NcIlxuICAgICAgICBzdWJ0aXRsZT1cIktlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLCBhbmQgcnVuIHJlcG9ydHMgYWdhaW5zdCB5b3VyIGRhdGEgYW55d2hlcmUgaW4gdGhlIHdvcmxkLiBLZWVwIHRyYWNrIG9mIHdoYXQncyBoYXBwZW5pbmcgd2l0aCB5b3VyIGRhdGEsIGNoYW5nZSBwZXJtaXNzaW9ucy5cIlxuICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzTWQgPyA0IDogMn0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0ga2V5PXtpbmRleH0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8Q2FyZFByb2R1Y3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgIGNsYXNzZXMuY2FyZFByb2R1Y3QsXG4gICAgICAgICAgICAgICAgaW5kZXggJSAyID09PSAxID8gY2xhc3Nlcy5jYXJkUHJvZHVjdFJldmVyc2UgOiB7fSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBvcHVsYXJOZXdzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhck5ld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9