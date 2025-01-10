/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 10:27:36                               *
 *****************************************************************************/

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownComponent } from "ngx-markdown";
import { MarkdownService } from "../../../services/markdown.services";

const pageInfo = {
  title: "Getting Started / Changelog",
  order: 5
}

@Component({
  selector: "pages-changelog",
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: "./changelog.page.html",
})

export default class ChangelogPage implements OnInit {
  markdownContents: string[] = [];

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    this.markdownService.loadAllMarkdown().subscribe((contents) => {
      this.markdownContents = contents;
    });
  }
}
