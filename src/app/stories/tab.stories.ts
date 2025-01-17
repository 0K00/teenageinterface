import { type Meta, type StoryObj } from '@storybook/angular';

import { TabComponent } from '../../../libs/tabs/src/lib/tab.component'
import readme from '../../../libs/tabs/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<TabComponent> = {
  title: 'Components/Tabs/Tab',
  component: TabComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: updatedReadme
      }
    }
  },
  argTypes: {
    tabTitle: {
      description: "Title displayed on the tab header.",
    },
    active: {
      description: "Indicates whether the tab is active.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" }
      }
    }
  }
};

export default meta;
type Story = StoryObj<TabComponent>;

export const Active: Story = {
  args: {
    tabTitle: "Tab 1",
    active: true
  },
  render: (args: any) => ({
    component: TabComponent,
    props: args,
    template: `<tiTab [tabTitle]="tabTitle" [active]="active">Content 1</tiTab>`
  })
};

export const Unactive: Story = {
  args: {
    tabTitle: "Tab 1",
    active: false
  },
  render: (args: any) => ({
    component: TabComponent,
    props: args,
    template: `<tiTab [tabTitle]="tabTitle" [active]="active">Content 1</tiTab>`
  })
};
