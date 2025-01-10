# Select Component

The `Select` component is a customizable dropdown component that allows single or multiple selections. It supports dynamic options, keyboard navigation, and adaptive dropdown positioning.

## Installation

Ensure that you have installed the `@teenageinterface/select` library in your Angular project. If not, you can add it using:

```bash
npm install @teenageinterface/select
```

## Usage

Import the `SelectComponent` into your Angular application:

```typescript
import { SelectComponent } from '@teenageinterface/select';

@Component({
  selector: 'app-select-example',
  template: `
    <tiSelect 
      [options]="options" 
      [placeholder]="'Choose an option'" 
      [multiSelect]="true" 
      [selectedIds]="selectedValues" 
      (selectionChange)="onSelectionChange($event)">
    </tiSelect>
  `,
})
export class SelectExampleComponent {
  options = [
    { value: 1, title: 'Option 1' },
    { value: 2, title: 'Option 2' },
    { value: 3, title: 'Option 3' },
  ];
  selectedValues: (string | number)[] = [1];

  onSelectionChange(selected: { value: string | number; title: string }[]) {
    console.log('Selected options:', selected);
  }
}
```

### Example

```html
<tiSelect 
  [options]="options" 
  [placeholder]="'Select an option'" 
  [multiSelect]="false" 
  [selectedIds]="selectedValues" 
  (selectionChange)="handleSelectionChange($event)">
</tiSelect>
```

## Properties

| Property       | Type                                         | Default                | Description                                                               |
|----------------|---------------------------------------------|------------------------|---------------------------------------------------------------------------|
| `options`      | `{ value: string \| number; title: string }[]` | `[]`                   | The list of options available in the dropdown.                           |
| `placeholder`  | `string`                                    | `'Select an option'`   | The placeholder text when no option is selected.                         |
| `multiSelect`  | `boolean`                                   | `false`                | Allows multiple selections when set to `true`.                           |
| `selectedIds`  | `(string \| number)[]`                      | `[]`                   | The IDs of the currently selected options.                               |

## Events

| Event              | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `selectionChange`  | Emits an array of selected options when the selection changes.             |

## Features

### Adaptive Dropdown Positioning

The dropdown adjusts its position (`top` or `bottom`) based on the available space in the viewport.

### Keyboard Navigation

- **ArrowDown**: Moves to the next option.
- **ArrowUp**: Moves to the previous option.
- **Enter**: Selects the highlighted option.
- **Escape**: Closes the dropdown.

## Documentation

For more information, visit the [official documentation]().  

## Repository

The source code is available on [GitHub](https://github.com/0K00/teenageinterface).  

## License

This project is licensed under the [MIT License](https://github.com/0K00/teenageinterface/blob/main/LICENSE.MD).  
