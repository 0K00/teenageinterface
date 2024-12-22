/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:29:37
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 07:20:00
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'tiCheckbox',
  imports: [CommonModule, IconsComponent, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './tailwind.css'
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() type: "default" | "primary" = "default";
  @Output() checkedChange = new EventEmitter<boolean>();

  private default: string[] = [
    "peer-checked:bg-neutral-950",
    "peer-checked:dark:bg-neutral-50",
    "peer-checked:border-neutral-950",
    "peer-checked:dark:border-neutral-50",
    "text-neutral-50",
    "dark:text-neutral-950"
  ]
  private primary: string[] = [
    "peer-checked:bg-blue-800",
    "peer-checked:dark:bg-blue-600",
    "peer-checked:border-blue-800",
    "peer-checked:dark:border-blue-600",
    "text-neutral-50"
  ]

  private commonClasses: string[] = [
    "border",
    "cursor-pointer",
    "rounded-md",
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
  ]

  public get classes(): string[] {
    const classMap: { [key in typeof this.type]: string[] } = {
      default: this.default,
      primary: this.primary,
    };

    return [...this.commonClasses, ...(classMap[this.type] || classMap.default)];
  }

  public onModelChange(e: boolean) {
    this.checked = e;
    this.checkedChange.emit(e);
  }
}
