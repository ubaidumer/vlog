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
    height: 400,
    backgroundColor: '#003c0580'
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
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx(Parallax, {
    backgroundImage: cover.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJzZWN0aW9uV3JhcHBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRXaGl0ZSIsImNvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJzdWJ0aXRsZSIsInNlY3Rpb24iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm9wYWNpdHkiLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwibGlzdEl0ZW1BdmF0YXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJIZXJvIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb3ZlciIsImF1dGhvciIsInJlc3QiLCJjbGFzc2VzIiwiY2xzeCIsInNyYyIsInZhcmlhbnQiLCJwaG90byIsIm5hbWUiLCJkYXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7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Q0E7QUFDRWIsUUFBTSxFQUFFVSxpREFBUyxDQUFDRSxNQUFWLENBQWlCQztBQXBCVixDQUFqQjtBQXVCZWpCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS5mNWM3MTg1MTEzNmMyODZiMDRkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUF2YXRhcixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgQXZhdGFyLFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgR3JpZCxcclxuICBjb2xvcnMsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgT3V0bGluZWRJbnB1dCxcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuaW1wb3J0IHsgbWVudV9pdGVtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBUb3BiYXIsIFNpZGViYXIgfSBmcm9tICcuLic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYmxvZy9oZXJvLnBuZycpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHNlY3Rpb25XcmFwcGVyOiB7XHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDNjMDU4MCcsXHJcbiAgfSxcclxuICB0ZXh0V2hpdGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAnMi44NXJlbScsXHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNDAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5PcGFjaXR5JyxcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlLWluJyxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMnMnLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW1BdmF0YXI6IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBoZWlnaHQ6IDYwLFxyXG4gICAgd2lkdGg6IDYwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm8gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNvdmVyLCB0aXRsZSwgc3VidGl0bGUsIGF1dGhvciwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPFBhcmFsbGF4IGJhY2tncm91bmRJbWFnZT17Y292ZXIuc3JjfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50aXRsZSwgY2xhc3Nlcy50ZXh0V2hpdGUpLFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnaDMnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmF1dGhvci5waG90b31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgUHVibGlzaGVkIGJ5ICR7YXV0aG9yLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2BvbiAke2F1dGhvci5kYXRlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYXJhbGxheD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICAvKipcclxuICAgKiBFeHRlcm5hbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKlxyXG4gICAqIENvdmVyIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgY292ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIEF1dGhvciBvZiB0aGUgcG9zdFxyXG4gICAqL1xyXG4gIGF1dGhvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==