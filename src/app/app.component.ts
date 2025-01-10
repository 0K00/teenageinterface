/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 17:20:27                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 11:04:25                               *
 *****************************************************************************/

/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:35:50
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 22-12-2024 14:34:50
 */
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderShared } from './shared/header/header.shared';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderShared, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'teenage interface';

  constructor(public searchS: SearchService) {}

  ngOnInit(): void {
    this.searchS.autoIndex();
  }

}
