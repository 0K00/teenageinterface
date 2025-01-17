import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { SwitchComponent } from '../../../libs/switch/src/lib/switch.component'
import readme from '../../../libs/switch/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    },
  },
  argTypes: {
    checked: {
      description: "Indicates whether the switch is toggled on or off.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    checkedChange: {
      description: "Emits the updated `checked` state when toggled.",
      type: "function",
      control: false,
      action: 'checkedChange',
      table: {
        type: { summary: "EventEmitter<boolean>()" }
      }
    }
  }
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
  render: (args: any) => ({
    component: SwitchComponent,
    props: {
      ...args,
      checkedChange: (e: boolean) => { action(`Checked`)(e) }
    },
    template: `<tiSwitch [(checked)]="checked" (checkedChange)="checkedChange($event)">Focus mode</tiSwitch>`
  })
};
