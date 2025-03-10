import { type Meta, type StoryObj } from '@storybook/angular';


import { IconsComponent } from '../../../libs/icons/src/lib/icons.component'
import readme from '../../../libs/icons/README.md';
import { iconsList } from '../pages/components/icons/icons.preview';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<IconsComponent> = {
  title: 'Components/Icons',
  component: IconsComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    icon: {
      description: "The name of the icon to display.",
      table: {
        type: { summary: "string" }
      },
      options: iconsList,
      control: { type: "select" }
    },
    other: {
      description: "Additional classes or properties.",
    }
  }
};

export default meta;
type Story = StoryObj<IconsComponent>;

export const Default: Story = {
  args: {
    icon: "accessibility_circled",
    other: ""
  }
};
