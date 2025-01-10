/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:18:57                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 10:34:24                               *
 *****************************************************************************/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../../../routes.routes';
import { BadgeComponent } from '@teenageinterface/badge';
import { IconsComponent } from '@teenageinterface/icons';

interface NavItem {
  section: string;
  items: { title: string; path: string, order: number, soon?: boolean, alpha?: boolean, external?: boolean, externalUrl?: string }[];
}

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  imports: [CommonModule, RouterModule, BadgeComponent, IconsComponent]
})
export class SideNavComponent {
  navItems: NavItem[] = [];

  constructor() {
    this.navItems = this.createNavHierarchy(routes);
  }

  private createNavHierarchy(routes: Routes): NavItem[] {
    const sectionOrder = [
      'Getting Started',
      'Components'
    ];

    const navMap: { [key: string]: { title: string; path: string; order: number, soon?: boolean, alpha?: boolean, external?: boolean, externalUrl?: string }[] } = {};

    const processRoutes = (currentRoutes: Routes, parentPath = '') => {
      currentRoutes.forEach(route => {
        const fullPath = parentPath + '/' + route.path;

        if (route.data?.['title']) {
          const [section, title] = route.data['title'].split(' / ');
          const order = route.data['order'] ?? 999;

          if (!navMap[section]) {
            navMap[section] = [];
          }

          navMap[section].push({
            title,
            path: fullPath.replace(/\/+/g, '/'),
            order,
            soon: route.data['soon'] ? route.data['soon'] : false,
            alpha: route.data['alpha'] ? route.data['alpha'] : false,
            external: route.data['external'] ? route.data['external'] : false,
            externalUrl: route.data['externalUrl'] ? route.data['externalUrl'] : null,
          });
        }

        if (route.children) {
          processRoutes(route.children, fullPath);
        }
      });
    };

    processRoutes(routes);

    const sortedSections = sectionOrder.filter(section => navMap[section]);

    return sortedSections.map(section => ({
      section,
      items: navMap[section].sort((a, b) => a.order - b.order)
    }));
  }
}
