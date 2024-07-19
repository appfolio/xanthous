"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[4287],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Alert/Alert.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.LiveExample=exports.Icons=exports.Extras=exports.Dismissible=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Alert=_interopRequireDefault(__webpack_require__("./src/components/Alert/Alert.tsx")),_excluded=["content"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={title:"Alerts",component:_Alert.default,parameters:{sourceLink:"Alert/Alert.tsx"}};var LiveExample=_ref=>{var content=_ref.content,args=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return _react.default.createElement(_Alert.default,args,content)};exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={icon:!1,dismissible:!1,color:"info",onToggle:(0,_addonActions.action)("onToggle"),content:"Lorem ipsum dolor sit amet, consectetur adipiscing\n  elit, sed do eiusmod tempor incididunt ut labore\n  et dolore magna aliqua.  Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut\n  aliquip ex ea commodo consequat."},LiveExample.argTypes={color:{options:["",..._colors.colors],control:{type:"select"}}};var Icons=args=>_react.default.createElement("div",null,_react.default.createElement(_Alert.default,_extends({icon:!0},args),"You can also add an icon!"),_react.default.createElement(_Alert.default,_extends({icon:!0,color:"success"},args),"You can specify an alert color. This one has ",_react.default.createElement("code",null,'color="success"')),_react.default.createElement(_Alert.default,_extends({icon:!0,color:"danger"},args),"Humblebrag prism twee, gochujang seitan whatever asymmetrical ramps enamel pin austin salvia swag helvetica. Chartreuse food truck tofu raclette, 3 wolf moon poke chia paleo skateboard. Pickled tote bag echo park raclette. Irony fashion axe sartorial, cornhole jean shorts vaporware flannel salvia glossier beard 3 wolf moon. Literally semiotics hammock irony cred, bicycle rights lomo selvage tousled vegan 8-bit. Four loko cardigan live-edge truffaut pour-over, helvetica chia brooklyn swag pug scenester kogi pitchfork leggings yuccie. Ethical put a bird on it portland vape YOLO."),_react.default.createElement(_Alert.default,_extends({icon:!0,color:"info"},args),_react.default.createElement("strong",null,"Heads up!")," This alert needs your attention, but it's not super important."));exports.Icons=Icons,Icons.displayName="Icons";var Dismissible=args=>_react.default.createElement("div",null,_react.default.createElement(_Alert.default,_extends({dismissible:!0,icon:!0,color:"success"},args),"Alerts can also be dismissed. Simply add the ",_react.default.createElement("code",null,"dismissible")," prop."));exports.Dismissible=Dismissible,Dismissible.displayName="Dismissible";var Extras=args=>_react.default.createElement("div",null,_react.default.createElement(_Alert.default,_extends({icon:!0,color:"info"},args),_react.default.createElement("h4",{className:"alert-heading"},"Well done!"),_react.default.createElement("p",null,"You can use the ",_react.default.createElement("code",null,"alert-heading")," class on a heading to make it stand out!"),_react.default.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),_react.default.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")));exports.Extras=Extras,Extras.displayName="Extras",module.exports.__namedExportsOrder=["LiveExample","Icons","Extras","Dismissible"]}}]);