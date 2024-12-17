/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from '../../shared/layout/navigation/side-nav/side-nav.component';
import { AnchorNavComponent } from '../../shared/layout/navigation/anchor-nav/anchor-nav.component';

@Component({
  selector: 'componentsPage',
  imports: [CommonModule, RouterOutlet, SideNavComponent, AnchorNavComponent],
  templateUrl: './components.page.html'
})
export class ComponentsPage  {}
