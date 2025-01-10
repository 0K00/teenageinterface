# Carousel Component

The `Carousel` component allows you to create a sliding carousel with configurable options such as auto-sliding, controls, and dot indicators.

## Installation

Ensure that you have installed the `@teenageinterface/carousel` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/carousel
```

## Usage

Import the `Carousel` component module into your Angular application:

```typescript
import { CarouselComponent, SlideComponent } from '@teenageinterface/carousel';

@Component({
  selector: 'pages-carousel',
  template: `
    <tiCarousel [autoSlide]="true" [autoSlideTime]="3000">
      <tiSlide>Slide 1 Content</tiSlide>
      <tiSlide>Slide 2 Content</tiSlide>
      <tiSlide>Slide 3 Content</tiSlide>
    </tiCarousel>
  `,
})
export default class CarouselPage {}
```

### Example

```html
<tiCarousel [autoSlide]="true" [autoSlideTime]="3000">
  <tiSlide>Slide 1 Content</tiSlide>
  <tiSlide>Slide 2 Content</tiSlide>
  <tiSlide>Slide 3 Content</tiSlide>
</tiCarousel>
```

## Properties

| Property            | Type            | Default        | Description                                                            |
|---------------------|-----------------|----------------|------------------------------------------------------------------------|
| `autoSlideTime`     | `number`        | `3000`         | Time in milliseconds between automatic slide transitions.              |
| `autoSlide`         | `boolean`       | `true`         | Enables or disables auto-sliding.                                      |
| `dot`               | `boolean`       | `true`         | Controls whether dots (indicators) are displayed.                      |
| `controls`          | `boolean`       | `true`         | Controls whether the next/prev slide controls are displayed.           |
| `width`             | `number`        | `320`          | Sets the width of the carousel.                                        |
| `infinite`          | `boolean`       | `true`         | Enables infinite scrolling of slides.                                  |
| `type`              | `"classic" | "modern"` | `"modern"` | Sets the type of carousel design. Can be either "classic" or "modern". |

## Methods

- `nextSlide()`: Moves to the next slide.
- `prevSlide()`: Moves to the previous slide.
- `goToSlide(index: number)`: Goes to a specific slide by index.
- `pauseAutoSlide()`: Pauses the auto-slide feature.
- `resumeAutoSlide()`: Resumes the auto-slide feature.

## Events

- `onDragStart(event: MouseEvent)`: Triggered when the drag starts.
- `onDrag(event: MouseEvent)`: Triggered during the drag event.
- `onDragEnd(event: MouseEvent)`: Triggered when the drag ends.

## Documentation

For more information, visit the [official documentation](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
