(self.webpackChunkteenageinterface=self.webpackChunkteenageinterface||[]).push([[54],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/stories/checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var tailwindngResource=__webpack_require__("./libs/checkbox/src/lib/tailwind.css?ngResource"),tailwindngResource_default=__webpack_require__.n(tailwindngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),teenageinterface_icons=__webpack_require__("./node_modules/@teenageinterface/icons/fesm2022/teenageinterface-icons.mjs");let CheckboxComponent=class CheckboxComponent{checked=!1;id="";type="default";checkedChange=new core.EventEmitter;default=["peer-checked:bg-neutral-950","peer-checked:dark:bg-neutral-50","peer-checked:border-neutral-950","peer-checked:dark:border-neutral-50","text-neutral-50","dark:text-neutral-950"];primary=["peer-checked:bg-blue-800","peer-checked:dark:bg-blue-600","peer-checked:border-blue-800","peer-checked:dark:border-blue-600","text-neutral-50"];commonClasses=["border","cursor-pointer","rounded-md","w-5","h-5","flex","items-center","transition","duration-300","justify-center","border-neutral-300","group-active:scale-95","group-hover:border-neutral-400","group-hover:dark:border-neutral-700","dark:border-neutral-800"];get classes(){const classMap={default:this.default,primary:this.primary};return[...this.commonClasses,...classMap[this.type]||classMap.default]}onModelChange(e){this.checked=e,this.checkedChange.emit(e)}static propDecorators={checked:[{type:core.Input}],id:[{type:core.Input}],type:[{type:core.Input}],checkedChange:[{type:core.Output}]}};CheckboxComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"tiCheckbox",imports:[common.CommonModule,teenageinterface_icons.G,fesm2022_forms.YN],template:'\x3c!--\r\n  @Author: 0K0 <contact@oko.app>\r\n  @Date:   22-12-2024 06:23:20\r\n  @Last Modified by:   0K0 <contact@oko.app>\r\n  @Last Modified time: 22-12-2024 07:09:35\r\n--\x3e\r\n<label class="group flex gap-2 items-center">\r\n  <input [id]="id" class="peer absolute overflow-hidden opacity-0 w-px h-px p-0" type="checkbox" [ngModel]="checked" (ngModelChange)="onModelChange($event)">\r\n  <div [ngClass]="classes">\r\n    <tiIcon *ngIf="checked" icon="check" />\r\n  </div>\r\n  <ng-content></ng-content>\r\n</label>\r\n',styles:[tailwindngResource_default()]})],CheckboxComponent);const updatedReadme=function removeFirstTitle(content){return content?content.replace(/^(.*)$/m,""):""}('# Checkbox Component\r\n\r\nThe `Checkbox` component allows you to create a styled checkbox with two customizable states: checked and unchecked. It includes support for emitting state changes.\r\n\r\n## Installation\r\n\r\nEnsure that you have installed the `@teenageinterface/checkbox` library in your Angular project. If not, you can add it using:\r\n\r\n```bash\r\nnpm install @teenageinterface/checkbox\r\n```\r\n\r\n## Usage\r\n\r\nImport the `CheckboxComponent` into your Angular application:\r\n\r\n```typescript\r\nimport { CheckboxComponent } from \'@teenageinterface/checkbox\';\r\n\r\n@Component({\r\n  selector: \'pages-checkbox\',\r\n  template: `\r\n    <tiCheckbox [(checked)]="isChecked"></tiCheckbox>\r\n  `,\r\n})\r\nexport default class CheckboxPage {\r\n  isChecked = false;\r\n}\r\n```\r\n\r\n### Example\r\n\r\n```html\r\n<tiCheckbox [(checked)]="isChecked"></tiCheckbox>\r\n```\r\n\r\n## Properties\r\n\r\n| Property     | Type     | Default    | Description                                           |\r\n|--------------|----------|------------|-------------------------------------------------------|\r\n| `checked`    | `boolean`| `false`    | Sets the initial checked state of the checkbox.       |\r\n| `id`         | `string` | `""`       | An optional ID for the checkbox.                      |\r\n| `type`       | `"default" | "primary"` | `"default"` | Determines the style of the checkbox.                 |\r\n\r\n## Output Events\r\n\r\n- `checkedChange`: Emits when the checked state of the checkbox changes.\r\n\r\n## Types\r\n\r\n### `type`\r\n\r\n- `default`: Standard checkbox with no special styling.\r\n- `primary`: Emphasized checkbox for primary actions.\r\n\r\n## Documentation\r\n\r\nFor more information, visit the [official documentation](https://github.com/0K00/teenageinterface).\r\n\r\n## License\r\n\r\nThis project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).\r\n'),checkbox_stories={title:"Components/Checkbox",component:CheckboxComponent,tags:["autodocs"],parameters:{docs:{description:{component:updatedReadme}}},argTypes:{id:{description:"An optional ID for the checkbox."},checked:{description:"Sets the initial checked state of the checkbox.",control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},checkedChange:{description:"Emits when the checked state of the checkbox changes.",type:"function",control:!1,action:"checkedChange",table:{type:{summary:"EventEmitter<boolean>()"}}},type:{description:"Determines the style of the checkbox.",table:{defaultValue:{summary:"default"},type:{summary:"'default' | 'primary'"}},options:["default","primary"],control:{type:"select"}}}},Default={args:{id:"default",checked:!1,type:"default"},render:args=>({component:CheckboxComponent,props:{...args,checkedChange:e=>{(0,dist.XI)("Checked")(e)}},template:'<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Default</tiCheckbox>'})},Primary={args:{id:"primary",checked:!1,type:"primary"},render:args=>({component:CheckboxComponent,props:{...args,checkedChange:e=>{(0,dist.XI)("Checked")(e)}},template:'<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Primary</tiCheckbox>'})},__namedExportsOrder=["Default","Primary"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "default",\n    checked: false,\n    type: "default"\n  },\n  render: (args: any) => ({\n    component: CheckboxComponent,\n    props: {\n      ...args,\n      checkedChange: (e: boolean) => {\n        action(`Checked`)(e);\n      }\n    },\n    template: `<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Default</tiCheckbox>`\n  })\n}',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    id: "primary",\n    checked: false,\n    type: "primary"\n  },\n  render: (args: any) => ({\n    component: CheckboxComponent,\n    props: {\n      ...args,\n      checkedChange: (e: boolean) => {\n        action(`Checked`)(e);\n      }\n    },\n    template: `<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Primary</tiCheckbox>`\n  })\n}',...Primary.parameters?.docs?.source}}}},"./libs/checkbox/src/lib/tailwind.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,ui-sans-serif,system-ui,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.absolute{position:absolute}.flex{display:flex}.h-5{height:1.25rem}.h-px{height:1px}.w-5{width:1.25rem}.w-px{width:1px}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-neutral-300{--tw-border-opacity:1;border-color:rgb(212 212 212/var(--tw-border-opacity,1))}.p-0{padding:0}.text-neutral-50{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity,1))}.opacity-0{opacity:0}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.group:hover .group-hover\\:border-neutral-400{--tw-border-opacity:1;border-color:rgb(163 163 163/var(--tw-border-opacity,1))}.group:active .group-active\\:scale-95{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:border-blue-800{--tw-border-opacity:1;border-color:rgb(30 64 175/var(--tw-border-opacity,1))}.peer:checked~.peer-checked\\:border-neutral-950{--tw-border-opacity:1;border-color:rgb(10 10 10/var(--tw-border-opacity,1))}.peer:checked~.peer-checked\\:bg-blue-800{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity,1))}.peer:checked~.peer-checked\\:bg-neutral-950{--tw-bg-opacity:1;background-color:rgb(10 10 10/var(--tw-bg-opacity,1))}.dark\\:border-neutral-800:where([data-mode=dark],[data-mode=dark] *){--tw-border-opacity:1;border-color:rgb(38 38 38/var(--tw-border-opacity,1))}.dark\\:text-neutral-950:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(10 10 10/var(--tw-text-opacity,1))}.group:hover .group-hover\\:dark\\:border-neutral-700:where([data-mode=dark],[data-mode=dark] *){--tw-border-opacity:1;border-color:rgb(64 64 64/var(--tw-border-opacity,1))}.peer:checked~.peer-checked\\:dark\\:border-blue-600:where([data-mode=dark],[data-mode=dark] *){--tw-border-opacity:1;border-color:rgb(37 99 235/var(--tw-border-opacity,1))}.peer:checked~.peer-checked\\:dark\\:border-neutral-50:where([data-mode=dark],[data-mode=dark] *){--tw-border-opacity:1;border-color:rgb(250 250 250/var(--tw-border-opacity,1))}.peer:checked~.peer-checked\\:dark\\:bg-blue-600:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.peer:checked~.peer-checked\\:dark\\:bg-neutral-50:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity,1))}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);