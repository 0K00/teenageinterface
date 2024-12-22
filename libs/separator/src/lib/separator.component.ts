/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:32:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 06:11:07
 */
import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'tiSeparator',
  imports: [CommonModule],
  templateUrl: './separator.component.html',
  styleUrl: './tailwind.css'
})
export class SeparatorComponent {
  @Input() orientation: "vertical" | "horizontal" = "horizontal";
  @Input() size: string = "100%";

  @HostBinding('style')
  setStyle: SafeStyle = this.orientation === "vertical" ? "display:flex;width:1px;height:" + this.size + ";" : "display:flex;height:1px;width:" + this.size + ";";

  private vertical: string[] = [
    "h-full",
    "w-px"
  ]
  private horizontal: string[] = [
    "h-px",
    "w-full"
  ]

  private commonClasses: string[] = [
    "inline-flex",
    "shrink-0",
    "border-0",
    "bg-neutral-300",
    "dark:bg-neutral-800"
  ]

  public get classes(): string[] {
    const classMap: { [key in typeof this.orientation]: string[] } = {
      vertical: this.vertical,
      horizontal: this.horizontal
    };

    this.setStyle = this.orientation === "vertical" ? "display:flex;width:1px;height:" + this.size + ";" : "display:flex;height:1px;width:" + this.size + ";";
    return [...this.commonClasses, ...(classMap[this.orientation] || classMap.horizontal)];
  }
}
