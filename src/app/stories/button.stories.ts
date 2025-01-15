import { type Meta, type StoryObj } from '@storybook/angular';


import { ButtonComponent } from '../../../libs/button/src/lib/button.component'
import readme from '../../../libs/button/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
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
      description: "The unique identifier for the button element.",
    },
    loading: {
      description: "Displays a loading spinner when set to true.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    disabled: {
      description: "Determines if the button is disabled.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Default</tiButton>`
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Primary</tiButton>`
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Destructive</tiButton>`
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Outline</tiButton>`
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Ghost</tiButton>`
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
    template: `<tiButton [id]="id" [type]="type" [loading]="loading" [disabled]="disabled">Link</tiButton>`
  })
};
