/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from '@teenageinterface/icons';
import { BadgeComponent } from '@teenageinterface/badge';
import { SeparatorComponent } from '@teenageinterface/separator';

@Component({
  selector: 'aHeader',
  imports: [CommonModule, RouterModule, ButtonComponent, IconsComponent, BadgeComponent, SeparatorComponent],
  templateUrl: './header.shared.html'
})
export class HeaderShared implements OnInit {
  public mode: string = "dark";
  private hljsLoader: HighlightLoader = inject(HighlightLoader);

  ngOnInit(): void {
    if(window.matchMedia("(prefers-color-sheme)").media !== "not all") {
      this.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-mode', this.mode);
    }
  }

  toggle() {
    this.mode = this.mode === "dark" ? "light" : "dark";
    const htmlElement = document.documentElement;
    const currentMode = htmlElement.getAttribute('data-mode');

    if (currentMode === 'dark') {
      this.onAppThemeChange("dark");
      htmlElement.setAttribute('data-mode', 'light');
    } else {
      this.onAppThemeChange("light");
      htmlElement.setAttribute('data-mode', 'dark');
    }
  }

  onAppThemeChange(appTheme: 'dark' | 'light') {
    this.hljsLoader.setTheme(appTheme === 'dark' ? 'assets/styles/github-dark-dimmed.css' : 'assets/styles/github.css');
  }

  toGithub(): void {
    window.open("https://github.com/0K00/alpha", "_blank");
  }
}
