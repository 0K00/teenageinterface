# Tabs Component

The `Tabs` component provides a customizable tab navigation system to organize content. It includes an optional `Tab` component for defining individual tabs.

## Installation

Ensure that you have installed the `@teenageinterface/tabs` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/tabs
```

## Usage

### Basic Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <tiTabs [type]="'primary'">
      <tiTab tabTitle="Tab 1" [active]="true">
        <p>Content of Tab 1</p>
      </tiTab>
      <tiTab tabTitle="Tab 2">
        <p>Content of Tab 2</p>
      </tiTab>
      <tiTab tabTitle="Tab 3">
        <p>Content of Tab 3</p>
      </tiTab>
    </tiTabs>
  `,
})
export class ExampleComponent {}
```

### Advanced Example

```html
<tiTabs [type]="'ghost'">
  <tiTab tabTitle="Home" [active]="true">
    <p>Welcome to the home tab!</p>
  </tiTab>
  <tiTab tabTitle="Profile">
    <p>Profile content goes here.</p>
  </tiTab>
  <tiTab tabTitle="Settings">
    <p>Adjust your preferences in the settings tab.</p>
  </tiTab>
</tiTabs>
```

---

## Components Overview

### `TabsComponent`

The parent container for managing tab navigation and active state.

#### Properties

| Property   | Type                          | Default     | Description                                                 |
|------------|-------------------------------|-------------|-------------------------------------------------------------|
| `type`     | `"default" | "primary" | "ghost"` | `"default"` | Defines the tab style: `default`, `primary`, or `ghost`.   |

#### Styling Classes

The component applies utility classes based on the `type` property to achieve the desired appearance.

---

### `TabComponent`

Defines an individual tab and its associated content.

#### Properties

| Property   | Type      | Default   | Description                       |
|------------|-----------|-----------|-----------------------------------|
| `tabTitle` | `string`  | `''`      | Title displayed on the tab header. |
| `active`   | `boolean` | `false`   | Indicates whether the tab is active. |

---

## Features

### Dynamic Active Tab

If no tab is marked as active, the first tab is automatically activated upon initialization.

### Content Projection

Use Angular's content projection (`<ng-content>`) to display custom content within each tab.

---

## Example with Programmatic Tab Switching

```typescript
import { Component } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-programmatic-tabs',
  template: `
    <button (click)="activateTab(1)">Activate Tab 2</button>
    <tiTabs>
      <tiTab tabTitle="Tab 1" #tab1>
        <p>Content of Tab 1</p>
      </tiTab>
      <tiTab tabTitle="Tab 2" #tab2>
        <p>Content of Tab 2</p>
      </tiTab>
    </tiTabs>
  `,
})
export class ProgrammaticTabsComponent {
  @ViewChild('tab2') tab2!: TabComponent;

  activateTab(index: number) {
    this.tab2.active = true;
  }
}
```

---

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
