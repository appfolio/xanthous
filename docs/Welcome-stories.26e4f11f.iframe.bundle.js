"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[6549],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./.storybook/stories/Welcome.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.StyleOverview=exports.Introduction=exports.HelpAndContributing=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_ButtonToolbar=_interopRequireDefault(__webpack_require__("./src/components/Button/ButtonToolbar.tsx")),_Card=_interopRequireDefault(__webpack_require__("./src/components/Card/Card.tsx")),_CardBody=_interopRequireDefault(__webpack_require__("./src/components/Card/CardBody.tsx")),_CardHeader=_interopRequireDefault(__webpack_require__("./src/components/Card/CardHeader.tsx")),_CardText=_interopRequireDefault(__webpack_require__("./src/components/Card/CardText.tsx")),_CardTitle=_interopRequireDefault(__webpack_require__("./src/components/Card/CardTitle.tsx")),_Col=_interopRequireDefault(__webpack_require__("./src/components/Layout/Col.tsx")),_CurrencyInput=_interopRequireDefault(__webpack_require__("./src/components/Input/CurrencyInput.tsx")),_DateInput=_interopRequireDefault(__webpack_require__("./src/components/Input/DateInput.js")),_FormChoice=_interopRequireDefault(__webpack_require__("./src/components/Form/FormChoice.js")),_FormRow=_interopRequireDefault(__webpack_require__("./src/components/Form/FormRow.tsx")),_Icon=_interopRequireDefault(__webpack_require__("./src/components/Icon/Icon.tsx")),_Paginator=_interopRequireDefault(__webpack_require__("./src/components/Pagination/Paginator.tsx")),_Row=_interopRequireDefault(__webpack_require__("./src/components/Layout/Row.tsx")),_Table=_interopRequireDefault(__webpack_require__("./src/components/Table/Table.tsx")),_UncontrolledTooltip=_interopRequireDefault(__webpack_require__("./src/components/Tooltip/UncontrolledTooltip.js")),_colors=__webpack_require__("./src/tooling/colors.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Tooltip=_UncontrolledTooltip.default,demoHeader=caption=>_react.default.createElement("h2",{className:"text-muted text-uppercase mt-5 mb-4"},caption);demoHeader.displayName="demoHeader";exports.default={title:"react-gears"};var Introduction=()=>_react.default.createElement("section",null,_react.default.createElement("p",null,"react-gears is a React implementation of Appfolio UI components, using Bootstrap for theming."),_react.default.createElement("h3",null,"Goals"),_react.default.createElement("ol",null,_react.default.createElement("li",null,_react.default.createElement("b",null,"Portable")," - Components should be self-contained and not require any server-generated markup, Ajax, or a running Appfolio product application in order to function."),_react.default.createElement("li",null,_react.default.createElement("b",null,"Modern")," - Components should use modern, off the shelf solutions and avoid legacy approaches such as wrapping jQuery components."),_react.default.createElement("li",null,_react.default.createElement("b",null,"Mobile Friendly")," - Components should be responsive and work on mobile and desktop computers"),_react.default.createElement("li",null,_react.default.createElement("b",null,"Themeable")," - Colors, fonts, borders, sizing are separate from components so that multiple apps and products can use with their look and feel."),_react.default.createElement("li",null,_react.default.createElement("b",null,"Flux-agnostic")," - Users should be able to use with any Flux implementation they choose.")));exports.Introduction=Introduction,Introduction.displayName="Introduction";var HelpAndContributing=()=>_react.default.createElement("section",null,_react.default.createElement("p",null,"For questions and getting up-to-date release notifications, please join the Appfolio"," ",_react.default.createElement("b",null,"#gears")," Slack Channel"),_react.default.createElement("p",null,"For bugs, please file a"," ",_react.default.createElement("a",{href:"https://github.com/appfolio/react-gears/issues"},"GitHub issue")),_react.default.createElement("p",null,"For the component roadmap, status, and ideas, please the"," ",_react.default.createElement("a",{href:"https://github.com/appfolio/react-gears/projects/1"},"GitHub project board")));exports.HelpAndContributing=HelpAndContributing,HelpAndContributing.displayName="HelpAndContributing";var StyleOverview=()=>_react.default.createElement("div",null,_react.default.createElement(_Row.default,null,_react.default.createElement(_Col.default,null,demoHeader("BUTTONS"),_react.default.createElement(_ButtonToolbar.default,{className:"mb-3"},_colors.buttonColors.map((color=>_react.default.createElement(_Button.default,{color:color,className:"me-1 text-capitalize"},color)))),_react.default.createElement(_ButtonToolbar.default,{className:"mb-3"},_colors.buttonColors.map((color=>_react.default.createElement(_Button.default,{color:color,outline:!0,className:"me-1 text-capitalize"},color)))))),_react.default.createElement(_Row.default,null,_react.default.createElement(_Col.default,null,demoHeader("COLORS"),_react.default.createElement("div",null,_colors.bgColors.map((color=>_react.default.createElement("div",{key:color,style:{width:100},className:"d-inline-block mb-1"},_react.default.createElement("b",null,`bg-${color}`),_react.default.createElement("div",{className:`bg-${color}`,style:{height:33}}))))),_react.default.createElement("div",null,_colors.textColors.map((color=>_react.default.createElement("div",{key:color,className:"mb-1 "+(0===color.indexOf("white")?"bg-dark":"")},_react.default.createElement("h3",{className:`text-${color}`},`text-${color}`))))),demoHeader("HEADINGS"),_react.default.createElement("h1",null,"h1. Heading"),_react.default.createElement("h2",null,"h2. Heading"),_react.default.createElement("h3",null,"h3. Heading"),_react.default.createElement("h4",null,"h4. Heading"),_react.default.createElement("h5",null,"h5. Heading"),_react.default.createElement("h6",null,"h6. Heading"),demoHeader("PANEL / CARD"),_react.default.createElement(_Card.default,null,_react.default.createElement(_CardHeader.default,null,_react.default.createElement(_CardTitle.default,null,"Card title")),_react.default.createElement(_CardBody.default,null,_react.default.createElement(_CardText.default,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),_react.default.createElement(_Button.default,null,"Button"))),demoHeader("TOOLTIPS"),_react.default.createElement("div",{className:"d-flex justify-content-between"},_react.default.createElement("span",{id:"tooltip-top"},"Top"),_react.default.createElement("span",{id:"tooltip-bottom"},"Bottom"),_react.default.createElement("span",{id:"tooltip-left"},"Left"),_react.default.createElement("span",{id:"tooltip-end"},"Right"),_react.default.createElement(Tooltip,{placement:"top",target:"tooltip-top"},"Tooltip on the top"),_react.default.createElement(Tooltip,{placement:"bottom",target:"tooltip-bottom"},"Tooltip on the Bottom"),_react.default.createElement(Tooltip,{placement:"left",target:"tooltip-left"},"Tooltip on the Left"),_react.default.createElement(Tooltip,{placement:"right",target:"tooltip-end"},"Tooltip on the side"))),_react.default.createElement(_Col.default,null,demoHeader("FORMS"),_react.default.createElement("form",null,_react.default.createElement(_FormRow.default,{label:"Label",defaultValue:"Text",required:!0}),_react.default.createElement(_FormRow.default,{label:"Label",placeholder:"Default"}),_react.default.createElement(_FormRow.default,{label:"Disabled",disabled:!0}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,label:"Date"}),_react.default.createElement(_FormRow.default,{type:"password",label:"Password"}),_react.default.createElement(_FormRow.default,{className:"custom-select",label:"Select",type:"select",hint:"Example help text"},_react.default.createElement(_FormChoice.default,null,"A New Hope"),_react.default.createElement(_FormChoice.default,null,"The Empire Strikes Back"),_react.default.createElement(_FormChoice.default,null,"The Force Awakens")),_react.default.createElement(_FormRow.default,{label:"Label",feedback:"Error message"}),_react.default.createElement(_FormRow.default,{type:_CurrencyInput.default,label:"Tip"}),_react.default.createElement(_FormRow.default,{stacked:!0,label:"Stacked",defaultValue:"Text",required:!0,size:"12"})),demoHeader("TABLES"),_react.default.createElement(_Table.default,null,_react.default.createElement("thead",null,_react.default.createElement("tr",null,_react.default.createElement("th",null,"First name"),_react.default.createElement("th",null,"Last name ",_react.default.createElement(_Icon.default,{name:"caret-down"})))),_react.default.createElement("tbody",null,_react.default.createElement("tr",null,_react.default.createElement("td",null,"John"),_react.default.createElement("td",null,"Wick")),_react.default.createElement("tr",null,_react.default.createElement("td",null,"Paulus"),_react.default.createElement("td",null,"Schoutsen")),_react.default.createElement("tr",null,_react.default.createElement("td",null,"Gary"),_react.default.createElement("td",null,"Thomas")))),demoHeader("PAGINATION"),_react.default.createElement(_Paginator.default,{size:"sm",currentPage:5,totalItems:256,onClick:()=>{}}))));exports.StyleOverview=StyleOverview,StyleOverview.displayName="StyleOverview",module.exports.__namedExportsOrder=["StyleOverview","Introduction","HelpAndContributing"]}}]);