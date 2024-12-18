import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface AnchorItem {
  id: string;
  level: number;
  title: string;
  offsetTop?: number;
}

@Component({
  selector: 'anchor-nav',
  imports: [CommonModule],
  templateUrl: './anchor-nav.component.html'
})
export class AnchorNavComponent implements AfterViewInit {
  anchors: AnchorItem[] = [];
  activeAnchorId: string | null = null;

  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.initializeAnchors();

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.initializeAnchors(), 100);
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  initializeAnchors() {
    this.findAnchorsWithHierarchy();
    this.updateAnchorOffsets();
    this.activeAnchorId = this.anchors[0].id;
  }

  findAnchorsWithHierarchy() {
    const routerOutletContent = document.querySelector('router-outlet')?.nextElementSibling;
    if (routerOutletContent) {
      const divsWithId = routerOutletContent.querySelectorAll('div[id]');

      this.anchors = Array.from(divsWithId).flatMap((div: Element) => {
        const h3 = div.querySelector('h3');
        const h4 = div.querySelector('h4');

        if (!h3 && !h4) {
          return [];
        }

        return [{
          id: div.id,
          level: h3 ? 0 : 1,
          title: h3?.textContent?.trim() || h4?.textContent?.trim() || 'Untitled',
          offsetTop: div.getBoundingClientRect().top + window.scrollY
        }];
      });
    }
  }

  updateAnchorOffsets() {
    this.anchors.forEach(anchor => {
      const element = document.getElementById(anchor.id);
      if (element) {
        anchor.offsetTop = element.getBoundingClientRect().top + window.scrollY;
      }
    });
  }

  scrollToAnchor(id: string) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const currentUrl = window.location.href.split('#')[0];
      window.history.pushState(null, '', `${currentUrl}#${id}`);
      let position = targetElement.getBoundingClientRect();
      window.scrollTo({left: position.left, top: position.top + window.scrollY - 80, behavior: "smooth"});
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + 150;
    for (const anchor of this.anchors) {
      if (anchor.offsetTop && scrollPosition >= anchor.offsetTop) {
        this.activeAnchorId = anchor.id;
      }
    }
  }
}


