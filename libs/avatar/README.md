# Avatar Component

The `Avatar` component is part of the `@teenageinterface` Angular component library. It provides a customizable avatar component with support for images, fallback initials, and size variations.

## Installation

Ensure that you have installed the `@teenageinterface/avatar` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/avatar
```

## Usage

Import the `Avatar` component module into your Angular application:

```typescript
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@teenageinterface/avatar';

@Component({
  selector: 'pages-avatar',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <tiAvatar
      [imageUrl]="'https://example.com/image.jpg'"
      [fallback]="'AB'"
      [size]="'large'"
    ></tiAvatar>
  `,
})
export default class AvatarPage {}
```

### Example

```html
<tiAvatar
  [imageUrl]="'https://example.com/profile.jpg'"
  [fallback]="'JD'"
  [size]="'medium'"
></tiAvatar>

<tiAvatar [fallback]="'No Image'" [size]="'small'"></tiAvatar>
```

## Properties

| Property     | Type                           | Default   | Description                                                                 |
|--------------|--------------------------------|-----------|-----------------------------------------------------------------------------|
| `imageUrl`   | `string \| null`              | `null`    | URL of the image to display. If invalid, the fallback is shown.            |
| `fallback`   | `string`                      | `'A'`     | Text displayed as a fallback when the image fails to load.                 |
| `size`       | `'small' \| 'medium' \| 'large'` | `'medium'`| Controls the size of the avatar (small, medium, or large).                 |

## Size Classes

### `size`

- `small`: Small avatar (`24x24px`) with smaller fallback text.
- `medium`: Default avatar size (`48x48px`).
- `large`: Larger avatar (`80x80px`) with bold fallback text.

## Accessibility

- Use `fallback` to ensure accessibility when an image cannot be displayed.
- Choose the `size` property based on the application's visual hierarchy.

## Methods

### `handleImageError()`

Triggered when the image fails to load, switching to the fallback view.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
