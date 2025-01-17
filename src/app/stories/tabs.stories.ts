import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { TabsComponent } from '../../../libs/tabs/src/lib/tabs.component'
import { TabComponent } from '../../../libs/tabs/src/lib/tab.component'
import readme from '../../../libs/tabs/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<TabsComponent> = {
  title: 'Components/Tabs/Tabs',
  component: TabsComponent,
  subcomponents: { TabComponent },
  decorators: [
    moduleMetadata({
      imports: [TabComponent]
    })
  ],
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
      description: "Defines the tab style: `default`, `primary`, or `ghost`.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "'default' | 'primary' | 'ghost'" }
      },
      options: ["default", "primary", "ghost"],
      control: { type: "select" }
    },
  }
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  args: {
    type: "default",
  },
  render: (args: any) => ({
    component: TabsComponent,
    props: args,
    template: `<tiTabs [type]="type">
      <tiTab tabTitle="Tab 1" [active]="true">
        Content 1
      </tiTab>
      <tiTab tabTitle="Tab 2">
        Content 2
      </tiTab>
    </tiTabs>`
  })
};

export const Primary: Story = {
  args: {
    type: "primary"
  },
  render: (args: any) => ({
    component: TabsComponent,
    props: args,
    template: `<tiTabs [type]="type">
      <tiTab tabTitle="Tab 1" [active]="true">
        Content 1
      </tiTab>
      <tiTab tabTitle="Tab 2">
        Content 2
      </tiTab>
    </tiTabs>`
  })
};

export const Ghost: Story = {
  args: {
    type: "ghost"
  },
  render: (args: any) => ({
    component: TabsComponent,
    props: args,
    template: `<tiTabs [type]="type">
      <tiTab tabTitle="Tab 1" [active]="true">
        Content 1
      </tiTab>
      <tiTab tabTitle="Tab 2">
        Content 2
      </tiTab>
    </tiTabs>`
  })
};
