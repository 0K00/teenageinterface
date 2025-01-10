import { Component } from "@angular/core";
import { TabsComponent, TabComponent } from "@teenageinterface/tabs";
import { defaultCode, defaultImports, defaultSkeleton, iconsList } from "./icons.preview";
import { CodeComponent } from "../../../shared/code/code.component";
import TableComponent from "../../../components/table/table.component";
import TRowComponent from "../../../components/table/tRow/tRow.component";
import THeaderComponent from "../../../components/table/tHeader/tHeader.component";
import TCellComponent from "../../../components/table/tCell/tCell.component";
import TBodyComponent from "../../../components/table/tBody/tBody.component";
import { RouterModule } from "@angular/router";
import { IconsComponent } from "@teenageinterface/icons";
import { CommonModule } from "@angular/common";
import { InputComponent } from "@teenageinterface/input";

const pageInfo = {
  title: "Components / Icons",
  order: 8
}

@Component({
  selector: "pages-icons",
  standalone: true,
  imports: [CommonModule, RouterModule, TabsComponent, TabComponent, CodeComponent, TableComponent, TRowComponent, THeaderComponent, TCellComponent, TBodyComponent, IconsComponent, InputComponent],
  templateUrl: './icons.page.html',
})

export default class IconsPage {
  protected readonly defaultCode = defaultCode;
  protected readonly defaultImports = defaultImports;
  protected readonly defaultSkeleton = defaultSkeleton;
  protected readonly iconsList = iconsList;
  private timeout: ReturnType<typeof setTimeout> | null = null;
  public searchTerm: string = "";

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }

  copyIcon(name: string) {
    if (!navigator.clipboard){
      const textArea = document.createElement('textarea');
      textArea.value = name;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('copy');

      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText(name);
    }

    if(this.timeout) clearTimeout(this.timeout);
  }

  public searchIcons(): string[] {
    return this.iconsList.filter(icon =>
      icon.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }
}
