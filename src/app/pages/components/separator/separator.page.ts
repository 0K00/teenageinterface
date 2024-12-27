import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, primaryCode, destructiveCode, outlineCode, ghostCode, linkCode, iconCode, withCode, loadingCode } from "./separator.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { IconsComponent } from "@teenageinterface/icons";

const pageInfo = {
  title: "Components / Separator",
  order: 13
}

@Component({
  selector: "pages-separator",
  standalone: true,
  imports: [RouterModule, ButtonComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent, IconsComponent],
  templateUrl: './separator.page.html',
})

export default class SeparatorPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly primaryCode = primaryCode;
  protected readonly destructiveCode = destructiveCode;
  protected readonly outlineCode = outlineCode;
  protected readonly ghostCode = ghostCode;
  protected readonly linkCode = linkCode;
  protected readonly iconCode = iconCode;
  protected readonly withCode = withCode;
  protected readonly loadingCode = loadingCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
