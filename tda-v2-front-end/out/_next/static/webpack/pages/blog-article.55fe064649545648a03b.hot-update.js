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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data */ "./src/data/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .. */ "./src/views/BlogArticle/components/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\BlogArticle\\components\\Hero\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
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

  const {
    className,
    cover,
    title,
    subtitle,
    author
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "cover", "title", "subtitle", "author"]);

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isMd = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["useMediaQuery"])(theme.breakpoints.up('md'), {
    defaultMatches: true
  });
  const {
    0: openSidebar,
    1: setOpenSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = openSidebar;
  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_10__["Topbar"], {
    onSidebarOpen: handleSidebarOpen,
    openSidebar: openSidebar,
    pages: _data__WEBPACK_IMPORTED_MODULE_9__["menu_items"],
    themeMode: themeMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_10__["Sidebar"], {
    onClose: handleSidebarClose,
    open: open,
    variant: "temporary",
    pages: _data__WEBPACK_IMPORTED_MODULE_9__["menu_items"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_5__["SectionHeader"], {
    title: title,
    subtitle: subtitle,
    align: "left",
    "data-aos": "fade-up",
    titleProps: {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.title, classes.textWhite),
      variant: 'h3'
    },
    subtitleProps: {
      className: classes.textWhite
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx(List, {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx(ListItem, {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx(ListItemAvatar, {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx(Avatar, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
      lineNumber: 163,
      columnNumber: 15
    }
  }))))));
};

_s(Hero, "nhO10hnwUFZVBqH3XG2Bqwj6KSk=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["useMediaQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VidGl0bGUiLCJzZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvcGFjaXR5IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIlNlYXJjaEJ0bldyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJzZWFyY2hJbnB1dENvbnRhaW5lciIsInBhbGV0dGUiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsImRvd24iLCJzZWFyY2hCdXR0b24iLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIkhlcm8iLCJ0aGVtZU1vZGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdmVyIiwiYXV0aG9yIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwidXAiLCJkZWZhdWx0TWF0Y2hlcyIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJ1c2VTdGF0ZSIsImhhbmRsZVNpZGViYXJPcGVuIiwiaGFuZGxlU2lkZWJhckNsb3NlIiwib3BlbiIsImNsc3giLCJtZW51X2l0ZW1zIiwidmFyaWFudCIsImxpc3RJdGVtQXZhdGFyIiwicGhvdG8iLCJuYW1lIiwiYXZhdGFyIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKQyxtQkFBZSxFQUFFLDZDQUZiO0FBR0pDLGNBQVUsRUFBRSxPQUhSO0FBSUpDLGFBQVMsRUFBRSxPQUpQO0FBS0pDLGtCQUFjLEVBQUUsT0FMWjtBQU1KQyxvQkFBZ0IsRUFBRSxXQU5kO0FBT0pDLGFBQVMsRUFBRTtBQVBQLEdBRCtCO0FBVXJDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFO0FBREUsR0FWMEI7QUFhckNDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUUsTUFEUDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQWI4QjtBQWlCckNDLFVBQVEsRUFBRTtBQUNSRCxZQUFRLEVBQUU7QUFERixHQWpCMkI7QUFvQnJDRSxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsYUFBUyxFQUFFLHVCQUpKO0FBS1BDLGNBQVUsRUFBRSxDQUxMO0FBTVBDLGlCQUFhLEVBQUUsQ0FOUjtBQU9QQyxXQUFPLEVBQUUsQ0FQRjtBQVFQQyxpQkFBYSxFQUFFLGVBUlI7QUFTUEMsMkJBQXVCLEVBQUUsQ0FUbEI7QUFVUEMsMkJBQXVCLEVBQUUsU0FWbEI7QUFXUEMscUJBQWlCLEVBQUU7QUFYWixHQXBCNEI7QUFpQ3JDQyxrQkFBZ0IsRUFBRTtBQUNoQkMsV0FBTyxFQUFFLE1BRE87QUFFaEJDLGtCQUFjLEVBQUUsUUFGQTtBQUdoQkMsYUFBUyxFQUFFO0FBSEssR0FqQ21CO0FBc0NyQ0Msc0JBQW9CLEVBQUU7QUFDcEJELGFBQVMsRUFBRSxTQURTO0FBRXBCMUIsY0FBVSxFQUFFSixLQUFLLENBQUNnQyxPQUFOLENBQWM1QixVQUFkLENBQXlCNkIsS0FGakI7QUFHcEJDLFdBQU8sRUFBRWxDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBSFc7QUFJcEJDLGFBQVMsRUFBRSxrQ0FKUztBQUtwQkMsZ0JBQVksRUFBRXJDLEtBQUssQ0FBQ21DLE9BQU4sQ0FBYyxDQUFkLENBTE07QUFNcEJqQyxTQUFLLEVBQUUsTUFOYTtBQU9wQm9DLFVBQU0sRUFBRSxNQVBZO0FBUXBCVixXQUFPLEVBQUUsTUFSVztBQVNwQlcsY0FBVSxFQUFFLFFBVFE7QUFVcEIsMENBQXNDO0FBQ3BDQyxZQUFNLEVBQUU7QUFENEIsS0FWbEI7QUFhcEIsMENBQXNDO0FBQ3BDQyxpQkFBVyxFQUFFekMsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQ7QUFEdUIsS0FibEI7QUFnQnBCLHdDQUFvQztBQUNsQ08saUJBQVcsRUFBRTtBQURxQixLQWhCaEI7QUFtQnBCLGlDQUE2QjtBQUMzQlIsYUFBTyxFQUFFO0FBRGtCLEtBbkJUO0FBc0JwQixLQUFDbEMsS0FBSyxDQUFDMkMsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QlYsYUFBTyxFQUFFbEMsS0FBSyxDQUFDbUMsT0FBTixDQUFjLENBQWQ7QUFEcUI7QUF0QlosR0F0Q2U7QUFnRXJDVSxjQUFZLEVBQUU7QUFDWnpDLGNBQVUsRUFBRSxTQURBO0FBRVo4QixXQUFPLEVBQUUsV0FGRztBQUdaeEIsU0FBSyxFQUFFLE9BSEs7QUFJWixlQUFXO0FBQ1RBLFdBQUssRUFBRSxPQURFO0FBRVROLGdCQUFVLEVBQUU7QUFGSCxLQUpDO0FBUVowQyxhQUFTLEVBQUUsRUFSQztBQVNaQyxZQUFRLEVBQUUsR0FURTtBQVVaLEtBQUMvQyxLQUFLLENBQUMyQyxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELEdBQWdDO0FBQzlCRyxjQUFRLEVBQUU7QUFEb0I7QUFWcEI7QUFoRXVCLENBQUwsQ0FBTixDQUE1Qjs7QUFnRkEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBMEI7QUFBQTs7QUFDckMsUUFBTTtBQUFFQyxhQUFGO0FBQWFDLFNBQWI7QUFBb0J6QyxTQUFwQjtBQUEyQkcsWUFBM0I7QUFBcUN1QztBQUFyQyxNQUF5REgsS0FBL0Q7QUFBQSxRQUFzREksSUFBdEQsdUtBQStESixLQUEvRDs7QUFFQSxRQUFNSyxPQUFPLEdBQUd6RCxTQUFTLEVBQXpCO0FBRUEsUUFBTUUsS0FBSyxHQUFHd0QseUVBQVEsRUFBdEI7QUFFQSxRQUFNQyxJQUFJLEdBQUdDLHVFQUFhLENBQUMxRCxLQUFLLENBQUMyQyxXQUFOLENBQWtCZ0IsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxFQUE2QjtBQUNyREMsa0JBQWMsRUFBRTtBQURxQyxHQUE3QixDQUExQjtBQUlBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDOztBQUVBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDOUJGLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxRQUFNRyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CSCxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsUUFBTUksSUFBSSxHQUFHTCxXQUFiO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRU0sb0RBQUksQ0FBQ1osT0FBTyxDQUFDdEQsSUFBVCxFQUFla0QsU0FBZjtBQUFwQixLQUFtREcsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMseUNBQUQ7QUFDRSxpQkFBYSxFQUFFVSxpQkFEakI7QUFFRSxlQUFXLEVBQUVILFdBRmY7QUFHRSxTQUFLLEVBQUVPLGdEQUhUO0FBSUUsYUFBUyxFQUFFbkIsU0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLDBDQUFEO0FBQ0UsV0FBTyxFQUFFZ0Isa0JBRFg7QUFFRSxRQUFJLEVBQUVDLElBRlI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFNBQUssRUFBRUUsZ0RBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBY0UsTUFBQyw0REFBRDtBQUFTLGFBQVMsRUFBRWIsT0FBTyxDQUFDeEMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG1FQUNFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUVKLEtBRFQ7QUFFRSxZQUFRLEVBQUVHLFFBRlo7QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLGdCQUFTLFNBSlg7QUFLRSxjQUFVLEVBQUU7QUFDVnFDLGVBQVMsRUFBRWdCLG9EQUFJLENBQUNaLE9BQU8sQ0FBQzVDLEtBQVQsRUFBZ0I0QyxPQUFPLENBQUM5QyxTQUF4QixDQURMO0FBRVY0RCxhQUFPLEVBQUU7QUFGQyxLQUxkO0FBU0UsaUJBQWEsRUFBRTtBQUNibEIsZUFBUyxFQUFFSSxPQUFPLENBQUM5QztBQUROLEtBVGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWNFLE1BQUMsSUFBRDtBQUFNLGtCQUFjLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBVSxrQkFBYyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxjQUFEO0FBQWdCLGFBQVMsRUFBRThDLE9BQU8sQ0FBQ2UsY0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRCwwSkFDTWpCLE1BQU0sQ0FBQ2tCLEtBRGI7QUFFRSxPQUFHLEVBQUVsQixNQUFNLENBQUNtQixJQUZkO0FBR0UsYUFBUyxFQUFFakIsT0FBTyxDQUFDa0IsTUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsRUFRRSxNQUFDLFlBQUQ7QUFDRSxXQUFPLEVBQUcsZ0JBQWVwQixNQUFNLENBQUNtQixJQUFLLEVBRHZDO0FBRUUsYUFBUyxFQUFHLE1BQUtuQixNQUFNLENBQUNxQixJQUFLLEVBRi9CO0FBR0UsMEJBQXNCLEVBQUU7QUFDdEJ2QixlQUFTLEVBQUVJLE9BQU8sQ0FBQzlDLFNBREc7QUFFdEI0RCxhQUFPLEVBQUU7QUFGYSxLQUgxQjtBQU9FLDRCQUF3QixFQUFFO0FBQ3hCbEIsZUFBUyxFQUFFSSxPQUFPLENBQUM5QyxTQURLO0FBRXhCNEQsYUFBTyxFQUFFO0FBRmUsS0FQNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FkRixDQURGLENBZEYsQ0FERjtBQXlERCxDQWhGRDs7R0FBTXJCLEk7VUFHWWxELFMsRUFFRjBELGlFLEVBRURFLCtEOzs7S0FQVFYsSTtBQWtGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjU1ZmUwNjQ2NDk1NDU2NDhhMDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgR3JpZCxcclxuICBjb2xvcnMsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgT3V0bGluZWRJbnB1dCxcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtZW51X2l0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YSc7XHJcbmltcG9ydCB7IFRvcGJhciwgU2lkZWJhciB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9ibG9nL2hlcm8ucG5nJylcIixcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogJzIuODVyZW0nLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzQwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluT3BhY2l0eScsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbicsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzJzJyxcclxuICB9LFxyXG4gIFNlYXJjaEJ0bldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1hcmdpblRvcDogJzFyZW0nLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXRDb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzEuNzVyZW0nLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJveFNoYWRvdzogJzAgNHB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmUnOiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aUlucHV0QWRvcm5tZW50LXBvc2l0aW9uU3RhcnQnOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LWFkb3JuZWRTdGFydCc6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtaW5wdXQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzNCQjBFNScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAycmVtJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2U5NTExYycsXHJcbiAgICB9LFxyXG4gICAgbWF4SGVpZ2h0OiA0NSxcclxuICAgIG1pbldpZHRoOiAxMzUsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWluV2lkdGg6ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IHRoZW1lTW9kZSwgcHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjb3ZlciwgdGl0bGUsIHN1YnRpdGxlLCBhdXRob3IsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgaXNNZCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyksIHtcclxuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbb3BlblNpZGViYXIsIHNldE9wZW5TaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lkZWJhck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuU2lkZWJhcih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWRlYmFyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuU2lkZWJhcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlbiA9IG9wZW5TaWRlYmFyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxUb3BiYXJcclxuICAgICAgICBvblNpZGViYXJPcGVuPXtoYW5kbGVTaWRlYmFyT3Blbn1cclxuICAgICAgICBvcGVuU2lkZWJhcj17b3BlblNpZGViYXJ9XHJcbiAgICAgICAgcGFnZXM9e21lbnVfaXRlbXN9XHJcbiAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlU2lkZWJhckNsb3NlfVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgcGFnZXM9e21lbnVfaXRlbXN9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxyXG4gICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxyXG4gICAgICAgICAgICB0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGl0bGUsIGNsYXNzZXMudGV4dFdoaXRlKSxcclxuICAgICAgICAgICAgICB2YXJpYW50OiAnaDMnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdWJ0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1BdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgIHByaW1hcnk9e2BQdWJsaXNoZWQgYnkgJHthdXRob3IubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXtgb24gJHthdXRob3IuZGF0ZX1gfVxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9