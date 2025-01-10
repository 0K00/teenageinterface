/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 11:19:38                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 11:19:38                               *
 *****************************************************************************/

import { Component } from "@angular/core";
import { SeparatorComponent } from "@teenageinterface/separator";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton } from "./separator.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";

const pageInfo = {
  title: "Components / Separator",
  order: 13
}

@Component({
  selector: "pages-separator",
  standalone: true,
  imports: [RouterModule, SeparatorComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './separator.page.html',
})

export default class SeparatorPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
