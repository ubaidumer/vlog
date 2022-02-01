webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/SimilarStories/SimilarStories.js":
/*!***************************************************************************!*\
  !*** ./src/views/BlogArticle/components/SimilarStories/SimilarStories.js ***!
  \***************************************************************************/
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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\SimilarStories\\SimilarStories.js",
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
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2)
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
  }
}));

const SimilarStories = props => {
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
      lineNumber: 58,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
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
      lineNumber: 79,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.author,
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["DescriptionCta"], {
    title: "Similar Stories",
    primaryCta: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      variant: "outlined",
      color: "primary",
      size: "large",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
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
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
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
        lineNumber: 126,
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
        lineNumber: 129,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })))));
};

_s(SimilarStories, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SimilarStories;
SimilarStories.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SimilarStories);

var _c;

$RefreshReg$(_c, "SimilarStories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvU2ltaWxhclN0b3JpZXMvU2ltaWxhclN0b3JpZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nVGl0bGUiLCJmb250V2VpZ2h0IiwidGFncyIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJ0YWciLCJtYXJnaW4iLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUiLCJkZXNjcmlwdGlvbkN0YSIsIm1hcmdpbkJvdHRvbSIsIlNpbWlsYXJTdG9yaWVzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJCbG9nTWVkaWFDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJkYXRlIiwidmFyaWFudCIsImNvbG9yIiwiY292ZXIiLCJzdWJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxRQUZKO0FBR1hDLGdCQUFZLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FISDtBQUlYLGdDQUE0QjtBQUMxQkMs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Q0FBL0I7QUFBa0MsT0FBRyxFQUFFQSxLQUF2QztBQUE4QyxnQkFBUyxTQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLFVBQU0sTUFGUjtBQUdFLGFBQVMsRUFBRVAsT0FBTyxDQUFDNUIsV0FIckI7QUFJRSxnQkFBWSxFQUNWLE1BQUMsZ0JBQUQsMEpBQXNCa0MsSUFBSSxDQUFDTSxLQUEzQjtBQUFrQyxTQUFHLEVBQUVOLElBQUksQ0FBQ2QsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxKO0FBT0UsZUFBVyxFQUNULE1BQUMsV0FBRDtBQUNFLFdBQUssRUFBRWMsSUFBSSxDQUFDZCxLQURkO0FBRUUsY0FBUSxFQUFFYyxJQUFJLENBQUNPLFFBRmpCO0FBR0UsWUFBTSxFQUFFUCxJQUFJLENBQUNsQixNQUhmO0FBSUUsVUFBSSxFQUFFa0IsSUFBSSxDQUFDRyxJQUpiO0FBS0UsVUFBSSxFQUFFSCxJQUFJLENBQUN2QixJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxDQURILENBakJGLENBREY7QUEyQ0QsQ0ExRkQ7O0dBQU1ZLGM7VUFFWTFCLFM7OztLQUZaMEIsYztBQTRGTkEsY0FBYyxDQUFDbUIsU0FBZixHQUEyQjtBQUN6QjtBQUNGO0FBQ0E7QUFDRWhCLFdBQVMsRUFBRWlCLGlEQUFTLENBQUNDLE1BSkk7O0FBS3pCO0FBQ0Y7QUFDQTtBQUNFbkIsTUFBSSxFQUFFa0IsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQkM7QUFSRyxDQUEzQjtBQVdldkIsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjdhZTk5Y2I3ODIwY2RhNGJiMDIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcbmltcG9ydCB7IERlc2NyaXB0aW9uQ3RhIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBtaW5IZWlnaHQ6IDMwMCxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICB0YWc6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDEsIDApLFxuICB9LFxuICBhdXRob3I6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBkZXNjcmlwdGlvbkN0YToge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU2ltaWxhclN0b3JpZXMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9XG4gICAgICBsYXp5UHJvcHM9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAge3Byb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwib3ZlcmxpbmVcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yfVxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxpPlxuICAgICAgICAgIHtwcm9wcy5hdXRob3IubmFtZX0gLSB7cHJvcHMuZGF0ZX1cbiAgICAgICAgPC9pPlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPERlc2NyaXB0aW9uQ3RhXG4gICAgICAgIHRpdGxlPVwiU2ltaWxhciBTdG9yaWVzXCJcbiAgICAgICAgcHJpbWFyeUN0YT17XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgIFZpZXcgYWxsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgYWxpZ249eydsZWZ0J31cbiAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdoNCcsXG4gICAgICAgICAgY29sb3I6ICd0ZXh0UHJpbWFyeScsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpdGxlLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb25DdGF9XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9IGtleT17aW5kZXh9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPENhcmRQcm9kdWN0XG4gICAgICAgICAgICAgIHdpdGhTaGFkb3dcbiAgICAgICAgICAgICAgbGlmdFVwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJvZHVjdH1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNpbWlsYXJTdG9yaWVzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltaWxhclN0b3JpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9