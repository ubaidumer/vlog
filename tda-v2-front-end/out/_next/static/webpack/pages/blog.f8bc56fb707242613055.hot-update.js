webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/views/Blog/components/Archive/Archive.js":
/*!******************************************************!*\
  !*** ./src/views/Blog/components/Archive/Archive.js ***!
  \******************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms */ "./src/components/atoms/index.js");
/* harmony import */ var components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/molecules */ "./src/components/molecules/index.js");
/* harmony import */ var components_organisms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/organisms */ "./src/components/organisms/index.js");



var _jsxFileName = "D:\\React Templates\\tda-v2-front-end\\src\\views\\Blog\\components\\Archive\\Archive.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    boxShadow: 'none',
    borderRadius: 0,
    '& .card-product__content': {
      padding: theme.spacing(2, 0, 0, 0)
    },
    '& .card-product__media': {
      height: '100%',
      width: '100%',
      '& img': {
        height: '100%',
        width: '100%'
      }
    }
  },
  image: {
    objectFit: 'cover'
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  },
  blogTitle: {
    fontWeight: 700
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3)
    }
  }
}));

const Archive = props => {
  _s();

  const {
    data,
    className
  } = props,
        rest = Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["data", "className"]);

  const classes = useStyles();

  const BlogMediaContent = props => __jsx(components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }));

  const BlogContent = props => __jsx("div", {
    className: classes.blogContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textPrimary",
    className: classes.blogTitle,
    gutterBottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "caption",
    color: "textPrimary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("i", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, props.author.name, " - ", props.date)));

  return __jsx("div", Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: className
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), __jsx(components_molecules__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: "Similar Posts",
    "data-aos": "fade-up",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, data.map((item, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    key: index,
    "data-aos": "fade-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(components_organisms__WEBPACK_IMPORTED_MODULE_8__["CardProduct"], {
    className: classes.cardProduct,
    mediaContent: __jsx(BlogMediaContent, Object(D_React_Templates_tda_v2_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.cover, {
      alt: item.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    })),
    cardContent: __jsx(BlogContent, {
      title: item.title,
      subtitle: item.subtitle,
      author: item.author,
      date: item.date,
      tags: item.tags,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })))));
};

_s(Archive, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Archive;
Archive.propTypes = {
  /**
   * External classes
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * data to be rendered
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Archive);

var _c;

$RefreshReg$(_c, "Archive");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0Jsb2cvY29tcG9uZW50cy9BcmNoaXZlL0FyY2hpdmUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY2FyZFByb2R1Y3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJibG9nQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwiYmxvZ1RpdGxlIiwiZm9udFdlaWdodCIsInNlY3Rpb25UaXRsZSIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwidXAiLCJBcmNoaXZlIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVzdCIsImNsYXNzZXMiLCJCbG9nTWVkaWFDb250ZW50IiwiQmxvZ0NvbnRlbnQiLCJ0aXRsZSIsImF1dGhvciIsIm5hbWUiLCJkYXRlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY292ZXIiLCJzdWJ0aXRsZSIsInRhZ3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLEtBQUssS0FBSztBQUNyQ0MsYUFBVyxFQUFFO0FBQ1hDLFdBQU8sRUFBRSxNQURFO0FBRVhDLGlCQUFhLEVBQUUsUUFGSjtBQUdYQyxjQUFVLEVBQUUsUUFIRDtBQUlYQyxVQUFNLEVBQUUsTUFKRztBQUtYQyxTQUFLLEVBQUUsTUFMSTtBQU1YQyxhQUFTLEVBQUUsTUFOQTtBQU9YQyxnQkFBWSxFQUFFLENBUEg7QUFRWCxnQ0FBNEI7QUFDMUJDLGFB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a0IsTUFBRSxFQUFFLENBQXRCO0FBQXlCLE9BQUcsRUFBRUEsS0FBOUI7QUFBcUMsZ0JBQVMsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVULE9BQU8sQ0FBQ3pCLFdBRHJCO0FBRUUsZ0JBQVksRUFDVixNQUFDLGdCQUFELDBKQUFzQmlDLElBQUksQ0FBQ0UsS0FBM0I7QUFBa0MsU0FBRyxFQUFFRixJQUFJLENBQUNMLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FISjtBQUtFLGVBQVcsRUFDVCxNQUFDLFdBQUQ7QUFDRSxXQUFLLEVBQUVLLElBQUksQ0FBQ0wsS0FEZDtBQUVFLGNBQVEsRUFBRUssSUFBSSxDQUFDRyxRQUZqQjtBQUdFLFlBQU0sRUFBRUgsSUFBSSxDQUFDSixNQUhmO0FBSUUsVUFBSSxFQUFFSSxJQUFJLENBQUNGLElBSmI7QUFLRSxVQUFJLEVBQUVFLElBQUksQ0FBQ0ksSUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsQ0FESCxDQUZGLENBREY7QUEwQkQsQ0FwREQ7O0dBQU1qQixPO1VBRVl2QixTOzs7S0FGWnVCLE87QUFzRE5BLE9BQU8sQ0FBQ2tCLFNBQVIsR0FBb0I7QUFDbEI7QUFDRjtBQUNBO0FBQ0VmLFdBQVMsRUFBRWdCLGlEQUFTLENBQUNDLE1BSkg7O0FBS2xCO0FBQ0Y7QUFDQTtBQUNFbEIsTUFBSSxFQUFFaUIsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQkM7QUFSSixDQUFwQjtBQVdldEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5mOGJjNTZmYjcwNzI0MjYxMzA1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2NvbXBvbmVudHMvYXRvbXMnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMvbW9sZWN1bGVzJztcbmltcG9ydCB7IENhcmRQcm9kdWN0IH0gZnJvbSAnY29tcG9uZW50cy9vcmdhbmlzbXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNhcmRQcm9kdWN0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICcmIC5jYXJkLXByb2R1Y3RfX2NvbnRlbnQnOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDAsIDAsIDApLFxuICAgIH0sXG4gICAgJyYgLmNhcmQtcHJvZHVjdF9fbWVkaWEnOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnJiBpbWcnOiB7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfSxcbiAgYmxvZ0NvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBibG9nVGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gIH0sXG4gIHNlY3Rpb25UaXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmNvbnN0IEFyY2hpdmUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IEJsb2dNZWRpYUNvbnRlbnQgPSBwcm9wcyA9PiAoXG4gICAgPEltYWdlIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSAvPlxuICApO1xuXG4gIGNvbnN0IEJsb2dDb250ZW50ID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2dDb250ZW50fT5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1RpdGxlfVxuICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgID5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgIDxpPlxuICAgICAgICAgIHtwcm9wcy5hdXRob3IubmFtZX0gLSB7cHJvcHMuZGF0ZX1cbiAgICAgICAgPC9pPlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnJlc3R9PlxuICAgICAgPFNlY3Rpb25IZWFkZXIgdGl0bGU9XCJTaW1pbGFyIFBvc3RzXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgYWxpZ249XCJsZWZ0XCIgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXszfSBrZXk9e2luZGV4fSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFByb2R1Y3R9XG4gICAgICAgICAgICAgIG1lZGlhQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dNZWRpYUNvbnRlbnQgey4uLml0ZW0uY292ZXJ9IGFsdD17aXRlbS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXJkQ29udGVudD17XG4gICAgICAgICAgICAgICAgPEJsb2dDb250ZW50XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e2l0ZW0udGFnc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcmNoaXZlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEV4dGVybmFsIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgcmVuZGVyZWRcbiAgICovXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=