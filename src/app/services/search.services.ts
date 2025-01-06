/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 10:20:17                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 10:54:30                               *
 *****************************************************************************/

import { Injectable, ApplicationRef, createComponent, EnvironmentInjector, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from '../routes.routes';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private index: { title: string; section: string; content: string; url: string }[] = [];

  constructor(
    private environmentInjector: EnvironmentInjector,
    private appRef: ApplicationRef
  ) {}

  public autoIndex() {
    const processRoutes = (currentRoutes: Routes, parentPath = '') => {
      currentRoutes.forEach(route => {
        const fullPath = parentPath + '/' + route.path;
        if(route.data?.['title']) {
          const [section, title] = route.data['title'].split(' / ');

          const content = this.getComponentFirstParagraph(route.component);
          let ret = {
            title: title,
            section: section,
            content: content || '',
            url: fullPath.replace(/\/+/g, '/')
          }

          this.index.push(ret);
        }

        if (route.children) {
          processRoutes(route.children, fullPath);
        }
      });
    }

    processRoutes(routes);
  }

  public getIndex() {
    return this.index;
  }

  getComponentFirstParagraph(component: Type<any> | undefined): string | null {
    if (!component) return null;

    const componentRef = createComponent(component, {
      environmentInjector: this.environmentInjector,
    });

    this.appRef.attachView(componentRef.hostView);

    const element = componentRef.location.nativeElement;
    const firstParagraph = element.querySelector('p');
    const content = firstParagraph?.textContent || null;

    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();

    return content;
  }

  public addToIndex(page: { title: string; section: string; content: string; url: string }) {
    this.index.push(page);
  }

  public search(term: string): { title: string; section: string; url: string; snippet: string }[] {
    const lowerTerm = term.toLowerCase();
    return this.index
      .filter(
        (page) =>
          page.title.toLowerCase().includes(lowerTerm) ||
          page.content.toLowerCase().includes(lowerTerm) ||
          page.section.toLowerCase().includes(lowerTerm)
      )
      .map((page) => ({
        title: page.title,
        url: page.url,
        section: page.section,
        snippet: this.getSnippet(page.content, lowerTerm),
      }));
  }

  private getSnippet(content: string, term: string): string {
    const lowerContent = content.toLowerCase();
    const index = lowerContent.indexOf(term);
    if (index === -1) return '';
    const start = Math.max(0, index - 30);
    const end = Math.min(content.length, index + 30);
    return content.substring(start, end) + '...';
  }
}
