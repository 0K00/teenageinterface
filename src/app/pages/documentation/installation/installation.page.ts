/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 08:35:35                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeComponent } from "../../../shared/code/code.component";

const pageInfo = {
  title: "Getting Started / Installation",
  order: 1
}

@Component({
  selector: "pages-installation",
  standalone: true,
  imports: [CommonModule, RouterModule, CodeComponent],
  templateUrl: "./installation.page.html",
})

export default class InstallationPage {
  protected readonly configCode = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}", // Adjust paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

  protected readonly styleCode = `@use '@teenageinterface/core'; // Import the @teenageinterface/core library styles

@tailwind base;
@tailwind components;
@tailwind utilities;`;

  protected readonly standaloneCode = `import { Component } from '@angular/core';
import { ButtonComponent } from '@teenageinterface/button';

@Component({
  selector: 'app-root',
  template: \`<tiButton>Default</tiButton>\`,
  standalone: true,
  imports: [ButtonComponent],
})
export class AppComponent {}`;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
