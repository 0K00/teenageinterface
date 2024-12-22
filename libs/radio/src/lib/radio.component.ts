/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:29:37
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 08:06:28
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tiRadio',
  imports: [CommonModule, FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './tailwind.css'
})
export class RadioComponent {
  @Input() item: { value: string, name: string, id: string } = { value: "", name: "", id: "" };
  @Input() value: string = "";
  @Input() type: "default" | "primary" = "default";
  @Output() valuesChange = new EventEmitter<{ value: string, name: string, id: string }>();

  private default: { container: string[], circle: string[] } = {
    container: [
      "peer-checked:border-neutral-950",
      "peer-checked:dark:border-neutral-50",
    ],
    circle: [
      "bg-neutral-950",
      "dark:bg-neutral-50",
    ]
  }
  private primary: { container: string[], circle: string[] } = {
    container: [
      "peer-checked:border-blue-800",
      "peer-checked:dark:border-blue-600",
    ],
    circle: [
      "bg-blue-800",
      "dark:bg-blue-600",
    ]
  }

  private commonClasses: { container: string[], circle: string[] } = {
    container: [
      "border",
      "cursor-pointer",
      "rounded-full",
      "w-5",
      "h-5",
      "flex",
      "items-center",
      "transition",
      "duration-300",
      "justify-center",
      "border-neutral-300",
      "group-active:scale-95",
      "group-hover:border-neutral-400",
      "group-hover:dark:border-neutral-700",
      "dark:border-neutral-800"
    ],
    circle: [
      "rounded-full",
      "w-3",
      "h-3"
    ]
  }

  public get classes(): { container: string[], circle: string[] } {
    const classMap: { [key in typeof this.type]: { container: string[], circle: string[] } } = {
      default: this.default,
      primary: this.primary,
    };

    return {
      container: [
        ...this.commonClasses.container,
        ...(classMap[this.type].container || classMap.default.container)
      ],
      circle: [
        ...this.commonClasses.circle,
        ...(classMap[this.type].circle || classMap.default.circle)
      ]
    };
  }

  public onModelChange(e: string) {
    this.value = e;
    let item = { value: e, name: this.item.name, id: this.item.id }
    this.valuesChange.emit(item);
  }
}
