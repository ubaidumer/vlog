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
  },
  link: {
    color: 'inherit'
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
      lineNumber: 80,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 91,
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
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: classes.link,
    href: "/blog-article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    color: "textPrimary",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, props.subtitle));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
        lineNumber: 132,
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
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    className: classes.mt2,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 152,
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
        lineNumber: 158,
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
        lineNumber: 161,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9MYXRlc3RTdG9yaWVzL0xhdGVzdFN0b3JpZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nVGl0bGUiLCJmb250V2VpZ2h0IiwidGFncyIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJ0YWciLCJtYXJnaW4iLCJhdXRob3IiLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJtdDIiLCJtYXJnaW5Ub3AiLCJkZXNjcmlwdGlvbkN0YSIsImFsaWduSXRlbXMiLCJidXR0b24iLCJib3JkZXIiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImFsaWduU2VsZiIsImxpbmsiLCJMYXRlc3RTdG9yaWVzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJCbG9nTWVkaWFDb250ZW50IiwiQmxvZ0NvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiZGF0ZSIsInN1YnRpdGxlIiwiY2xzeCIsInZhcmlhbnQiLCJjb3ZlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxR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LFVBQU0sTUFGUjtBQUdFLGFBQVMsRUFBRUwsT0FBTyxDQUFDdEMsV0FIckI7QUFJRSxnQkFBWSxFQUNWLE1BQUMsZ0JBQUQsMEpBQXNCMEMsSUFBSSxDQUFDTyxLQUEzQjtBQUFrQyxTQUFHLEVBQUVQLElBQUksQ0FBQ3ZCLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FMSjtBQU9FLGVBQVcsRUFDVCxNQUFDLFdBQUQ7QUFDRSxXQUFLLEVBQUV1QixJQUFJLENBQUN2QixLQURkO0FBRUUsY0FBUSxFQUFFdUIsSUFBSSxDQUFDSSxRQUZqQjtBQUdFLFlBQU0sRUFBRUosSUFBSSxDQUFDMUIsTUFIZjtBQUlFLFVBQUksRUFBRTBCLElBQUksQ0FBQ0csSUFKYjtBQUtFLFVBQUksRUFBRUgsSUFBSSxDQUFDL0IsSUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsQ0FESCxDQXRCRixDQURGO0FBZ0RELENBcEdEOztHQUFNc0IsYTtVQUVZcEMsUzs7O0tBRlpvQyxhO0FBc0dOQSxhQUFhLENBQUNpQixTQUFkLEdBQTBCO0FBQ3hCO0FBQ0Y7QUFDQTtBQUNFZCxXQUFTLEVBQUVlLGlEQUFTLENBQUNDLE1BSkc7O0FBS3hCO0FBQ0Y7QUFDQTtBQUNFakIsTUFBSSxFQUFFZ0IsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQkM7QUFSRSxDQUExQjtBQVdlckIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy43ZTUyYTM3OGRlMzY0YjA3ZGFjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICB0YWc6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDEsIDApLFxuICB9LFxuICBhdXRob3I6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgfSxcbiAgbXQyOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgZGVzY3JpcHRpb25DdGE6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzNCQjBFNScsXG4gICAgd2lkdGg6IDE3NixcbiAgICBoZWlnaHQ6IDQyLFxuICAgIGNvbG9yOiAnIzNCQjBFNScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcbiAgICB9LFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBhbGlnblNlbGY6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IExhdGVzdFN0b3JpZXMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAge3Byb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwib3ZlcmxpbmVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSBocmVmPVwiL2Jsb2ctYXJ0aWNsZVwiPlxuICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3J9XG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAge3Byb3BzLnN1YnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPERlc2NyaXB0aW9uQ3RhXG4gICAgICAgIHRpdGxlPVwiTGF0ZXN0IHN0b3JpZXNcIlxuICAgICAgICBwcmltYXJ5Q3RhPXtcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgYWxpZ249eydsZWZ0J31cbiAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdoNCcsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpdGxlLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25DdGF9XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tdDJ9IHNwYWNpbmc9ezJ9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICB3aXRoU2hhZG93XG4gICAgICAgICAgICAgIGxpZnRVcFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFByb2R1Y3R9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXRlc3RTdG9yaWVzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0U3RvcmllcztcbiJdLCJzb3VyY2VSb290IjoiIn0=