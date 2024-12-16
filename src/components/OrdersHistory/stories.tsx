import { Meta, StoryObj } from '@storybook/react';
import OrdersHistory from '.';

import mock from './mock';

export default {
  title: 'Profile/OrdersHistory',
  component: OrdersHistory,
  args: {
    items: mock,
  },
} as Meta;

export const Default: StoryObj = {};
