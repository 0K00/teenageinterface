import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const defaultImports = `import { CalloutComponent } from "@alpha/callout";`;

export const defaultSkeleton = `<aCallout title="Default" icon="person">Indicates a neutral action.</aCallout>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const outlineCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const ghostCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const linkCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const iconCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const withCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const loadingCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout title="Default" icon="person">Indicates a neutral action.</aCallout> \`,
})

export default class CalloutPage {}`;
