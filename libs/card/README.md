# Card Component

The `Card` component is part of the `@teenageinterface` Angular component library. It provides a customizable card element that can dynamically display various sections, including a title, description, content, and footer.

## Installation

Ensure that you have installed the `@teenageinterface/card` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/card
```

## Usage

Import the `Card` component module into your Angular application:

```typescript
import { CommonModule } from '@angular/common';
import { CardComponent } from '@teenageinterface/card';

@Component({
  selector: 'pages-card',
  standalone: true,
  imports: [CardComponent],
  template: `
    <tiCard>
      <div #title>Card Title</div>
      <div #description>Card Description</div>
      <div #content>Card Content</div>
      <div #footer>Card Footer</div>
    </tiCard>
  `,
})
export default class CardPage {}
```

### Example

```html
<tiCard>
  <div #title>Card Title</div>
  <div #description>Card Description</div>
  <div #content>Card Content</div>
  <div #footer>Card Footer</div>
</tiCard>
```

## Properties

| Property      | Type    | Default  | Description                                                   |
|---------------|---------|----------|---------------------------------------------------------------|
| `title`   | - | -  | Determines where the title section is displayed.                 |
| `description` | - | - | Determines where the description section is displayed.           |
| `content` | - | -  | Determines where the content section is displayed.               |
| `footer`  | - | -  | Determines where the footer section is displayed.                |

## Styling

You can customize the card's layout by adjusting the following sections:

- `title`
- `description`
- `content`
- `footer`

## Accessibility

- Ensure meaningful content within the `title`, `description`, `content`, and `footer` sections for better understanding and accessibility.
- Use `showTitle`, `showDescription`, `showContent`, and `showFooter` to dynamically control which parts of the card are displayed.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
