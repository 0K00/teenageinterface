/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:39:05                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2025-01-05 15:23:32                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { CheckboxComponent } from "@teenageinterface/checkbox";
import { IconsComponent } from "@teenageinterface/icons";
import { InputComponent } from "@teenageinterface/input";
import { SeparatorComponent } from "@teenageinterface/separator";

@Component({
  selector: "showcase-video",
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconsComponent, InputComponent, CheckboxComponent, SeparatorComponent],
  templateUrl: './video.showcase.html',
})

export default class VideoShowcase {
}
