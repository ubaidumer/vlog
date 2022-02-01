webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/MostViewedArticles/MostViewedArticles.js":
/*!****************************************************************************!*\
  !*** ./src/views/Blog/components/MostViewedArticles/MostViewedArticles.js ***!
  \****************************************************************************/
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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\MostViewedArticles\\MostViewedArticles.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2)
    }
  },
  gridItem: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      borderBottom: `1px solid ${_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[200]}`
    },
    '&:last-child': {
      marginBottom: 0,
      borderBottom: 0,
      paddingBottom: 0
    }
  },
  cardProduct: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    background: 'transparent',
    '& .card-product__content': {
      padding: theme.spacing(2, 2, 0, 2),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 0, 0, 2)
      }
    },
    '& .card-product__media': {
      [theme.breakpoints.up('sm')]: {
        height: 170,
        width: 170,
        '& img': {
          height: 170,
          width: 170
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column !important',
      '& .card-product__content': {
        flex: '1 1 100%'
      },
      '& .card-product__media': {
        flex: '1 1 100%',
        width: '100%'
      }
    }
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
    marginTop: theme.spacing(1),
    alignSelf: 'flex-start'
  },
  blogTitle: {
    fontWeight: 700
  },
  author: {
    margin: theme.spacing(1, 0)
  },
  title: {
    fontWeight: 'bold'
  },
  descriptionCta: {
    maxWidth: '100%',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
      padding: 0
    },
    [theme.breakpoints.up('sm')]: {
      padding: 0
    }
  },
  link: {
    color: 'inherit'
  }
}));

const MostViewedArticles = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();

  const BlogMediaContent = props => __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, props.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "subtitle1",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, props.subtitle), __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_7__["LearnMoreLink"], {
    href: "/blog-article",
    title: 'Learn more',
    variant: "body1",
    className: classes.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_8__["DescriptionCta"], {
    title: "Latest Stories",
    align: 'left',
    titleProps: {
      variant: 'h4',
      color: 'textPrimary',
      className: classes.title,
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
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    key: index,
    "data-aos": "fade-up",
    className: classes.gridItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 177,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  })))));
};

_s(MostViewedArticles, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MostViewedArticles;
MostViewedArticles.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MostViewedArticles);

var _c;

$RefreshReg$(_c, "MostViewedArticles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Nb3N0Vmlld2VkQXJ0aWNsZXMvTW9zdFZpZXdlZEFydGljbGVzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiZ3JpZEl0ZW0iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidXAiLCJib3JkZXJCb3R0b20iLCJjb2xvcnMiLCJncmV5IiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwid2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsImJsb2dUaXRsZSIsImZvbnRXZWlnaHQiLCJhdXRob3IiLCJtYXJnaW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uQ3RhIiwibWF4V2lkdGgiLCJsaW5rIiwiY29sb3IiLCJNb3N0Vmlld2VkQXJ0aWNsZXMiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm5hbWUiLCJkYXRlIiwic3VidGl0bGUiLCJjbHN4IiwidmFyaWFudCIsIm5vV3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvdmVyIiwidGFncyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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LE1BQUMsV0FBRDtBQUNFLFdBQUssRUFBRW9CLElBQUksQ0FBQ3BCLEtBRGQ7QUFFRSxjQUFRLEVBQUVvQixJQUFJLENBQUNMLFFBRmpCO0FBR0UsWUFBTSxFQUFFSyxJQUFJLENBQUN0QixNQUhmO0FBSUUsVUFBSSxFQUFFc0IsSUFBSSxDQUFDTixJQUpiO0FBS0UsVUFBSSxFQUFFTSxJQUFJLENBQUNHLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURELENBREgsQ0FiRixDQURGO0FBMkNELENBdkZEOztHQUFNbEIsa0I7VUFFWTNDLFM7OztLQUZaMkMsa0I7QUF5Rk5BLGtCQUFrQixDQUFDbUIsU0FBbkIsR0FBK0I7QUFDN0I7QUFDRjtBQUNBO0FBQ0VoQixXQUFTLEVBQUVpQixpREFBUyxDQUFDQyxNQUpROztBQUs3QjtBQUNGO0FBQ0E7QUFDRW5CLE1BQUksRUFBRWtCLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDO0FBUk8sQ0FBL0I7QUFXZXZCLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZDhhNmJmNjE4ZmI0ZTNmZjFkMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGNvbG9ycywgQnV0dG9uLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UsIExlYXJuTW9yZUxpbmsgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcbmltcG9ydCB7IERlc2NyaXB0aW9uQ3RhIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygtMiksXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygtMiksXG4gICAgfSxcbiAgfSxcbiAgZ3JpZEl0ZW06IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXlbMjAwXX1gLFxuICAgIH0sXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgfSxcbiAgfSxcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMiwgMCwgMiksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMCwgMCwgMiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgIGhlaWdodDogMTcwLFxuICAgICAgICB3aWR0aDogMTcwLFxuICAgICAgICAnJiBpbWcnOiB7XG4gICAgICAgICAgaGVpZ2h0OiAxNzAsXG4gICAgICAgICAgd2lkdGg6IDE3MCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4gIWltcG9ydGFudCcsXG4gICAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgfSxcbiAgICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ0NvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgYXV0aG9yOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgZGVzY3JpcHRpb25DdGE6IHtcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gIH0sXG4gIGxpbms6IHtcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICB9LFxufSkpO1xuXG5jb25zdCBNb3N0Vmlld2VkQXJ0aWNsZXMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dDb250ZW50fT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgPlxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30gaHJlZj1cIi9ibG9nLWFydGljbGVcIj5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfVxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxMZWFybk1vcmVMaW5rXG4gICAgICAgIGhyZWY9XCIvYmxvZy1hcnRpY2xlXCJcbiAgICAgICAgdGl0bGU9eydMZWFybiBtb3JlJ31cbiAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxEZXNjcmlwdGlvbkN0YVxuICAgICAgICB0aXRsZT1cIkxhdGVzdCBTdG9yaWVzXCJcbiAgICAgICAgYWxpZ249eydsZWZ0J31cbiAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdoNCcsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpdGxlLFxuICAgICAgICAgIG5vV3JhcDogZmFsc2UsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkN0YX1cbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEl0ZW19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRQcm9kdWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJvZHVjdH1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vc3RWaWV3ZWRBcnRpY2xlcy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vc3RWaWV3ZWRBcnRpY2xlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=