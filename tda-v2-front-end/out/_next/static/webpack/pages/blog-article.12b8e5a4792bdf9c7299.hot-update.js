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
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx(Parallax, {
    backgroundImage: cover.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.sectionWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    className: classes.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 66,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
    disableGutters: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemAvatar"], {
    className: classes.listItemAvatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, author.photo, {
    alt: author.name,
    className: classes.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2dBcnRpY2xlL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsIm92ZXJmbG93Iiwic2VjdGlvbldyYXBwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0V2hpdGUiLCJjb2xvciIsInRpdGxlIiwiZm9udFdlaWdodCIsInNlY3Rpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJsaXN0SXRlbUF2YXRhciIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImF2YXRhciIsIkhlcm8iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdmVyIiwic3VidGl0bGUiLCJhdXRob3IiLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giLCJzcmMiLCJ2YXJpYW50IiwicGhvdG8iLCJuYW1lIiwiZGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxNQURIO0FBRUpDLFVBQU0sRUFBRSxNQUZKO0FBR0pDLFlBQVEsRUFBRSxVQUhOO0FBSUpDLGNBQVUsRUFBRSxPQUpSO0FBS0pDLFlBQVEsRUFBRTtBQUxOLEdBRCtCO0FBUXJDQyxnQkFBYyxFQUFFO0FBQ2RKLFVBQU0sRUFBRSxHQURNO0FBRWRLLG1CQUFlLEVBQUU7QUFGSCxHQVJxQjtBQVlyQ0MsV0FBUyxFQUFFO0FBQ1RDLFNBQUssRUFB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O0FBT0UsNEJBQXdCLEVBQUU7QUFDeEJSLGVBQVMsRUFBRUssT0FBTyxDQUFDckIsU0FESztBQUV4QndCLGFBQU8sRUFBRTtBQUZlLEtBUDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBZEYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBZ0RELENBbkREOztHQUFNVixJO1VBRVl6QixTOzs7S0FGWnlCLEk7QUFxRE5BLElBQUksQ0FBQ2MsU0FBTCxHQUFpQjtBQUNmO0FBQ0Y7QUFDQTtBQUNFWixXQUFTLEVBQUVhLGlEQUFTLENBQUNDLE1BSk47O0FBS2Y7QUFDRjtBQUNBO0FBQ0ViLE9BQUssRUFBRVksaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFSVDs7QUFTZjtBQUNGO0FBQ0E7QUFDRTlCLE9BQUssRUFBRTJCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJFLFVBWlQ7O0FBYWY7QUFDRjtBQUNBO0FBQ0VkLFVBQVEsRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkUsVUFoQlo7O0FBaUJmO0FBQ0Y7QUFDQTtBQUNFYixRQUFNLEVBQUVVLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDO0FBcEJWLENBQWpCO0FBdUJlbEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy1hcnRpY2xlLjEyYjhlNWE0NzkyYmRmOWM3Mjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtQXZhdGFyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBBdmF0YXIsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBHcmlkLFxyXG4gIGNvbG9ycyxcclxuICBGb3JtQ29udHJvbCxcclxuICBPdXRsaW5lZElucHV0LFxyXG4gIElucHV0QWRvcm5tZW50LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25IZWFkZXIgfSBmcm9tICdjb21wb25lbnRzL21vbGVjdWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICdjb21wb25lbnRzL29yZ2FuaXNtcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gIH0sXHJcbiAgc2VjdGlvbldyYXBwZXI6IHtcclxuICAgIGhlaWdodDogNDAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwM2MwNTgwJyxcclxuICB9LFxyXG4gIHRleHRXaGl0ZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgcGFkZGluZ1RvcDogMCxcclxuICAgIHBhZGRpbmdCb3R0b206IDAsXHJcbiAgfSxcclxuICBsaXN0SXRlbUF2YXRhcjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICB3aWR0aDogNjAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSGVybyA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY292ZXIsIHRpdGxlLCBzdWJ0aXRsZSwgYXV0aG9yLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKX0gey4uLnJlc3R9PlxyXG4gICAgICA8UGFyYWxsYXggYmFja2dyb3VuZEltYWdlPXtjb3Zlci5zcmN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGU9e3N1YnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnRpdGxlLCBjbGFzc2VzLnRleHRXaGl0ZSksXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6ICdoMycsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGVQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtQXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uYXV0aG9yLnBob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2BQdWJsaXNoZWQgYnkgJHthdXRob3IubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YG9uICR7YXV0aG9yLmRhdGV9YH1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VHlwb2dyYXBoeVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dFdoaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogJ3N1YnRpdGxlMScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlUeXBvZ3JhcGh5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy50ZXh0V2hpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiAnc3VidGl0bGUxJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcmFsbGF4PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ292ZXIgb2YgdGhlIGhlcm9cclxuICAgKi9cclxuICBjb3ZlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIHRoZSBoZXJvXHJcbiAgICovXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBvZiB0aGUgaGVyb1xyXG4gICAqL1xyXG4gIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgLyoqXHJcbiAgICogQXV0aG9yIG9mIHRoZSBwb3N0XHJcbiAgICovXHJcbiAgYXV0aG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9