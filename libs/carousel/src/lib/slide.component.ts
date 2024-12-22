/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   29-11-2024 09:34:46
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 29-11-2024 09:54:39
 */
import { CommonModule } from "@angular/common";
import { Component, Input, HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'tiSlide',
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './tailwind.css'
})
export class SlideComponent {
  @Input() width: number = 320;

  public active: boolean = false;
  public currentIndex: number = 0;
  public index: number = 0;
  public type: "classic" | "modern" = "modern";

  @HostBinding('style')
  get setWidth(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`width: ${this.width}px`);
  }

  constructor(private sanitizer: DomSanitizer) {}

}
