/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   20-12-2024 21:31:11
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 05:39:27
 */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tiProgress',
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './tailwind.css'
})
export class ProgressComponent {
  @Input() value: number = 0;
  @Input() showValue: boolean = true;
  @Input() width: string = "300px";
  @Input() type: "default" | "primary" | "score" = "default";

  private default: string[] = [
    "bg-neutral-950",
    "dark:bg-neutral-50"
  ]
  private primary: string[] = [
    "bg-blue-800",
    "dark:bg-blue-600"
  ]

  private commonClasses: string[] = [
    "h-2",
    "rounded-full"
  ]

  public get classes(): string[] {
    const classMap: { [key in typeof this.type]: string[] } = {
      default: this.default,
      primary: this.primary,
      score: this.value >= 70 ? ["bg-green-500", "dark:bg-green-600"] : this.value >= 50 ? ["bg-yellow-500", "dark:bg-yellow-600"] : ["bg-red-500", "dark:bg-red-600"]
    };
    return [...this.commonClasses, ...(classMap[this.type] || classMap.default)];
  }
}
