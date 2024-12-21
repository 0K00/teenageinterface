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

export const successCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout type="success" title="check-circled" icon="person">Indicates a successful or positive action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const informativeCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout type="informative" title="Informative" icon="information-circled-2">Indicates a neutral informative change or action.</aCallout> \`,
})

export default class CalloutPage {}`;

export const warnCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout type="warn" title="You sure?" icon="information-circled-2-1">Indicates neutral information to ald in understanding.</aCallout> \`,
})

export default class CalloutPage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@alpha/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <aCallout type="destructive" title="Unexpected Error" icon="warning">Indicates a warning that might need attention.</aCallout> \`,
})

export default class CalloutPage {}`;
