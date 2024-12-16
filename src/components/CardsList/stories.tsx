import { Meta, StoryObj } from '@storybook/react';
import CardsList from '.';

import cardsMock from '../PaymentOptions/mock';

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Default: StoryObj = {};
