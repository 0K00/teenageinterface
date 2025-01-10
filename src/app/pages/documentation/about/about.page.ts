/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 08:54:52                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

const pageInfo = {
  title: "Getting Started / About & Credits",
  order: 4
}

@Component({
  selector: "pages-about",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./about.page.html",
})

export default class AboutPage {
  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
