import { Component } from "@angular/core";

@Component({
  selector: "preview-input",
  standalone: true,
  template: ``
})

export class InputPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \` <tiInput placeholder="Search" /> \`,
})

export default class InputPage {}`;

export const defaultImports = `import { InputComponent } from '@teenageinterface/input';`;

export const defaultSkeleton = `<tiInput />`;

export const passwordCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \` <tiInput type="password" placeholder="Password" /> \`,
})

export default class InputPage {}`;

export const emailCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \` <tiInput type="email" placeholder="Email" /> \`,
})

export default class InputPage {}`;

export const errorCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \`
    <tiInput type="password" placeholder="Error Server" [serverError]="true" />
    <tiInput type="email" placeholder="Error Email" value="example" />
  \`,
})

export default class InputPage {}`;

export const fileCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \` <tiInput type="file" placeholder="File" /> \`,
})

export default class InputPage {}`;

export const bigFileCode = `import { CommonModule } from '@angular/common';
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [InputComponent],
  template: \` <tiInput type="bigFile" placeholder="Placeholder here!" /> \`,
})

export default class InputPage {}`;


