/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 21:41:11                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2025-01-05 15:19:14                               *
 *****************************************************************************/

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabComponent, TabsComponent } from "@teenageinterface/tabs";
import RegisterShowcase from "./register/register.showcase";
import TodoShowcase from "./todo/todo.showcase";
import VideoShowcase from "./video/video.showcase";


@Component({
  selector: "pages-showcase",
  standalone: true,
  imports: [CommonModule, TabsComponent, TabComponent, RegisterShowcase, TodoShowcase, VideoShowcase],
  templateUrl: "./showcase.page.html",
})

export default class ShowcasePage implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
