webpackHotUpdate_N_E("pages/blog-article",{

/***/ "./src/views/BlogArticle/components/HeroNew/Hero.js":
/*!**********************************************************!*\
  !*** ./src/views/BlogArticle/components/HeroNew/Hero.js ***!
  \**********************************************************/
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



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\HeroNew\\Hero.js",
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
    height: 400,
    backgroundColor: '#003c0580'
  },
  textWhite: {
    color: 'white'
  },
  title: {
    fontWeight: 'bold'
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0
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
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Parallax"], {
    backgroundImage: cover.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
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
      lineNumber: 61,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
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
      lineNumber: 83,
      columnNumber: 19
    }
  }))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyb05ldy9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJzZWN0aW9uV3JhcHBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRXaGl0ZSIsImNvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0Iiwic2VjdGlvbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGlzdEl0ZW1BdmF0YXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJIZXJvIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb3ZlciIsInN1YnRpdGxlIiwiYXV0aG9yIiwicmVzdCIsImNsYXNzZXMiLCJjbHN4Iiwic3JjIiwidmFyaWFudCIsInBob3RvIiwibmFtZSIsImRhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKQyxtQkFBZSxFQUFFLDZDQUZiO0FBR0pDLGNBQVUsRUFBRSxPQUhSO0FBSUpDLGFBQVMsRUFBRSxPQUpQO0FBS0pDLGtCQUFjLEVBQUUsT0FMWjtBQU1KQyxvQkFBZ0IsRUFBRSxXQU5kO0FBT0pDLGFB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RUUsYUFBUyxFQUFHLE1BQUtQLE1BQU0sQ0FBQ1EsSUFBSyxFQUYvQjtBQUdFLDBCQUFzQixFQUFFO0FBQ3RCWCxlQUFTLEVBQUVLLE9BQU8sQ0FBQ3RCLFNBREc7QUFFdEJ5QixhQUFPLEVBQUU7QUFGYSxLQUgxQjtBQU9FLDRCQUF3QixFQUFFO0FBQ3hCUixlQUFTLEVBQUVLLE9BQU8sQ0FBQ3RCLFNBREs7QUFFeEJ5QixhQUFPLEVBQUU7QUFGZSxLQVA1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQWRGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQWdERCxDQW5ERDs7R0FBTVYsSTtVQUVZN0IsUzs7O0tBRlo2QixJO0FBcUROQSxJQUFJLENBQUNjLFNBQUwsR0FBaUI7QUFDZjtBQUNGO0FBQ0E7QUFDRVosV0FBUyxFQUFFYSxpREFBUyxDQUFDQyxNQUpOOztBQUtmO0FBQ0Y7QUFDQTtBQUNFYixPQUFLLEVBQUVZLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBUlQ7O0FBU2Y7QUFDRjtBQUNBO0FBQ0UvQixPQUFLLEVBQUU0QixpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVpUOztBQWFmO0FBQ0Y7QUFDQTtBQUNFZCxVQUFRLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBaEJaOztBQWlCZjtBQUNGO0FBQ0E7QUFDRWIsUUFBTSxFQUFFVSxpREFBUyxDQUFDRSxNQUFWLENBQWlCQztBQXBCVixDQUFqQjtBQXVCZWxCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS43Y2JiNDQyNTMyNTc2Yjg3ZDVkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtQXZhdGFyLFxuICBMaXN0SXRlbVRleHQsXG4gIEF2YXRhcixcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFBhcmFsbGF4IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYmxvZy9oZXJvLnBuZycpXCIsXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBzZWN0aW9uV3JhcHBlcjoge1xuICAgIGhlaWdodDogNDAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDNjMDU4MCcsXG4gIH0sXG4gIHRleHRXaGl0ZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICBwYWRkaW5nVG9wOiAwLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gIH0sXG4gIGxpc3RJdGVtQXZhdGFyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIGhlaWdodDogNjAsXG4gICAgd2lkdGg6IDYwLFxuICB9LFxufSkpO1xuXG5jb25zdCBIZXJvID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY292ZXIsIHRpdGxlLCBzdWJ0aXRsZSwgYXV0aG9yLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxuICAgICAgPFBhcmFsbGF4IGJhY2tncm91bmRJbWFnZT17Y292ZXIuc3JjfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbldyYXBwZXJ9PlxuICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGl0bGUsIGNsYXNzZXMudGV4dFdoaXRlKSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdoMycsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1BdmF0YXJ9PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmF1dGhvci5waG90b31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgUHVibGlzaGVkIGJ5ICR7YXV0aG9yLm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtgb24gJHthdXRob3IuZGF0ZX1gfVxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZXJvLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENvdmVyIG9mIHRoZSBoZXJvXG4gICAqL1xuICBjb3ZlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIGhlcm9cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgaGVyb1xuICAgKi9cbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEF1dGhvciBvZiB0aGUgcG9zdFxuICAgKi9cbiAgYXV0aG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==