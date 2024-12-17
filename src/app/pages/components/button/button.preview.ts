import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton>Button</aButton> \`,
})

export default class ButtonPage {}`;

export const defaultImports = ``;

export const defaultSkeleton = ``;
