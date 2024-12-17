import { Component } from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { TabsComponent } from "../../../components/tabs/tabs.component";
import { TabComponent } from "../../../components/tabs/tab/tab.component";
import { defaultCode } from "./button.preview";
import { CodeComponent } from "../../../shared/code/code.component";

const pageInfo = {
  title: "Components / Button",
  order: 1
}

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent, TabsComponent, TabComponent, CodeComponent],
  templateUrl: './button.page.html',
})

export default class ButtonPage {
  protected readonly defaultCode = defaultCode;
}
