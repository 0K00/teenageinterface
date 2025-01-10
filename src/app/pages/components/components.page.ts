/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : Invalid Date                                      *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 09:38:48                               *
 *****************************************************************************/

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SideNavComponent } from '../../shared/layout/navigation/side-nav/side-nav.component';
import { AnchorNavComponent } from '../../shared/layout/navigation/anchor-nav/anchor-nav.component';
import { ButtonComponent } from '@teenageinterface/button';
import { Subscription } from 'rxjs';
import { IconsComponent } from '@teenageinterface/icons';
import { FooterShared } from '../../shared/footer/footer.shared';

@Component({
  selector: 'componentsPage',
  imports: [CommonModule, RouterOutlet, SideNavComponent, AnchorNavComponent, ButtonComponent, IconsComponent, FooterShared],
  templateUrl: './components.page.html'
})
export class ComponentsPage implements OnInit, OnDestroy {
  title = '-'
  nextChildTitle: any = "";
  previousChildTitle: any = "";
  showNextButton: boolean = false;
  showPreviousButton: boolean = false;
  private routerSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateChild();

        window.scrollTo(0, 0);
      }
    });

    this.updateChild();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


  updateChild() {
    const children = (this.route.routeConfig?.children || []).filter(
      child => !child.redirectTo
    );

    const currentChildPath = this.route.snapshot.firstChild?.routeConfig?.path;

    const currentIndex = children.findIndex(child => child.path === currentChildPath);
    const nextIndex = (currentIndex + 1) % children.length;
    const previousIndex = (currentIndex - 1 + children.length) % children.length;

    this.nextChildTitle = children[nextIndex]?.data?.['title']?.replace(/(Components|Getting Started) \//g, '') || 'Next';
    this.previousChildTitle = children[previousIndex]?.data?.['title']?.replace(/(Components|Getting Started) \//g, '') || 'Previous';

    this.showNextButton = currentIndex < children.length - 1;
    this.showPreviousButton = currentIndex > 0;
  }

  navigateToNextChild() {
    const children = this.route.routeConfig?.children || [];
    const currentChildPath = this.route.snapshot.firstChild?.routeConfig?.path;

    const currentIndex = children.findIndex(child => child.path === currentChildPath);
    const nextIndex = (currentIndex + 1) % children.length;

    const nextChildPath = children[nextIndex]?.path;
    if (nextChildPath) {
      this.router.navigate([nextChildPath], { relativeTo: this.route }).then(() => {
        this.updateChild();
        window.scrollTo(0, 0);
      });
    }
  }

  navigateToPreviousChild() {
    const children = this.route.routeConfig?.children || [];
    const currentChildPath = this.route.snapshot.firstChild?.routeConfig?.path;

    const currentIndex = children.findIndex(child => child.path === currentChildPath);
    const previousIndex = (currentIndex - 1 + children.length) % children.length;

    const previousChildPath = children[previousIndex]?.path;
    if (previousChildPath) {
      this.router.navigate([previousChildPath], { relativeTo: this.route }).then(() => {
        this.updateChild();
        window.scrollTo(0, 0);
      });
    }
  }
}
