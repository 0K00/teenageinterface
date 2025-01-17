(self.webpackChunkteenageinterface=self.webpackChunkteenageinterface||[]).push([[509],{"./libs/tabs/src/lib/tab.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>TabComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TabComponent=class TabComponent{tabTitle="";active=!1;static propDecorators={tabTitle:[{type:core.Input}],active:[{type:core.Input}]}};TabComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"tiTab",imports:[common.CommonModule],template:'<div *ngIf="active">\n  <ng-content></ng-content>\n</div>\n'})],TabComponent)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}($event)"`:`[${key}]="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/portable-stories.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/portable-stories.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setProjectAnnotations=void 0;const preview_api_1=__webpack_require__("storybook/internal/preview-api"),INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=__importStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"));exports.setProjectAnnotations=function setProjectAnnotations(projectAnnotations){return(0,preview_api_1.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),(0,preview_api_1.setProjectAnnotations)(projectAnnotations)}},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/stories/tabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Ghost:()=>Ghost,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tabs_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var tailwindngResource=__webpack_require__("./libs/tabs/src/lib/tailwind.css?ngResource"),tailwindngResource_default=__webpack_require__.n(tailwindngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),tab_component=__webpack_require__("./libs/tabs/src/lib/tab.component.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let TabsComponent=class TabsComponent{tabs=new core.QueryList;type="default";default={container:["h-9","border-b"],tab:["hover:dark:text-neutral-50","text-neutral-500","shadow-tab","shadow-transparent"]};primary={container:["gap-1","dark:bg-neutral-950","bg-neutral-50","rounded-xl","p-0.5","border"],tab:["w-full","flex","justify-center","hover:bg-neutral-200","hover:dark:bg-neutral-900","hover:dark:text-neutral-50","dark:text-neutral-400","text-neutral-700","rounded-lg"]};ghost={container:["gap-1","pb-4","border-b"],tab:["flex","justify-center","hover:dark:text-neutral-50","dark:text-neutral-400","text-neutral-700","hover:text-neutral-950","rounded-lg"]};commonClasses={container:["flex","border-neutral-300","dark:border-neutral-800"],tab:["transition","duration-300","cursor-pointer","text-sm","font-medium","hover:text-neutral-900","py-2","px-4"]};get classes(){const classMap={default:{container:this.default.container,tab:this.default.tab,activeTab:["dark:!shadow-blue-600","!shadow-blue-800","dark:!text-neutral-50","!text-neutral-950"]},primary:{container:this.primary.container,tab:this.primary.tab,activeTab:["dark:!bg-blue-600","!bg-blue-800","!text-neutral-50","cursor-default"]},ghost:{container:this.ghost.container,tab:this.ghost.tab,activeTab:["dark:!bg-blue-600","!bg-blue-800","!text-neutral-50","cursor-default"]}};return{container:[...this.commonClasses.container,...classMap[this.type]?.container||classMap.default.container],tab:tab=>[...this.commonClasses.tab,...classMap[this.type]?.tab||classMap.default.tab,...tab.active?classMap[this.type]?.activeTab||classMap.default.activeTab:[]]}}ngAfterContentInit(){0===this.tabs.filter((tab=>tab.active)).length&&this.selectTab(this.tabs.first)}selectTab(tab){this.tabs.toArray().forEach((t=>t.active=!1)),tab.active=!0}static propDecorators={tabs:[{type:core.ContentChildren,args:[tab_component.j]}],type:[{type:core.Input}]}};TabsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"tiTabs",imports:[common.CommonModule],template:'<div class="w-full">\n  <ul [ngClass]="classes.container">\n    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [ngClass]="classes.tab(tab)">\n        {{ tab.tabTitle }}\n    </li>\n  </ul>\n  <div class="py-5">\n    <ng-content></ng-content>\n  </div>\n</div>\n\n',styles:[tailwindngResource_default()]})],TabsComponent);const updatedReadme=function removeFirstTitle(content){return content?content.replace(/^(.*)$/m,""):""}(__webpack_require__("./libs/tabs/README.md")),tabs_stories={title:"Components/Tabs/Tabs",component:TabsComponent,subcomponents:{TabComponent:tab_component.j},decorators:[(0,dist.moduleMetadata)({imports:[tab_component.j]})],tags:["autodocs"],parameters:{docs:{description:{component:updatedReadme}}},argTypes:{type:{description:"Defines the tab style: `default`, `primary`, or `ghost`.",table:{defaultValue:{summary:"default"},type:{summary:"'default' | 'primary' | 'ghost'"}},options:["default","primary","ghost"],control:{type:"select"}}}},Default={args:{type:"default"},render:args=>({component:TabsComponent,props:args,template:'<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>'})},Primary={args:{type:"primary"},render:args=>({component:TabsComponent,props:args,template:'<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>'})},Ghost={args:{type:"ghost"},render:args=>({component:TabsComponent,props:args,template:'<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>'})},__namedExportsOrder=["Default","Primary","Ghost"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "default"\n  },\n  render: (args: any) => ({\n    component: TabsComponent,\n    props: args,\n    template: `<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>`\n  })\n}',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "primary"\n  },\n  render: (args: any) => ({\n    component: TabsComponent,\n    props: args,\n    template: `<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>`\n  })\n}',...Primary.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "ghost"\n  },\n  render: (args: any) => ({\n    component: TabsComponent,\n    props: args,\n    template: `<tiTabs [type]="type">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        Content 1\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        Content 2\n      </tiTab>\n    </tiTabs>`\n  })\n}',...Ghost.parameters?.docs?.source}}}},"./libs/tabs/src/lib/tailwind.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.flex{display:flex}.h-9{height:2.25rem}.w-full{width:100%}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.justify-center{justify-content:center}.gap-1{gap:.25rem}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-neutral-300{--tw-border-opacity:1;border-color:rgb(212 212 212/var(--tw-border-opacity,1))}.\\!bg-blue-800{--tw-bg-opacity:1!important;background-color:rgb(30 64 175/var(--tw-bg-opacity,1))!important}.bg-neutral-50{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity,1))}.p-0\\.5{padding:.125rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.pb-4{padding-bottom:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.\\!text-neutral-50{--tw-text-opacity:1!important;color:rgb(250 250 250/var(--tw-text-opacity,1))!important}.\\!text-neutral-950{--tw-text-opacity:1!important;color:rgb(10 10 10/var(--tw-text-opacity,1))!important}.text-neutral-500{--tw-text-opacity:1;color:rgb(115 115 115/var(--tw-text-opacity,1))}.text-neutral-700{--tw-text-opacity:1;color:rgb(64 64 64/var(--tw-text-opacity,1))}.shadow-tab{--tw-shadow:0px 2px 0px 0px #000,inset 0px -1px 0px 0px #000;--tw-shadow-colored:0px 2px 0px 0px var(--tw-shadow-color),inset 0px -1px 0px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.\\!shadow-blue-800{--tw-shadow-color:#1e40af!important;--tw-shadow:var(--tw-shadow-colored)!important}.shadow-transparent{--tw-shadow-color:#0000;--tw-shadow:var(--tw-shadow-colored)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.hover\\:bg-neutral-200:hover{--tw-bg-opacity:1;background-color:rgb(229 229 229/var(--tw-bg-opacity,1))}.hover\\:text-neutral-900:hover{--tw-text-opacity:1;color:rgb(23 23 23/var(--tw-text-opacity,1))}.hover\\:text-neutral-950:hover{--tw-text-opacity:1;color:rgb(10 10 10/var(--tw-text-opacity,1))}.dark\\:border-neutral-800:where([data-mode=dark],[data-mode=dark] *){--tw-border-opacity:1;border-color:rgb(38 38 38/var(--tw-border-opacity,1))}.dark\\:\\!bg-blue-600:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1!important;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))!important}.dark\\:bg-neutral-950:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(10 10 10/var(--tw-bg-opacity,1))}.dark\\:\\!text-neutral-50:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1!important;color:rgb(250 250 250/var(--tw-text-opacity,1))!important}.dark\\:text-neutral-400:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(163 163 163/var(--tw-text-opacity,1))}.dark\\:\\!shadow-blue-600:where([data-mode=dark],[data-mode=dark] *){--tw-shadow-color:#2563eb!important;--tw-shadow:var(--tw-shadow-colored)!important}.hover\\:dark\\:bg-neutral-900:where([data-mode=dark],[data-mode=dark] *):hover{--tw-bg-opacity:1;background-color:rgb(23 23 23/var(--tw-bg-opacity,1))}.hover\\:dark\\:text-neutral-50:where([data-mode=dark],[data-mode=dark] *):hover{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity,1))}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/tabs/README.md":module=>{"use strict";module.exports='# Tabs Component\n\nThe `Tabs` component provides a customizable tab navigation system to organize content. It includes an optional `Tab` component for defining individual tabs.\n\n## Installation\n\nEnsure that you have installed the `@teenageinterface/tabs` library in your Angular project. If not, you can add it using:\n\n```bash\nnpm install @teenageinterface/tabs\n```\n\n## Usage\n\n### Basic Example\n\n```typescript\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <tiTabs [type]="\'primary\'">\n      <tiTab tabTitle="Tab 1" [active]="true">\n        <p>Content of Tab 1</p>\n      </tiTab>\n      <tiTab tabTitle="Tab 2">\n        <p>Content of Tab 2</p>\n      </tiTab>\n      <tiTab tabTitle="Tab 3">\n        <p>Content of Tab 3</p>\n      </tiTab>\n    </tiTabs>\n  `,\n})\nexport class ExampleComponent {}\n```\n\n### Advanced Example\n\n```html\n<tiTabs [type]="\'ghost\'">\n  <tiTab tabTitle="Home" [active]="true">\n    <p>Welcome to the home tab!</p>\n  </tiTab>\n  <tiTab tabTitle="Profile">\n    <p>Profile content goes here.</p>\n  </tiTab>\n  <tiTab tabTitle="Settings">\n    <p>Adjust your preferences in the settings tab.</p>\n  </tiTab>\n</tiTabs>\n```\n\n---\n\n## Components Overview\n\n### `TabsComponent`\n\nThe parent container for managing tab navigation and active state.\n\n#### Properties\n\n| Property   | Type                          | Default     | Description                                                 |\n|------------|-------------------------------|-------------|-------------------------------------------------------------|\n| `type`     | `"default" | "primary" | "ghost"` | `"default"` | Defines the tab style: `default`, `primary`, or `ghost`.   |\n\n#### Styling Classes\n\nThe component applies utility classes based on the `type` property to achieve the desired appearance.\n\n---\n\n### `TabComponent`\n\nDefines an individual tab and its associated content.\n\n#### Properties\n\n| Property   | Type      | Default   | Description                       |\n|------------|-----------|-----------|-----------------------------------|\n| `tabTitle` | `string`  | `\'\'`      | Title displayed on the tab header. |\n| `active`   | `boolean` | `false`   | Indicates whether the tab is active. |\n\n---\n\n## Features\n\n### Dynamic Active Tab\n\nIf no tab is marked as active, the first tab is automatically activated upon initialization.\n\n### Content Projection\n\nUse Angular\'s content projection (`<ng-content>`) to display custom content within each tab.\n\n---\n\n## Example with Programmatic Tab Switching\n\n```typescript\nimport { Component } from \'@angular/core\';\nimport { TabComponent } from \'./tab.component\';\n\n@Component({\n  selector: \'app-programmatic-tabs\',\n  template: `\n    <button (click)="activateTab(1)">Activate Tab 2</button>\n    <tiTabs>\n      <tiTab tabTitle="Tab 1" #tab1>\n        <p>Content of Tab 1</p>\n      </tiTab>\n      <tiTab tabTitle="Tab 2" #tab2>\n        <p>Content of Tab 2</p>\n      </tiTab>\n    </tiTabs>\n  `,\n})\nexport class ProgrammaticTabsComponent {\n  @ViewChild(\'tab2\') tab2!: TabComponent;\n\n  activateTab(index: number) {\n    this.tab2.active = true;\n  }\n}\n```\n\n---\n\n## Documentation\n\nFor more information, visit the [official documentation]().\n\n## Repository\n\nThe source code is available on [GitHub](https://github.com/0K00/teenageinterface).\n\n## License\n\nThis project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).\n'}}]);