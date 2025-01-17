import { type Meta, type StoryObj } from '@storybook/angular';


import { AvatarComponent } from '../../../libs/avatar/src/lib/avatar.component'
import readme from '../../../libs/avatar/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    imageUrl: {
      description: "URL of the image to display. If invalid, the fallback is shown."
    },
    fallback: {
      description: "Text displayed as a fallback when the image fails to load.",
      table: {
        defaultValue: { summary: "A" },
        type: { summary: "string" }
      }
    },
    size: {
      description: "Controls the size of the avatar (small, medium, or large).",
      table: {
        defaultValue: { summary: "small" },
        type: { summary: "'small' | 'medium' | 'large'" }
      },
      options: ["small", "medium", "large"],
      control: { type: "select" }
    }
  }
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Small: Story = {
  args: {
    imageUrl: "",
    fallback: "Ti",
    size: "small"
  },
  render: (args: any) => ({
    component: AvatarComponent,
    props: args,
    template: `<tiAvatar [imageUrl]="imageUrl" [fallback]="fallback" [size]="size" />`
  })
};

export const Medium: Story = {
  args: {
    imageUrl: "",
    fallback: "Ti",
    size: "medium"
  },
  render: (args: any) => ({
    component: AvatarComponent,
    props: args,
    template: `<tiAvatar [imageUrl]="imageUrl" [fallback]="fallback" [size]="size" />`
  })
};

export const Large: Story = {
  args: {
    imageUrl: "",
    fallback: "Ti",
    size: "large"
  },
  render: (args: any) => ({
    component: AvatarComponent,
    props: args,
    template: `<tiAvatar [imageUrl]="imageUrl" [fallback]="fallback" [size]="size" />`
  })
};
