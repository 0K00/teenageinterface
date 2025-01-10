# Input Component

The `Input` component is a customizable input field for various types of data in your Angular application. It supports different input types, including text, password, email, and file inputs, and emits events on value changes and when the enter key is pressed.

## Installation

Ensure that you have installed the `@teenageinterface/input` library and included `FormsModule` in your Angular application. If not, you can add them using:

```bash
npm install @teenageinterface/input
```

```typescript
import { FormsModule } from '@angular/forms';
```

## Usage

Import the `InputComponent` into your Angular application:

```typescript
import { InputComponent } from '@teenageinterface/input';

@Component({
  selector: 'app-input-example',
  template: `
    <tiInput [(value)]="inputValue" (onEnter)="onSubmit($event)"></tiInput>
  `,
})
export class InputExampleComponent {
  inputValue: string = '';
  onSubmit(value: string) {
    console.log('Entered value:', value);
  }
}
```

### Example

```html
<tiInput [value]="inputValue" [placeholder]="'Enter text'" (valueChange)="onValueChange($event)"></tiInput>
```

## Properties

| Property      | Type                | Default     | Description                                               |
|---------------|---------------------|-------------|-----------------------------------------------------------|
| `id`          | `string`            | `null`      | The ID of the input field.                                |
| `disabled`    | `boolean`           | `false`     | If `true`, the input field will be disabled.              |
| `serverError` | `boolean`           | `false`     | If `true`, the input will visually indicate a server error.|
| `value`       | `string`            | `""`        | The value of the input field.                             |
| `placeholder` | `string`            | `""`        | Placeholder text for the input field.                     |
| `required`    | `boolean`           | `false`     | If `true`, the input will be required.                    |
| `type`        | `"text" \| "password" \| "email" \| "file" \| "bigFile"` | `"text"` | The input type. Supports text, password, email, file, and bigFile. |

## Events

| Event        | Description                                                |
|--------------|------------------------------------------------------------|
| `valueChange` | Emitted when the value of the input field changes.         |
| `onEnter`     | Emitted when the enter key is pressed in the input field.  |

## Methods

### `enter()`
- Emits the `onEnter` event when the enter key is pressed.

## Patterns

The input field has different patterns based on the `type`:

- `text`, `password`, `file`, `bigFile`: Accepts any string.
- `email`: Matches a valid email pattern using a regular expression.

### Example Pattern (email)

```text
[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$
```

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
