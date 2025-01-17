import { type Meta, type StoryObj } from '@storybook/angular';


import { SeparatorComponent } from '../../../libs/separator/src/lib/separator.component'
import readme from '../../../libs/separator/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<SeparatorComponent> = {
  title: 'Components/Separator',
  component: SeparatorComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    orientation: {
      description: "Defines the orientation of the separator (vertical or horizontal).",
      table: {
        defaultValue: { summary: "horizontal" },
        type: { summary: "'vertical' | 'horizontal'" }
      },
      options: ["vertical", "horizontal"],
      control: { type: "select" }
    },
    size: {
      description: "Sets the length of the separator. Supports values like `50%`, `100px`, etc.",
      table: {
        defaultValue: { summary: "100%" },
        type: { summary: "string" }
      }
    }
  }
};

export default meta;
type Story = StoryObj<SeparatorComponent>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    size: "100%"
  },
  render: (args: any) => ({
    component: SeparatorComponent,
    props: args,
    template: `<tiSeparator [orientation]="orientation" [size]="size" />`
  })
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    size: "64px"
  },
  render: (args: any) => ({
    component: SeparatorComponent,
    props: args,
    template: `<tiSeparator [orientation]="orientation" [size]="size" />`
  })
};
