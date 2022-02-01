webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/Archive/Archive.js":
/*!******************************************************!*\
  !*** ./src/views/Blog/components/Archive/Archive.js ***!
  \******************************************************/
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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\Archive\\Archive.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    '& .card-product__content': {
      padding: theme.spacing(2, 0, 0, 0)
    },
    '& .card-product__media': {
      height: '100%',
      width: '100%',
      '& img': {
        height: '100%',
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
  blogTitle: {
    fontWeight: 700
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  }
}));

const Archive = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();

  const BlogMediaContent = props => __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.blogTitle,
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "caption",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: clsx
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: "Similar Posts",
    "data-aos": "fade-up",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
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
        lineNumber: 89,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })))));
};

_s(Archive, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Archive;
Archive.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Archive);

var _c;

$RefreshReg$(_c, "Archive");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9BcmNoaXZlL0FyY2hpdmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwiYmxvZ1RpdGxlIiwiZm9udFdlaWdodCIsInNlY3Rpb25UaXRsZSIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJBcmNoaXZlIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJCbG9nTWVkaWFDb250ZW50IiwiQmxvZ0NvbnRlbnQiLCJ0aXRsZSIsImF1dGhvciIsIm5hbWUiLCJkYXRlIiwiY2xzeCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvdmVyIiwic3VidGl0bGUiLCJ0YWdzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLGFBQVcsRUFBRTtBQUNYQyxXQUFPLEVBQUUsTUFERTtBQUVYQyxpQkFBYSxFQUFFLFFBRko7QUFHWEMsY0FBVSxFQUFFLFFBSEQ7QUFJWEMsVUFBTSxFQUFFLE1BSkc7QUFLWEMsU0FBSyxFQUFFLE1BTEk7QUFNWEMsYUFBUyxFQUFFLE1BTkE7QUFPWEMsZ0JBQVksRUFBRSxDQVBIO0FBUVgsZ0NBQTRCO0FB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QUFmO0FBQWtCLE1BQUUsRUFBRSxDQUF0QjtBQUF5QixPQUFHLEVBQUVBLEtBQTlCO0FBQXFDLGdCQUFTLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFVixPQUFPLENBQUN6QixXQURyQjtBQUVFLGdCQUFZLEVBQ1YsTUFBQyxnQkFBRCwwSkFBc0JrQyxJQUFJLENBQUNFLEtBQTNCO0FBQWtDLFNBQUcsRUFBRUYsSUFBSSxDQUFDTixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSEo7QUFLRSxlQUFXLEVBQ1QsTUFBQyxXQUFEO0FBQ0UsV0FBSyxFQUFFTSxJQUFJLENBQUNOLEtBRGQ7QUFFRSxjQUFRLEVBQUVNLElBQUksQ0FBQ0csUUFGakI7QUFHRSxZQUFNLEVBQUVILElBQUksQ0FBQ0wsTUFIZjtBQUlFLFVBQUksRUFBRUssSUFBSSxDQUFDSCxJQUpiO0FBS0UsVUFBSSxFQUFFRyxJQUFJLENBQUNJLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELENBREgsQ0FGRixDQURGO0FBMEJELENBcEREOztHQUFNbEIsTztVQUVZdkIsUzs7O0tBRlp1QixPO0FBc0ROQSxPQUFPLENBQUNtQixTQUFSLEdBQW9CO0FBQ2xCO0FBQ0Y7QUFDQTtBQUNFaEIsV0FBUyxFQUFFaUIsaURBQVMsQ0FBQ0MsTUFKSDs7QUFLbEI7QUFDRjtBQUNBO0FBQ0VuQixNQUFJLEVBQUVrQixpREFBUyxDQUFDRSxLQUFWLENBQWdCQztBQVJKLENBQXBCO0FBV2V2QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmQ3NDcyMmM1MmU2MjkwYzk0YzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMCwgMCwgMCksXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICcmIGltZyc6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICB9LFxuICBibG9nQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQXJjaGl2ZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2Ugey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0NvbnRlbnR9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nVGl0bGV9XG4gICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeH0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXIgdGl0bGU9XCJTaW1pbGFyIFBvc3RzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgYWxpZ249XCJsZWZ0XCIgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSA+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17M30ga2V5PXtpbmRleH0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8Q2FyZFByb2R1Y3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRQcm9kdWN0fVxuICAgICAgICAgICAgICBtZWRpYUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nTWVkaWFDb250ZW50IHsuLi5pdGVtLmNvdmVyfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FyZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nQ29udGVudFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XG4gICAgICAgICAgICAgICAgICB0YWdzPXtpdGVtLnRhZ3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXJjaGl2ZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFyY2hpdmU7XG4iXSwic291cmNlUm9vdCI6IiJ9