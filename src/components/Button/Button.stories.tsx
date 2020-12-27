import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from '@storybook/addon-knobs'

import { Button, LinkButton, PushButtonProps, PushButton } from '.';

export default {
  title: 'conmponents/Button',
  component: PushButton,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component: `リストです。<br />`,
      },
    },
  },
} as Meta;

export const baseButton = () => <Button label="button" onClick={() => { }} />

const Template: Story<PushButtonProps> = (args) => <PushButton {...args} />;

export const pushButton = Template.bind({});
pushButton.args = {
  color: "white",
  bgColor: "tomato",
  label: "ボタン",
  size: "middle",
  // 反映されない
  docs: {
    description: {
      story: `説明`,
    },
  },
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

// export const linkButton = () => <LinkButton label="link" path="" blank />