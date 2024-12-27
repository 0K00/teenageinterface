import { Component } from "@angular/core";

@Component({
  selector: "preview-progress",
  standalone: true,
  template: ``
})

export class ProgressPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { ProgressComponent } from "@teenageinterface/progress";

@Component({
  selector: "pages-progress",
  standalone: true,
  imports: [ProgressComponent],
  template: \` <tiProgress [value]="60" /> \`,
})

export default class ProgressPage {}`;

export const defaultImports = `import { ProgressComponent } from '@teenageinterface/progress';`;

export const defaultSkeleton = `<tiProgress />`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { ProgressComponent } from "@teenageinterface/progress";

@Component({
  selector: "pages-progress",
  standalone: true,
  imports: [ProgressComponent],
  template: \` <tiProgress type="primary" [value]="60" /> \`,
})

export default class ProgressPage {}`;

export const scoreCode = `import { CommonModule } from '@angular/common';
import { ProgressComponent } from "@teenageinterface/progress";

@Component({
  selector: "pages-progress",
  standalone: true,
  imports: [ProgressComponent],
  template: \`
    <tiProgress [value]="80" type="score" />
    <tiProgress [value]="50" type="score" />
    <tiProgress [value]="20" type="score" />
  \`,
})

export default class ProgressPage {}`;

