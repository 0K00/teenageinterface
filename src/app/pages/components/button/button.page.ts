import { Component } from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { TabsComponent } from "../../../components/tabs/tabs.component";
import { TabComponent } from "../../../components/tabs/tab/tab.component";
import { defaultCode, defaultImports, defaultSkeleton, primaryCode, destructiveCode, outlineCode, ghostCode, linkCode } from "./button.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";

const pageInfo = {
  title: "Components / Button",
  order: 1
}

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent],
  templateUrl: './button.page.html',
})

export default class ButtonPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly primaryCode = primaryCode;
  protected readonly destructiveCode = destructiveCode;
  protected readonly outlineCode = outlineCode;
  protected readonly ghostCode = ghostCode;
  protected readonly linkCode = linkCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
