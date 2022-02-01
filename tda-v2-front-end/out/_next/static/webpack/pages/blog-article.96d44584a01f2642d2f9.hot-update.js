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
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyb05ldy9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJzZWN0aW9uV3JhcHBlciIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInRleHRXaGl0ZSIsImNvbG9yIiwidGl0bGUiLCJmb250V2VpZ2h0Iiwic2VjdGlvbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibGlzdEl0ZW1BdmF0YXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJIZXJvIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb3ZlciIsInN1YnRpdGxlIiwiYXV0aG9yIiwicmVzdCIsImNsYXNzZXMiLCJjbHN4Iiwic3JjIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRSw2Q0FGYjtBQUdKQyxjQUFVLEVBQUUsT0FIUjtBQUlKQyxhQUFTLEVBQUUsT0FKUDtBQUtKQyxrQkFBYyxFQUFFLE9BTFo7QUFNSkMsb0JBQWdCLEVBQUUsV0FOZDtBQU9KQyxhQUFTLEVBQUU7QUFQUCxHQUQrQjtBQVVyQ0MsZ0JBQWMsRUFBRTtBQUNkQyxVQUFNLEVBQUUsR0FETTtBQUVkQyxtQkFBZSxFQUFFO0FBRkgsR0FWcUI7QUFjckNDLFdBQVMsRUFBRTtBQUNUQyxTQUFLLEVBQUU7QUFERSxHQWQwQjtBQWlCckNDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUU7QUFEUCxHQWpCOEI7QUFvQnJDQyxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsYUFBUyxFQUFFLHVCQUpKO0FBS1BDLGNBQVUsRUFBRSxDQUxMO0FBTVBDLGlCQUFhLEVBQUU7QUFOUixHQXBCNEI7QUE0QnJDQyxnQkFBYyxFQUFFO0FBQ2RDLGVBQVcsRUFBRXhCLEtBQUssQ0FBQ3lCLE9BQU4sQ0FBYyxDQUFkO0FBREMsR0E1QnFCO0FBK0JyQ0MsUUFBTSxFQUFFO0FBQ05oQixVQUFNLEVBQUUsRUFERjtBQUVOUixTQUFLLEVBQUU7QUFGRDtBQS9CNkIsQ0FBTCxDQUFOLENBQTVCOztBQXFDQSxNQUFNeUIsSUFBSSxHQUFHQyxLQUFLLElBQUk7QUFBQTs7QUFDcEIsUUFBTTtBQUFFQyxhQUFGO0FBQWFDLFNBQWI7QUFBb0JoQixTQUFwQjtBQUEyQmlCLFlBQTNCO0FBQXFDQztBQUFyQyxNQUF5REosS0FBL0Q7QUFBQSxRQUFzREssSUFBdEQsdUtBQStETCxLQUEvRDs7QUFDQSxRQUFNTSxPQUFPLEdBQUdwQyxTQUFTLEVBQXpCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRXFDLG9EQUFJLENBQUNELE9BQU8sQ0FBQ2pDLElBQVQsRUFBZTRCLFNBQWY7QUFBcEIsS0FBbURJLElBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLDZEQUFEO0FBQVUsbUJBQWUsRUFBRUgsS0FBSyxDQUFDTSxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ3pCLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREY7QUFPRCxDQVZEOztHQUFNa0IsSTtVQUVZN0IsUzs7O0tBRlo2QixJO0FBWU5BLElBQUksQ0FBQ1UsU0FBTCxHQUFpQjtBQUNmO0FBQ0Y7QUFDQTtBQUNFUixXQUFTLEVBQUVTLGlEQUFTLENBQUNDLE1BSk47O0FBS2Y7QUFDRjtBQUNBO0FBQ0VULE9BQUssRUFBRVEsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFSVDs7QUFTZjtBQUNGO0FBQ0E7QUFDRTNCLE9BQUssRUFBRXdCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBWlQ7O0FBYWY7QUFDRjtBQUNBO0FBQ0VWLFVBQVEsRUFBRU8saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFoQlo7O0FBaUJmO0FBQ0Y7QUFDQTtBQUNFVCxRQUFNLEVBQUVNLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDO0FBcEJWLENBQWpCO0FBdUJlZCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLWFydGljbGUuOTZkNDQ1ODRhMDFmMjY0MmQyZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUF2YXRhcixcbiAgTGlzdEl0ZW1UZXh0LFxuICBBdmF0YXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XG5pbXBvcnQgeyBTZWN0aW9uLCBQYXJhbGxheCB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2Jsb2cvaGVyby5wbmcnKVwiLFxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgfSxcbiAgc2VjdGlvbldyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IDQwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAzYzA1ODAnLFxuICB9LFxuICB0ZXh0V2hpdGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgcGFkZGluZ1RvcDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxuICB9LFxuICBsaXN0SXRlbUF2YXRhcjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBoZWlnaHQ6IDYwLFxuICAgIHdpZHRoOiA2MCxcbiAgfSxcbn0pKTtcblxuY29uc3QgSGVybyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNvdmVyLCB0aXRsZSwgc3VidGl0bGUsIGF1dGhvciwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIDxQYXJhbGxheCBiYWNrZ3JvdW5kSW1hZ2U9e2NvdmVyLnNyY30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT48L2Rpdj5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZXJvLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENvdmVyIG9mIHRoZSBoZXJvXG4gICAqL1xuICBjb3ZlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIGhlcm9cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgaGVyb1xuICAgKi9cbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEF1dGhvciBvZiB0aGUgcG9zdFxuICAgKi9cbiAgYXV0aG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==