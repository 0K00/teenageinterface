# Radio Component

The `Radio` component is a reusable radio button component that allows users to select one option from a group. It supports customizable styles and emits events when the selected option changes.

## Installation

Ensure that you have installed the `@teenageinterface/radio` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/radio
```

## Usage

Import the `RadioComponent` into your Angular application:

```typescript
import { RadioComponent } from '@teenageinterface/radio';

@Component({
  selector: 'app-radio-example',
  template: `
    <tiRadio 
      [item]="option" 
      [value]="selectedValue" 
      [type]="'primary'" 
      (valuesChange)="onValueChange($event)">
    </tiRadio>
  `,
})
export class RadioExampleComponent {
  option = { value: 'option1', name: 'Option 1', id: '1' };
  selectedValue: string = 'option1';

  onValueChange(event: { value: string, name: string, id: string }) {
    console.log('Selected option:', event);
  }
}
```

### Example

```html
<tiRadio 
  [item]="{ value: 'option2', name: 'Option 2', id: '2' }" 
  [value]="selectedValue" 
  [type]="'default'" 
  (valuesChange)="onRadioChange($event)">
</tiRadio>
```

## Properties

| Property      | Type                                      | Default               | Description                                                |
|---------------|------------------------------------------|-----------------------|------------------------------------------------------------|
| `item`        | `{ value: string, name: string, id: string }` | `{ value: "", name: "", id: "" }` | The option associated with the radio button.              |
| `value`       | `string`                                 | `""`                  | The currently selected value.                              |
| `type`        | `"default" | "primary"`                 | `"default"`           | The style type of the radio button (default or primary).   |

## Output Events

- `valuesChange`: Emits an object `{ value, name, id }` when the selected value changes.

## Types

The `type` property can be one of the following values:

- `default`: Standard radio with no special styling.
- `primary`: Emphasized radio for primary actions.


## Documentation

For more information, visit the [official documentation]().  

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).  

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).  
