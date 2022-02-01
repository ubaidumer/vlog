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
      lineNumber: 113,
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
      lineNumber: 115,
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
        lineNumber: 121,
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
        lineNumber: 124,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvU2ltaWxhclN0b3JpZXMvU2ltaWxhclN0b3JpZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nVGl0bGUiLCJmb250V2VpZ2h0IiwidGFncyIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJ0YWciLCJtYXJnaW4iLCJhdXRob3IiLCJtYXJnaW5Ub3AiLCJicmVha3BvaW50cyIsInVwIiwidGl0bGUiLCJkZXNjcmlwdGlvbkN0YSIsIm1hcmdpbkJvdHRvbSIsIlNpbWlsYXJTdG9yaWVzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJCbG9nTWVkaWFDb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiLCJkYXRlIiwidmFyaWFudCIsImNvbG9yIiwiY292ZXIiLCJzdWJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxRQUZKO0FBR1hDLGdCQUFZLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FISDtBQUlYLGdDQUE0QjtBQUMxQkMs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YUFBUyxFQUFFUCxPQUFPLENBQUM1QixXQUhyQjtBQUlFLGdCQUFZLEVBQ1YsTUFBQyxnQkFBRCwwSkFBc0JrQyxJQUFJLENBQUNNLEtBQTNCO0FBQWtDLFNBQUcsRUFBRU4sSUFBSSxDQUFDZCxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEo7QUFPRSxlQUFXLEVBQ1QsTUFBQyxXQUFEO0FBQ0UsV0FBSyxFQUFFYyxJQUFJLENBQUNkLEtBRGQ7QUFFRSxjQUFRLEVBQUVjLElBQUksQ0FBQ08sUUFGakI7QUFHRSxZQUFNLEVBQUVQLElBQUksQ0FBQ2xCLE1BSGY7QUFJRSxVQUFJLEVBQUVrQixJQUFJLENBQUNHLElBSmI7QUFLRSxVQUFJLEVBQUVILElBQUksQ0FBQ3ZCLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELENBREgsQ0FaRixDQURGO0FBc0NELENBckZEOztHQUFNWSxjO1VBRVkxQixTOzs7S0FGWjBCLGM7QUF1Rk5BLGNBQWMsQ0FBQ21CLFNBQWYsR0FBMkI7QUFDekI7QUFDRjtBQUNBO0FBQ0VoQixXQUFTLEVBQUVpQixpREFBUyxDQUFDQyxNQUpJOztBQUt6QjtBQUNGO0FBQ0E7QUFDRW5CLE1BQUksRUFBRWtCLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDO0FBUkcsQ0FBM0I7QUFXZXZCLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS5jZjY5YmQyMWY4OWVhYzM5YzU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbkN0YSB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgbWluSGVpZ2h0OiAzMDAsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgdGFnczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgdGFnOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxLCAxLCAwKSxcbiAgfSxcbiAgYXV0aG9yOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgZGVzY3JpcHRpb25DdGE6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IFNpbWlsYXJTdG9yaWVzID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBCbG9nTWVkaWFDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxJbWFnZVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfVxuICAgICAgbGF6eVByb3BzPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBCbG9nQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgIHtwcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cIm92ZXJsaW5lXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dUaXRsZX1cbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcn1cbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5yZXN0fT5cbiAgICAgIDxEZXNjcmlwdGlvbkN0YVxuICAgICAgICB0aXRsZT1cIlNpbWlsYXIgU3Rvcmllc1wiXG4gICAgICAgIGFsaWduPXsnbGVmdCd9XG4gICAgICAgIHRpdGxlUHJvcHM9e3tcbiAgICAgICAgICB2YXJpYW50OiAnaDQnLFxuICAgICAgICAgIGNvbG9yOiAndGV4dFByaW1hcnknLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50aXRsZSxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9uQ3RhfVxuICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICB3aXRoU2hhZG93XG4gICAgICAgICAgICAgIGxpZnRVcFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFByb2R1Y3R9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5TaW1pbGFyU3Rvcmllcy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbWlsYXJTdG9yaWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==