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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data */ "./src/data/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "./src/views/BlogArticle/components/index.js");


var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\Hero\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
  SearchBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  searchInputContainer: {
    marginTop: '1.75rem',
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important'
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2)
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0
    },
    '& .MuiOutlinedInput-input': {
      padding: 0
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  },
  searchButton: {
    background: '#3BB0E5',
    padding: '1rem 2rem',
    color: 'white',
    '&:hover': {
      color: 'white',
      background: '#e9511c'
    },
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto'
    }
  }
}));

const Hero = ({
  themeMode,
  props
}) => {
  _s();

  console.log(props); // const { cover, title, subtitle, author, ...rest } = props;

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  const {
    0: openSidebar,
    1: setOpenSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = openSidebar;
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_9__["Topbar"], {
    onSidebarOpen: handleSidebarOpen,
    openSidebar: openSidebar,
    pages: _data__WEBPACK_IMPORTED_MODULE_8__["menu_items"],
    themeMode: themeMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_9__["Sidebar"], {
    onClose: handleSidebarClose,
    open: open,
    variant: "temporary",
    pages: _data__WEBPACK_IMPORTED_MODULE_8__["menu_items"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_4__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    align: "left",
    "data-aos": "fade-up",
    titleProps: {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.title, classes.textWhite),
      variant: 'h3'
    },
    subtitleProps: {
      className: classes.textWhite
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }), __jsx(List, {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(ListItem, {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(ListItemAvatar, {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx(Avatar, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }))), __jsx(ListItemText, {
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
      lineNumber: 164,
      columnNumber: 15
    }
  }))))));
};

_s(Hero, "nhO10hnwUFZVBqH3XG2Bqwj6KSk=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_7__["useMediaQuery"]];
});

_c = Hero;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VidGl0bGUiLCJzZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvcGFjaXR5IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIlNlYXJjaEJ0bldyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJzZWFyY2hJbnB1dENvbnRhaW5lciIsInBhbGV0dGUiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsImRvd24iLCJzZWFyY2hCdXR0b24iLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIkhlcm8iLCJ0aGVtZU1vZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc01kIiwidXNlTWVkaWFRdWVyeSIsInVwIiwiZGVmYXVsdE1hdGNoZXMiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwidXNlU3RhdGUiLCJoYW5kbGVTaWRlYmFyT3BlbiIsImhhbmRsZVNpZGViYXJDbG9zZSIsIm9wZW4iLCJjbHN4IiwicmVzdCIsIm1lbnVfaXRlbXMiLCJjbGFzc05hbWUiLCJ2YXJpYW50IiwibGlzdEl0ZW1BdmF0YXIiLCJhdXRob3IiLCJwaG90byIsIm5hbWUiLCJhdmF0YXIiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKQyxtQkFBZSxFQUFFLDZDQUZiO0FBR0pDLGNBQVUsRUFBRSxPQUhSO0FBSUpDLGFBQVMsRUFBRSxPQUpQO0FBS0pDLGtCQUFjLEVBQUUsT0FMWjtBQU1KQyxvQkFBZ0IsRUFBRSxXQU5kO0FBT0pDLGFBQVMsRUFBRTtBQVBQLEdBRCtCO0FBVXJDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFO0FBREUsR0FWMEI7QUFhckNDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUUsTUFEUDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQWI4QjtBQWlCckNDLFVBQVEsRUFBRTtBQUNSRCxZQUFRLEVBQUU7QUFERixHQWpCMkI7QUFvQnJDRSxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsYUFBUyxFQUFFLHVCQUpKO0FBS1BDLGNBQVUsRUFBRSxDQUxMO0FBTVBDLGlCQUFhLEVBQUUsQ0FOUjtBQU9QQyxXQUFPLEVBQUUsQ0FQRjtBQVFQQyxpQkFBYSxFQUFFLGVBUlI7QUFTUEMsMkJBQXVCLEVBQUUsQ0FUbEI7QUFVUEMsMkJBQXVCLEVBQUUsU0FWbEI7QUFXUEMscUJBQWlCLEVBQUU7QUFYWixHQXBCNEI7QUFpQ3JDQyxrQkFBZ0IsRUFBRTtBQUNoQkMsV0FBTyxFQUFFLE1BRE87QUFFaEJDLGtCQUFjLEVBQUUsUUFGQTtBQUdoQkMsYUFBUyxFQUFFO0FBSEssR0FqQ21CO0FBc0NyQ0Msc0JBQW9CLEVBQUU7QUFDcEJELGFBQVMsRUFBRSxTQURTO0FBRXBCMUIsY0FBVSxFQUFFSixLQUFLLENBQUNnQyxPQUFOLENBQWM1QixVQUFkLENBQXlCNkIsS0FGakI7QUFHcEJDLFdBQU8sRUFBRWxDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBSFc7QUFJcEJDLGFBQVMsRUFBRSxrQ0FKUztBQUtwQkMsZ0JBQVksRUFBRXJDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBTE07QUFNcEJqQyxTQUFLLEVBQUUsTUFOYTtBQU9wQm9DLFVBQU0sRUFBRSxNQVBZO0FBUXBCVixXQUFPLEVBQUUsTUFSVztBQVNwQlcsY0FBVSxFQUFFLFFBVFE7QUFVcEIsMENBQXNDO0FBQ3BDQyxZQUFNLEVBQUU7QUFENEIsS0FWbEI7QUFhcEIsMENBQXNDO0FBQ3BDQyxpQkFBVyxFQUFFekMsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQ7QUFEdUIsS0FibEI7QUFnQnBCLHdDQUFvQztBQUNsQ08saUJBQVcsRUFBRTtBQURxQixLQWhCaEI7QUFtQnBCLGlDQUE2QjtBQUMzQlIsYUFBTyxFQUFFO0FBRGtCLEtBbkJUO0FBc0JwQixLQUFDbEMsS0FBSyxDQUFDMkMsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QlYsYUFBTyxFQUFFbEMsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQ7QUFEcUI7QUF0QlosR0F0Q2U7QUFnRXJDVSxjQUFZLEVBQUU7QUFDWnpDLGNBQVUsRUFBRSxTQURBO0FBRVo4QixXQUFPLEVBQUUsV0FGRztBQUdaeEIsU0FBSyxFQUFFLE9BSEs7QUFJWixlQUFXO0FBQ1RBLFdBQUssRUFBRSxPQURFO0FBRVROLGdCQUFVLEVBQUU7QUFGSCxLQUpDO0FBUVowQyxhQUFTLEVBQUUsRUFSQztBQVNaQyxZQUFRLEVBQUUsR0FURTtBQVVaLEtBQUMvQyxLQUFLLENBQUMyQyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCRyxjQUFRLEVBQUU7QUFEb0I7QUFWcEI7QUFoRXVCLENBQUwsQ0FBTixDQUE1Qjs7QUFnRkEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBMEI7QUFBQTs7QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBRHFDLENBRXJDOztBQUVBLFFBQU1HLE9BQU8sR0FBR3ZELFNBQVMsRUFBekI7QUFFQSxRQUFNRSxLQUFLLEdBQUdzRCx5RUFBUSxFQUF0QjtBQUVBLFFBQU1DLElBQUksR0FBR0MsdUVBQWEsQ0FBQ3hELEtBQUssQ0FBQzJDLFdBQU4sQ0FBa0JjLEVBQWxCLENBQXFCLElBQXJCLENBQUQsRUFBNkI7QUFDckRDLGtCQUFjLEVBQUU7QUFEcUMsR0FBN0IsQ0FBMUI7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUE5Qzs7QUFFQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCRixrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsUUFBTUcsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQkgsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1JLElBQUksR0FBR0wsV0FBYjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVNLG9EQUFJLENBQUNaLE9BQU8sQ0FBQ3BELElBQVQ7QUFBcEIsS0FBd0NpRSxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0UsTUFBQyx3Q0FBRDtBQUNFLGlCQUFhLEVBQUVKLGlCQURqQjtBQUVFLGVBQVcsRUFBRUgsV0FGZjtBQUdFLFNBQUssRUFBRVEsZ0RBSFQ7QUFJRSxhQUFTLEVBQUVsQixTQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMseUNBQUQ7QUFDRSxXQUFPLEVBQUVjLGtCQURYO0FBRUUsUUFBSSxFQUFFQyxJQUZSO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFJRSxTQUFLLEVBQUVHLGdEQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWNFLE1BQUMsNERBQUQ7QUFBUyxhQUFTLEVBQUVkLE9BQU8sQ0FBQ3RDLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxtRUFDRSxNQUFDLGtFQUFEO0FBQ0UsU0FBSyxFQUFFSixLQURUO0FBRUUsWUFBUSxFQUFFRyxRQUZaO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxnQkFBUyxTQUpYO0FBS0UsY0FBVSxFQUFFO0FBQ1ZzRCxlQUFTLEVBQUVILG9EQUFJLENBQUNaLE9BQU8sQ0FBQzFDLEtBQVQsRUFBZ0IwQyxPQUFPLENBQUM1QyxTQUF4QixDQURMO0FBRVY0RCxhQUFPLEVBQUU7QUFGQyxLQUxkO0FBU0UsaUJBQWEsRUFBRTtBQUNiRCxlQUFTLEVBQUVmLE9BQU8sQ0FBQzVDO0FBRE4sS0FUakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBY0UsTUFBQyxJQUFEO0FBQU0sa0JBQWMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLGtCQUFjLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGNBQUQ7QUFBZ0IsYUFBUyxFQUFFNEMsT0FBTyxDQUFDaUIsY0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRCwwSkFDTUMsTUFBTSxDQUFDQyxLQURiO0FBRUUsT0FBRyxFQUFFRCxNQUFNLENBQUNFLElBRmQ7QUFHRSxhQUFTLEVBQUVwQixPQUFPLENBQUNxQixNQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixFQVFFLE1BQUMsWUFBRDtBQUNFLFdBQU8sRUFBRyxnQkFBZUgsTUFBTSxDQUFDRSxJQUFLLEVBRHZDO0FBRUUsYUFBUyxFQUFHLE1BQUtGLE1BQU0sQ0FBQ0ksSUFBSyxFQUYvQjtBQUdFLDBCQUFzQixFQUFFO0FBQ3RCUCxlQUFTLEVBQUVmLE9BQU8sQ0FBQzVDLFNBREc7QUFFdEI0RCxhQUFPLEVBQUU7QUFGYSxLQUgxQjtBQU9FLDRCQUF3QixFQUFFO0FBQ3hCRCxlQUFTLEVBQUVmLE9BQU8sQ0FBQzVDLFNBREs7QUFFeEI0RCxhQUFPLEVBQUU7QUFGZSxLQVA1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQWRGLENBREYsQ0FkRixDQURGO0FBeURELENBakZEOztHQUFNckIsSTtVQUlZbEQsUyxFQUVGd0QsaUUsRUFFREUsK0Q7OztLQVJUUixJO0FBbUZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLWFydGljbGUuNGViMTNlMGYwYmNmODNlMjRjODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvb3JnYW5pc21zJztcclxuXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdjb21wb25lbnRzL2F0b21zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBHcmlkLFxyXG4gIGNvbG9ycyxcclxuICBGb3JtQ29udHJvbCxcclxuICBPdXRsaW5lZElucHV0LFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1lbnVfaXRlbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhJztcclxuaW1wb3J0IHsgVG9wYmFyLCBTaWRlYmFyIH0gZnJvbSAnLi4nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCdodHRwczovL2Fzc2V0cy5pdDIyLm5sL2Jsb2cvaGVyby5wbmcnKVwiLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXHJcbiAgfSxcclxuICB0ZXh0V2hpdGU6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGZvbnRTaXplOiAnMi44NXJlbScsXHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnNDAlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgIHBhZGRpbmdUb3A6IDAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGFuaW1hdGlvbk5hbWU6ICdmYWRlSW5PcGFjaXR5JyxcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlLWluJyxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMnMnLFxyXG4gIH0sXHJcbiAgU2VhcmNoQnRuV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiAnMXJlbScsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dENvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnMS43NXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgYm94U2hhZG93OiAnMCA0cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSknLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpSW5wdXRBZG9ybm1lbnQtcG9zaXRpb25TdGFydCc6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtYWRvcm5lZFN0YXJ0Jzoge1xyXG4gICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1pbnB1dCc6IHtcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWFyY2hCdXR0b246IHtcclxuICAgIGJhY2tncm91bmQ6ICcjM0JCMEU1JyxcclxuICAgIHBhZGRpbmc6ICcxcmVtIDJyZW0nLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZTk1MTFjJyxcclxuICAgIH0sXHJcbiAgICBtYXhIZWlnaHQ6IDQ1LFxyXG4gICAgbWluV2lkdGg6IDEzNSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtaW5XaWR0aDogJ2F1dG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZXJvID0gKHsgdGhlbWVNb2RlLCBwcm9wcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIC8vIGNvbnN0IHsgY292ZXIsIHRpdGxlLCBzdWJ0aXRsZSwgYXV0aG9yLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW29wZW5TaWRlYmFyLCBzZXRPcGVuU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lkZWJhckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBvcGVuU2lkZWJhcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCl9IHsuLi5yZXN0fT5cclxuICAgICAgPFRvcGJhclxyXG4gICAgICAgIG9uU2lkZWJhck9wZW49e2hhbmRsZVNpZGViYXJPcGVufVxyXG4gICAgICAgIG9wZW5TaWRlYmFyPXtvcGVuU2lkZWJhcn1cclxuICAgICAgICBwYWdlcz17bWVudV9pdGVtc31cclxuICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cclxuICAgICAgLz5cclxuICAgICAgPFNpZGViYXJcclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVTaWRlYmFyQ2xvc2V9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICBwYWdlcz17bWVudV9pdGVtc31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50aXRsZSwgY2xhc3Nlcy50ZXh0V2hpdGUpLFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ6ICdoMycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3IucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YFB1Ymxpc2hlZCBieSAke2F1dGhvci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2BvbiAke2F1dGhvci5kYXRlfWB9XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=