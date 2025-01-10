import { Component } from "@angular/core";

@Component({
  selector: "preview-button",
  standalone: true,
  template: ``
})

export class ButtonPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@teenageinterface/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <tiCallout title="Default" icon="person">Indicates a neutral action.</tiCallout> \`,
})

export default class CalloutPage {}`;

export const defaultImports = `import { CalloutComponent } from "@teenageinterface/callout";`;

export const defaultSkeleton = `<tiCallout title="Default" icon="person">Indicates a neutral action.</tiCallout>`;

export const successCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@teenageinterface/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <tiCallout type="success" title="check-circled" icon="person">Indicates a successful or positive action.</tiCallout> \`,
})

export default class CalloutPage {}`;

export const informativeCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@teenageinterface/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <tiCallout type="informative" title="Informative" icon="information_circled_2">Indicates a neutral informative change or action.</tiCallout> \`,
})

export default class CalloutPage {}`;

export const warnCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@teenageinterface/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <tiCallout type="warn" title="You sure?" icon="information_circled_2_1">Indicates neutral information to ald in understanding.</tiCallout> \`,
})

export default class CalloutPage {}`;

export const destructiveCode = `import { CommonModule } from '@angular/common';
import { CalloutComponent } from "@teenageinterface/callout";

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [CalloutComponent],
  template: \` <tiCallout type="destructive" title="Unexpected Error" icon="warning">Indicates a warning that might need attention.</tiCallout> \`,
})

export default class CalloutPage {}`;
