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
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 0,
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
    className: classes.gridItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_9__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
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
        lineNumber: 176,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9Nb3N0Vmlld2VkQXJ0aWNsZXMvTW9zdFZpZXdlZEFydGljbGVzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsImRvd24iLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiZ3JpZEl0ZW0iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidXAiLCJib3JkZXJCb3R0b20iLCJjb2xvcnMiLCJncmV5IiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwid2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm1hcmdpblRvcCIsImFsaWduU2VsZiIsImJsb2dUaXRsZSIsImZvbnRXZWlnaHQiLCJhdXRob3IiLCJtYXJnaW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uQ3RhIiwibWF4V2lkdGgiLCJsaW5rIiwiY29sb3IiLCJNb3N0Vmlld2VkQXJ0aWNsZXMiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm5hbWUiLCJkYXRlIiwic3VidGl0bGUiLCJjbHN4IiwidmFyaWFudCIsIm5vV3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvdmVyIiwidGFncyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FB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LEVBQUVvQixJQUFJLENBQUNwQixLQURkO0FBRUUsY0FBUSxFQUFFb0IsSUFBSSxDQUFDTCxRQUZqQjtBQUdFLFlBQU0sRUFBRUssSUFBSSxDQUFDdEIsTUFIZjtBQUlFLFVBQUksRUFBRXNCLElBQUksQ0FBQ04sSUFKYjtBQUtFLFVBQUksRUFBRU0sSUFBSSxDQUFDRyxJQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERCxDQURILENBYkYsQ0FERjtBQTJDRCxDQXRGRDs7R0FBTWxCLGtCO1VBRVkzQyxTOzs7S0FGWjJDLGtCO0FBd0ZOQSxrQkFBa0IsQ0FBQ21CLFNBQW5CLEdBQStCO0FBQzdCO0FBQ0Y7QUFDQTtBQUNFaEIsV0FBUyxFQUFFaUIsaURBQVMsQ0FBQ0MsTUFKUTs7QUFLN0I7QUFDRjtBQUNBO0FBQ0VuQixNQUFJLEVBQUVrQixpREFBUyxDQUFDRSxLQUFWLENBQWdCQztBQVJPLENBQS9CO0FBV2V2QixpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmIxNmIyYzBiMjY3ZGJkNWZlZTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBjb2xvcnMsIEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlLCBMZWFybk1vcmVMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoLTIpLFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoLTIpLFxuICAgIH0sXG4gIH0sXG4gIGdyaWRJdGVtOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5WzIwMF19YCxcbiAgICB9LFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgIH0sXG4gIH0sXG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDIsIDAsIDIpLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDAsIDAsIDIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgICBoZWlnaHQ6IDE3MCxcbiAgICAgICAgd2lkdGg6IDE3MCxcbiAgICAgICAgJyYgaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogMTcwLFxuICAgICAgICAgIHdpZHRoOiAxNzAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uICFpbXBvcnRhbnQnLFxuICAgICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgIH0sXG4gICAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgICAgZmxleDogJzEgMSAxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnLFxuICB9LFxuICBibG9nVGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIGF1dGhvcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAwKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIGRlc2NyaXB0aW9uQ3RhOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogMCxcbiAgICB9LFxuICB9LFxuICBsaW5rOiB7XG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgfSxcbn0pKTtcblxuY29uc3QgTW9zdFZpZXdlZEFydGljbGVzID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBCbG9nTWVkaWFDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxJbWFnZVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBCbG9nQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nQ29udGVudH0+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dUaXRsZX1cbiAgICAgID5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IGhyZWY9XCIvYmxvZy1hcnRpY2xlXCI+XG4gICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICA8L2E+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgID5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICB7cHJvcHMuc3VidGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8TGVhcm5Nb3JlTGlua1xuICAgICAgICB0aXRsZT17J0xlYXJuIG1vcmUnfVxuICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPERlc2NyaXB0aW9uQ3RhXG4gICAgICAgIHRpdGxlPVwiTGF0ZXN0IFN0b3JpZXNcIlxuICAgICAgICBhbGlnbj17J2xlZnQnfVxuICAgICAgICB0aXRsZVByb3BzPXt7XG4gICAgICAgICAgdmFyaWFudDogJ2g0JyxcbiAgICAgICAgICBjb2xvcjogJ3RleHRQcmltYXJ5JyxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGl0bGUsXG4gICAgICAgICAgbm9XcmFwOiBmYWxzZSxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQ3RhfVxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkSXRlbX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZFByb2R1Y3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRQcm9kdWN0fVxuICAgICAgICAgICAgICBtZWRpYUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nTWVkaWFDb250ZW50IHsuLi5pdGVtLmNvdmVyfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FyZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nQ29udGVudFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9zdFZpZXdlZEFydGljbGVzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9zdFZpZXdlZEFydGljbGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==