"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7063],{"./src/components/SummaryBox/SummaryBox.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SummaryBoxItemExample:function(){return SummaryBoxItemExample},WithChildren:function(){return WithChildren},WithItems:function(){return WithItems},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SummaryBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SummaryBox/SummaryBox.tsx"),_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SummaryBox/SummaryBoxItem.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const link=react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://bravo.tv"},"Link"),items=[{value:"Alpha",label:"Bravo"},{value:"Charlie Brown",label:"Delta"},{value:"Echo"},{label:"Hotel"}];__webpack_exports__.default={title:"SummaryBox",component:_SummaryBox__WEBPACK_IMPORTED_MODULE_1__.default,parameters:{sourceLink:"SummaryBox/SummaryBox.tsx"}};const WithItems=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({items:items},args));WithItems.displayName="WithItems",WithItems.args={reverse:_SummaryBox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.reverse};const WithChildren=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBox__WEBPACK_IMPORTED_MODULE_1__.default,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,{value:link,label:"Bravo"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,{value:"Charlie"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,{label:"Foxtrot"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,{value:"Golf",label:"Hotel"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,{value:"India"}));WithChildren.displayName="WithChildren",WithChildren.args={reverse:_SummaryBox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.reverse};const SummaryBoxItemExample=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default,args);SummaryBoxItemExample.displayName="SummaryBoxItemExample",SummaryBoxItemExample.args={value:"Live from New York",label:"It's Saturday Night",reverse:_SummaryBoxItem__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps.reverse};const __namedExportsOrder=["WithItems","WithChildren","SummaryBoxItemExample"];WithItems.parameters={...WithItems.parameters,docs:{...WithItems.parameters?.docs,source:{originalSource:"args => <SummaryBox items={items} {...args} />",...WithItems.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'args => <SummaryBox {...args}>\n    <SummaryBoxItem value={link} label="Bravo" />\n    <SummaryBoxItem value="Charlie" />\n    <SummaryBoxItem label="Foxtrot" />\n    <SummaryBoxItem value="Golf" label="Hotel" />\n    <SummaryBoxItem value="India" />\n  </SummaryBox>',...WithChildren.parameters?.docs?.source}}},SummaryBoxItemExample.parameters={...SummaryBoxItemExample.parameters,docs:{...SummaryBoxItemExample.parameters?.docs,source:{originalSource:"args => <SummaryBoxItem {...args} />",...SummaryBoxItemExample.parameters?.docs?.source}}}}}]);