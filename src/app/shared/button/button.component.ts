/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Button',
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() id: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: "default" | "primary" | "destructive" | "outline" | "ghost" | "link" = "default";

  private default: string[] = [
    "py-2",
    "px-3",
    "h-[42px]",
    "bg-neutral-950",
    "hover:bg-neutral-800",
    "dark:bg-neutral-50",
    "hover:dark:bg-neutral-200",
    "text-neutral-50",
    "dark:text-neutral-900",
    "focus-visible:ring-2",
    "ring-neutral-950",
    "ring-offset-neutral-50",
    "dark:ring-neutral-50",
    "dark:ring-offset-neutral-950",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none"
  ];
  private primary: string[] = [
    "py-2",
    "px-3",
    "h-[42px]",
    "bg-blue-800",
    "hover:bg-blue-700",
    "dark:bg-blue-600",
    "hover:dark:bg-blue-700",
    "text-neutral-50",
    "dark:text-neutral-50",
    "focus-visible:ring-2",
    "ring-blue-800",
    "ring-offset-neutral-50",
    "dark:ring-blue-600",
    "dark:ring-offset-neutral-950",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none"
  ];
  private destructive: string[] = [
    "py-2",
    "px-3",
    "h-[42px]",
    "bg-red-800",
    "hover:bg-red-700",
    "dark:bg-red-600",
    "hover:dark:bg-red-700",
    "text-neutral-50",
    "dark:text-neutral-50",
    "focus-visible:ring-2",
    "ring-red-800",
    "ring-offset-neutral-50",
    "dark:ring-red-600",
    "dark:ring-offset-neutral-950",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none"
  ];
  private outline: string[] = [
    "py-2",
    "px-3",
    "h-[42px]",
    "bg-transparent",
    "border",
    "border-neutral-300",
    "hover:border-neutral-400",
    "dark:border-neutral-800",
    "hover:dark:border-neutral-700",
    "text-neutral-700",
    "hover:text-neutral-900",
    "dark:",
    "hover:dark:text-neutral-50",
    "dark:text-neutral-300",
    "focus-visible:ring-2",
    "ring-neutral-950",
    "ring-offset-neutral-50",
    "dark:ring-neutral-50",
    "dark:ring-offset-neutral-950",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none"
  ];
  private ghost: string[] = [
    "py-2",
    "px-3",
    "h-[42px]",
    "bg-neutral-50",
    "dark:bg-neutral-950",
    "hover:bg-neutral-200",
    "hover:dark:bg-neutral-900",
    "text-neutral-600",
    "hover:text-neutral-800",
    "dark:text-neutral-300",
    "hover:dark:text-neutral-100",
    "focus-visible:ring-2",
    "ring-neutral-950",
    "ring-offset-neutral-50",
    "dark:ring-neutral-50",
    "dark:ring-offset-neutral-950",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none"
  ];
  private link: string[] = [
    "rounded-none",
    "bg-transparent",
    "border-b",
    "border-transparent",
    "hover:border-neutral-800",
    "hover:dark:border-neutral-50",
    "text-neutral-900",
    "dark:text-neutral-50",
    "focus-visible:outline-none"
  ];

  private commonClasses: string[] = [
    "cursor-pointer",
    "transition",
    "duration-300",
    "active:scale-[.97]",
    "rounded-lg",
    "tracking-[.2px]",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
    "font-medium",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "text-sm"
  ];

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const classMap: { [key in typeof this.type]: string[] } = {
      default: this.default,
      primary: this.primary,
      destructive: this.destructive,
      outline: this.outline,
      ghost: this.ghost,
      link: this.link,
    };

    return [...this.commonClasses, ...(classMap[this.type] || classMap.default), this.loading ? "pointer-events-none opacity-80" : ""];
  }
}
