"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./components/ui/sidebar-item.tsx":
/*!****************************************!*\
  !*** ./components/ui/sidebar-item.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SidebarItem: function() { return /* binding */ SidebarItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ SidebarItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SidebarItem = (param)=>{\n    let { label, iconSrc, href } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const active = pathname === href;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        variant: active ? \"sidebarOutline\" : \"sidebar\",\n        className: \"justify-start h-[52px]\",\n        asChild: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            href: href,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    src: iconSrc,\n                    alt: label,\n                    className: \"mr-4 h-80 w-10\"\n                }, void 0, false, {\n                    fileName: \"/home/smit/Documents/code/react/Lingo_mini_project/components/ui/sidebar-item.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                label\n            ]\n        }, void 0, true, {\n            fileName: \"/home/smit/Documents/code/react/Lingo_mini_project/components/ui/sidebar-item.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/smit/Documents/code/react/Lingo_mini_project/components/ui/sidebar-item.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SidebarItem, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = SidebarItem;\nvar _c;\n$RefreshReg$(_c, \"SidebarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvc2lkZWJhci1pdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRDtBQUNGO0FBQ2pCO0FBQ0U7QUFReEIsTUFBTUksY0FBYztRQUFDLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQVM7O0lBQ3ZELE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixNQUFNUSxTQUFTRCxhQUFhRDtJQUU1QixxQkFDSSw4REFBQ1AseURBQU1BO1FBQUNVLFNBQVNELFNBQVMsbUJBQW1CO1FBQVdFLFdBQVU7UUFBeUJDLE9BQU87a0JBQzlGLDRFQUFDVixpREFBSUE7WUFBQ0ssTUFBTUE7OzhCQUNSLDhEQUFDSixrREFBS0E7b0JBQUNVLEtBQUtQO29CQUFTUSxLQUFLVDtvQkFBT00sV0FBVTs7Ozs7O2dCQUMxQ047Ozs7Ozs7Ozs7OztBQUlqQixFQUFFO0dBWldEOztRQUNRSCx3REFBV0E7OztLQURuQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9zaWRlYmFyLWl0ZW0udHN4P2Y3MjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaWNvblNyYzogc3RyaW5nO1xuICAgIGhyZWY6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFySXRlbSA9ICh7IGxhYmVsLCBpY29uU3JjLCBocmVmIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGhuYW1lID09PSBocmVmO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXthY3RpdmUgPyBcInNpZGViYXJPdXRsaW5lXCIgOiBcInNpZGViYXJcIn0gY2xhc3NOYW1lPVwianVzdGlmeS1zdGFydCBoLVs1MnB4XVwiIGFzQ2hpbGQ+XG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29uU3JjfSBhbHQ9e2xhYmVsfSBjbGFzc05hbWU9XCJtci00IGgtODAgdy0xMFwiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICApO1xufTsiXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlUGF0aG5hbWUiLCJMaW5rIiwiSW1hZ2UiLCJTaWRlYmFySXRlbSIsImxhYmVsIiwiaWNvblNyYyIsImhyZWYiLCJwYXRobmFtZSIsImFjdGl2ZSIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJhc0NoaWxkIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/sidebar-item.tsx\n"));

/***/ })

});