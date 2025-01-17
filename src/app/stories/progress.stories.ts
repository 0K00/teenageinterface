import { type Meta, type StoryObj } from '@storybook/angular';


import { ProgressComponent } from '../../../libs/progress/src/lib/progress.component'
import readme from '../../../libs/progress/README.md';
import { max, min } from 'rxjs';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<ProgressComponent> = {
  title: 'Components/Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    value: {
      description: "The progress value (between 0 and 100).",
      control: { type: "number", min: 0, max: 100 },
      table: {
        defaultValue: { summary: "0" },
        type: { summary: "number" }
      }
    },
    showValue: {
      description: "If `true`, the progress value is displayed inside the bar.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    width: {
      description: "The width of the progress bar.",
      table: {
        defaultValue: { summary: "300px" },
        type: { summary: "string" }
      }
    },
    type: {
      description: "The type of the progress bar, determining its appearance.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "'default' | 'primary' | 'score'" }
      },
      options: ["default", "primary", "score"],
      control: { type: "select" }
    }
  }
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Default: Story = {
  args: {
    value: 50,
    showValue: true,
    width: "100%",
    type: "default"
  },
  render: (args: any) => ({
    component: ProgressComponent,
    props: args,
    template: `<tiProgress [value]="value" [showValue]="showValue" [width]="width" [type]="type" />`
  })
};

export const Primary: Story = {
  args: {
    value: 50,
    showValue: true,
    width: "100%",
    type: "primary"
  },
  render: (args: any) => ({
    component: ProgressComponent,
    props: args,
    template: `<tiProgress [value]="value" [showValue]="showValue" [width]="width" [type]="type" />`
  })
};

export const Score: Story = {
  args: {
    value: 50,
    showValue: true,
    width: "100%",
    type: "score"
  },
  render: (args: any) => ({
    component: ProgressComponent,
    props: args,
    template: `<tiProgress [value]="value" [showValue]="showValue" [width]="width" [type]="type" />`
  })
};
