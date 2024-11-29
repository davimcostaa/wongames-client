import { Meta, StoryObj } from '@storybook/react';
import Showcase from '.';

import highlightMock from '@/components/Highlight/mock';
import gamesMock from '@/components/GameCardSlider/mock';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        {' '}
        <Story />{' '}
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutTitle: StoryObj = {};

WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock,
};

export const WithoutHighlight: StoryObj = {};

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
};

export const WithoutGames: StoryObj = {};

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
};
