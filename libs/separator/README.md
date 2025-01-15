# Separator Component

The `Separator` component is a versatile UI element used to create visual separation between sections or components in a layout. It supports both horizontal and vertical orientations and is fully customizable in size.

## Installation

Ensure that you have installed the `@teenageinterface/separator` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/separator
```

## Usage

Import the `SeparatorComponent` into your Angular application:

```typescript
import { SeparatorComponent } from '@teenageinterface/separator';

@Component({
  selector: 'app-separator-example',
  template: `
    <tiSeparator [orientation]="'horizontal'" [size]="'50%'"></tiSeparator>
  `,
})
export class SeparatorExampleComponent {}
```

### Example

```html
<!-- Horizontal Separator -->
<tiSeparator [orientation]="'horizontal'" [size]="'80%'"></tiSeparator>

<!-- Vertical Separator -->
<tiSeparator [orientation]="'vertical'" [size]="'100px'"></tiSeparator>
```

## Properties

| Property       | Type                          | Default       | Description                                                     |
|----------------|-------------------------------|---------------|-----------------------------------------------------------------|
| `orientation`  | `"vertical" | "horizontal"` | `"horizontal"`| Defines the orientation of the separator (vertical or horizontal). |
| `size`         | `string`                     | `"100%"`      | Sets the length of the separator. Supports values like `50%`, `100px`, etc. |

## Features

### Orientation

- **Horizontal**: The separator is displayed as a thin horizontal line.
- **Vertical**: The separator is displayed as a thin vertical line.

### Customizable Size

The `size` property allows you to adjust the separator's length dynamically based on your layout requirements.

## Documentation

For more details, visit the [official documentation]().  

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).  

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).  
