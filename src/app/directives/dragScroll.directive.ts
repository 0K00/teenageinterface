import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDragScroll]',
})
export class DragScrollDirective {
  constructor(private el: ElementRef) {}

  mouseDown = false;

  startX: any;
  startY: any;

  scrollLeft: any;
  scrollTop: any;

  @HostListener('mousedown', ['$event'])
  startDragging(e: any) {
    const el = this.el.nativeElement;
    this.mouseDown = true;
    this.startX = e.pageX - el.offsetLeft;
    this.startY = e.pageY - el.offsetTop;
    this.scrollLeft = el.scrollLeft;
    this.scrollTop = el.scrollTop;
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  stopDragging(e: any) {
    this.mouseDown = false;
  }

  @HostListener('mousemove', ['$event'])
  moveEvent(e: any) {
    const el = this.el.nativeElement;
    e.preventDefault();
    if (!this.mouseDown) return;
    const x = e.pageX - el.offsetLeft;
    const y = e.pageY - el.offsetTop;
    const scrollX = x - this.startX;
    const scrollY = y - this.startY;
    el.scrollLeft = this.scrollLeft - scrollX;
    el.scrollTop = this.scrollTop - scrollY;
  }
}
