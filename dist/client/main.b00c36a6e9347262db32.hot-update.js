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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\"));\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\r\nvar hook_1 = __importDefault(__webpack_require__(/*! ./hook */ \"./src/hook.tsx\"));\r\nvar pickFromSynthetickEvent_1 = __webpack_require__(/*! ./utils/react/pickFromSynthetickEvent */ \"./src/utils/react/pickFromSynthetickEvent.tsx\");\r\nfunction App() {\r\n    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];\r\n    var _b = react_1.useState(''), title = _b[0], setTitle = _b[1];\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.default, null),\r\n        react_1.default.createElement(Content_1.default, null,\r\n            react_1.default.createElement(CardsList_1.default, null),\r\n            react_1.default.createElement(\"button\", { onClick: function () { return setIsVisible(!isVisible); } }, \"Click Me pleas\"),\r\n            react_1.default.createElement(\"input\", { type: \"text\", onChange: pickFromSynthetickEvent_1.getValue(setTitle) }),\r\n            isVisible && react_1.default.createElement(hook_1.default, { title: title, id: '11' }))));\r\n}\r\nexports.default = root_1.hot(App);\r\n\n\n//# sourceURL=webpack://reactjs/./src/App.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("180e2d38ffd6c542ffa1")
/******/ })();
/******/ 
/******/ }
);