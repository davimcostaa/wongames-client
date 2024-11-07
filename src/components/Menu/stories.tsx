import { Meta, StoryObj } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Default: StoryObj<MenuProps> = {
  args: {
    username: 'davi',
  },
};

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
