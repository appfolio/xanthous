"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[1871],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/InfoBox/InfoBox.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.LiveExample=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_InfoBox=_interopRequireDefault(__webpack_require__("./src/components/InfoBox/InfoBox.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default={title:"InfoBox",component:_InfoBox.default,parameters:{sourceLink:"InfoBox/InfoBox.tsx"}};var LiveExample=_ref=>{var color=_ref.color,title=_ref.title,icon=_ref.icon,vertical=_ref.vertical,children=_ref.children;return _react.default.createElement("div",{className:"bg-light p-4"},_react.default.createElement("div",{className:"text-muted mb-3"},_react.default.createElement("em",null,"(Background color added for contrast)")),_react.default.createElement(_InfoBox.default,{color:color,title:title,icon:icon,vertical:vertical},children))};exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={color:"success",title:"$86,753.09",icon:"check",vertical:!1,children:"Jenny, I got your number"},LiveExample.argTypes={color:{control:{type:"select"},options:_colors.colors}},module.exports.__namedExportsOrder=["LiveExample"]}}]);