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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\Archive\\Archive.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    paddingRight: 20
  },
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
      lineNumber: 60,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "caption",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_9__["default"])(className, classes.root)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: "Similar Posts",
    "data-aos": "fade-up",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    })),
    primaryCta: "",
    cardContent: __jsx(BlogContent, {
      title: item.title,
      subtitle: item.subtitle,
      author: item.author,
      date: item.date,
      tags: item.tags,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9BcmNoaXZlL0FyY2hpdmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmdSaWdodCIsImNhcmRQcm9kdWN0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJsb2dUaXRsZSIsImZvbnRXZWlnaHQiLCJzZWN0aW9uVGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJicmVha3BvaW50cyIsInVwIiwiQXJjaGl2ZSIsInByb3BzIiwiZGF0YSIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwiQmxvZ01lZGlhQ29udGVudCIsIkJsb2dDb250ZW50IiwidGl0bGUiLCJhdXRob3IiLCJuYW1lIiwiZGF0ZSIsImNsc3giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjb3ZlciIsInN1YnRpdGxlIiwidGFncyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsZ0JBQVksRUFBRTtBQURWLEdBRCtCO0FBSXJDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxRQUZKO0FBR1hDLGNBQVUsRUFBRSxRQUhEO0FBSVhDLFVBQU0sRUFBRSxNQUpHO0FBS1hD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QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmQxMzI4NTQ3ZGRhZjRlOWExYWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZ1JpZ2h0OiAyMCxcbiAgfSxcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMCwgMCwgMCksXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICcmIGltZyc6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICB9LFxuICBibG9nQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gIGJsb2dUaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQXJjaGl2ZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2Ugey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0NvbnRlbnR9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nVGl0bGV9XG4gICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgPGk+XG4gICAgICAgICAge3Byb3BzLmF1dGhvci5uYW1lfSAtIHtwcm9wcy5kYXRlfVxuICAgICAgICA8L2k+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIGNsYXNzZXMucm9vdCl9IHsuLi5yZXN0fT5cbiAgICAgIDxTZWN0aW9uSGVhZGVyIHRpdGxlPVwiU2ltaWxhciBQb3N0c1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGFsaWduPVwibGVmdFwiIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17M30ga2V5PXtpbmRleH0gZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICA8Q2FyZFByb2R1Y3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRQcm9kdWN0fVxuICAgICAgICAgICAgICBtZWRpYUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDxCbG9nTWVkaWFDb250ZW50IHsuLi5pdGVtLmNvdmVyfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcHJpbWFyeUN0YT1cIlwiXG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFyY2hpdmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogZGF0YSB0byBiZSByZW5kZXJlZFxuICAgKi9cbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcmNoaXZlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==