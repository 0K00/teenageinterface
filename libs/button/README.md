# Button Component

The `Button` component is part of the `@teenageinterface` Angular component library. It is a versatile button element with customizable properties for various use cases.

## Installation

Ensure that you have installed the `@teenageinterface/button` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/button
```

## Usage

Import the `Button` component module into your Angular application:

```typescript
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@teenageinterface/button";

@Component({
  selector: "pages-button",
  standalone: true,
  imports: [ButtonComponent],
  template: ` <tiButton>Button</tiButton> `,
})

export default class ButtonPage {}
```

### Example

```html
<tiButton
  [id]="'unique-button-id'"
  [disabled]="false"
  [loading]="true"
  [type]="'primary'"
>
  Click Me
</tiButton>
```

## Properties

| Property  | Type                                                                                  | Default    | Description                                                                 |
|-----------|---------------------------------------------------------------------------------------|------------|-----------------------------------------------------------------------------|
| `id`      | `string \| null`                                                                      | `null`     | The unique identifier for the button element.                              |
| `disabled`| `boolean`                                                                            | `false`    | Determines if the button is disabled.                                      |
| `loading` | `boolean`                                                                            | `false`    | Displays a loading spinner when set to `true`.                             |
| `type`    | `'default' \| 'primary' \| 'destructive' \| 'outline' \| 'ghost' \| 'link'` | `'default'`| Specifies the button's style variant.                                      |

## Types

### `type`

- `default`: Standard button with no special styling.
- `primary`: Emphasized button for primary actions.
- `destructive`: Button for destructive actions (e.g., delete).
- `outline`: Button with an outline style.
- `ghost`: Minimalist button without borders or background.
- `link`: Styled as a hyperlink.

## Accessibility

- Ensure the `id` property is set for proper identification when integrating with forms or testing frameworks.
- Use `disabled` to indicate non-interactive buttons to users and assistive technologies.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
