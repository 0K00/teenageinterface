import { Component } from "@angular/core";

@Component({
  selector: "preview-radio",
  standalone: true,
  template: ``
})

export class RadioPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { RadioComponent } from "@teenageinterface/radio";

@Component({
  selector: "pages-radio",
  standalone: true,
  imports: [RadioComponent],
  template: \`
    <tiRadio [item]="{value: 'default', name: 'radio', id: 'default' }" type="default" [value]="item.value" (valuesChange)="valueChange($event)">Default</tiRadio>
    <tiRadio [item]="{value: 'comfortable', name: 'radio', id: 'comfortable' }" type="primary" [value]="item.value" (valuesChange)="valueChange($event)">Comfortable</tiRadio>
    <tiRadio [item]="{value: 'compact', name: 'radio', id: 'compact' }" type="default" [value]="item.value" (valuesChange)="valueChange($event)">Compact</tiRadio>
  \`,
})

export default class RadioPage {}`;

export const defaultImports = `import { RadioComponent } from "@teenageinterface/radio";`;

export const defaultSkeleton = `<tiRadio>Radio</tiRadio>`;
