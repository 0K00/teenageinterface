import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {
  @Input('leftResize') leftElement!: HTMLElement;
  @Input('rightResize') rightElement!: HTMLElement;
  @Input('direction') direction: 'horizontal' | 'vertical' = 'vertical';
  @Input('minSize') minSize: number = 500;

  grabber: boolean = false;
  width!: number;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.width = this.direction === 'horizontal' ? event.target.outerHeight : event.target.outerWidth;
  }
  @HostListener('mousedown') onMouseDown() {
    this.grabber = true;
    document.body.style.cursor = this.direction === 'horizontal' ? 'grabbing' : 'grabbing';
  }

  @HostListener('window:mouseup') onMouseUp() {
    this.grabber = false;
    document.body.style.cursor = 'default';
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.grabber) {
      event.preventDefault();

      let client = this.direction === 'horizontal' ? event.clientY : event.clientX;
      let screen = this.direction === 'horizontal' ? window.screen.availHeight : window.screen.availWidth;

      if(client - 16 < this.minSize) return;
      if((this.width || screen) - client + 100 < this.minSize) return;

      let leftSize = Math.max(client - 16, this.minSize);
      let rightSize = Math.max((this.width || screen) - client + 100, this.minSize);

      if (this.direction === 'horizontal') {
        this.rightElement.style.flex = `0 5 ${rightSize}px`;
        this.leftElement.style.flex = `1 5 ${leftSize}px`;
      } else {
        this.leftElement.style.flex = `0 5 ${leftSize}px`;
        this.rightElement.style.flex = `1 5 ${rightSize}px`;
      }
    }
  }
}
