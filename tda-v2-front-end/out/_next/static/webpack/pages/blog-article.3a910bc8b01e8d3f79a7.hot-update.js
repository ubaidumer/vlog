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
    height: '100%',
    position: 'relative',
    background: 'white',
    overflow: 'hidden'
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
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx(Parallax, {
    backgroundImage: cover.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsIm92ZXJmbG93Iiwic2VjdGlvbldyYXBwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsInNlY3Rpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsaXN0SXRlbUF2YXRhciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImF2YXRhciIsIkhlcm8iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdmVyIiwic3VidGl0bGUiLCJhdXRob3IiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJzcmMiLCJ2YXJpYW50IiwicGhvdG8iLCJuYW1lIiwiZGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxNQURIO0FBRUpDLFVBQU0sRUFBRSxNQUZKO0FBR0pDLFlBQVEsRUFBRSxVQUhOO0FBSUpDLGNBQVUsRUFBRSxPQUpSO0FBS0pDLFlBQVEsRUFBRTtBQUxOLEdBRCtCO0FBUXJDQyxnQkFBYyxFQUFFO0FBQ2RKLFVBQU0sRUFBRSxHQURNO0FBRWRLLG1CQUFlLEVBQUU7QUFGSCxHQVJxQjtBQVlyQ0MsV0FBUyxFQUFFO0FB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RTtBQUZhLEtBSDFCO0FBT0UsNEJBQXdCLEVBQUU7QUFDeEJSLGVBQVMsRUFBRUssT0FBTyxDQUFDckIsU0FESztBQUV4QndCLGFBQU8sRUFBRTtBQUZlLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBZEYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBZ0RELENBbkREOztHQUFNVixJO1VBRVl6QixTOzs7S0FGWnlCLEk7QUFxRE5BLElBQUksQ0FBQ2MsU0FBTCxHQUFpQjtBQUNmO0FBQ0Y7QUFDQTtBQUNFWixXQUFTLEVBQUVhLGlEQUFTLENBQUNDLE1BSk47O0FBS2Y7QUFDRjtBQUNBO0FBQ0ViLE9BQUssRUFBRVksaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFSVDs7QUFTZjtBQUNGO0FBQ0E7QUFDRTlCLE9BQUssRUFBRTJCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBWlQ7O0FBYWY7QUFDRjtBQUNBO0FBQ0VkLFVBQVEsRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFoQlo7O0FBaUJmO0FBQ0Y7QUFDQTtBQUNFYixRQUFNLEVBQUVVLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDO0FBcEJWLENBQWpCO0FBdUJlbEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjNhOTEwYmM4YjAxZThkM2Y3OWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBBdmF0YXIsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBHcmlkLFxyXG4gIGNvbG9ycyxcclxuICBGb3JtQ29udHJvbCxcclxuICBPdXRsaW5lZElucHV0LFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5pbXBvcnQgeyBtZW51X2l0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YSc7XHJcbmltcG9ydCB7IFRvcGJhciwgU2lkZWJhciB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgfSxcclxuICBzZWN0aW9uV3JhcHBlcjoge1xyXG4gICAgaGVpZ2h0OiA0MDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAzYzA1ODAnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICB9LFxyXG4gIGxpc3RJdGVtQXZhdGFyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgaGVpZ2h0OiA2MCxcclxuICAgIHdpZHRoOiA2MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjb3ZlciwgdGl0bGUsIHN1YnRpdGxlLCBhdXRob3IsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxQYXJhbGxheCBiYWNrZ3JvdW5kSW1hZ2U9e2NvdmVyLnNyY30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGl0bGUsIGNsYXNzZXMudGV4dFdoaXRlKSxcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ2gzJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1BdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3IucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YFB1Ymxpc2hlZCBieSAke2F1dGhvci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtgb24gJHthdXRob3IuZGF0ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDb3ZlciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNvdmVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBdXRob3Igb2YgdGhlIHBvc3RcclxuICAgKi9cclxuICBhdXRob3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=