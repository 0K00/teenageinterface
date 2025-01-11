/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 10:27:36                               *
 *****************************************************************************/

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CodeComponent } from "../../../shared/code/code.component";

const pageInfo = {
  title: "Getting Started / CLI",
  order: 5
}

@Component({
  selector: "pages-cli",
  standalone: true,
  imports: [CommonModule, RouterModule, CodeComponent],
  templateUrl: "./cli.page.html",
})

export default class CliPage {
  public readonly allCode: string = `tgi install --all
# or
tgi install -a`;

  scrollToElement($element: HTMLElement): void {
    const currentUrl = window.location.href.split('#')[0];
    window.history.pushState(null, '', `${currentUrl}#${$element.id}`);
    let position = $element.getBoundingClientRect();
    window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
  }
}
