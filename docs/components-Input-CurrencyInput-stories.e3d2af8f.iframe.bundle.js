"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[3184],{"./node_modules/@storybook/addon-actions/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var uuid=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/index.js"),previewApi=__webpack_require__("@storybook/preview-api"),global=__webpack_require__("@storybook/global"),previewErrors=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",PANEL_ID=`${ADDON_ID}/panel`,EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=`${ADDON_ID}/action-clear`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in global.global?global.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new previewErrors.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=previewApi.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?uuid.v4():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}exports.ADDON_ID=ADDON_ID,exports.CLEAR_ID=CLEAR_ID,exports.CYCLIC_KEY="$___storybook.isCyclic",exports.EVENT_ID=EVENT_ID,exports.PANEL_ID=PANEL_ID,exports.PARAM_KEY="actions",exports.action=action,exports.actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},exports.config=config,exports.configureActions=(options={})=>{Object.assign(config,options)}},"./src/components/Input/CurrencyInput.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.RightAligned=exports.Example=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_CurrencyInput=_interopRequireDefault(__webpack_require__("./src/components/Input/CurrencyInput.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={title:"CurrencyInput",component:_CurrencyInput.default,parameters:{sourceLink:"Input/CurrencyInput.tsx"}};var Example=args=>_react.default.createElement(_CurrencyInput.default,args);exports.Example=Example,Example.displayName="Example",Example.args={onChange:(0,_addonActions.action)("onChange"),allowDecimal:!0,allowNegative:!0,includeThousandsSeparator:!0,padZeros:!0};var RightAligned=args=>_react.default.createElement(_CurrencyInput.default,_extends({inputProps:{className:"text-end"}},args));exports.RightAligned=RightAligned,RightAligned.displayName="RightAligned",RightAligned.args={onChange:(0,_addonActions.action)("onChange")},module.exports.__namedExportsOrder=["RightAligned","Example"]}}]);