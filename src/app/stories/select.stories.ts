import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { SelectComponent } from '../../../libs/select/src/lib/select.component'
import readme from '../../../libs/select/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    options: {
      description: "The list of options available in the dropdown.",
      table: {
        defaultValue: { summary: "[]" },
        type: { summary: "{ value: string | number; title: string }[]"}
      },
      control: "object"
    },
    placeholder: {
      description: "The placeholder text when no option is selected.",
      table: {
        defaultValue: { summary: "Select an option" },
        type: { summary: "string" }
      }
    },
    multiSelect: {
      description: "Allows multiple selections when set to `true`.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    selectedIds: {
      description: "The IDs of the currently selected options.",
      table: {
        defaultValue: { summary: "[]" },
        type: { summary: "(string | number)[]" }
      },
      control: "object"
    },
    selectionChange: {
      description: "Emits an array of selected options when the selection changes.",
      type: "function",
      control: false,
      action: 'selectionChange',
      table: {
        type: { summary: "EventEmitter<{ value: string | number; title: string }[]>()" }
      }
    },
  }
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Single: Story = {
  args: {
    options: [{value: 1, title: 'Unlimited'}, {value: 10, title: '10 Minutes'}, {value: 60, title: '1 Hour'}, {value: 1440, title: '1 Day'}, {value: 10080, title: '1 Week'}],
    placeholder: "Choose an option",
    multiSelect: false,
    selectedIds: [1]
  },
  render: (args: any) => ({
    component: SelectComponent,
    props: {
      ...args,
      selectionChange: (e: boolean) => { action(`Value`)(e) }
    },
    template: `<tiSelect
          [options]="options"
          [placeholder]="placeholder"
          [selectedIds]="selectedIds"
          [multiSelect]="multiSelect"
          (selectionChange)="selectionChange($event)" />`
  })
};

export const Multi: Story = {
  args: {
    options: [{value: 1, title: 'Unlimited'}, {value: 10, title: '10 Minutes'}, {value: 60, title: '1 Hour'}, {value: 1440, title: '1 Day'}, {value: 10080, title: '1 Week'}],
    placeholder: "Choose an option",
    multiSelect: true,
    selectedIds: [1]
  },
  render: (args: any) => ({
    component: SelectComponent,
    props: {
      ...args,
      selectionChange: (e: boolean) => { action(`Value`)(e) }
    },
    template: `<tiSelect
          [options]="options"
          [placeholder]="placeholder"
          [selectedIds]="selectedIds"
          [multiSelect]="multiSelect"
          (selectionChange)="selectionChange($event)" />`
  })
};
