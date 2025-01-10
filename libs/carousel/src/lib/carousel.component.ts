/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   29-11-2024 09:16:54
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 30-11-2024 00:08:08
 */
import { CommonModule } from "@angular/common";
import { AfterContentInit, AfterViewChecked, HostBinding, Component, ContentChildren, Input, HostListener, QueryList, ElementRef } from '@angular/core';
import { SlideComponent } from './slide.component';
import { IconsComponent } from '@teenageinterface/icons'
import { SafeStyle } from "@angular/platform-browser";

@Component({
  selector: 'tiCarousel',
  imports: [CommonModule, SlideComponent, IconsComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './tailwind.css',
  styles: [`:host{ display: block; }`]
})
export class CarouselComponent implements AfterContentInit, AfterViewChecked {
  @ContentChildren(SlideComponent) slides!: QueryList<SlideComponent>;
  public slideList: SlideComponent[] = [];
  public currentIndex: number = 0;
  private autoSlideInterval: any;
  private isDragging: boolean = false;
  private startX: number = 0;
  private currentTranslate: number = 0;
  private prevTranslate: number = 0;
  private isInitialized = false;

  @Input() autoSlideTime = 3000;
  @Input() autoSlide: boolean = true;
  @Input() dot: boolean = true;
  @Input() controls: boolean = true;
  @Input() width: number = 320;
  @Input() infinite: boolean = true;
  @Input() type: "classic" | "modern" = "modern";

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateSlideWidths();
  }

  @HostBinding('style.width')
  setWidth: SafeStyle = this.type === 'modern' ? (this.width + (this.width / 2)) + 'px' : this.width + 'px';


  constructor(private hostRef: ElementRef) {}

  ngAfterViewChecked(): void {
    if (!this.isInitialized && this.hostRef.nativeElement.offsetWidth > 0) {
      this.updateSlideWidths();
      this.slides.forEach((slide: SlideComponent, i) => {
        slide.width = this.width;
        slide.index = i;
        slide.currentIndex = this.currentIndex;
        slide.type = this.type;
        if(i === this.currentIndex) slide.active = true;
        else slide.active = false;
      });
      this.slideList = this.slides.toArray();
      if(this.autoSlide)
        this.startAutoSlide();
      this.isInitialized = true;
    }
  }

  public ngAfterContentInit(): void {
    this.updateSlideWidths();
  }

  private updateSlideWidths(): void {
    this.width = this.hostRef.nativeElement.offsetWidth;
    if (this.width === 0) return;
    this.setWidth = this.type === 'modern' ? (this.width + (this.width / 2)) + 'px' : this.width + 'px';
    this.slides.forEach((slide: SlideComponent) => {
      slide.width = this.width;
    });
  }

  private startAutoSlide(): void {
    if(!this.autoSlide) return;

    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideTime);
  }

  public pauseAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  public resumeAutoSlide(): void {
    if(!this.autoSlide) return;
      this.startAutoSlide();
  }

  public goToSlide(index: number): void {
    this.currentIndex = index;
  }

  public nextSlide(): void {
    if(this.currentIndex === (this.slideList.length - 1) && !this.infinite) return;

    this.currentIndex = (this.currentIndex + 1) % this.slideList.length;
    this.slides.forEach((slide: SlideComponent, i) => {
      slide.currentIndex = this.currentIndex;
      if(i === this.currentIndex) slide.active = true;
      else slide.active = false;
    });
  }

  public prevSlide(): void {
    if(this.currentIndex === 0 && !this.infinite) return;

    this.currentIndex = (this.currentIndex - 1 + this.slideList.length) % this.slideList.length;
    this.slides.forEach((slide: SlideComponent, i) => {
      slide.currentIndex = this.currentIndex;
      if(i === this.currentIndex) slide.active = true;
      else slide.active = false;
    });
  }

  onDragStart(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.prevTranslate = this.currentTranslate;
    event.preventDefault();
  }

  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;

    const currentX = event.clientX;
    const deltaX = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + deltaX;
  }

  onDragEnd(event: MouseEvent): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;

    if (movedBy < -50 && this.currentIndex < this.slideList.length - 1) {
      this.nextSlide();
    } else if (movedBy > 50 && this.currentIndex > 0) {
      this.prevSlide();
    }
  }
}
