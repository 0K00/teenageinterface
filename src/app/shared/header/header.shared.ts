/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-27 09:56:28                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-31 14:11:49                               *
 *****************************************************************************/

/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:21
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 23:21:31
 */
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightLoader } from 'ngx-highlightjs';
import { ButtonComponent } from "@teenageinterface/button";
import { IconsComponent } from '@teenageinterface/icons';
import { SearchService } from '../../services/search.services';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@teenageinterface/input';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'tiHeader',
  imports: [CommonModule, RouterModule, ButtonComponent, IconsComponent, FormsModule, IconsComponent, InputComponent],
  templateUrl: './header.shared.html',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('150ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderShared implements OnInit {
  @ViewChild('modalContainer', { static: false }) modalContainerRef!: ElementRef;
  @ViewChild('menuContainer', { static: false }) menuContainerRef!: ElementRef;

  public mode: string = "dark";
  public modal: boolean = false;
  public showMenu: boolean = false;
  private startY: number | null = null;
  private hljsLoader: HighlightLoader = inject(HighlightLoader);
  searchTerm = '';
  results: { title: string; url: string; section: string; snippet: string, isFirst?: boolean }[] = [];
  menu: { title: string; url: string; section: string; snippet: string, isFirst?: boolean }[] = [];

  constructor(public searchS: SearchService) {}

  onSearch() {
    this.results = this.searchS.search(this.searchTerm);
    const seenSections = new Set<string>();
    this.results = this.results.map((result) => {
      const isFirst = !seenSections.has(result.section);
      seenSections.add(result.section);
      return { ...result, isFirst };
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    if (this.modalContainerRef && !this.modalContainerRef.nativeElement.contains(target)) {
      this.modal = false;
    }
    if (this.menuContainerRef && !this.menuContainerRef.nativeElement.contains(target)) {
      this.showMenu = false;
    }
  }

  onDragStart(event: MouseEvent): void {
    this.startY = event.clientY;
  }

  onDragMove(event: MouseEvent): void {
    if (this.startY !== null) {
      const deltaY = event.clientY - this.startY;

      if (this.menuContainerRef) {
        this.menuContainerRef.nativeElement.style.transform = `translateY(${deltaY}px)`;
      }
    }
  }

  onDragEnd(): void {
    if (this.startY !== null) {
      const menuElement = this.menuContainerRef.nativeElement;

      menuElement.style.transform = '';

      const deltaY = menuElement.getBoundingClientRect().top - this.startY;

      if (deltaY < -10) {
        this.showMenu = false;
      }

      this.startY = null;
    }
  }

  ngOnInit(): void {
    const currentTheme = localStorage.getItem("theme");
    if(window.matchMedia("(prefers-color-sheme)").media !== "not all") {
      if(!currentTheme) {
        this.mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        localStorage.setItem("theme", this.mode);
      } else {
        this.mode = currentTheme;
      }
      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-mode', this.mode);
    }
    this.menu = this.searchS.search("");
    const seenSections = new Set<string>();
    this.menu = this.menu.map((result) => {
      const isFirst = !seenSections.has(result.section);
      seenSections.add(result.section);
      return { ...result, isFirst };
    });
  }

  toggle() {
    this.mode = this.mode === "dark" ? "light" : "dark";
    localStorage.setItem("theme", this.mode);
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
    window.open("https://github.com/0K00/teenageinterface", "_blank");
  }
}
