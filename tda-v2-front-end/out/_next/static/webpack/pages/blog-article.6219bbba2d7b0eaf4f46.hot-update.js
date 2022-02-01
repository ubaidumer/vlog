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
      lineNumber: 71,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VidGl0bGUiLCJzZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvcGFjaXR5IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsImxpc3RJdGVtQXZhdGFyIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiYXZhdGFyIiwiaGVpZ2h0IiwiSGVybyIsInByb3BzIiwiY2xhc3NOYW1lIiwiY292ZXIiLCJhdXRob3IiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJzZWN0aW9uV3JhcHBlciIsInZhcmlhbnQiLCJwaG90byIsIm5hbWUiLCJkYXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsS0FBSyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsbUJBQWUsRUFBRSw2Q0FGYjtBQUdKQyxjQUFVLEVBQUUsT0FIUjtBQUlKQyxhQUFTLEVBQUUsT0FKUDtBQUtKQyxrQkFBYyxFQUFFLE9BTFo7QUFNSkMsb0JBQWdCLEVBQUUsV0FOZDtBQU9KQyxhQUFTLEVBQUU7QUFQUCxHQUQrQjtBQVVyQ0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFBRTtBQURFLEdBVjBCO0FBYXJDQyxPQUFLLEVBQUU7QUFDTEMsY0FBVSxFQUFFLE1BRFA7QUFFTEMsWUFBUSxFQUFFO0FBRkwsR0FiOEI7QUFpQnJDQyxVQUFRLEVBQUU7QUFDUkQsWUFBUSxFQUFFO0FBREYsR0FqQjJCO0FBb0JyQ0UsU0FBTyxFQUFFO0FBQ1BDLFlBQVEsRUFBRSxVQURIO0FBRVBDLE9BQUcsRUFBRSxLQUZFO0FBR1BDLFFBQUksRUFBRSxLQUhDO0FBSVBDLGFBQVMsRUFBRSx1QkFKSjtBQUtQQyxjQUFVLEVBQUUsQ0FMTDtBQU1QQyxpQkFBYSxFQUFFLENBTlI7QUFPUEMsV0FBTyxFQUFFLENBUEY7QUFRUEMsaUJBQWEsRUFBRSxlQVJSO0FBU1BDLDJCQUF1QixFQUFFLENBVGxCO0FBVVBDLDJCQUF1QixFQUFFLFNBVmxCO0FBV1BDLHFCQUFpQixFQUFFO0FBWFosR0FwQjRCO0FBaUNyQ0MsZ0JBQWMsRUFBRTtBQUNkQyxlQUFXLEVBQUU1QixLQUFLLENBQUM2QixPQUFOLENBQWMsQ0FBZDtBQURDLEdBakNxQjtBQW9DckNDLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUUsRUFERjtBQUVON0IsU0FBSyxFQUFFO0FBRkQ7QUFwQzZCLENBQUwsQ0FBTixDQUE1Qjs7QUEwQ0EsTUFBTThCLElBQUksR0FBR0MsS0FBSyxJQUFJO0FBQUE7O0FBQ3BCLFFBQU07QUFBRUMsYUFBRjtBQUFhQyxTQUFiO0FBQW9CeEIsU0FBcEI7QUFBMkJHLFlBQTNCO0FBQXFDc0I7QUFBckMsTUFBeURILEtBQS9EO0FBQUEsUUFBc0RJLElBQXRELHVLQUErREosS0FBL0Q7O0FBQ0EsUUFBTUssT0FBTyxHQUFHeEMsU0FBUyxFQUF6QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUV5QyxvREFBSSxDQUFDRCxPQUFPLENBQUNyQyxJQUFULEVBQWVpQyxTQUFmO0FBQXBCLEtBQW1ERyxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBSyxhQUFTLEVBQUVDLE9BQU8sQ0FBQ0UsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBUyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ3ZCLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDRSxNQUFDLGtFQUFEO0FBQ0UsU0FBSyxFQUFFSixLQURUO0FBRUUsWUFBUSxFQUFFRyxRQUZaO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxnQkFBUyxTQUpYO0FBS0UsY0FBVSxFQUFFO0FBQ1ZvQixlQUFTLEVBQUVLLG9EQUFJLENBQUNELE9BQU8sQ0FBQzNCLEtBQVQsRUFBZ0IyQixPQUFPLENBQUM3QixTQUF4QixDQURMO0FBRVZnQyxhQUFPLEVBQUU7QUFGQyxLQUxkO0FBU0UsaUJBQWEsRUFBRTtBQUNiUCxlQUFTLEVBQUVJLE9BQU8sQ0FBQzdCO0FBRE4sS0FUakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxzREFBRDtBQUFNLGtCQUFjLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVUsa0JBQWMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBZ0IsYUFBUyxFQUFFNkIsT0FBTyxDQUFDWCxjQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRCwwSkFDTVMsTUFBTSxDQUFDTSxLQURiO0FBRUUsT0FBRyxFQUFFTixNQUFNLENBQUNPLElBRmQ7QUFHRSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ1IsTUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsRUFRRSxNQUFDLDhEQUFEO0FBQ0UsV0FBTyxFQUFHLGdCQUFlTSxNQUFNLENBQUNPLElBQUssRUFEdkM7QUFFRSxhQUFTLEVBQUcsTUFBS1AsTUFBTSxDQUFDUSxJQUFLLEVBRi9CO0FBR0UsMEJBQXNCLEVBQUU7QUFDdEJWLGVBQVMsRUFBRUksT0FBTyxDQUFDN0IsU0FERztBQUV0QmdDLGFBQU8sRUFBRTtBQUZhLEtBSDFCO0FBT0UsNEJBQXdCLEVBQUU7QUFDeEJQLGVBQVMsRUFBRUksT0FBTyxDQUFDN0IsU0FESztBQUV4QmdDLGFBQU8sRUFBRTtBQUZlLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBZEYsQ0FERixDQURGLENBREYsQ0FERjtBQThDRCxDQWpERDs7R0FBTVQsSTtVQUVZbEMsUzs7O0tBRlprQyxJO0FBbUROQSxJQUFJLENBQUNhLFNBQUwsR0FBaUI7QUFDZjtBQUNGO0FBQ0E7QUFDRVgsV0FBUyxFQUFFWSxpREFBUyxDQUFDQyxNQUpOOztBQUtmO0FBQ0Y7QUFDQTtBQUNFWixPQUFLLEVBQUVXLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBUlQ7O0FBU2Y7QUFDRjtBQUNBO0FBQ0V0QyxPQUFLLEVBQUVtQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCRSxVQVpUOztBQWFmO0FBQ0Y7QUFDQTtBQUNFbkMsVUFBUSxFQUFFZ0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFoQlo7O0FBaUJmO0FBQ0Y7QUFDQTtBQUNFYixRQUFNLEVBQUVVLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDO0FBcEJWLENBQWpCO0FBdUJlakIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjYyMTliYmJhMmQ3YjBlYWY0ZjQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBBdmF0YXIsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBHcmlkLFxyXG4gIGNvbG9ycyxcclxuICBGb3JtQ29udHJvbCxcclxuICBPdXRsaW5lZElucHV0LFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5pbXBvcnQgeyBtZW51X2l0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YSc7XHJcbmltcG9ydCB7IFRvcGJhciwgU2lkZWJhciB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9ibG9nL2hlcm8ucG5nJylcIixcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogJzIuODVyZW0nLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzQwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluT3BhY2l0eScsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbicsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzJzJyxcclxuICB9LFxyXG4gIGxpc3RJdGVtQXZhdGFyOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgaGVpZ2h0OiA2MCxcclxuICAgIHdpZHRoOiA2MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjb3ZlciwgdGl0bGUsIHN1YnRpdGxlLCBhdXRob3IsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50OiAnaDMnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3VidGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3IucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17YFB1Ymxpc2hlZCBieSAke2F1dGhvci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YG9uICR7YXV0aG9yLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZXJuYWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKipcclxuICAgKiBDb3ZlciBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIGNvdmVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBBdXRob3Igb2YgdGhlIHBvc3RcclxuICAgKi9cclxuICBhdXRob3I6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=