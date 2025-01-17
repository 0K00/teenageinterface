import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { RadioComponent } from '../../../libs/radio/src/lib/radio.component'
import readme from '../../../libs/radio/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<RadioComponent> = {
  title: 'Components/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    },
  },
  argTypes: {
    item: {
      description: "The option associated with the radio button.",
      table: {
        defaultValue: { summary: "{ value: '', name: '', id: '' }" },
        type: { summary: "{ value: string, name: string, id: string }"}
      },
      control: "object"
    },
    value: {
      description: "The currently selected value.",
    },
    valuesChange: {
      description: "Emits an object `{ value, name, id }` when the selected value changes.",
      type: "function",
      control: false,
      action: 'valuesChange',
      table: {
        type: { summary: "EventEmitter<{ value: string, name: string, id: string }>()" }
      }
    },
    type: {
      description: "The style type of the radio button (default or primary).",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "'default' | 'primary'" }
      },
      options: ["default", "primary"],
      control: { type: "select" }
    }
  }
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Default: Story = {
  args: {
    item: { value: 'default', name: 'radio', id: 'default' },
    value: "",
    type: "default"
  },
  render: (args: any) => ({
    component: RadioComponent,
    props: {
      ...args,
      valuesChange: (e: boolean) => { action(`Value`)(e) }
    },
    template: `<tiRadio [type]="type" [item]="item" [value]="value" (valuesChange)="valuesChange($event)">Default</tiRadio>`
  })
};

export const Primary: Story = {
  args: {
    item: { value: 'primary', name: 'radio', id: 'primary' },
    value: "",
    type: "primary"
  },
  render: (args: any) => ({
    component: RadioComponent,
    props: {
      ...args,
      valuesChange: (e: boolean) => { action(`Value`)(e) }
    },
    template: `<tiRadio [type]="type" [item]="item" [value]="value" (valuesChange)="valuesChange($event)">Primary</tiRadio>`
  })
};
