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
    cover,
    title,
    subtitle,
    author
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["cover", "title", "subtitle", "author"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJtaW5IZWlnaHQiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwic3VidGl0bGUiLCJzZWN0aW9uIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJvcGFjaXR5IiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25EdXJhdGlvbiIsIlNlYXJjaEJ0bldyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJzZWFyY2hJbnB1dENvbnRhaW5lciIsInBhbGV0dGUiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJvcmRlciIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ0xlZnQiLCJicmVha3BvaW50cyIsImRvd24iLCJzZWFyY2hCdXR0b24iLCJtYXhIZWlnaHQiLCJtaW5XaWR0aCIsIkhlcm8iLCJ0aGVtZU1vZGUiLCJwcm9wcyIsImNvdmVyIiwiYXV0aG9yIiwicmVzdCIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlzTWQiLCJ1c2VNZWRpYVF1ZXJ5IiwidXAiLCJkZWZhdWx0TWF0Y2hlcyIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJ1c2VTdGF0ZSIsImhhbmRsZVNpZGViYXJPcGVuIiwiaGFuZGxlU2lkZWJhckNsb3NlIiwib3BlbiIsImNsc3giLCJjbGFzc05hbWUiLCJtZW51X2l0ZW1zIiwidmFyaWFudCIsImxpc3RJdGVtQXZhdGFyIiwicGhvdG8iLCJuYW1lIiwiYXZhdGFyIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFTQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxLQUFLLEtBQUs7QUFDckNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKQyxtQkFBZSxFQUFFLDZDQUZiO0FBR0pDLGNBQVUsRUFBRSxPQUhSO0FBSUpDLGFBQVMsRUFBRSxPQUpQO0FBS0pDLGtCQUFjLEVBQUUsT0FMWjtBQU1KQyxvQkFBZ0IsRUFBRSxXQU5kO0FBT0pDLGFBQVMsRUFBRTtBQVBQLEdBRCtCO0FBVXJDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFO0FBREUsR0FWMEI7QUFhckNDLE9BQUssRUFBRTtBQUNMQyxjQUFVLEVBQUUsTUFEUDtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQWI4QjtBQWlCckNDLFVBQVEsRUFBRTtBQUNSRCxZQUFRLEVBQUU7QUFERixHQWpCMkI7QUFvQnJDRSxTQUFPLEVBQUU7QUFDUEMsWUFBUSxFQUFFLFVBREg7QUFFUEMsT0FBRyxFQUFFLEtBRkU7QUFHUEMsUUFBSSxFQUFFLEtBSEM7QUFJUEMsYUFBUyxFQUFFLHVCQUpKO0FBS1BDLGNBQVUsRUFBRSxDQUxMO0FBTVBDLGlCQUFhLEVBQUUsQ0FOUjtBQU9QQyxXQUFPLEVBQUUsQ0FQRjtBQVFQQyxpQkFBYSxFQUFFLGVBUlI7QUFTUEMsMkJBQXVCLEVBQUUsQ0FUbEI7QUFVUEMsMkJBQXVCLEVBQUUsU0FWbEI7QUFXUEMscUJBQWlCLEVBQUU7QUFYWixHQXBCNEI7QUFpQ3JDQyxrQkFBZ0IsRUFBRTtBQUNoQkMsV0FBTyxFQUFF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QU0sQ0FBQ29CLElBRmQ7QUFHRSxhQUFTLEVBQUVsQixPQUFPLENBQUNtQixNQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixFQVFFLE1BQUMsWUFBRDtBQUNFLFdBQU8sRUFBRyxnQkFBZXJCLE1BQU0sQ0FBQ29CLElBQUssRUFEdkM7QUFFRSxhQUFTLEVBQUcsTUFBS3BCLE1BQU0sQ0FBQ3NCLElBQUssRUFGL0I7QUFHRSwwQkFBc0IsRUFBRTtBQUN0QlAsZUFBUyxFQUFFYixPQUFPLENBQUM3QyxTQURHO0FBRXRCNEQsYUFBTyxFQUFFO0FBRmEsS0FIMUI7QUFPRSw0QkFBd0IsRUFBRTtBQUN4QkYsZUFBUyxFQUFFYixPQUFPLENBQUM3QyxTQURLO0FBRXhCNEQsYUFBTyxFQUFFO0FBRmUsS0FQNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FkRixDQURGLENBZEYsQ0FERjtBQXlERCxDQWhGRDs7R0FBTXJCLEk7VUFHWWxELFMsRUFFRnlELGlFLEVBRURFLCtEOzs7S0FQVFQsSTtBQWtGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjNlNGY4MWU3YWIzNGU3Yjk4MjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnY29tcG9uZW50cy9hdG9tcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgR3JpZCxcclxuICBjb2xvcnMsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgT3V0bGluZWRJbnB1dCxcclxuICBJbnB1dEFkb3JubWVudCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtZW51X2l0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGF0YSc7XHJcbmltcG9ydCB7IFRvcGJhciwgU2lkZWJhciB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaHR0cHM6Ly9hc3NldHMuaXQyMi5ubC9ibG9nL2hlcm8ucG5nJylcIixcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gIH0sXHJcbiAgdGV4dFdoaXRlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBmb250U2l6ZTogJzIuODVyZW0nLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXHJcbiAgfSxcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzQwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBhbmltYXRpb25OYW1lOiAnZmFkZUluT3BhY2l0eScsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbicsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzJzJyxcclxuICB9LFxyXG4gIFNlYXJjaEJ0bldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1hcmdpblRvcDogJzFyZW0nLFxyXG4gIH0sXHJcbiAgc2VhcmNoSW5wdXRDb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogJzEuNzVyZW0nLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJveFNoYWRvdzogJzAgNHB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpJyxcclxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmUnOiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aUlucHV0QWRvcm5tZW50LXBvc2l0aW9uU3RhcnQnOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlPdXRsaW5lZElucHV0LWFkb3JuZWRTdGFydCc6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aU91dGxpbmVkSW5wdXQtaW5wdXQnOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzNCQjBFNScsXHJcbiAgICBwYWRkaW5nOiAnMXJlbSAycmVtJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2U5NTExYycsXHJcbiAgICB9LFxyXG4gICAgbWF4SGVpZ2h0OiA0NSxcclxuICAgIG1pbldpZHRoOiAxMzUsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWluV2lkdGg6ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVybyA9ICh7IHRoZW1lTW9kZSwgcHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgY292ZXIsIHRpdGxlLCBzdWJ0aXRsZSwgYXV0aG9yLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGlzTWQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpLCB7XHJcbiAgICBkZWZhdWx0TWF0Y2hlczogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW29wZW5TaWRlYmFyLCBzZXRPcGVuU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZGViYXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lkZWJhckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBvcGVuU2lkZWJhcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8VG9wYmFyXHJcbiAgICAgICAgb25TaWRlYmFyT3Blbj17aGFuZGxlU2lkZWJhck9wZW59XHJcbiAgICAgICAgb3BlblNpZGViYXI9e29wZW5TaWRlYmFyfVxyXG4gICAgICAgIHBhZ2VzPXttZW51X2l0ZW1zfVxyXG4gICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lkZWJhclxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZVNpZGViYXJDbG9zZX1cclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgICAgIHBhZ2VzPXttZW51X2l0ZW1zfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgdGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgdmFyaWFudDogJ2gzJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3VidGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgey4uLmF1dGhvci5waG90b31cclxuICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtgUHVibGlzaGVkIGJ5ICR7YXV0aG9yLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YG9uICR7YXV0aG9yLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgIHByaW1hcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRleHRXaGl0ZSxcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdzdWJ0aXRsZTEnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==