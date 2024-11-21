import { Meta, StoryObj } from '@storybook/react';
import GameCard from '.';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjseuV3GNDQTFisjeXr5ZJQJIM9CTmYxp53w&s',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
};

export const WithRibbon: StoryObj = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
};

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
