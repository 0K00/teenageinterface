import { Component } from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { TabsComponent } from "../../../components/tabs/tabs.component";
import { TabComponent } from "../../../components/tabs/tab/tab.component";
import { defaultCode, defaultImports, defaultSkeleton, successCode, informativeCode, warnCode, destructiveCode } from "./callout.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { IconsComponent } from "../../../components/icons/icons.component";
import { CalloutComponent } from "../../../components/callout/callout.component";

const pageInfo = {
  title: "Components / Callout",
  order: 2
}

@Component({
  selector: "pages-callout",
  standalone: true,
  imports: [RouterModule, CalloutComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './callout.page.html',
})

export default class CalloutPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly successCode = successCode;
  protected readonly inforativeCode = informativeCode;
  protected readonly warnCode = warnCode;
  protected readonly destructiveCode = destructiveCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
