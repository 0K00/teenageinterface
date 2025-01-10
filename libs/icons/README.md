# Icons Component

The `Icons` component allows you to render inline SVG icons in your Angular application. It supports dynamic icon selection based on input and offers styling for different states.

## Installation

Ensure that you have installed the `@teenageinterface/icons` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/icons
```

## Usage

Import the `IconsComponent` into your Angular application:

```typescript
import { IconsComponent } from '@teenageinterface/icons';

@Component({
  selector: 'pages-icon',
  template: `
    <tiIcon [icon]="iconName"></tiIcon>
  `,
})
export default class IconPage {
  iconName = 'accessibility_circled';
}
```

### Example

```html
<tiIcon [icon]="'accessibility_circled'"></tiIcon>
```

## Properties

| Property    | Type    | Default  | Description                              |
|-------------|---------|----------|------------------------------------------|
| `icon`      | `string`| `""`     | The name of the icon to display.         |
| `other`     | `string`| `""`     | Additional classes or properties.        |

## Icon Definitions

Each icon is an inline SVG that is sanitized using Angular's `DomSanitizer` for security purposes.

## Styling

The component uses CSS for the following styles:

- Icons are displayed with `inline-flex` for proper alignment.
- A spinning animation (`spinning`) is available when an icon needs to rotate.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
