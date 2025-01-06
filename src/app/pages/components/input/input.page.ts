/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 11:20:53                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-27 11:20:54                               *
 *****************************************************************************/

import { Component } from "@angular/core";
import { TabsComponent } from "../../../components/tabs/tabs.component";
import { TabComponent } from "../../../components/tabs/tab/tab.component";
import { defaultCode, defaultImports, defaultSkeleton, passwordCode, emailCode, errorCode, fileCode, bigFileCode } from "./input.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { InputComponent } from "@teenageinterface/input";

const pageInfo = {
  title: "Components / Input",
  order: 9
}

@Component({
  selector: "pages-input",
  standalone: true,
  imports: [RouterModule, InputComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './input.page.html',
})

export default class InputPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly passwordCode = passwordCode;
  protected readonly emailCode = emailCode;
  protected readonly errorCode = errorCode;
  protected readonly fileCode = fileCode;
  protected readonly bigFileCode = bigFileCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
