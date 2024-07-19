"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[291],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Badge/Badge.stories.tsx":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Pills=exports.Default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Badge=_interopRequireDefault(__webpack_require__("./src/components/Badge/Badge.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={title:"Badge",component:_Badge.default,parameters:{sourceLink:"Badge/Badge.tsx"}};var Default=args=>_react.default.createElement("div",null,_colors.colors.map((color=>_react.default.createElement("div",null,_react.default.createElement(_Badge.default,_extends({color:color},args),color)))));exports.Default=Default,Default.displayName="Default";var Pills=args=>_react.default.createElement("div",{className:"d-flex gap-3"},_colors.colors.map((color=>_react.default.createElement(_Badge.default,_extends({pill:!0,color:color},args),color))));exports.Pills=Pills,Pills.displayName="Pills",module.exports.__namedExportsOrder=["Pills","Default"]}}]);