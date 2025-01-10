# Callout Component

The `Callout` component is part of the `@teenageinterface` Angular component library. It provides a styled container for displaying important messages with customizable icons, titles, and types.

## Installation

Ensure that you have installed the `@teenageinterface/callout` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/callout
```

## Usage

Import the `Callout` component module into your Angular application:

```typescript
import { CommonModule } from '@angular/common';
import { CalloutComponent } from '@teenageinterface/callout';

@Component({
  selector: 'pages-callout',
  standalone: true,
  imports: [CalloutComponent],
  template: `
    <tiCallout
      [id]="'callout-id'"
      [title]="'Success Message'"
      [icon]="'check_circled'"
      [type]="'success'"
    >
      Your operation was successful!
    </tiCallout>
  `,
})
export default class CalloutPage {}
```

### Example

```html
<tiCallout
  [title]="'Informative Message'"
  [icon]="'info-circle'"
  [type]="'informative'"
>
  This is an informative message.
</tiCallout>

<tiCallout
  [title]="'Warning Message'"
  [icon]="'warning'"
  [type]="'warn'"
>
  Be careful about proceeding further.
</tiCallout>
```

## Properties

| Property   | Type                                                             | Default      | Description                                                      |
|------------|------------------------------------------------------------------|--------------|------------------------------------------------------------------|
| `id`       | `string \| null`                                                | `null`       | Unique identifier for the callout.                              |
| `title`    | `string`                                                        | `""`         | Title of the callout.                                            |
| `icon`     | `string`                                                        | `""`         | Name of the icon to display in the callout.                     |
| `type`     | `'default' \| 'success' \| 'informative' \| 'warn' \| 'destructive'` | `'default'` | Determines the style of the callout.                            |

## Types

### `type`

- `default`: Neutral style for general use.
- `success`: Indicates successful outcomes or statuses.
- `informative`: Used for informational messages.
- `warn`: Alerts users to warnings or non-critical issues.
- `destructive`: Highlights destructive actions or critical errors.

## Styling

Each `type` applies additional color schemes:

- `default`: Neutral background and border with contrasting text.
- `success`: Green background and border with bold, positive text.
- `informative`: Light blue background and border with clear text.
- `warn`: Yellow background and border with attention-grabbing text.
- `destructive`: Red background and border for critical messages.

## Accessibility

- Provide meaningful `title` and `icon` properties for better understanding.
- Use `type` properties appropriately to ensure clear communication of the callout's purpose.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
