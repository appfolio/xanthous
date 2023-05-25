(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{443:function(module){module.exports=JSON.parse('{"name":"@appfolio/react-gears","version":"8.2.0","description":"React-based version of Gears","author":"Appfolio, Inc.","repository":{"type":"git","url":"https://github.com/appfolio/react-gears.git"},"license":"MIT","packageManager":"yarn@3.2.2","main":"lib/index.js","module":"esm/index.js","types":"esm/index.d.ts","sideEffects":false,"files":["lib","esm"],"scripts":{"tslint":"tsc --noEmit","eslint":"eslint src --ext .js,.ts,.jsx,.tsx","eslint:fix":"yarn eslint --fix","lint":"yarn tslint && yarn eslint","lint:ts":"yarn dist","format":"prettier --check src","format:fix":"prettier --write src","test":"jest --coverage","test:watch":"jest --watch","start":"start-storybook -p 6006","docs":"build-storybook -o docs","version":"yarn docs && git add -A docs","clean":"rm -rf esm lib","dist:types":"tsc --project tsconfig.build.json","dist:types:js":"scripts/copyDTSFiles.js","dist:esm":"babel src --out-dir esm --config-file ./babel.esm.config.js --extensions \'.js,.ts,.tsx\'","dist:lib":"babel src --out-dir lib --config-file ./babel.build.config.js --extensions \'.js,.ts,.tsx\'","dist":"yarn clean && concurrently \\"yarn:dist:*\\""},"peerDependencies":{"react":">= 16.8","react-dom":">= 16.8"},"dependencies":{"@fortawesome/fontawesome-free":"^6.2.0","@fortawesome/fontawesome-svg-core":"^6.2.0","@popperjs/core":"^2.10.1","classnames":"^2.2.6","credit-card-type":"^5.0.1","date-fns":"^1.30.1","deprecated-prop-type":"^1.0.0","fast-deep-equal":"^3.1.3","fecha":"^2.3.3","imask":"^6.2.2","invariant":"^2.2.4","lodash.flow":"^3.5.0","lodash.includes":"^4.3.0","lodash.isequal":"^4.5.0","lodash.noop":"^3.0.1","lodash.orderby":"^4.6.0","lodash.range":"^3.2.0","lodash.some":"^4.6.0","lodash.tolower":"^4.1.2","lodash.topairs":"^4.3.0","lodash.uniqueid":"^4.0.1","lodash.without":"^4.4.0","memoize-one":"^5.1.1","prop-types":"^15.7.2","react-imask":"^6.2.2","react-resize-detector":"^4.2.3","react-select-plus":"1.2.0","react-sortable-hoc":"^1.11.0","react-text-mask":"~5.0.2","react-transition-group":"^2.9.0","react-use":"^17.3.2","reactstrap":"^9.1.5","storybook-source-link":"^2.0.8","styled-jsx":"^5.1.1","text-mask-addons":"^3.8.0","tributejs":"^5.1.3","use-deep-compare-effect":"^1.8.1","use-local-storage-state":"^4.0.0","uuid":"^8.3.1"},"devDependencies":{"@appfolio/eslint-config-appfolio-react":"^2.0.2","@babel/cli":"^7.17.6","@babel/core":"^7.17.8","@babel/preset-env":"^7.16.11","@babel/preset-react":"^7.16.7","@babel/preset-typescript":"^7.16.7","@jest/types":"^27.5.1","@storybook/addon-a11y":"^6.3.11","@storybook/addon-actions":"^6.3.11","@storybook/addon-essentials":"^6.3.11","@storybook/addon-knobs":"^6.3.1","@storybook/addon-links":"^6.3.11","@storybook/addon-storysource":"^6.3.11","@storybook/addon-viewport":"^6.3.11","@storybook/addons":"^6.3.11","@storybook/react":"^6.3.11","@testing-library/dom":"^8.13.0","@testing-library/jest-dom":"^5.16.3","@testing-library/react":"^11.2.6","@testing-library/react-hooks":"^5.1.2","@testing-library/user-event":"^13.5.0","@types/classnames":"^2.2.11","@types/credit-card-type":"^5.0.1","@types/enzyme":"^3.10.8","@types/enzyme-adapter-react-16":"^1.0.6","@types/invariant":"^2.2.35","@types/jest":"^27.4.1","@types/lodash.flow":"^3.5.6","@types/lodash.isequal":"^4.5.5","@types/lodash.noop":"^3.0.6","@types/lodash.orderby":"^4.6.6","@types/lodash.range":"^3.2.6","@types/lodash.some":"^4.6.6","@types/lodash.topairs":"^4.3.6","@types/lodash.uniqueid":"^4.0.6","@types/react":"^16.14.26","@types/react-dom":"^16.9.16","@types/react-resize-detector":"^5.0.0","@types/react-text-mask":"^5.4.6","@types/sinon":"^10.0.0","@types/styled-jsx":"^2.2.8","@types/uniqid":"^4.1.3","@types/uuid":"^8.3.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","assert":"~1.4.1","axe-core":"^3.5.5","babel-plugin-add-react-displayname":"^0.0.5","concurrently":"^7.0.0","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.5","eslint":"^8.10.0","eslint-config-prettier":"^8.5.0","eslint-plugin-no-only-tests":"^2.6.0","eslint-plugin-react-hooks":"^4.3.0","fs-extra":"10.0.1","glob":"^7.1.6","identity-obj-proxy":"^3.0.0","jest":"^27.5.1","jsdom":"^11.12.0","jsdom-global":"^3.0.2","prettier":"^2.5.1","raf-stub":"^3.0.0","react":"^16.14.0","react-dom":"^16.14.0","regenerator-runtime":"^0.13.7","sinon":"^9.2.1","ts-node":"^10.7.0","typescript":"^4.6.3","uncontrollable":"^4.1.0"},"resolutions":{"@types/react":"^16.14.26","@types/react-dom":"^16.9.16"},"browserslist":"last 2 versions","stableVersion":"7.7.0"}')},463:function(module,exports,__webpack_require__){__webpack_require__(464),__webpack_require__(616),__webpack_require__(875),__webpack_require__(872),__webpack_require__(876),__webpack_require__(877),__webpack_require__(815),__webpack_require__(873),__webpack_require__(878),__webpack_require__(879),__webpack_require__(874),module.exports=__webpack_require__(871)},510:function(module,exports){},616:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(443);_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.setConfig({theme:Object(_storybook_theming_create__WEBPACK_IMPORTED_MODULE_1__.create)({base:"dark",brandTitle:"react-gears ".concat(_package_json__WEBPACK_IMPORTED_MODULE_2__.version),brandUrl:"https://github.com/appfolio/react-gears"}),sidebar:{showRoots:!1}})}},[[463,3,4]]]);