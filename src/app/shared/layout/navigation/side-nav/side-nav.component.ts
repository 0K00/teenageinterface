import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../../../../routes.routes';

interface NavItem {
  section: string;
  items: { title: string; path: string, order: number }[];
}

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  imports: [CommonModule, RouterModule]
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

    const navMap: { [key: string]: { title: string; path: string; order: number }[] } = {};

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
            order
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
