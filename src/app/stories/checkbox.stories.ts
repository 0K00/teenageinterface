import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { CheckboxComponent } from '../../../libs/checkbox/src/lib/checkbox.component'
import readme from '../../../libs/checkbox/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    },
  },
  argTypes: {
    id: {
      description: "An optional ID for the checkbox.",
    },
    checked: {
      description: "Sets the initial checked state of the checkbox.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    checkedChange: {
      description: "Emits when the checked state of the checkbox changes.",
      type: "function",
      control: false,
      action: 'checkedChange',
      table: {
        type: { summary: "EventEmitter<boolean>()" }
      }
    },
    type: {
      description: "Determines the style of the checkbox.",
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
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    id: "default",
    checked: false,
    type: "default"
  },
  render: (args: any) => ({
    component: CheckboxComponent,
    props: {
      ...args,
      checkedChange: (e: boolean) => { action(`Checked`)(e) }
    },
    template: `<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Default</tiCheckbox>`
  })
};

export const Primary: Story = {
  args: {
    id: "primary",
    checked: false,
    type: "primary"
  },
  render: (args: any) => ({
    component: CheckboxComponent,
    props: {
      ...args,
      checkedChange: (e: boolean) => { action(`Checked`)(e) }
    },
    template: `<tiCheckbox [id]="id" [type]="type" [(checked)]="checked" (checkedChange)="checkedChange($event)">Primary</tiCheckbox>`
  })
};
