# Badge Component

The `Badge` component is part of the `@teenageinterface` Angular component library. It provides a versatile badge element with support for different types, ensuring visual consistency and customization.

## Installation

Ensure that you have installed the `@teenageinterface/badge` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/badge
```

## Usage

Import the `Badge` component module into your Angular application:

```typescript
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@teenageinterface/badge';

@Component({
  selector: 'pages-badge',
  standalone: true,
  imports: [BadgeComponent],
  template: `
    <tiBadge [type]="'success'">Success Badge</tiBadge>
  `,
})
export default class BadgePage {}
```

### Example

```html
<tiBadge [type]="'primary'">Primary Badge</tiBadge>
<tiBadge [type]="'warn'">Warning Badge</tiBadge>
<tiBadge [type]="'destructive'">Destructive Badge</tiBadge>
```

## Properties

| Property  | Type                                                             | Default    | Description                                   |
|-----------|------------------------------------------------------------------|------------|-----------------------------------------------|
| `type`    | `'default' \| 'primary' \| 'success' \| 'informative' \| 'warn' \| 'destructive'` | `'default'` | Determines the style of the badge.            |

## Types

### `type`

- `default`: Neutral style for general use.
- `primary`: Emphasized badge for primary actions or statuses.
- `success`: Indicates successful outcomes or statuses.
- `informative`: Used for informational messages or indicators.
- `warn`: Alerts users to warnings or non-critical issues.
- `destructive`: Highlights destructive actions or critical errors.

## Styling

Each `type` applies additional color schemes:

- `default`: Neutral background with contrasting text.
- `primary`: Blue background with white text.
- `success`: Green background with dark text for better visibility.
- `informative`: Light blue background with darker text.
- `warn`: Yellow background with bold text.
- `destructive`: Red background with bold, attention-grabbing text.

## Accessibility

- Use `type` properties appropriately to ensure clear communication of the badge's purpose.
- Ensure badges are visually distinct and provide sufficient contrast for readability.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
