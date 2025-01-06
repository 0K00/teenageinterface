/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 14:15:47                               *
 *****************************************************************************/

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "pages-redirect",
  standalone: true,
  imports: [],
  templateUrl: "./redirect.page.html",
})

export default class RedirectPage {
  url: string = "";

  constructor(private route: ActivatedRoute) {
    this.url = route.snapshot.data['externalUrl'];
  }
}
