import { Meta, StoryObj } from '@storybook/react';
import GameDetails, { GameDetailsProps } from '.';
import mockGame from './mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date',
    },
    platforms: {
      control: {
        type: 'multi-select',
        options: ['windows', 'mac', 'linux'],
      },
    },
  },
} as Meta;

export const Default: StoryObj<GameDetailsProps> = {};
