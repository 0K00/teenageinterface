import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="default">Default</tiBadge> \`,
})

export default class BadgePage {}`;

export const defaultImports = `import { BadgeComponent } from "@teenageinterface/badge";`;

export const defaultSkeleton = `<tiBadge type="default">Default</tiBadge>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="primary">Primary</tiBadge> \`,
})

export default class BadgePage {}`;

export const successCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="success">Success</tiBadge> \`,
})

export default class BadgePage {}`;

export const informativeCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="informative">Informative</tiBadge> \`,
})

export default class BadgePage {}`;

export const warnCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="warn">Warning</tiBadge> \`,
})

export default class BadgePage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { BadgeComponent } from "@teenageinterface/badge";

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [BadgeComponent],
  template: \` <tiBadge type="destructive">Destructive</tiBadge> \`,
})

export default class BadgePage {}`;


