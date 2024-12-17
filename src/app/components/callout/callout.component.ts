/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aCallout',
  imports: [CommonModule],
  templateUrl: './callout.component.html'
})
export class CalloutComponent {

  @Input() id: string = "";
  @Input() title: string = "";
  @Input() icon: string = "";
  @Input() type: "default" | "success" | "informative" | "warn" | "destructive" = "default";

  private default: string[] = [
    "border-neutral-300",
    "bg-neutral-100",
    "text-neutral-800",
    "dark:border-neutral-600",
    "dark:bg-neutral-800",
    "dark:text-neutral-100"
  ];
  private success: string[] = [
    "border-green-300",
    "bg-green-100",
    "text-green-800",
    "dark:border-green-600",
    "dark:bg-green-800",
    "dark:text-green-100"
  ];
  private informative: string[] = [
    "border-blue-300",
    "bg-blue-100",
    "text-blue-800",
    "dark:border-blue-600",
    "dark:bg-blue-800",
    "dark:text-blue-100"
  ];
  private warn: string[] = [
    "border-yellow-300",
    "bg-yellow-100",
    "text-yellow-800",
    "dark:border-yellow-600",
    "dark:bg-yellow-800",
    "dark:text-yellow-100"
  ];
  private destructive: string[] = [
    "border-red-300",
    "bg-red-100",
    "text-red-800",
    "dark:border-red-600",
    "dark:bg-red-800",
    "dark:text-red-100"
  ];

  private commonClasses: string[] = [
    "flex",
    "gap-2",
    "border",
    "rounded-lg",
    "p-4",
    "w-fit"
  ];

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const classMap: { [key in typeof this.type]: string[] } = {
      default: this.default,
      success: this.success,
      informative: this.informative,
      warn: this.warn,
      destructive: this.destructive
    };

    return [...this.commonClasses, ...(classMap[this.type] || classMap.default)];
  }
}
