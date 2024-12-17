/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:51
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 22:46:29
 */
import { type Meta, type StoryObj } from '@storybook/angular';

import { CalloutComponent } from './callout.component';

const meta: Meta<CalloutComponent> = {
  title: 'Primitives/Callout',
  component: CalloutComponent,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: "Unique identifier for the Callout.",
    },
    type: {
      description: "Defines the style variant of the Callout.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "string" }
      },
      options: ["default", "success", "informative", "warn", "destructive"],
      control: { type: "select" }
    }
  }
};

export default meta;
type Story = StoryObj<CalloutComponent>;

export const Default: Story = {
  args: {
    id: "default",
    type: "default",
    title: "Default",
    icon: "O"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<aCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a neutral action.</aCallout>`
  })
};

export const Success: Story = {
  args: {
    id: "success",
    type: "success",
    title: "Success",
    icon: "V"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<aCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a successful or positive action.</aCallout>`
  })
};

export const Informative: Story = {
  args: {
    id: "informative",
    type: "informative",
    title: "Head's up",
    icon: "I"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<aCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a neutral informative change or action</aCallout>`
  })
};

export const Warn: Story = {
  args: {
    id: "warn",
    type: "warn",
    title: "You sure?",
    icon: "!"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<aCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates neutral information to ald in understanding.</aCallout>`
  })
};

export const Destructive: Story = {
  args: {
    id: "destructive",
    type: "destructive",
    title: "Unexpected Error",
    icon: "/!/"
  },
  render: (args: any) => ({
    component: CalloutComponent,
    props: args,
    template: `<aCallout [id]="id" [type]="type" [title]="title" [icon]="icon">Indicates a warning that might need attention.</aCallout>`
  })
};

