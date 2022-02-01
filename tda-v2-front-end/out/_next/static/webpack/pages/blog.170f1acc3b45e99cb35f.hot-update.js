webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/SidebarArticles/SidebarArticles.js":
/*!**********************************************************************!*\
  !*** ./src/views/Blog/components/SidebarArticles/SidebarArticles.js ***!
  \**********************************************************************/
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
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\SidebarArticles\\SidebarArticles.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: `1px solid ${_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[200]}`,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3)
    }
  },
  gridItem: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["colors"].grey[200]}`,
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
    boxShadow: 'none',
    borderRadius: 0,
    '& .card-product__content': {
      padding: 0,
      paddingLeft: theme.spacing(2)
    },
    '& .card-product__media': {
      height: 90,
      width: 90,
      '& img': {
        height: 90,
        width: 90
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
  tags: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    margin: theme.spacing(0, 1 / 2, 1 / 2, 0),
    textTransform: 'uppercase',
    fontWeight: 700
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  },
  link: {
    color: 'inherit'
  }
}));

const SidebarArticles = props => {
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
      lineNumber: 85,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.tags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, props.tags.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    color: "primary",
    className: classes.tag,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, item))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.blogTitle,
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "caption",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true,
    className: classes.sectionTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "More Posts"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
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
        lineNumber: 147,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  })))));
};

_s(SidebarArticles, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = SidebarArticles;
SidebarArticles.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarArticles);

var _c;

$RefreshReg$(_c, "SidebarArticles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9TaWRlYmFyQXJ0aWNsZXMvU2lkZWJhckFydGljbGVzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nIiwic3BhY2luZyIsImJvcmRlciIsImNvbG9ycyIsImdyZXkiLCJib3JkZXJSYWRpdXMiLCJicmVha3BvaW50cyIsInVwIiwiZ3JpZEl0ZW0iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyQm90dG9tIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJveFNoYWRvdyIsInBhZGRpbmdMZWZ0Iiwid2lkdGgiLCJpbWFnZSIsIm9iamVjdEZpdCIsImJsb2dDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYmxvZ1RpdGxlIiwiZm9udFdlaWdodCIsInRhZ3MiLCJmbGV4V3JhcCIsInRhZyIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJzZWN0aW9uVGl0bGUiLCJsaW5rIiwiY29sb3IiLCJTaWRlYmFyQXJ0aWNsZXMiLCJwcm9wcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZXN0IiwiY2xhc3NlcyIsIkJsb2dNZWRpYUNvbnRlbnQiLCJCbG9nQ29udGVudCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiYXV0aG9yIiwibmFtZSIsImRhdGUiLCJjbHN4IiwiY292ZXIiLCJzdWJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJ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QUFDRyxNQUhmO0FBSUUsVUFBSSxFQUFFSCxJQUFJLENBQUNLLElBSmI7QUFLRSxVQUFJLEVBQUVMLElBQUksQ0FBQ2pCLElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURELENBREgsQ0FURixDQURGO0FBdUNELENBakZEOztHQUFNUSxlO1VBRVl0QyxTOzs7S0FGWnNDLGU7QUFtRk5BLGVBQWUsQ0FBQ2tCLFNBQWhCLEdBQTRCO0FBQzFCO0FBQ0Y7QUFDQTtBQUNFZixXQUFTLEVBQUVnQixpREFBUyxDQUFDQyxNQUpLOztBQUsxQjtBQUNGO0FBQ0E7QUFDRWxCLE1BQUksRUFBRWlCLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0JDO0FBUkksQ0FBNUI7QUFXZXRCLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMTcwZjFhY2MzYjQ1ZTk5Y2IzNWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGNvbG9ycywgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XG5pbXBvcnQgeyBDYXJkUHJvZHVjdCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleVsyMDBdfWAsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgZ3JpZEl0ZW06IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleVsyMDBdfWAsXG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgfSxcbiAgfSxcbiAgY2FyZFByb2R1Y3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICAnJiAuY2FyZC1wcm9kdWN0X19tZWRpYSc6IHtcbiAgICAgIGhlaWdodDogOTAsXG4gICAgICB3aWR0aDogOTAsXG4gICAgICAnJiBpbWcnOiB7XG4gICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgIHdpZHRoOiA5MCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gIH0sXG4gIGJsb2dDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgYmxvZ1RpdGxlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxuICB0YWdzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIHRhZzoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxIC8gMiwgMSAvIDIsIDApLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgc2VjdGlvblRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFNpZGViYXJBcnRpY2xlcyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkYXRhLCBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgQmxvZ01lZGlhQ29udGVudCA9IHByb3BzID0+IChcbiAgICA8SW1hZ2VcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cbiAgICAgIGxhenlQcm9wcz17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgQmxvZ0NvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICB7cHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dUaXRsZX1cbiAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgICAgICA8aT5cbiAgICAgICAgICB7cHJvcHMuYXV0aG9yLm5hbWV9IC0ge3Byb3BzLmRhdGV9XG4gICAgICAgIDwvaT5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvblRpdGxlfVxuICAgICAgPlxuICAgICAgICBNb3JlIFBvc3RzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEl0ZW19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRQcm9kdWN0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkUHJvZHVjdH1cbiAgICAgICAgICAgICAgbWVkaWFDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ01lZGlhQ29udGVudCB7Li4uaXRlbS5jb3Zlcn0gYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhcmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8QmxvZ0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgdGFncz17aXRlbS50YWdzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNpZGViYXJBcnRpY2xlcy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBkYXRhIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJBcnRpY2xlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=