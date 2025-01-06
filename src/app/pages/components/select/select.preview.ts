/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 11:16:13                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 11:16:13                               *
 *****************************************************************************/

import { Component } from "@angular/core";

@Component({
  selector: "preview-select",
  standalone: true,
  template: ``
})

export class SelectPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { SelectComponent } from "@teenageinterface/select";

@Component({
  selector: "pages-select",
  standalone: true,
  imports: [SelectComponent],
  template: \`<tiSelect
          [options]="[{value: 1, title: 'Unlimited'}, {value: 10, title: '10 Minutes'}, {value: 60, title: '1 Hour'}, {value: 1440, title: '1 Day'}, {value: 10080, title: '1 Week'}]"
          placeholder="Choose an option"
          [selectedIds]="[1]"
          [multiSelect]="false" />\`,
})

export default class SelectPage {}`;

export const defaultImports = `import { SelectComponent } from "@teenageinterface/select";`;

export const defaultSkeleton = `<tiSelect />`;

export const multiCode = `import { CommonModule } from '@angular/common';
import { SelectComponent } from "@teenageinterface/select";

@Component({
  selector: "pages-select",
  standalone: true,
  imports: [SelectComponent],
  template: \`<tiSelect
          [options]="[{value: 1, title: 'Unlimited'}, {value: 10, title: '10 Minutes'}, {value: 60, title: '1 Hour'}, {value: 1440, title: '1 Day'}, {value: 10080, title: '1 Week'}]"
          placeholder="Choose an option"
          [selectedIds]="[1]"
          [multiSelect]="true" />\`,
})

export default class SelectPage {}`;
