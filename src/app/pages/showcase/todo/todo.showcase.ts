/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:39:05                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2025-01-02 11:20:46                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { CheckboxComponent } from "@teenageinterface/checkbox";
import { IconsComponent } from "@teenageinterface/icons";
import { InputComponent } from "@teenageinterface/input";

@Component({
  selector: "showcase-todo",
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconsComponent, InputComponent, CheckboxComponent],
  templateUrl: './todo.showcase.html',
})

export default class TodoShowcase {
  public list: { id: number, name: string, state: boolean }[] = []
  public value: string = "";

  public add(): void {
    if(!this.value || this.value.trim() === "") return;

    this.list.push({
      id: this.list.length + 1,
      name: this.value,
      state: false
    });
    this.value = "";
  }

  public pop(id: number): void {
    this.list = this.list.filter(item => item.id !== id);
  }
}
