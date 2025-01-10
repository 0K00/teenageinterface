import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tiTabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tailwind.css'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList<TabComponent>();

  @Input() type: "default" | "primary" | "ghost" = "default";

  private default: { container: string[], tab: string[] } = {
    container: [
      "h-9",
      "border-b"
    ],
    tab: [
      "hover:dark:text-neutral-50",
      "text-neutral-500",
      "shadow-tab",
      "shadow-transparent"
    ]
  };
  private primary: { container: string[], tab: string[] } = {
    container: [
      "gap-1",
      "dark:bg-neutral-950",
      "bg-neutral-50",
      "rounded-xl",
      "p-0.5",
      "border"
    ],
    tab: [
      "w-full",
      "flex",
      "justify-center",
      "hover:bg-neutral-200",
      "hover:dark:bg-neutral-900",
      "hover:dark:text-neutral-50",
      "dark:text-neutral-400",
      "text-neutral-700",
      "rounded-lg"
    ]
  };
  private ghost: { container: string[], tab: string[] } = {
    container: [
      "gap-1",
      "pb-4",
      "border-b"
    ],
    tab: [
      "flex",
      "justify-center",
      "hover:dark:text-neutral-50",
      "dark:text-neutral-400",
      "text-neutral-700",
      "hover:text-neutral-950",
      "rounded-lg"
    ]
  };
  private commonClasses: { container: string[], tab: string[] } = {
    container: [
      "flex",
      "border-neutral-300",
      "dark:border-neutral-800"
    ],
    tab: [
      "transition",
      "duration-300",
      "cursor-pointer",
      "text-sm",
      "font-medium",
      "hover:text-neutral-900",
      "py-2",
      "px-4"
    ]
  };

  public get classes(): { container: string[], tab: (tab: TabComponent) => string[] } {
    const classMap: { [key in typeof this.type]: { container: string[], tab: string[], activeTab: string[] } } = {
      default: {
        container: this.default.container,
        tab: this.default.tab,
        activeTab: [
          'dark:!shadow-blue-600',
          '!shadow-blue-800',
          'dark:!text-neutral-50',
          '!text-neutral-950',
        ],
      },
      primary: {
        container: this.primary.container,
        tab: this.primary.tab,
        activeTab: [
          'dark:!bg-blue-600',
          '!bg-blue-800',
          '!text-neutral-50',
          'cursor-default',
        ],
      },
      ghost: {
        container: this.ghost.container,
        tab: this.ghost.tab,
        activeTab: [
          'dark:!bg-blue-600',
          '!bg-blue-800',
          '!text-neutral-50',
          'cursor-default',
        ],
      },
    };

    return {
      container: [
        ...this.commonClasses.container,
        ...(classMap[this.type]?.container || classMap.default.container),
      ],
      tab: (tab: TabComponent) => [
        ...this.commonClasses.tab,
        ...(classMap[this.type]?.tab || classMap.default.tab),
        ...(tab.active ? classMap[this.type]?.activeTab || classMap.default.activeTab : []),
      ],
    };
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
