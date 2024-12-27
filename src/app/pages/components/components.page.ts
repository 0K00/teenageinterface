/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SideNavComponent } from '../../shared/layout/navigation/side-nav/side-nav.component';
import { AnchorNavComponent } from '../../shared/layout/navigation/anchor-nav/anchor-nav.component';
import { ButtonComponent } from '@teenageinterface/button';
import { Subscription } from 'rxjs';
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'componentsPage',
  imports: [CommonModule, RouterOutlet, SideNavComponent, AnchorNavComponent, ButtonComponent, IconsComponent],
  templateUrl: './components.page.html'
})
export class ComponentsPage implements OnInit, OnDestroy {
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

    this.nextChildTitle = children[nextIndex]?.data?.['title']?.replace('Components /', '') || 'Next';
    this.previousChildTitle = children[previousIndex]?.data?.['title']?.replace('Components /', '') || 'Previous';

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
