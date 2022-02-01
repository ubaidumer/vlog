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
      lineNumber: 61,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "caption",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: clsx(className, classes.root)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: "Similar Posts",
    "data-aos": "fade-up",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
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
        lineNumber: 94,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9BcmNoaXZlL0FyY2hpdmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmdSaWdodCIsImNhcmRQcm9kdWN0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImltYWdlIiwib2JqZWN0Rml0IiwiYmxvZ0NvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImJsb2dUaXRsZSIsImZvbnRXZWlnaHQiLCJzZWN0aW9uVGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJicmVha3BvaW50cyIsInVwIiwiQXJjaGl2ZSIsInByb3BzIiwiZGF0YSIsImNsYXNzTmFtZSIsInJlc3QiLCJjbGFzc2VzIiwiQmxvZ01lZGlhQ29udGVudCIsIkJsb2dDb250ZW50IiwidGl0bGUiLCJhdXRob3IiLCJuYW1lIiwiZGF0ZSIsImNsc3giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjb3ZlciIsInN1YnRpdGxlIiwidGFncyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsZ0JBQVksRUFBRTtBQURWLEdBRCtCO0FBSXJDQyxhQUFXLEVBQUU7QUFDWEMsV0FBTyxFQUFFLE1BREU7QUFFWEMsaUJBQWEsRUFBRSxRQUZKO0FBR1hDLGNBQVUsRUFBRSxRQUhEO0FBSVhDLFVBQU0sRUFBRSxNQUpHO0FBS1hDLFNBQUss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cGFjay9wYWdlcy9ibG9nLjVjMzMwZjk3MGYxYTBmMGVhMzIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xuaW1wb3J0IHsgQ2FyZFByb2R1Y3QgfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XG5cblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6IDIwLFxuICB9LFxuICBjYXJkUHJvZHVjdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19jb250ZW50Jzoge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAwLCAwLCAwKSxcbiAgICB9LFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX21lZGlhJzoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJyYgaW1nJzoge1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICBzZWN0aW9uVGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5jb25zdCBBcmNoaXZlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGRhdGEsIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBCbG9nTWVkaWFDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxJbWFnZSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cbiAgKTtcblxuICBjb25zdCBCbG9nQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9nQ29udGVudH0+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dUaXRsZX1cbiAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgY2xhc3Nlcy5yb290KX0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXIgdGl0bGU9XCJTaW1pbGFyIFBvc3RzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgYWxpZ249XCJsZWZ0XCIgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXszfSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFByb2R1Y3R9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcmNoaXZlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=