webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/FeaturedArticles/FeaturedArticles.js":
/*!************************************************************************!*\
  !*** ./src/views/Blog/components/FeaturedArticles/FeaturedArticles.js ***!
  \************************************************************************/
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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\FeaturedArticles\\FeaturedArticles.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  wrapper: {
    background: '#F5F7FF',
    padding: 50
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    background: 'transparent',
    paddingBottom: theme.spacing(2),
    '& .card-product__content': {
      padding: theme.spacing(4),
      zIndex: 1,
      background: theme.palette.background.paper,
      width: '90%',
      margin: '0 auto',
      marginTop: theme.spacing(-6),
      borderRadius: theme.spacing(1),
      boxShadow: '0 3px 10px 2px rgba(0, 0, 0, 0.1)'
    },
    '& .card-product__media': {
      minHeight: 300,
      '& img': {
        transitionDuration: '.7s',
        transform: 'scale(1.0)'
      }
    },
    '&:hover': {
      '& .card-product__media img': {
        transform: 'scale(1.2)'
      }
    }
  },
  image: {
    objectFit: 'cover'
  },
  blogTitle: {
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
  },
  title: {
    fontWeight: 'bold'
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4)
    }
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
  link: {
    color: 'inherit'
  }
}));

const FeaturedArticles = props => {
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
      lineNumber: 110,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    className: classes.tag,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, props.subtitle));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(className, classes.wrapper)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_8__["DescriptionCta"], {
    title: "Featured articles",
    subtitle: "Keep track of what's happening with your data, change permissions.",
    primaryCta: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classes.button,
      variant: "outlined",
      color: "primary",
      size: "large",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    }, "View more"),
    align: 'left',
    titleProps: {
      variant: 'h4',
      color: 'textPrimary',
      className: classes.title
    },
    subtitleProps: {
      color: 'textPrimary',
      noWrap: false
    },
    className: classes.descriptionCta,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
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
        lineNumber: 185,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  })))));
};

_s(FeaturedArticles, "9025em9jOQdmzpWvV0plUgcVqs8=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"]];
});

_c = FeaturedArticles;
FeaturedArticles.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FeaturedArticles);

var _c;

$RefreshReg$(_c, "FeaturedArticles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9GZWF0dXJlZEFydGljbGVzL0ZlYXR1cmVkQXJ0aWNsZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid3JhcHBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJib3hTaGFkb3ciLCJwYWRkaW5nQm90dG9tIiwiekluZGV4IiwicGFsZXR0ZSIsInBhcGVyIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtaW5IZWlnaHQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2Zvcm0iLCJpbWFnZSIsIm9iamVjdEZpdCIsImJsb2dUaXRsZSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwiYnJlYWtwb2ludHMiLCJ1cCIsImF1dGhvciIsInRpdGxlIiwiZGVzY3JpcHRpb25DdGEiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJib3JkZXIiLCJoZWlnaHQiLCJhbGlnblNlbGYiLCJsaW5rIiwiRmVhdHVyZWRBcnRpY2xlcyIsInByb3BzIiwiZGF0YSIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsImRlZmF1bHRNYXRjaGVzIiwiQmxvZ01lZGlhQ29udGVudCIsIkJsb2dDb250ZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImRhdGUiLCJzdWJ0aXRsZSIsImNsc3giLCJ2YXJpYW50Iiwibm9XcmFwIiwiY292ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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L3dlYnBhY2svcGFnZXMvYmxvZy41YjcwOWYxZTllMzIzNmI2ZTlmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnksIEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHdyYXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiAnI0Y1RjdGRicsXG4gICAgcGFkZGluZzogNTAsXG4gIH0sXG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICB3aWR0aDogJzkwJScsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKC02KSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIG1pbkhlaWdodDogMzAwLFxuICAgICAgJyYgaW1nJzoge1xuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcuN3MnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjApJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhIGltZyc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yKScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICB9LFxuICBibG9nVGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgfSxcbiAgdGFnOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxIC8gMiwgMSksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEgLyAyKSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSwgMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDIsIDIsIDApLFxuICAgIH0sXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXG4gICAgfSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uQ3RhOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcbiAgICB9LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IEZlYXR1cmVkQXJ0aWNsZXMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2VcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICB7cHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgID5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgY2xhc3Nlcy53cmFwcGVyKX0gey4uLnJlc3R9PlxuICAgICAgPERlc2NyaXB0aW9uQ3RhXG4gICAgICAgIHRpdGxlPVwiRmVhdHVyZWQgYXJ0aWNsZXNcIlxuICAgICAgICBzdWJ0aXRsZT1cIktlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLlwiXG4gICAgICAgIHByaW1hcnlDdGE9e1xuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgYWxpZ249eydsZWZ0J31cbiAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdoNCcsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpdGxlLFxuICAgICAgICB9fVxuICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgICAgbm9XcmFwOiBmYWxzZSxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQ3RhfVxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01kID8gNCA6IDJ9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFByb2R1Y3R9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GZWF0dXJlZEFydGljbGVzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRBcnRpY2xlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=