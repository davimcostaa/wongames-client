import { Meta, StoryObj } from '@storybook/react';
import GameItem, { GameItemProps } from '.';

export default {
  title: 'GameItem',
  component: GameItem,
} as Meta;

export const Default: StoryObj<GameItemProps> = {};

Default.args = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqu6JeoBx5wZ0weKRQRaoo_W_Ew2Mh1wrgg&s',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
};

export const WithPayment: StoryObj<GameItemProps> = {};

WithPayment.args = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqu6JeoBx5wZ0weKRQRaoo_W_Ew2Mh1wrgg&s',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  downloadLink: 'https://wongames.com/game/download/',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32',
  },
};
