/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 09:56:28                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 05:34:58                               *
 *****************************************************************************/

/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: 'tiFooter',
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './footer.shared.html'
})
export class FooterShared {
  toGithub(): void {
    let pathname = window.location.pathname;
    let url = "https://github.com/0K00/teenageinterface/tree/main/src/app/pages" + pathname;
    window.open(url, "_blank");
  }
}
