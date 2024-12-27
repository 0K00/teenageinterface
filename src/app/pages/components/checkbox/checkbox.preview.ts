import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@teenageinterface/checkbox

@Component({
  selector: "pages-checkbox",
  standalone: true,
  imports: [CheckboxComponent],
  template: \` <tiCheckbox type="default">Checkbox</tiCheckbox> \`,
})

export default class CheckboxPage {}`;

export const defaultImports = `import { CheckboxComponent } from '@teenageinterface/checkbox';`;

export const defaultSkeleton = `<tiCheckbox>Checkbox</tiCheckbox>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@teenageinterface/checkbox

@Component({
  selector: "pages-checkbox",
  standalone: true,
  imports: [CheckboxComponent],
  template: \` <tiCheckbox type="primary">Primary</tiCheckbox> \`,
})

export default class CheckboxPage {}`;
