/**
 * @Author: 0K0 <contact@oko.app>
 * @Date:   14-12-2024 20:56:51
 * @Last Modified by:   0K0 <contact@oko.app>
 * @Last Modified time: 14-12-2024 20:58:58
 */
import type { Meta, StoryObj } from '@storybook/angular';

import { BtnComponent } from '../app/btn/btn.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BtnComponent> = {
  title: 'Example/Btn',
  component: BtnComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<BtnComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
};

