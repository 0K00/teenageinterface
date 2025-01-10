import { Component } from "@angular/core";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, successCode, informativeCode, warnCode, destructiveCode } from "./callout.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { CalloutComponent } from "@teenageinterface/callout";

const pageInfo = {
  title: "Components / Callout",
  order: 4
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
