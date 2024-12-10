import { Meta, StoryObj } from '@storybook/react';
import PaymentOptions, { PaymentOptionsProps } from '.';

import cardsMock from './mock';

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Default: StoryObj<PaymentOptionsProps> = {};
