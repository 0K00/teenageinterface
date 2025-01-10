import { Component } from "@angular/core";

@Component({
  selector: "preview-carousel",
  standalone: true,
  template: ``
})

export class CarouselPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { CarouselComponent, SlideComponent } from "@teenageinterface/carousel";

@Component({
  selector: "pages-carousel",
  standalone: true,
  imports: [CarouselComponent, SlideComponent],
  template: \`
    <div class="flex justify-center w-96">
    <tiCarousel type="modern" [infinite]="true">
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          1
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          2
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          3
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          4
        </div>
      </tiSlide>
    </tiCarousel>
  </div>
  \`,
})

export default class CarouselPage {}`;

export const defaultImports = `import { CarouselComponent, SlideComponent } from "@teenageinterface/carousel";`;

export const defaultSkeleton = `<tiCarousel>
  <tiSlide></tiSlide>
</tiCarousel>`;

export const modernCode = `import { CommonModule } from '@angular/common';
import { CarouselComponent, SlideComponent } from "@teenageinterface/carousel";

@Component({
  selector: "pages-carousel",
  standalone: true,
  imports: [CarouselComponent, SlideComponent],
  template: \`
    <div class="flex justify-center w-96">
    <tiCarousel type="modern" [infinite]="false" [autoSlide]="false">
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          1
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          2
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          3
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          4
        </div>
      </tiSlide>
    </tiCarousel>
  </div>
  \`,
})

export default class ButtonPage {}`;

export const classicCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \`
    <div class="flex justify-center w-96">
    <tiCarousel type="classic" [infinite]="false">
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          1
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          2
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          3
        </div>
      </tiSlide>
      <tiSlide>
        <div class="flex items-center justify-center text-8xl border dark:border-neutral-700 dark:bg-neutral-950 border-neutral-300 bg-neutral-50 h-96 rounded-2xl">
          4
        </div>
      </tiSlide>
    </tiCarousel>
  </div>
  \`,
})

export default class ButtonPage {}`;
