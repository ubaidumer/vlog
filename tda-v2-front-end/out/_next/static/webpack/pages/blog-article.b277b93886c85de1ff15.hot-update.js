webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/Hero/Hero.js":
/*!*******************************************************!*\
  !*** ./src/views/BlogArticle/components/Hero/Hero.js ***!
  \*******************************************************/
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
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data */ "./src/data/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "./src/views/BlogArticle/components/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\Hero\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    backgroundImage: "url('https://assets.it22.nl/blog/hero.png')",
    background: 'white',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  },
  sectionWrapper: {
    height: 400
  },
  textWhite: {
    color: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.85rem'
  },
  subtitle: {
    fontSize: '1.25rem'
  },
  section: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 1,
    animationName: 'fadeInOpacity',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-in',
    animationDuration: '2s'
  },
  listItemAvatar: {
    marginRight: theme.spacing(2)
  },
  avatar: {
    height: 60,
    width: 60
  }
}));

const Hero = props => {
  _s();

  const {
    className,
    cover,
    title,
    subtitle,
    author
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cover", "title", "subtitle", "author"]);

  const classes = useStyles();
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    align: "left",
    "data-aos": "fade-up",
    titleProps: {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.title, classes.textWhite),
      variant: 'h3'
    },
    subtitleProps: {
      className: classes.textWhite
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    primary: `Published by ${author.name}`,
    secondary: `on ${author.date}`,
    primaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    },
    secondaryTypographyProps: {
      className: classes.textWhite,
      variant: 'subtitle1'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })))))));
};

_s(Hero, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Hero;
Hero.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Cover of the hero
   */
  cover: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * Title of the hero
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /**
   * Subtitle of the hero
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /**
   * Author of the post
   */
  author: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJzZWN0aW9uV3JhcHBlciIsImhlaWdodCIsInRleHRXaGl0ZSIsImNvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJzdWJ0aXRsZSIsInNlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm9wYWNpdHkiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwibGlzdEl0ZW1BdmF0YXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJIZXJvIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb3ZlciIsImF1dGhvciIsInJlc3QiLCJjbGFzc2VzIiwiY2xzeCIsInZhcmlhbnQiLCJwaG90byIsIm5hbWUiLCJkYXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRSw2Q0FGYjtB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgQXZhdGFyLFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgR3JpZCxcclxuICBjb2xvcnMsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgT3V0bGluZWRJbnB1dCxcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuaW1wb3J0IHsgbWVudV9pdGVtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBUb3BiYXIsIFNpZGViYXIgfSBmcm9tICcuLic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYmxvZy9oZXJvLnBuZycpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHNlY3Rpb25XcmFwcGVyOiB7XHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcyLjg1cmVtJyxcclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc0MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgcGFkZGluZ1RvcDogMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbk9wYWNpdHknLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4nLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcycycsXHJcbiAgfSxcclxuICBsaXN0SXRlbUF2YXRhcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICB3aWR0aDogNjAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVybyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY292ZXIsIHRpdGxlLCBzdWJ0aXRsZSwgYXV0aG9yLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxyXG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICB0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50aXRsZSwgY2xhc3Nlcy50ZXh0V2hpdGUpLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudDogJ2gzJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2BQdWJsaXNoZWQgYnkgJHthdXRob3IubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2BvbiAke2F1dGhvci5kYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ292ZXIgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBjb3ZlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQXV0aG9yIG9mIHRoZSBwb3N0XHJcbiAgICovXHJcbiAgYXV0aG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9