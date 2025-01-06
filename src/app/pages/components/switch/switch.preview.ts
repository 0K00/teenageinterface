/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 11:46:23                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 11:46:24                               *
 *****************************************************************************/

import { Component } from "@angular/core";

@Component({
  selector: "preview-switch",
  standalone: true,
  template: ``
})

export class SwitchPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { SwitchComponent } from "@teenageinterface/switch";

@Component({
  selector: "pages-switch",
  standalone: true,
  imports: [SwitchComponent],
  template: \` <tiSwitch>Focus mode</tiSwitch> \`,
})

export default class SwitchPage {}`;

export const defaultImports = `import { SwitchComponent } from "@teenageinterface/switch";`;

export const defaultSkeleton = `<tiSwitch></tiSwitch>`;
