import { Component } from "@angular/core";
import { BadgeComponent } from "@teenageinterface/badge";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, primaryCode, destructiveCode, warnCode, informativeCode, successCode } from "./badge.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { IconsComponent } from "@teenageinterface/icons";

const pageInfo = {
  title: "Components / Badge",
  order: 2
}

@Component({
  selector: "pages-badge",
  standalone: true,
  imports: [RouterModule, BadgeComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './badge.page.html',
})

export default class BadgePage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly primaryCode = primaryCode;
  protected readonly destructiveCode = destructiveCode;
  protected readonly successCode = successCode;
  protected readonly informativeCode = informativeCode;
  protected readonly warnCode = warnCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
