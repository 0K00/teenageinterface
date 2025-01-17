import { type Meta, type StoryObj } from '@storybook/angular';


import { BadgeComponent } from '../../../libs/badge/src/lib/badge.component'
import readme from '../../../libs/badge/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    type: {
      description: "Determines the style of the badge.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "'default' | 'primary' | 'success' | 'informative' | 'warn' | 'destructive'" }
      },
      options: ["default", "primary", "success", "informative", "warn", "destructive"],
      control: { type: "select" }
    }
  }
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    type: "default"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Default</tiBadge>`
  })
};

export const Primary: Story = {
  args: {
    type: "primary"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Primary</tiBadge>`
  })
};

export const Success: Story = {
  args: {
    type: "success"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Success</tiBadge>`
  })
};

export const Informative: Story = {
  args: {
    type: "informative"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Informative</tiBadge>`
  })
};


export const Warning: Story = {
  args: {
    type: "warn"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Warning</tiBadge>`
  })
};

export const Destructive: Story = {
  args: {
    type: "destructive"
  },
  render: (args: any) => ({
    component: BadgeComponent,
    props: args,
    template: `<tiBadge [type]="type">Destructive</tiBadge>`
  })
};
