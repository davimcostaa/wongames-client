import { Meta, StoryObj } from '@storybook/react';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop: StoryObj = () => (
  <MediaMatch $greatherThan="medium">Only on Desktop</MediaMatch>
);
export const Mobile: StoryObj = () => (
  <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
