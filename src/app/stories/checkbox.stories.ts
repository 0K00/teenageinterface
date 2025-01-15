import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { CheckboxComponent } from '../../../libs/checkbox/src/lib/checkbox.component'
import readme from '../../../libs/checkbox/README.md';
import { userEvent, within } from '@storybook/test';

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
      description: "The unique identifier for the button element.",
    },
    checked: {
      description: "Displays a loading spinner when set to true.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    checkedChange: {
      description: "Determines if the button is disabled.",
      type: "function",
      control: false,
      action: 'checkedChange'
    },
    type: {
      description: "Specifies the button's style variant.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "string" }
      },
      options: ["default", "primary", "destructive", "outline", "ghost", "link"],
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
