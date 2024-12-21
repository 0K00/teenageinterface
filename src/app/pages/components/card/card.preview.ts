import { Component } from "@angular/core";

@Component({
  selector: "preview-card",
  standalone: true,
  template: ``
})

export class CardPreview {}

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

export const iconCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";
import { IconsComponent } from "@alpha/icons";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, IconsComponent],
  template:\`<aButton type="outline"><aIcon icon="gear-1" /></aButton>\`,
})

export default class ButtonPage {}`;

export const withCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";
import { IconsComponent } from "@alpha/icons";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, IconsComponent],
  template:\`<aButton type="default"><aIcon icon="download" /><div>Download files</div></aButton>\`,
})

export default class ButtonPage {}`;

export const loadingCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \` <aButton type="default" [loading]="true" >Log in</aButton> \`,
})

export default class ButtonPage {}`;
