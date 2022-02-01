webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/LatestStories/LatestStories.js":
/*!******************************************************************!*\
  !*** ./src/views/Blog/components/LatestStories/LatestStories.js ***!
  \******************************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\LatestStories\\LatestStories.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      padding: theme.spacing(2)
    },
    '& .card-product__media': {
      minHeight: 300
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
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0)
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0)
    }
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0
  },
  mt2: {
    marginTop: 10
  },
  descriptionCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
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
  }
}));

const LatestStories = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();

  const BlogMediaContent = props => __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes.image,
    lazyProps: {
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "overline",
    color: "primary",
    className: classes.tag,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    className: classes.blogTitle,
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, props.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    color: "textPrimary",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, props.subtitle));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["DescriptionCta"], {
    title: "Latest stories",
    primaryCta: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classes.button,
      variant: "outlined",
      color: "primary",
      size: "large",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, "View all"),
    align: 'left',
    titleProps: {
      variant: 'h4',
      color: 'textPrimary',
      className: classes.title
    },
    className: classes.descriptionCta,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    className: classes.mt2,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    withShadow: true,
    liftUp: true,
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
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
        lineNumber: 158,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  })))));
};

_s(LatestStories, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = LatestStories;
LatestStories.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LatestStories);

var _c;

$RefreshReg$(_c, "LatestStories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9MYXRlc3RTdG9yaWVzL0xhdGVzdFN0b3JpZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nVGl0bGUiLCJmb250V2VpZ2h0IiwidGFncyIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJ0YWciLCJtYXJnaW4iLCJhdXRob3IiLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJtdDIiLCJtYXJnaW5Ub3AiLCJkZXNjcmlwdGlvbkN0YSIsImFsaWduSXRlbXMiLCJidXR0b24iLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImFsaWduU2VsZiIsIkxhdGVzdFN0b3JpZXMiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJuYW1lIiwiZGF0ZSIsInN1YnRpdGxlIiwiY2xzeCIsInZhcmlhbnQiLCJjb3ZlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxR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QUlFLGdCQUFZLEVBQ1YsTUFBQyxnQkFBRCwwSkFBc0J5QyxJQUFJLENBQUNRLEtBQTNCO0FBQWtDLFNBQUcsRUFBRVIsSUFBSSxDQUFDdEIsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxKO0FBT0UsZUFBVyxFQUNULE1BQUMsV0FBRDtBQUNFLFdBQUssRUFBRXNCLElBQUksQ0FBQ3RCLEtBRGQ7QUFFRSxjQUFRLEVBQUVzQixJQUFJLENBQUNLLFFBRmpCO0FBR0UsWUFBTSxFQUFFTCxJQUFJLENBQUN6QixNQUhmO0FBSUUsVUFBSSxFQUFFeUIsSUFBSSxDQUFDSSxJQUpiO0FBS0UsVUFBSSxFQUFFSixJQUFJLENBQUM5QixJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxDQURILENBdEJGLENBREY7QUFnREQsQ0FwR0Q7O0dBQU1xQixhO1VBRVluQyxTOzs7S0FGWm1DLGE7QUFzR05BLGFBQWEsQ0FBQ2tCLFNBQWQsR0FBMEI7QUFDeEI7QUFDRjtBQUNBO0FBQ0VmLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNDLE1BSkc7O0FBS3hCO0FBQ0Y7QUFDQTtBQUNFbEIsTUFBSSxFQUFFaUIsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQkM7QUFSRSxDQUExQjtBQVdldEIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy44MjE1YTg4Zjk0YTZiNmYxMTRjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICB0YWc6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDEsIDApLFxuICB9LFxuICBhdXRob3I6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgfSxcbiAgbXQyOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgZGVzY3JpcHRpb25DdGE6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcbiAgICB9LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgTGF0ZXN0U3RvcmllcyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2VcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICB7cHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdmVybGluZVwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ31cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nVGl0bGV9XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCIvYmxvZy1hcnRpY2xlXCI+XG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7cHJvcHMuc3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICA8RGVzY3JpcHRpb25DdGFcbiAgICAgICAgdGl0bGU9XCJMYXRlc3Qgc3Rvcmllc1wiXG4gICAgICAgIHByaW1hcnlDdGE9e1xuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBhbGxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgICBhbGlnbj17J2xlZnQnfVxuICAgICAgICB0aXRsZVByb3BzPXt7XG4gICAgICAgICAgdmFyaWFudDogJ2g0JyxcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGl0bGUsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbkN0YX1cbiAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm10Mn0gc3BhY2luZz17Mn0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGtleT17aW5kZXh9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPENhcmRQcm9kdWN0XG4gICAgICAgICAgICAgIHdpdGhTaGFkb3dcbiAgICAgICAgICAgICAgbGlmdFVwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJvZHVjdH1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxhdGVzdFN0b3JpZXMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXRlc3RTdG9yaWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==