/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:51
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 22:46:29
 */
import { type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Primitives/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: "Unique identifier for the button.",
    },
    loading: {
      description: "Indicates if the button is in a loading state.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    disabled: {
      description: "Disables the button, preventing user interaction.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    type: {
      description: "Defines the style variant of the button.",
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
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    id: "default",
    loading: false,
    disabled: false,
    type: "default"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};

export const Primary: Story = {
  args: {
    id: "primary",
    loading: false,
    disabled: false,
    type: "primary"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};

export const Destructive: Story = {
  args: {
    id: "destructive",
    loading: false,
    disabled: false,
    type: "destructive"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};

export const Outline: Story = {
  args: {
    id: "outline",
    loading: false,
    disabled: false,
    type: "outline"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};


export const Ghost: Story = {
  args: {
    id: "ghost",
    loading: false,
    disabled: false,
    type: "ghost"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};

export const Link: Story = {
  args: {
    id: "link",
    loading: false,
    disabled: false,
    type: "link"
  },
  render: (args: any) => ({
    component: ButtonComponent,
    props: args,
    template: `<aButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled"><span class="inline-flex items-center justify-center" >0</span>Default</aButton>`
  })
};
