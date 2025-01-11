/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:39:05                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 09:39:05                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AvatarComponent } from "@teenageinterface/avatar";
import { ButtonComponent } from "@teenageinterface/button";
import { CardComponent } from "@teenageinterface/card";
import { IconsComponent } from "@teenageinterface/icons";
import { InputComponent } from "@teenageinterface/input";
import { SelectComponent } from "@teenageinterface/select";
import { SeparatorComponent } from "@teenageinterface/separator";
import { SwitchComponent } from "@teenageinterface/switch";
import { iconsList } from "../../components/icons/icons.preview";

@Component({
  selector: "showcase-examples",
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, CardComponent, AvatarComponent, SelectComponent, IconsComponent, SeparatorComponent, SwitchComponent],
  templateUrl: './examples.showcase.html',
})

export default class ExamplesShowcase {
  protected readonly iconsList = iconsList;
  private timeout: ReturnType<typeof setTimeout> | null = null;
  public searchTerm: string = "";

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
