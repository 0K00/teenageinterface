# Switch Component

The `Switch` component is a customizable toggle switch for enabling or disabling a specific functionality. It can also be rendered as an icon-based switch for additional flexibility.

## Installation

Ensure that you have installed the `@teenageinterface/switch` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/switch
```

## Usage

Import the `SwitchComponent` into your Angular application:

```typescript
import { SwitchComponent } from '@teenageinterface/switch';

@Component({
  selector: 'app-switch-example',
  template: `
    <tiSwitch [(checked)]="isToggled" [asIcon]="true"></tiSwitch>
  `,
})
export class SwitchExampleComponent {
  isToggled: boolean = false;
}
```

### Example

```html
<!-- Default Switch -->
<tiSwitch [(checked)]="isSwitchOn"></tiSwitch>

<!-- Icon-Based Switch -->
<tiSwitch [(checked)]="isSwitchOn" [asIcon]="true"></tiSwitch>
```

## Properties

| Property       | Type      | Default   | Description                                         |
|----------------|-----------|-----------|-----------------------------------------------------|
| `checked`      | `boolean` | `false`   | Indicates whether the switch is toggled on or off. |
| `asIcon`       | `boolean` | `false`   | If `true`, renders the switch as an icon.          |

## Events

| Event           | Payload    | Description                                     |
|------------------|------------|-------------------------------------------------|
| `checkedChange`  | `boolean`  | Emits the updated `checked` state when toggled.|

## Features

### Two Modes of Rendering

1. **Default Switch**: Displays a standard toggle switch.
2. **Icon-Based Switch**: When `asIcon` is set to `true`, the switch is rendered as an icon for a more compact UI.

### Two-Way Binding

The `checked` property supports Angular's two-way data binding using the `[(checked)]` syntax for easier state management.

### Event Emission

The `checkedChange` event is emitted whenever the switch state changes, allowing you to handle the toggle event in your application.

## Example with Two-Way Binding

```html
<tiSwitch [(checked)]="isDarkMode"></tiSwitch>
<p>Dark mode is {{ isDarkMode ? 'enabled' : 'disabled' }}</p>
```

## Documentation

For more details, visit the [official documentation]().  

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).  

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).  
