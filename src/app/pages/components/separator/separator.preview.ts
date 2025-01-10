/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 11:32:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 11:32:51                               *
 *****************************************************************************/

import { Component } from "@angular/core";

@Component({
  selector: "preview-separator",
  standalone: true,
  template: ``
})

export class SeparatorPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '@teenageinterface/separator';

@Component({
  selector: "pages-separator",
  standalone: true,
  imports: [SeparatorComponent],
  template: \`
      <div class="w-96 flex flex-col gap-4">
        <div>Teenage interface helped by</div>
        <tiSeparator orientation="horizontal" />
        <div class="flex gap-4 h-6">
          <div>Github</div>
          <tiSeparator orientation="vertical" />
          <div>Angular</div>
          <tiSeparator orientation="vertical" />
          <div>Storybook</div>
          <tiSeparator orientation="vertical" />
          <div>Tailwind</div>
        </div>
      </div>
  \`,
})

export default class SeparatorPage {}`;

export const defaultImports = `import { SeparatorComponent } from '@teenageinterface/separator';`;

export const defaultSkeleton = `<tiSeparator />`;
