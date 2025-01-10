# Checkbox Component

The `Checkbox` component allows you to create a styled checkbox with two customizable states: checked and unchecked. It includes support for emitting state changes.

## Installation

Ensure that you have installed the `@teenageinterface/checkbox` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/checkbox
```

## Usage

Import the `CheckboxComponent` into your Angular application:

```typescript
import { CheckboxComponent } from '@teenageinterface/checkbox';

@Component({
  selector: 'pages-checkbox',
  template: `
    <tiCheckbox [(checked)]="isChecked"></tiCheckbox>
  `,
})
export default class CheckboxPage {
  isChecked = false;
}
```

### Example

```html
<tiCheckbox [(checked)]="isChecked"></tiCheckbox>
```

## Properties

| Property     | Type     | Default    | Description                                           |
|--------------|----------|------------|-------------------------------------------------------|
| `checked`    | `boolean`| `false`    | Sets the initial checked state of the checkbox.       |
| `id`         | `string` | `""`       | An optional ID for the checkbox.                      |
| `type`       | `"default" | "primary"` | `"default"` | Determines the style of the checkbox.                 |

## Output Events

- `checkedChange`: Emits when the checked state of the checkbox changes.

## Types

### `type`

- `default`: Standard checkbox with no special styling.
- `primary`: Emphasized checkbox for primary actions.

## Documentation

For more information, visit the [official documentation](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
