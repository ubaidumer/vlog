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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VidGl0bGUiLCJzZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvcGFjaXR5IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIlNlYXJjaEJ0bldyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJzZWFyY2hJbnB1dENvbnRhaW5lciIsInBhbGV0dGUiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsImRvd24iLCJzZWFyY2hCdXR0b24iLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIkhlcm8iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdmVyIiwiYXV0aG9yIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwidXAiLCJkZWZhdWx0TWF0Y2hlcyIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJ1c2VTdGF0ZSIsImhhbmRsZVNpZGViYXJPcGVuIiwiaGFuZGxlU2lkZWJhckNsb3NlIiwib3BlbiIsImNsc3giLCJtZW51X2l0ZW1zIiwidGhlbWVNb2RlIiwidmFyaWFudCIsImxpc3RJdGVtQXZhdGFyIiwicGhvdG8iLCJuYW1lIiwiYXZhdGFyIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKQyxtQkFBZSxFQUFFLDZDQUZiO0FBR0pDLGNBQVUsRUFBRSxPQUhSO0FBSUpDLGFBQVMsRUFBRSxPQUpQO0FBS0pDLGtCQUFjLEVBQUUsT0FMWjtBQU1KQyxvQkFBZ0IsRUFBRSxXQU5kO0FBT0pDLGFBQVMsRUFBRTtBQVBQLEdBRCtCO0FBVXJDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFO0FBREUsR0FWMEI7QUFhckNDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUUsTUFEUDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQWI4QjtBQWlCckNDLFVBQVEsRUFBRTtBQUNSRCxZQUFRLEVBQUU7QUFERixHQWpCMkI7QUFvQnJDRSxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsYUFBUyxFQUFFLHVCQUpKO0FBS1BDLGNBQVUsRUFBRSxDQUxMO0FBTVBDLGlCQUFhLEVBQUUsQ0FOUjtBQU9QQyxXQUFPLEVBQUUsQ0FQRjtBQVFQQyxpQkFBYSxFQUFFLGVBUlI7QUFTUEMsMkJBQXVCLEVBQUUsQ0FUbEI7QUFVUEMsMkJBQXVCLEVBQUUsU0FWbEI7QUFXUEMscUJBQWlCLEVBQUU7QUFYWixHQXBCNEI7QUFpQ3JDQyxrQkFBZ0IsRUFBRTtBQUNoQkMsV0FBTyxFQUFF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ZDtBQUdFLGFBQVMsRUFBRWxCLE9BQU8sQ0FBQ21CLE1BSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLEVBUUUsTUFBQyxZQUFEO0FBQ0UsV0FBTyxFQUFHLGdCQUFlckIsTUFBTSxDQUFDb0IsSUFBSyxFQUR2QztBQUVFLGFBQVMsRUFBRyxNQUFLcEIsTUFBTSxDQUFDc0IsSUFBSyxFQUYvQjtBQUdFLDBCQUFzQixFQUFFO0FBQ3RCeEIsZUFBUyxFQUFFSSxPQUFPLENBQUM3QyxTQURHO0FBRXRCNEQsYUFBTyxFQUFFO0FBRmEsS0FIMUI7QUFPRSw0QkFBd0IsRUFBRTtBQUN4Qm5CLGVBQVMsRUFBRUksT0FBTyxDQUFDN0MsU0FESztBQUV4QjRELGFBQU8sRUFBRTtBQUZlLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBZEYsQ0FERixDQWRGLENBREY7QUF5REQsQ0FoRkQ7O0dBQU1yQixJO1VBR1lsRCxTLEVBRUZ5RCxpRSxFQUVERSwrRDs7O0tBUFRULEk7QUFrRlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2ctYXJ0aWNsZS5iM2RiMTkxNGYzMmRjZGU5YmE3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyIH0gZnJvbSAnY29tcG9uZW50cy9tb2xlY3VsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xyXG5cclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIEdyaWQsXHJcbiAgY29sb3JzLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIE91dGxpbmVkSW5wdXQsXHJcbiAgSW5wdXRBZG9ybm1lbnQsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWVudV9pdGVtcyB9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGEnO1xyXG5pbXBvcnQgeyBUb3BiYXIsIFNpZGViYXIgfSBmcm9tICcuLic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2h0dHBzOi8vYXNzZXRzLml0MjIubmwvYmxvZy9oZXJvLnBuZycpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgZm9udFNpemU6ICcyLjg1cmVtJyxcclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc0MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgcGFkZGluZ1RvcDogMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogJ2ZhZGVJbk9wYWNpdHknLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4nLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcycycsXHJcbiAgfSxcclxuICBTZWFyY2hCdG5XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6ICcxcmVtJyxcclxuICB9LFxyXG4gIHNlYXJjaElucHV0Q29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcxLjc1cmVtJyxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKScsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LW5vdGNoZWRPdXRsaW5lJzoge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlJbnB1dEFkb3JubWVudC1wb3NpdGlvblN0YXJ0Jzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICAnJiAuTXVpT3V0bGluZWRJbnB1dC1hZG9ybmVkU3RhcnQnOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LWlucHV0Jzoge1xyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlYXJjaEJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZDogJyMzQkIwRTUnLFxyXG4gICAgcGFkZGluZzogJzFyZW0gMnJlbScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNlOTUxMWMnLFxyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDogNDUsXHJcbiAgICBtaW5XaWR0aDogMTM1LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIG1pbldpZHRoOiAnYXV0bycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlcm8gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNvdmVyLCB0aXRsZSwgc3VidGl0bGUsIGF1dGhvciwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBpc01kID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKSwge1xyXG4gICAgZGVmYXVsdE1hdGNoZXM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWRlYmFyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5TaWRlYmFyKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5TaWRlYmFyKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuID0gb3BlblNpZGViYXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cclxuICAgICAgPFRvcGJhclxyXG4gICAgICAgIG9uU2lkZWJhck9wZW49e2hhbmRsZVNpZGViYXJPcGVufVxyXG4gICAgICAgIG9wZW5TaWRlYmFyPXtvcGVuU2lkZWJhcn1cclxuICAgICAgICBwYWdlcz17bWVudV9pdGVtc31cclxuICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cclxuICAgICAgLz5cclxuICAgICAgPFNpZGViYXJcclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVTaWRlYmFyQ2xvc2V9XHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICBwYWdlcz17bWVudV9pdGVtc31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBzdWJ0aXRsZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgIHRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50aXRsZSwgY2xhc3Nlcy50ZXh0V2hpdGUpLFxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ6ICdoMycsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN1YnRpdGxlUHJvcHM9e3tcclxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbUF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5hdXRob3IucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YFB1Ymxpc2hlZCBieSAke2F1dGhvci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2BvbiAke2F1dGhvci5kYXRlfWB9XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVR5cG9ncmFwaHlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=