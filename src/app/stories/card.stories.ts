import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';


import { CardComponent } from '../../../libs/card/src/lib/card.component'

import { InputComponent } from '../../../libs/input/src/lib/input.component'
import { SeparatorComponent } from '../../../libs/separator/src/lib/separator.component'
import { ButtonComponent } from '../../../libs/button/src/lib/button.component'

import readme from '../../../libs/card/README.md';

function removeFirstTitle(content: string): string {
  if (!content) return '';
  return content.replace(/^(.*)$/m, '');
}

const updatedReadme = removeFirstTitle(readme);

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [InputComponent, SeparatorComponent, ButtonComponent]
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
  render: () => ({
    template: `<div class="w-[512px]">
            <tiCard>
              <div title>
                Upload image
              </div>
              <div description>
                Change your profile picture
              </div>
              <div content>
                <tiInput type="bigFile" placeholder="JPG, PNG, or GIF - Max file size 2MB" />
                <div class="flex w-full mt-6 gap-4 text-xs text-neutral-600 justify-between items-center">
                <tiSeparator orientation="horizontal" /> OR <tiSeparator orientation="horizontal" />
                </div>
              </div>
              <div footer>
                <div class="flex gap-2">
                  <tiInput type="text" placeholder="Add from URL" />
                  <tiButton type="primary">Add</tiButton>
                </div>
              </div>
            </tiCard>
          </div>`
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: (args: any) => ({
    component: CardComponent,
    props: args,
    template: `<div class="w-[512px]">
            <tiCard>
              <div title>
                Upload image
              </div>
              <div description>
                Change your profile picture
              </div>
              <div content>
                <tiInput type="bigFile" placeholder="JPG, PNG, or GIF - Max file size 2MB" />
                <div class="flex w-full mt-6 gap-4 text-xs text-neutral-600 justify-between items-center">
                <tiSeparator orientation="horizontal" /> OR <tiSeparator orientation="horizontal" />
                </div>
              </div>
              <div footer>
                <div class="flex gap-2">
                  <tiInput type="text" placeholder="Add from URL" />
                  <tiButton type="primary">Add</tiButton>
                </div>
              </div>
            </tiCard>
          </div>`
  })
};
