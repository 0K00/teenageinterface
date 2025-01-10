/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 17:00:18                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 17:08:38                               *
 *****************************************************************************/

import { Component } from "@angular/core";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, primaryCode } from "./tabs.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";

const pageInfo = {
  title: "Components / Tabs",
  order: 15
}

@Component({
  selector: "pages-tabs",
  standalone: true,
  imports: [RouterModule, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './tabs.page.html',
})

export default class TabsPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly primaryCode = primaryCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
