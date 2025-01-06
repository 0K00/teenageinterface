/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 08:49:18                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeComponent } from "../../../shared/code/code.component";

const pageInfo = {
  title: "Getting Started / Dark Mode",
  order: 2
}

@Component({
  selector: "pages-darkmode",
  standalone: true,
  imports: [CommonModule, RouterModule, CodeComponent],
  templateUrl: "./darkmode.page.html",
})

export default class DarkmodePage {
  protected readonly tailwindCode = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  // ...
}`;

  protected readonly toggleCode = `ngOnInit(): void {
  const currentTheme = localStorage.getItem("theme");
  if(window.matchMedia("(prefers-color-sheme)").media !== "not all") {
    if(!currentTheme) {
      this.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark' : 'light';
      localStorage.setItem("theme", this.mode);
    } else {
      this.mode = currentTheme;
    }
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-mode', this.mode);
  }
}

toggle() {
  this.mode = this.mode === "dark" ? "light" : "dark";
  localStorage.setItem("theme", this.mode);
  const htmlElement = document.documentElement;
  const currentMode = htmlElement.getAttribute('data-mode');

  if (currentMode === 'dark') {
    htmlElement.setAttribute('data-mode', 'light');
  } else {
    htmlElement.setAttribute('data-mode', 'dark');
  }
}`;

  protected readonly buttonCode = `<tiButton (click)='toggle()'>{{mode}}</tiButton>`;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
