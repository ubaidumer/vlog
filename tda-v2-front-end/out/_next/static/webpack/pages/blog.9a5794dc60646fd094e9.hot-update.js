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
  }, __jsx("a", {
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
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
  }, props.subtitle), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outlined",
    color: "primary",
    size: "large",
    className: classes.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "Read more"));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 152,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: isMd ? 4 : 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.cardProduct, index % 2 === 1 ? classes.cardProductReverse : {}),
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
        lineNumber: 172,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Qb3B1bGFyTmV3cy9Qb3B1bGFyTmV3cy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkUHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsImJveFNoYWRvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZmxleCIsIm1pbkhlaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImNhcmRQcm9kdWN0UmV2ZXJzZSIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsImJvcmRlciIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsInVwIiwiYmxvZ1RpdGxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJwYWRkaW5nIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibWFyZ2luIiwiYXV0aG9yIiwiUG9wdWxhck5ld3MiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNNZCIsInVzZU1lZGlhUXVlcnkiLCJkZWZhdWx0TWF0Y2hlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwibmFtZSIsImRhdGUiLCJzdWJ0aXRsZSIsImNsc3giLCJjb3ZlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsY0FBVSxFQUFFLFFBRkQ7QUFHWEMsVUFBTSxFQUFFLE1BSEc7QUFJWEMsZ0JBQVksRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUpIO0FBS1hDLGFBQVMsRUFBRSxNQUxBO0FBTVgsZ0NBQTRCO0FBQzFCQyxnQkFBVSxFQUFFUixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBRGM7QUFFMUJHLG1CQUFhLEVBQUVULEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FGVztBQUcxQkksVUFBSSxFQUFFO0FBSG9CLEtBTmpCO0FBV1gsOEJBQTBCO0FBQ3hCQyxlQUFTLEVBQUUsR0FEYTtBQUV4QlAsWUFBTSxFQUFFLE1BRmdCO0FBR3hCTSxVQUFJLEVBQUUsU0FIa0I7QUFJeEJFLGtCQUFZLEVBQUU7QUFKVSxLQVhmO0FBaUJYLEtBQUNaLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsbUJBQWEsRUFBRSxtQkFEZTtBQUU5QixrQ0FBNEI7QUFDMUJMLFlBQUksRUFBRTtBQURvQixPQUZFO0FBSzlCLGdDQUEwQjtBQUN4QkUsb0JBQVksRUFBRSxDQURVO0FBRXhCRixZQUFJLEVBQUUsVUFGa0I7QUFHeEJNLGFBQUssRUFBRTtBQUhpQjtBQUxJO0FBakJyQixHQUR3QjtBQThCckNDLG9CQUFrQixFQUFFO0FBQ2xCRixpQkFBYSxFQUFFO0FBREcsR0E5QmlCO0FBaUNyQ0csT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRTtBQUROLEdBakM4QjtBQW9DckNDLGFBQVcsRUFBRTtBQUNYbEIsV0FBTyxFQUFFLE1BREU7QUFFWGEsaUJBQWEsRUFBRSxRQUZKO0FBR1hNLGtCQUFjLEVBQUUsUUFITDtBQUlYakIsVUFBTSxFQUFFO0FBSkcsR0FwQ3dCO0FBMENyQ2tCLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUUsbUJBREY7QUFFTlAsU0FBSyxFQUFFLEdBRkQ7QUFHTlosVUFBTSxFQUFFLEVBSEY7QUFJTm9CLFNBQUssRUFBRSxTQUpEO0FBS04sZUFBVztBQUNUQSxXQUFLLEVBQUUsT0FERTtBQUVUQyxnQkFBVSxFQUFFO0FBRkgsS0FMTDtBQVNOQyxhQUFTLEVBQUUxQixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBVEw7QUFVTnFCLGFBQVMsRUFBRSxZQVZMO0FBV04sS0FBQzNCLEtBQUssQ0FBQ2EsV0FBTixDQUFrQmUsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QkYsZUFBUyxFQUFFMUIsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQURpQjtBQVh4QixHQTFDNkI7QUF5RHJDdUIsV0FBUyxFQUFFO0FBQ1RDLGlCQUFhLEVBQUUsV0FETjtBQUVUQyxjQUFVLEVBQUU7QUFGSCxHQXpEMEI7QUE2RHJDQyxNQUFJLEVBQUU7QUFDSjlCLFdBQU8sRUFBRSxNQURMO0FBRUorQixZQUFRLEVBQUU7QUFGTixHQTdEK0I7QUFpRXJDQyxLQUFHLEVBQUU7QUFDSEMsV0FBTyxFQUFFbkMsS0FBSyxDQUFDTSxPQUFOLENBQWMsSUFBSSxDQUFsQixFQUFxQixDQUFyQixDQUROO0FBRUhELGdCQUFZLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjLElBQUksQ0FBbEIsQ0FGWDtBQUdIbUIsY0FBVSxFQUFFekIsS0FBSyxDQUFDb0MsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQUgvQjtBQUlIZCxTQUFLLEVBQUUsT0FKSjtBQUtIZSxVQUFNLEVBQUV2QyxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBTEw7QUFNSCxLQUFDTixLQUFLLENBQUNhLFdBQU4sQ0FBa0JlLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJXLFlBQU0sRUFBRXZDLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFEb0I7QUFOM0IsR0FqRWdDO0FBMkVyQ2tDLFFBQU0sRUFBRTtBQUNORCxVQUFNLEVBQUV2QyxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREY7QUFFTixLQUFDTixLQUFLLENBQUNhLFdBQU4sQ0FBa0JlLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJXLFlBQU0sRUFBRXZDLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFEb0I7QUFGeEI7QUEzRTZCLENBQUwsQ0FBTixDQUE1Qjs7QUFtRkEsTUFBTW1DLFdBQVcsR0FBR0MsS0FBSyxJQUFJO0FBQUE7O0FBQzNCLFFBQU07QUFBRUMsUUFBRjtBQUFRQztBQUFSLE1BQStCRixLQUFyQztBQUFBLFFBQTRCRyxJQUE1Qix1S0FBcUNILEtBQXJDOztBQUNBLFFBQU1JLE9BQU8sR0FBR2hELFNBQVMsRUFBekI7QUFFQSxRQUFNRSxLQUFLLEdBQUcrQyx5RUFBUSxFQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsdUVBQWEsQ0FBQ2pELEtBQUssQ0FBQ2EsV0FBTixDQUFrQmUsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxFQUE2QjtBQUNyRHNCLGtCQUFjLEVBQUU7QUFEcUMsR0FBN0IsQ0FBMUI7O0FBSUEsUUFBTUMsZ0JBQWdCLEdBQUdULEtBQUssSUFDNUIsTUFBQyxzREFBRCwwSkFDTUEsS0FETjtBQUVFLGFBQVMsRUFBRUksT0FBTyxDQUFDNUIsS0FGckI7QUFHRSxhQUFTLEVBQUU7QUFBRUYsV0FBSyxFQUFFLE1BQVQ7QUFBaUJaLFlBQU0sRUFBRTtBQUF6QixLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjs7QUFRQSxRQUFNZ0QsV0FBVyxHQUFHVixLQUFLLElBQ3ZCO0FBQUssYUFBUyxFQUFFSSxPQUFPLENBQUMxQixXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUUwQixPQUFPLENBQUNkLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1UsS0FBSyxDQUFDVixJQUFOLENBQVdxQixHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ2QsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxTQUFwQjtBQUE4QixhQUFTLEVBQUVULE9BQU8sQ0FBQ1osR0FBakQ7QUFBc0QsT0FBRyxFQUFFcUIsS0FBSyxHQUFHLENBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRCxJQUZILENBREQsQ0FESCxDQURGLEVBU0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsU0FBSyxFQUFDLGFBRlI7QUFHRSxhQUFTLEVBQUVSLE9BQU8sQ0FBQ2pCLFNBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR2EsS0FBSyxDQUFDYyxLQUxULENBVEYsRUFnQkUsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxPQURWO0FBRUUsU0FBSyxFQUFDLGFBRlI7QUFHRSxhQUFTLEVBQUVWLE9BQU8sQ0FBQ04sTUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsS0FBSyxDQUFDRixNQUFOLENBQWFpQixJQURoQixTQUN5QmYsS0FBSyxDQUFDZ0IsSUFEL0IsQ0FMRixDQWhCRixFQXlCRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQWdDLFNBQUssRUFBQyxhQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0doQixLQUFLLENBQUNpQixRQURULENBekJGLEVBNEJFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsVUFEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxhQUFTLEVBQUViLE9BQU8sQ0FBQ3hCLE1BSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJGLENBREY7O0FBd0NBLFNBQ0U7QUFBSyxhQUFTLEVBQUVzQjtBQUFoQixLQUErQkMsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUMsdUJBRFI7QUFFRSxZQUFRLEVBQUMsZ01BRlg7QUFHRSxpQkFBYSxFQUFFO0FBQ2JyQixXQUFLLEVBQUU7QUFETSxLQUhqQjtBQU1FLGdCQUFTLFNBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUV3QixJQUFJLEdBQUcsQ0FBSCxHQUFPLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsSUFBSSxDQUFDVSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1IsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE9BQUcsRUFBRUEsS0FBeEI7QUFBK0IsZ0JBQVMsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVLLG9EQUFJLENBQ2JkLE9BQU8sQ0FBQzdDLFdBREssRUFFYnNELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQlQsT0FBTyxDQUFDN0Isa0JBQTFCLEdBQStDLEVBRmxDLENBRGpCO0FBS0UsZ0JBQVksRUFDVixNQUFDLGdCQUFELDBKQUFzQnFDLElBQUksQ0FBQ08sS0FBM0I7QUFBa0MsU0FBRyxFQUFFUCxJQUFJLENBQUNFLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FOSjtBQVFFLGVBQVcsRUFDVCxNQUFDLFdBQUQ7QUFDRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FEZDtBQUVFLGNBQVEsRUFBRUYsSUFBSSxDQUFDSyxRQUZqQjtBQUdFLFlBQU0sRUFBRUwsSUFBSSxDQUFDZCxNQUhmO0FBSUUsVUFBSSxFQUFFYyxJQUFJLENBQUNJLElBSmI7QUFLRSxVQUFJLEVBQUVKLElBQUksQ0FBQ3RCLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELENBREgsQ0FURixDQURGO0FBb0NELENBN0ZEOztHQUFNUyxXO1VBRVkzQyxTLEVBRUZpRCxpRSxFQUNERSwrRDs7O0tBTFRSLFc7QUErRk5BLFdBQVcsQ0FBQ3FCLFNBQVosR0FBd0I7QUFDdEI7QUFDRjtBQUNBO0FBQ0VsQixXQUFTLEVBQUVtQixpREFBUyxDQUFDQyxNQUpDOztBQUt0QjtBQUNGO0FBQ0E7QUFDRXJCLE1BQUksRUFBRW9CLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDO0FBUkEsQ0FBeEI7QUFXZXpCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuOWE1Nzk0ZGM2MDY0NmZkMDk0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBCdXR0b24sIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBmbGV4OiAnMSAxIDUwJScsXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIG1pbkhlaWdodDogMzAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBmbGV4OiAnMSAxIDUwJScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uICFpbXBvcnRhbnQnLFxuICAgICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgIH0sXG4gICAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgICAgICBmbGV4OiAnMSAxIDEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjYXJkUHJvZHVjdFJldmVyc2U6IHtcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ0NvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcbiAgICB9LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIHRhZzoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSAvIDIsIDEpLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxIC8gMiksXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDEsIDApLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAyLCAyLCAwKSxcbiAgICB9LFxuICB9LFxuICBhdXRob3I6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IFBvcHVsYXJOZXdzID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dDb250ZW50fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICB7cHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfSBrZXk9e2luZGV4ICsgMX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2Jsb2ctYXJ0aWNsZVwiPjwvYT5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgID5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICB7cHJvcHMuc3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICA+XG4gICAgICAgIFJlYWQgbW9yZVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucmVzdH0+XG4gICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICB0aXRsZT1cIlRoZSBNb3N0IFBvcHVsYXIgTmV3c1wiXG4gICAgICAgIHN1YnRpdGxlPVwiS2VlcCB0cmFjayBvZiB3aGF0J3MgaGFwcGVuaW5nIHdpdGggeW91ciBkYXRhLCBjaGFuZ2UgcGVybWlzc2lvbnMsIGFuZCBydW4gcmVwb3J0cyBhZ2FpbnN0IHlvdXIgZGF0YSBhbnl3aGVyZSBpbiB0aGUgd29ybGQuIEtlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZyB3aXRoIHlvdXIgZGF0YSwgY2hhbmdlIHBlcm1pc3Npb25zLlwiXG4gICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNNZCA/IDQgOiAyfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5jYXJkUHJvZHVjdCxcbiAgICAgICAgICAgICAgICBpbmRleCAlIDIgPT09IDEgPyBjbGFzc2VzLmNhcmRQcm9kdWN0UmV2ZXJzZSA6IHt9LFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBtZWRpYUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nTWVkaWFDb250ZW50IHsuLi5pdGVtLmNvdmVyfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FyZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nQ29udGVudFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9wdWxhck5ld3MucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyTmV3cztcbiJdLCJzb3VyY2VSb290IjoiIn0=