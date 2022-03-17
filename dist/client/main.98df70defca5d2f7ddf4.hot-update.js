"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereactjs"]("main",{

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar iconns_svg_1 = __importDefault(__webpack_require__(/*! ./iconns.svg */ \"./src/shared/Icons/iconns.svg\"));\nfunction Icons(_a) {\n    var name = _a.name, color = _a.color, size = _a.size, className = _a.className;\n    return (react_1.default.createElement(\"svg\", { className: \"icon icon-\" + name + \" \" + className, fill: color, stroke: color, width: size, height: size },\n        react_1.default.createElement(\"use\", { xlinkHref: \"static/\" + iconns_svg_1.default + \"#\" + name }),\n        react_1.default.createElement(\"use\", { xlinkHref: iconns_svg_1.default + \"#\" + name })));\n}\nexports.default = Icons;\n\n\n//# sourceURL=webpack://reactjs/./src/shared/Icons/Icon.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("00fa832e3d751b2c97ff")
/******/ })();
/******/ 
/******/ }
);