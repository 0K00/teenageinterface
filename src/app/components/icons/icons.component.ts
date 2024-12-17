import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'aIcon',
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      display: inline-block;
      height: 15px;
      width: 15px;
      line-height: 1;
      flex-shrink: 0;
      max-width: initial;
    }

    :root {
      --icon-sm: 0.8em;
      --icon-lg: 1.2em;
    }

    .icon use {
      --icon-stroke-linecap-butt: butt;
      stroke-miterlimit: 10;
      stroke-linecap: square;
      stroke-linejoin: miter;
    }

    .stroke-round use {
      --icon-stroke-linecap-butt: round;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .spinning {
      animation: icon-spin 1s infinite linear;
    }

    @keyframes icon-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `]
})
export class IconsComponent {
  @Input() icon: string = "";
  @Input() other: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public animation(classes: string) {
    const element = this.el.nativeElement.firstChild as HTMLElement;
    this.renderer.addClass(element, classes);
    setTimeout(() => {
      this.renderer.removeClass(element, classes);
    }, 1000);
  }
}
