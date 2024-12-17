import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton>Button</aButton> \`,
})

export default class ButtonPage {}`;

export const defaultImports = `import { ButtonComponent } from '@alpha/components/button';`;

export const defaultSkeleton = `<aButton>Button</aButton>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="primary" >Primary</aButton> \`,
})

export default class ButtonPage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="destructive" >Destructive</aButton> \`,
})

export default class ButtonPage {}`;

export const outlineCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="outline" >Outline</aButton> \`,
})

export default class ButtonPage {}`;

export const ghostCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="ghost" >Ghost</aButton> \`,
})

export default class ButtonPage {}`;

export const linkCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="link" >Link</aButton> \`,
})

export default class ButtonPage {}`;
