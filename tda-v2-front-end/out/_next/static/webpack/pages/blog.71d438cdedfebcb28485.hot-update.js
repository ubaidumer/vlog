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
  }, props.tags.map((item, index) => __jsx("a", {
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    className: classes.tag,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, item)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 140,
      columnNumber: 7
    }
  }, "Read more"));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cardProduct, index % 2 === 1 ? classes.cardProductReverse : {}),
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
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
        lineNumber: 173,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Qb3B1bGFyTmV3cy9Qb3B1bGFyTmV3cy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkUHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIm1pbkhlaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNhcmRQcm9kdWN0UmV2ZXJzZSIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsImJvcmRlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInVwIiwiYmxvZ1RpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJwYWRkaW5nIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibWFyZ2luIiwiYXV0aG9yIiwiUG9wdWxhck5ld3MiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwibmFtZSIsImRhdGUiLCJzdWJ0aXRsZSIsImNsc3giLCJjb3ZlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUksQ0FBQ0UsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5KO0FBUUUsZUFBVyxFQUNULE1BQUMsV0FBRDtBQUNFLFdBQUssRUFBRUYsSUFBSSxDQUFDRSxLQURkO0FBRUUsY0FBUSxFQUFFRixJQUFJLENBQUNLLFFBRmpCO0FBR0UsWUFBTSxFQUFFTCxJQUFJLENBQUNkLE1BSGY7QUFJRSxVQUFJLEVBQUVjLElBQUksQ0FBQ0ksSUFKYjtBQUtFLFVBQUksRUFBRUosSUFBSSxDQUFDdEIsSUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsQ0FESCxDQVRGLENBREY7QUFvQ0QsQ0E5RkQ7O0dBQU1TLFc7VUFFWTNDLFMsRUFFRmlELGlFLEVBQ0RFLCtEOzs7S0FMVFIsVztBQWdHTkEsV0FBVyxDQUFDcUIsU0FBWixHQUF3QjtBQUN0QjtBQUNGO0FBQ0E7QUFDRWxCLFdBQVMsRUFBRW1CLGlEQUFTLENBQUNDLE1BSkM7O0FBS3RCO0FBQ0Y7QUFDQTtBQUNFckIsTUFBSSxFQUFFb0IsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQkM7QUFSQSxDQUF4QjtBQVdlekIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy43MWQ0MzhjZGVkZmViY2IyODQ4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIGZsZXg6ICcxIDEgNTAlJyxcbiAgICB9LFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgbWluSGVpZ2h0OiAzMDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGZsZXg6ICcxIDEgNTAlJyxcbiAgICAgIHBhZGRpbmdSaWdodDogMjAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4gIWltcG9ydGFudCcsXG4gICAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgfSxcbiAgICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgICAgIGZsZXg6ICcxIDEgMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhcmRQcm9kdWN0UmV2ZXJzZToge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICB9LFxuICBibG9nQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjM0JCMEU1JyxcbiAgICB3aWR0aDogMTc2LFxuICAgIGhlaWdodDogNDIsXG4gICAgY29sb3I6ICcjM0JCMEU1JyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZDogJyMzQkIwRTUnLFxuICAgIH0sXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICB9LFxuICBibG9nVGl0bGU6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgdGFnOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxIC8gMiwgMSksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSwgMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDIsIDIsIDApLFxuICAgIH0sXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUG9wdWxhck5ld3MgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2VcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0NvbnRlbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgIHtwcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YSBocmVmPVwiL2Jsb2ctYXJ0aWNsZVwiPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nVGl0bGV9XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfVxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgID5cbiAgICAgICAgUmVhZCBtb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cbiAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgIHRpdGxlPVwiVGhlIE1vc3QgUG9wdWxhciBOZXdzXCJcbiAgICAgICAgc3VidGl0bGU9XCJLZWVwIHRyYWNrIG9mIHdoYXQncyBoYXBwZW5pbmcgd2l0aCB5b3VyIGRhdGEsIGNoYW5nZSBwZXJtaXNzaW9ucywgYW5kIHJ1biByZXBvcnRzIGFnYWluc3QgeW91ciBkYXRhIGFueXdoZXJlIGluIHRoZSB3b3JsZC4gS2VlcCB0cmFjayBvZiB3aGF0J3MgaGFwcGVuaW5nIHdpdGggeW91ciBkYXRhLCBjaGFuZ2UgcGVybWlzc2lvbnMuXCJcbiAgICAgICAgc3VidGl0bGVQcm9wcz17e1xuICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxuICAgICAgICB9fVxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGtleT17aW5kZXh9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPENhcmRQcm9kdWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgICBjbGFzc2VzLmNhcmRQcm9kdWN0LFxuICAgICAgICAgICAgICAgIGluZGV4ICUgMiA9PT0gMSA/IGNsYXNzZXMuY2FyZFByb2R1Y3RSZXZlcnNlIDoge30sXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3B1bGFyTmV3cy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJOZXdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==