/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 17:08:40                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 17:11:54                               *
 *****************************************************************************/

import { Component } from "@angular/core";

@Component({
  selector: "preview-tabs",
  standalone: true,
  template: ``
})

export class TabsPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";

@Component({
  selector: "pages-tabs",
  standalone: true,
  imports: [TabsComponent, TabComponent],
  template: \`
    <tiTabs>
      <tiTab tabTitle="Tab 1" [active]="true">
        Content 1
      </tiTab>
      <tiTab tabTitle="Tab 2">
        Content 2
      </tiTab>
    </tiTabs>
  \`,
})

export default class TabsPage {}`;

export const defaultImports = `import { TabsComponent, TabComponent } from "@teenageinterface/tabs";`;

export const defaultSkeleton = `<tiTabs>
  <tiTab tabTitle="" [active]="true">
  </tiTab>
</tiTabs>`;

export const primaryCode = `import { CommonModule } from '@angular/common';
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";

@Component({
  selector: "pages-tabs",
  standalone: true,
  imports: [TabsComponent, TabComponent],
  template: \`
    <tiTabs type="primary">
      <tiTab tabTitle="Tab 1" [active]="true">
        Content 1
      </tiTab>
      <tiTab tabTitle="Tab 2">
        Content 2
      </tiTab>
    </tiTabs>
  \`,
})

export default class TabsPage {}`;
