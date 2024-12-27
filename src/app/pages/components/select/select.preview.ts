import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton>Button</tiButton> \`,
})

export default class ButtonPage {}`;

export const defaultImports = `import { ButtonComponent } from '@teenageinterface/button';`;

export const defaultSkeleton = `<tiButton>Button</tiButton>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="primary" >Primary</tiButton> \`,
})

export default class ButtonPage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="destructive" >Destructive</tiButton> \`,
})

export default class ButtonPage {}`;

export const outlineCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="outline" >Outline</tiButton> \`,
})

export default class ButtonPage {}`;

export const ghostCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="ghost" >Ghost</tiButton> \`,
})

export default class ButtonPage {}`;

export const linkCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="link" >Link</tiButton> \`,
})

export default class ButtonPage {}`;

export const iconCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from "@teenageinterface/icons";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, IconsComponent],
  template:\`<tiButton type="outline"><tiIcon icon="gear_1" /></tiButton>\`,
})

export default class ButtonPage {}`;

export const withCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from "@teenageinterface/icons";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, IconsComponent],
  template:\`<tiButton type="default"><tiIcon icon="download" /><div>Download files</div></tiButton>\`,
})

export default class ButtonPage {}`;

export const loadingCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <tiButton type="default" [loading]="true" >Log in</tiButton> \`,
})

export default class ButtonPage {}`;
