import { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';
import items from './mock';

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: StoryObj = {};
