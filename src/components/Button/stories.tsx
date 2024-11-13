import { Meta, StoryObj } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import Button from '.';

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
  component: Button,
} as Meta;

export const Default: StoryObj = {};

Default.args = {
  children: 'Buy Now',
};

export const WithIcon: StoryObj = {};

WithIcon.args = {
  children: 'Buy Now',
  icon: <AddShoppingCart />,
};

export const asLink: StoryObj = {};
asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: 'http://google.com',
};
