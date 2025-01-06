/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:39:05                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 09:39:05                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from "@teenageinterface/icons";
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "showcase-register",
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconsComponent, InputComponent],
  templateUrl: './register.showcase.html',
})

export default class RegisterShowcase {

}
