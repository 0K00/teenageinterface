import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tiBadge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './tailwind.css'
})
export class BadgeComponent {
  @Input() type: string = "";
  @Input() text: "default" | "primary" | "success" | "informative" | "warn" | "destructive" = "default";

  private default: string[] = [
    "dark:bg-neutral-50",
    "bg-neutral-950",
    "dark:text-neutral-950",
    "text-neutral-50"
  ];
  private primary: string[] = [
    "dark:bg-blue-600",
    "bg-blue-800",
    "text-neutral-50"
  ];
  private success: string[] = [
    "dark:bg-green-950",
    "bg-green-100",
    "dark:text-green-200",
    "text-green-700"
  ];
  private informative: string[] = [
    "dark:bg-blue-950",
    "bg-blue-100",
    "dark:text-blue-200",
    "text-blue-700"
  ];
  private warn: string[] = [
    "dark:bg-yellow-950",
    "bg-yellow-100",
    "dark:text-yellow-200",
    "text-yellow-700"
  ];
  private destructive: string[] = [
    "dark:bg-red-950",
    "bg-red-100",
    "dark:text-red-200",
    "text-red-700"
  ];

  private commonClasses: string[] = [
    "flex",
    "items-center",
    "justify-center",
    "px-1.5",
    "py-1",
    "text-xs",
    "font-medium",
    "rounded-lg",
    "w-fit"
  ];

  public get classes(): string[] {
    const classMap: { [key in typeof this.type]: string[] } = {
      default: this.default,
      primary: this.primary,
      success: this.success,
      informative: this.informative,
      warn: this.warn,
      destructive: this.destructive,
    };

    return [...this.commonClasses, ...(classMap[this.type] || classMap["default"])];
  }
}
