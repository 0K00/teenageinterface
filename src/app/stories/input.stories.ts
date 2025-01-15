import { type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { InputComponent } from '../../../libs/input/src/lib/input.component'
import readme from '../../../libs/input/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
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
      description: "The ID of the input field.",
    },
    value: {
      description: "The value of the input field."
    },
    placeholder: {
      description: "Placeholder text for the input field."
    },
    required: {
      description: "If `true`, the input will be required.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    disabled: {
      description: "If `true`, the input field will be disabled.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    serverError: {
      description: "If `true`, the input will visually indicate a server error.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    },
    type: {
      description: "The input type. Supports text, password, email, file, and bigFile.",
      table: {
        defaultValue: { summary: "text" },
        type: { summary: "string" }
      },
      options: ["text", "password", "email", "file", "bigFile"],
      control: { type: "select" }
    },
    valueChange: {
      description: "Emitted when the value of the input field changes.",
      type: "function",
      control: false,
      action: 'valueChange'
    },
    onEnter: {
      description: "Emitted when the enter key is pressed in the input field.",
      type: "function",
      control: false,
      action: 'onEnter'
    }
  }
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    id: "text",
    disabled: false,
    serverError: false,
    value: "",
    placeholder: "Search",
    required: false,
    type: "password"
  },
  render: (args: any) => ({
    component: InputComponent,
    props: {
      ...args,
      valueChange: (e: string) => { action(`Value (onChange)`)(e) },
      onEnter: (e: string) => { action(`Value (onEnter)`)(e) }
    },
    template: `<tiInput [type]="type" [id]="id" [disabled]="disabled" [serverError]="serverError" [value]="value" [placeholder]="placeholder" [required]="required" (valueChange)="valueChange($event)" (onEnter)="onEnter($event)" />`
  })
};
