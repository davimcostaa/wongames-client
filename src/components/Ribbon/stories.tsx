import { Meta, StoryObj } from '@storybook/react';
import Ribbon from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        background: '#888',
      }}
    >
      <Ribbon {...args} />
    </div>
  ),
};
