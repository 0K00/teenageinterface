import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, exampleCode } from "./card.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { IconsComponent } from "@teenageinterface/icons";
import { CardComponent } from "@teenageinterface/card";
import { InputComponent } from "@teenageinterface/input";
import { SeparatorComponent } from "@teenageinterface/separator";

const pageInfo = {
  title: "Components / Card",
  order: 5
}

@Component({
  selector: "pages-card",
  standalone: true,
  imports: [RouterModule, ButtonComponent, IconsComponent, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent, SeparatorComponent, CardComponent, InputComponent],
  templateUrl: './card.page.html',
})

export default class CardPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly exampleCode = exampleCode;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
