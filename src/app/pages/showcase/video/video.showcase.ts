/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:39:05                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2025-01-05 15:23:32                               *
 *****************************************************************************/

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from "@teenageinterface/icons";
import { SeparatorComponent } from "@teenageinterface/separator";
import { ResizeDirective } from "../../../directives/resize.directive";
import { DragScrollDirective } from "../../../directives/dragScroll.directive";

@Component({
  selector: "showcase-video",
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconsComponent, SeparatorComponent, ResizeDirective, DragScrollDirective],
  templateUrl: './video.showcase.html',
})

export default class VideoShowcase {
  public medias: { title: string, time: string, type: string, url: string }[] = [
    { title: 'IMG_6543.mov', time: '4:25', type: 'video', url: 'annie-spratt-DdNVEapge4g-unsplash.jpg' },
    { title: 'IMG_9353.mov', time: '00:54', type: 'music', url: 'ashford-marx-KI6pbzLas8w-unsplash.jpg' },
    { title: 'IMG_1543.mov', time: '2:02', type: 'video', url: 'daniel-sessler-U_aa6rIv6c8-unsplash.jpg' },
    { title: 'IMG_9234.mov', time: '1:55', type: 'music', url: 'dillon-hunt-zQLd8RXbenw-unsplash.jpg' },
    { title: 'IMG_7329.mov', time: '3:34', type: 'music', url: 'dillon-hunt-ZThencZnFKw-unsplash.jpg' },
    { title: 'IMG_1308.mov', time: '23:18', type: 'video', url: 'ingmar-h-Z69Qu7EfnfY-unsplash.jpg' },
    { title: 'IMG_3754.mov', time: '4:25', type: 'music', url: 'marek-piwnicki-zCDGyBy40mc-unsplash.jpg' },
    { title: 'IMG_6642.mov', time: '14:05', type: 'video', url: 'rachel-harvey-kRuF-7bYwPI-unsplash.jpg' },
    { title: 'IMG_0734.mov', time: '8:11', type: 'video', url: 'tsuyoshi-kozu-vcA_HN4pufo-unsplash.jpg' },
    { title: 'IMG_6543.mov', time: '4:25', type: 'video', url: 'annie-spratt-DdNVEapge4g-unsplash.jpg' },
    { title: 'IMG_9353.mov', time: '00:54', type: 'music', url: 'ashford-marx-KI6pbzLas8w-unsplash.jpg' },
    { title: 'IMG_1543.mov', time: '2:02', type: 'video', url: 'daniel-sessler-U_aa6rIv6c8-unsplash.jpg' },
    { title: 'IMG_9234.mov', time: '1:55', type: 'music', url: 'dillon-hunt-zQLd8RXbenw-unsplash.jpg' },
    { title: 'IMG_7329.mov', time: '3:34', type: 'music', url: 'dillon-hunt-ZThencZnFKw-unsplash.jpg' },
    { title: 'IMG_1308.mov', time: '23:18', type: 'video', url: 'ingmar-h-Z69Qu7EfnfY-unsplash.jpg' },
    { title: 'IMG_3754.mov', time: '4:25', type: 'music', url: 'marek-piwnicki-zCDGyBy40mc-unsplash.jpg' },
    { title: 'IMG_6642.mov', time: '14:05', type: 'video', url: 'rachel-harvey-kRuF-7bYwPI-unsplash.jpg' },
    { title: 'IMG_0734.mov', time: '8:11', type: 'video', url: 'tsuyoshi-kozu-vcA_HN4pufo-unsplash.jpg' },
  ];
  timeline: number[] = Array.from({ length: 180 }, (_, i) => i);

  formatTime(seconds: number): string {
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds > 0 ? `${remainingSeconds}s` : ''}`;
    }
    return `${seconds}s`;
  }
}
