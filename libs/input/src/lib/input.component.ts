/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'tiInput',
  imports: [CommonModule, FormsModule, IconsComponent],
  templateUrl: './input.component.html',
  styles: [':host { width: 100% }'],
  styleUrl: './tailwind.css'
})
export class InputComponent {

  @Input() id: string | null = null;
  @Input() disabled: boolean = false;
  @Input() serverError: boolean = false;
  _value: string = "";
  @Input()
  set value(val: string) {
    this.valueChange.emit(val);
    this._value = val
  }
  get value() {
    return this._value;
  }
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() type: "text" | "password" | "email" | "file" | "bigFile" = "text";

  private patternEmail: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();

  public get pattern(): string {
    const classMap: { [key in typeof this.type]: string } = {
      text: ".*",
      password: ".*",
      email: this.patternEmail,
      file: ".*",
      bigFile: ".*",
    };

    return classMap[this.type] || classMap.text;
  }

  public enter() {
    this.onEnter.emit(this.value);
  }
}
