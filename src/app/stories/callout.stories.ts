import { type Meta, type StoryObj } from '@storybook/angular';

import { CalloutComponent } from '../../../libs/callout/src/lib/callout.component'
import readme from '../../../libs/callout/README.md';

import { iconsList } from '../pages/components/icons/icons.preview';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<CalloutComponent> = {
  title: 'Components/Callout',
  component: CalloutComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    id: {
      description: "Unique identifier for the Callout.",
    },
    title: {
      description: "Title of the callout."
    },
    type: {
      description: "Defines the style variant of the Callout.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "'default' | 'primary' | 'success' | 'informative' | 'warn' | 'destructive'" }
      },
      options: ["default", "success", "informative", "warn", "destructive"],
      control: { type: "select" }
    },
    icon: {
      description: "Name of the icon to display in the callout.",
      table: {
        type: { summary: "string" }
      },
      options: iconsList,
      control: { type: "select" }
    },
  }
};

export default meta;
type Story = StoryObj<CalloutComponent>;

export const Default: Story = {
  args: {
    id: "default",
    type: "default",
    title: "Default",
    icon: "person"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<tiCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a neutral action.</tiCallout>`
  })
};

export const Success: Story = {
  args: {
    id: "success",
    type: "success",
    title: "Success",
    icon: "check_circled"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<tiCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a successful or positive action.</tiCallout>`
  })
};

export const Informative: Story = {
  args: {
    id: "informative",
    type: "informative",
    title: "Head's up",
    icon: "information_circled_2"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<tiCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a neutral informative change or action</tiCallout>`
  })
};

export const Warn: Story = {
  args: {
    id: "warn",
    type: "warn",
    title: "You sure?",
    icon: "information_circled_2_1"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<tiCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates neutral information to ald in understanding.</tiCallout>`
  })
};

export const Destructive: Story = {
  args: {
    id: "destructive",
    type: "destructive",
    title: "Unexpected Error",
    icon: "warning"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<tiCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a warning that might need attention.</tiCallout>`
  })
};

