import { Component } from "@angular/core";

@Component({
  selector: "preview-card",
  standalone: true,
  template: ``
})

export class CardPreview {}

export const defaultCode = `import { CommonModule } from '@angular/common';
import { CardComponent } from "@teenageinterface/card";
import { InputComponent } from "@teenageinterface/input";
import { SeparatorComponent } from "@teenageinterface/separator";
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [CardComponent, InputComponent, SeparatorComponent, ButtonComponent],
  template: \`
      <tiCard>
        <div title>
          Upload image
        </div>
        <div description>
          Change your profile picture
        </div>
        <div content>
          <tiInput type="bigFile" placeholder="JPG, PNG, or GIF - Max file size 2MB" />
          <div class="flex w-full mt-6 gap-4 text-xs text-neutral-600 justify-between items-center">
          <tiSeparator orientation="horizontal" /> OR <tiSeparator orientation="horizontal" />
          </div>
        </div>
        <div footer>
          <div class="flex gap-2">
            <tiInput type="text" placeholder="Add from URL" />
            <tiButton type="primary">Add</tiButton>
          </div>
        </div>
      </tiCard>
  \`,
})

export default class ButtonPage {}`;

export const defaultImports = `import { CardComponent } from "@teenageinterface/card";`;

export const defaultSkeleton = `<tiCard>
  <div title></div>
  <div description></div>
  <div content></div>
  <div footer></div>
</tiCard>`;

export const exampleCode = `import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@alpha/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: \`
      <tiCard>
      <div class="flex flex-col" content>
        <div class="dark:text-blue-500 text-blue-800 mb-2 font-medium">Team</div>
        <div class="flex gap-1 items-end mb-8">
          <div class="text-6xl font-semibold">$99</div>
          <div class="dark:text-neutral-500 text-neutral-700">/month</div>
        </div>
        <div class="mb-8 font-medium dark:text-neutral-500 text-neutral-700">
          The perfect plan if you're just getting started with our product.
        </div>
        <div class="flex flex-col gap-2 mb-4 text-sm">
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            25 products
          </div>
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            Up to 10,000 subscribers
          </div>
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            Audience segmentation
          </div>
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            Advanced analytics
          </div>
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            Email support
          </div>
          <div class="flex gap-2 items-center">
            <tiIcon icon="check" other="dark:text-blue-500 text-blue-800 !w-6 !h-6"/>
            Marketing automations
          </div>
        </div>
      </div>
      <div class="flex gap-2" footer>
        <tiButton type="primary">Get started today</tiButton>
        <tiButton type="ghost">Return to Personal plan</tiButton>
      </div>
    </tiCard>
  \`,
})

export default class ButtonPage {}`;
