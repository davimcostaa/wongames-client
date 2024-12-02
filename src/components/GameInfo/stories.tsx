import { Meta, StoryObj } from '@storybook/react';
import GameInfo from '.';
import mockGame from './mock';

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: mockGame,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: StoryObj = {};
