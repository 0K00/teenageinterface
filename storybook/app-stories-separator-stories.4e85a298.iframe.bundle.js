(self.webpackChunkteenageinterface=self.webpackChunkteenageinterface||[]).push([[802],{"./libs/separator/src/lib/separator.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>SeparatorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var tailwindngResource=__webpack_require__("./libs/separator/src/lib/tailwind.css?ngResource"),tailwindngResource_default=__webpack_require__.n(tailwindngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SeparatorComponent=class SeparatorComponent{orientation="horizontal";size="100%";setStyle="vertical"===this.orientation?"display:flex;width:1px;height:"+this.size+";":"display:flex;height:1px;width:"+this.size+";";vertical=["h-full","w-px"];horizontal=["h-px","w-full"];commonClasses=["inline-flex","shrink-0","border-0","bg-neutral-300","dark:bg-neutral-800"];get classes(){const classMap={vertical:this.vertical,horizontal:this.horizontal};return this.setStyle="vertical"===this.orientation?"display:flex;width:1px;height:"+this.size+";":"display:flex;height:1px;width:"+this.size+";",[...this.commonClasses,...classMap[this.orientation]||classMap.horizontal]}static propDecorators={orientation:[{type:core.Input}],size:[{type:core.Input}],setStyle:[{type:core.HostBinding,args:["style"]}]}};SeparatorComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"tiSeparator",imports:[common.CommonModule],template:'\x3c!--\n  @Author: 0K0 <contact@oko.app>\n  @Date:   22-12-2024 05:48:36\n  @Last Modified by:   0K0 <contact@oko.app>\n  @Last Modified time: 22-12-2024 05:50:16\n--\x3e\n<hr [ngClass]="classes" />\n',styles:[tailwindngResource_default()]})],SeparatorComponent)},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/stories/separator.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>separator_stories});var separator_component=__webpack_require__("./libs/separator/src/lib/separator.component.ts");const updatedReadme=function removeFirstTitle(content){return content?content.replace(/^(.*)$/m,""):""}('# Separator Component\n\nThe `Separator` component is a versatile UI element used to create visual separation between sections or components in a layout. It supports both horizontal and vertical orientations and is fully customizable in size.\n\n## Installation\n\nEnsure that you have installed the `@teenageinterface/separator` library in your Angular project. If not, you can add it using:\n\n```bash\nnpm install @teenageinterface/separator\n```\n\n## Usage\n\nImport the `SeparatorComponent` into your Angular application:\n\n```typescript\nimport { SeparatorComponent } from \'@teenageinterface/separator\';\n\n@Component({\n  selector: \'app-separator-example\',\n  template: `\n    <tiSeparator [orientation]="\'horizontal\'" [size]="\'50%\'"></tiSeparator>\n  `,\n})\nexport class SeparatorExampleComponent {}\n```\n\n### Example\n\n```html\n\x3c!-- Horizontal Separator --\x3e\n<tiSeparator [orientation]="\'horizontal\'" [size]="\'80%\'"></tiSeparator>\n\n\x3c!-- Vertical Separator --\x3e\n<tiSeparator [orientation]="\'vertical\'" [size]="\'100px\'"></tiSeparator>\n```\n\n## Properties\n\n| Property       | Type                          | Default       | Description                                                     |\n|----------------|-------------------------------|---------------|-----------------------------------------------------------------|\n| `orientation`  | `"vertical" | "horizontal"` | `"horizontal"`| Defines the orientation of the separator (vertical or horizontal). |\n| `size`         | `string`                     | `"100%"`      | Sets the length of the separator. Supports values like `50%`, `100px`, etc. |\n\n## Features\n\n### Orientation\n\n- **Horizontal**: The separator is displayed as a thin horizontal line.\n- **Vertical**: The separator is displayed as a thin vertical line.\n\n### Customizable Size\n\nThe `size` property allows you to adjust the separator\'s length dynamically based on your layout requirements.\n\n## Documentation\n\nFor more details, visit the [official documentation]().  \n\n## Repository\n\nThe source code is available on [GitHub](https://github.com/0K00/teenageinterface).  \n\n## License\n\nThis project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).  \n'),separator_stories={title:"Components/Separator",component:separator_component.F,tags:["autodocs"],parameters:{docs:{description:{component:updatedReadme}}},argTypes:{orientation:{description:"Defines the orientation of the separator (vertical or horizontal).",table:{defaultValue:{summary:"horizontal"},type:{summary:"'vertical' | 'horizontal'"}},options:["vertical","horizontal"],control:{type:"select"}},size:{description:"Sets the length of the separator. Supports values like `50%`, `100px`, etc.",table:{defaultValue:{summary:"100%"},type:{summary:"string"}}}}},Horizontal={args:{orientation:"horizontal",size:"100%"},render:args=>({component:separator_component.F,props:args,template:'<tiSeparator [orientation]="orientation" [size]="size" />'})},Vertical={args:{orientation:"vertical",size:"64px"},render:args=>({component:separator_component.F,props:args,template:'<tiSeparator [orientation]="orientation" [size]="size" />'})},__namedExportsOrder=["Horizontal","Vertical"];Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:'{\n  args: {\n    orientation: "horizontal",\n    size: "100%"\n  },\n  render: (args: any) => ({\n    component: SeparatorComponent,\n    props: args,\n    template: `<tiSeparator [orientation]="orientation" [size]="size" />`\n  })\n}',...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  args: {\n    orientation: "vertical",\n    size: "64px"\n  },\n  render: (args: any) => ({\n    component: SeparatorComponent,\n    props: args,\n    template: `<tiSeparator [orientation]="orientation" [size]="size" />`\n  })\n}',...Vertical.parameters?.docs?.source}}}},"./libs/separator/src/lib/tailwind.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,ui-sans-serif,system-ui,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.inline-flex{display:inline-flex}.h-full{height:100%}.h-px{height:1px}.w-full{width:100%}.w-px{width:1px}.shrink-0{flex-shrink:0}.border-0{border-width:0}.bg-neutral-300{--tw-bg-opacity:1;background-color:rgb(212 212 212/var(--tw-bg-opacity,1))}.dark\\:bg-neutral-800:where([data-mode=dark],[data-mode=dark] *){--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity,1))}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);