# Progress Component

The `Progress` component is a progress bar that allows you to display the progress of a task or process. You can customize its appearance based on different types and control whether the value is shown or not.

## Installation

Ensure that you have installed the `@teenageinterface/progress` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/progress
```

## Usage

Import the `ProgressComponent` into your Angular application:

```typescript
import { ProgressComponent } from '@teenageinterface/progress';

@Component({
  selector: 'app-progress-example',
  template: `
    <tiProgress [value]="progressValue" [showValue]="true" [type]="'primary'"></tiProgress>
  `,
})
export class ProgressExampleComponent {
  progressValue: number = 75;
}
```

### Example

```html
<tiProgress [value]="progressValue" [showValue]="true" [type]="'score'"></tiProgress>
```

## Properties

| Property     | Type                 | Default     | Description                                               |
|--------------|----------------------|-------------|-----------------------------------------------------------|
| `value`      | `number`             | `0`         | The progress value (between 0 and 100).                   |
| `showValue`  | `boolean`            | `true`      | If `true`, the progress value is displayed inside the bar. |
| `width`      | `string`             | `"300px"`   | The width of the progress bar.                            |
| `type`       | `"default" | "primary" | "score"` | `"default"` | The type of the progress bar, determining its appearance. |

## Types

The `type` property can be one of the following values:

- `default`: A neutral progress bar.
- `primary`: A blue progress bar.
- `score`: A progress bar that changes color based on the value, where:
  - Green if the value is greater than or equal to 70.
  - Yellow if the value is between 50 and 69.
  - Red if the value is less than 50.

## Documentation

For more information, visit the [official documentation]().

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).
