"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"15ab6d77bdba\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxNWFiNmQ3N2JkYmFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/layout-wrapper.tsx":
/*!***************************************!*\
  !*** ./components/layout-wrapper.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LayoutWrapper: function() { return /* binding */ LayoutWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/settings-provider */ \"(app-pages-browser)/./components/settings-provider.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ LayoutWrapper auto */ \nvar _s = $RefreshSig$();\n\n\nfunction LayoutWrapper(param) {\n    let { children } = param;\n    _s();\n    const { fontSize, lineHeight, letterSpacing, reducedMotion, highContrast, screenReader, antiFlicker, accentColor } = (0,_components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            \"--accent\": accentColor\n        },\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(reducedMotion ? \"transition-none\" : \"\", highContrast ? \"high-contrast\" : \"\", antiFlicker ? \"no-flicker\" : \"\"),\n        \"aria-live\": screenReader ? \"polite\" : \"off\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/project/components/layout-wrapper.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(LayoutWrapper, \"H/6BB8zHrxwookkKnRkCHXIgrAU=\", false, function() {\n    return [\n        _components_settings_provider__WEBPACK_IMPORTED_MODULE_1__.useSettings\n    ];\n});\n_c = LayoutWrapper;\nvar _c;\n$RefreshReg$(_c, \"LayoutWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0LXdyYXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpRTtBQUM1QjtBQUUxQixTQUFTRSxjQUFjLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7O0lBQzVCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUUsR0FBR1gsMEVBQVdBO0lBRWhJLHFCQUNFLDhEQUFDWTtRQUFJQyxPQUFPO1lBQUUsWUFBWUY7UUFBWTtRQUFHRyxXQUFXYiw4Q0FBRUEsQ0FBQ00sZ0JBQWdCLG9CQUFvQixJQUFJQyxlQUFlLGtCQUFrQixJQUFJRSxjQUFjLGVBQWU7UUFBS0ssYUFBV04sZUFBZSxXQUFXO2tCQUN4TU47Ozs7OztBQUdQO0dBUmdCRDs7UUFDdUdGLHNFQUFXQTs7O0tBRGxIRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC13cmFwcGVyLnRzeD84MmEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4gICAgaW1wb3J0IHsgdXNlU2V0dGluZ3MgfSBmcm9tICdAL2NvbXBvbmVudHMvc2V0dGluZ3MtcHJvdmlkZXInO1xuICAgIGltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIExheW91dFdyYXBwZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICAgICAgY29uc3QgeyBmb250U2l6ZSwgbGluZUhlaWdodCwgbGV0dGVyU3BhY2luZywgcmVkdWNlZE1vdGlvbiwgaGlnaENvbnRyYXN0LCBzY3JlZW5SZWFkZXIsIGFudGlGbGlja2VyLCBhY2NlbnRDb2xvciB9ID0gdXNlU2V0dGluZ3MoKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyAnLS1hY2NlbnQnOiBhY2NlbnRDb2xvciB9fSBjbGFzc05hbWU9e2NuKHJlZHVjZWRNb3Rpb24gPyAndHJhbnNpdGlvbi1ub25lJyA6ICcnLCBoaWdoQ29udHJhc3QgPyAnaGlnaC1jb250cmFzdCcgOiAnJywgYW50aUZsaWNrZXIgPyAnbm8tZmxpY2tlcicgOiAnJyl9IGFyaWEtbGl2ZT17c2NyZWVuUmVhZGVyID8gJ3BvbGl0ZScgOiAnb2ZmJ30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuIl0sIm5hbWVzIjpbInVzZVNldHRpbmdzIiwiY24iLCJMYXlvdXRXcmFwcGVyIiwiY2hpbGRyZW4iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwicmVkdWNlZE1vdGlvbiIsImhpZ2hDb250cmFzdCIsInNjcmVlblJlYWRlciIsImFudGlGbGlja2VyIiwiYWNjZW50Q29sb3IiLCJkaXYiLCJzdHlsZSIsImNsYXNzTmFtZSIsImFyaWEtbGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout-wrapper.tsx\n"));

/***/ })

});