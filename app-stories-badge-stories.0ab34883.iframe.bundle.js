(self.webpackChunkteenageinterface=self.webpackChunkteenageinterface||[]).push([[190],{"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/stories/badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Destructive:()=>Destructive,Informative:()=>Informative,Primary:()=>Primary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>badge_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var tailwindngResource=__webpack_require__("./libs/badge/src/lib/tailwind.css?ngResource"),tailwindngResource_default=__webpack_require__.n(tailwindngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let BadgeComponent=class BadgeComponent{type="default";default=["dark:bg-neutral-50","bg-neutral-950","dark:text-neutral-950","text-neutral-50"];primary=["dark:bg-blue-600","bg-blue-800","text-neutral-50"];success=["dark:bg-green-950","bg-green-100","dark:text-green-200","text-green-700"];informative=["dark:bg-blue-950","bg-blue-100","dark:text-blue-200","text-blue-700"];warn=["dark:bg-yellow-950","bg-yellow-100","dark:text-yellow-200","text-yellow-700"];destructive=["dark:bg-red-950","bg-red-100","dark:text-red-200","text-red-700"];commonClasses=["flex","items-center","justify-center","px-1.5","py-1","text-xs","font-medium","rounded-lg","w-fit"];get classes(){const classMap={default:this.default,primary:this.primary,success:this.success,informative:this.informative,warn:this.warn,destructive:this.destructive};return[...this.commonClasses,...classMap[this.type]||classMap.default]}static propDecorators={type:[{type:core.Input}]}};BadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"tiBadge",imports:[common.CommonModule],template:'<div [ngClass]="classes">\r\n  <ng-content></ng-content>\r\n</div>\r\n',styles:[tailwindngResource_default()]})],BadgeComponent);const updatedReadme=function removeFirstTitle(content){return content?content.replace(/^(.*)$/m,""):""}("# Badge Component\r\n\r\nThe `Badge` component is part of the `@teenageinterface` Angular component library. It provides a versatile badge element with support for different types, ensuring visual consistency and customization.\r\n\r\n## Installation\r\n\r\nEnsure that you have installed the `@teenageinterface/badge` library in your Angular project. If not, you can add it using:\r\n\r\n```bash\r\nnpm install @teenageinterface/badge\r\n```\r\n\r\n## Usage\r\n\r\nImport the `Badge` component module into your Angular application:\r\n\r\n```typescript\r\nimport { CommonModule } from '@angular/common';\r\nimport { BadgeComponent } from '@teenageinterface/badge';\r\n\r\n@Component({\r\n  selector: 'pages-badge',\r\n  standalone: true,\r\n  imports: [BadgeComponent],\r\n  template: `\r\n    <tiBadge [type]=\"'success'\">Success Badge</tiBadge>\r\n  `,\r\n})\r\nexport default class BadgePage {}\r\n```\r\n\r\n### Example\r\n\r\n```html\r\n<tiBadge [type]=\"'primary'\">Primary Badge</tiBadge>\r\n<tiBadge [type]=\"'warn'\">Warning Badge</tiBadge>\r\n<tiBadge [type]=\"'destructive'\">Destructive Badge</tiBadge>\r\n```\r\n\r\n## Properties\r\n\r\n| Property  | Type                                                             | Default    | Description                                   |\r\n|-----------|------------------------------------------------------------------|------------|-----------------------------------------------|\r\n| `type`    | `'default' | 'primary' | 'success' | 'informative' | 'warn' | 'destructive'` | `'default'` | Determines the style of the badge.            |\r\n\r\n## Types\r\n\r\n### `type`\r\n\r\n- `default`: Neutral style for general use.\r\n- `primary`: Emphasized badge for primary actions or statuses.\r\n- `success`: Indicates successful outcomes or statuses.\r\n- `informative`: Used for informational messages or indicators.\r\n- `warn`: Alerts users to warnings or non-critical issues.\r\n- `destructive`: Highlights destructive actions or critical errors.\r\n\r\n## Styling\r\n\r\nEach `type` applies additional color schemes:\r\n\r\n- `default`: Neutral background with contrasting text.\r\n- `primary`: Blue background with white text.\r\n- `success`: Green background with dark text for better visibility.\r\n- `informative`: Light blue background with darker text.\r\n- `warn`: Yellow background with bold text.\r\n- `destructive`: Red background with bold, attention-grabbing text.\r\n\r\n## Accessibility\r\n\r\n- Use `type` properties appropriately to ensure clear communication of the badge's purpose.\r\n- Ensure badges are visually distinct and provide sufficient contrast for readability.\r\n\r\n## Documentation\r\n\r\nFor more information, visit the [official documentation]().\r\n\r\n## Repository\r\n\r\nThe source code is available on [GitHub](https://github.com/0K00/teenageinterface).\r\n\r\n## License\r\n\r\nThis project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).\r\n"),badge_stories={title:"Components/Badge",component:BadgeComponent,tags:["autodocs"],parameters:{docs:{description:{component:updatedReadme}}},argTypes:{type:{description:"Determines the style of the badge.",table:{defaultValue:{summary:"default"},type:{summary:"'default' | 'primary' | 'success' | 'informative' | 'warn' | 'destructive'"}},options:["default","primary","success","informative","warn","destructive"],control:{type:"select"}}}},Default={args:{type:"default"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Default</tiBadge>'})},Primary={args:{type:"primary"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Primary</tiBadge>'})},Success={args:{type:"success"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Success</tiBadge>'})},Informative={args:{type:"informative"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Informative</tiBadge>'})},Warning={args:{type:"warn"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Warning</tiBadge>'})},Destructive={args:{type:"destructive"},render:args=>({component:BadgeComponent,props:args,template:'<tiBadge [type]="type">Destructive</tiBadge>'})},__namedExportsOrder=["Default","Primary","Success","Informative","Warning","Destructive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "default"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Default</tiBadge>`\n  })\n}',...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "primary"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Primary</tiBadge>`\n  })\n}',...Primary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "success"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Success</tiBadge>`\n  })\n}',...Success.parameters?.docs?.source}}},Informative.parameters={...Informative.parameters,docs:{...Informative.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "informative"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Informative</tiBadge>`\n  })\n}',...Informative.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "warn"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Warning</tiBadge>`\n  })\n}',...Warning.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "destructive"\n  },\n  render: (args: any) => ({\n    component: BadgeComponent,\n    props: args,\n    template: `<tiBadge [type]="type">Destructive</tiBadge>`\n  })\n}',...Destructive.parameters?.docs?.source}}}},"./libs/badge/src/lib/tailwind.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,ui-sans-serif,system-ui,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.flex{display:flex}.w-fit{width:fit-content}.items-center{align-items:center}.justify-center{justify-content:center}.rounded-lg{border-radius:.5rem}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.bg-blue-800{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity,1))}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231/var(--tw-bg-opacity,1))}.bg-neutral-950{--tw-bg-opacity:1;background-color:rgb(10 10 10/var(--tw-bg-opacity,1))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity,1))}.bg-yellow-100{--tw-bg-opacity:1;background-color:rgb(254 249 195/var(--tw-bg-opacity,1))}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216/var(--tw-text-opacity,1))}.text-green-700{--tw-text-opacity:1;color:rgb(21 128 61/var(--tw-text-opacity,1))}.text-neutral-50{--tw-text-opacity:1;color:rgb(250 250 250/var(--tw-text-opacity,1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28/var(--tw-text-opacity,1))}.text-yellow-700{--tw-text-opacity:1;color:rgb(161 98 7/var(--tw-text-opacity,1))}.dark\\:bg-blue-600:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.dark\\:bg-blue-950:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(23 37 84/var(--tw-bg-opacity,1))}.dark\\:bg-green-950:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(5 46 22/var(--tw-bg-opacity,1))}.dark\\:bg-neutral-50:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity,1))}.dark\\:bg-red-950:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(69 10 10/var(--tw-bg-opacity,1))}.dark\\:bg-yellow-950:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(66 32 6/var(--tw-bg-opacity,1))}.dark\\:text-blue-200:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(191 219 254/var(--tw-text-opacity,1))}.dark\\:text-green-200:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(187 247 208/var(--tw-text-opacity,1))}.dark\\:text-neutral-950:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(10 10 10/var(--tw-text-opacity,1))}.dark\\:text-red-200:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(254 202 202/var(--tw-text-opacity,1))}.dark\\:text-yellow-200:where([data-mode=dark],[data-mode=dark] *){--tw-text-opacity:1;color:rgb(254 240 138/var(--tw-text-opacity,1))}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);