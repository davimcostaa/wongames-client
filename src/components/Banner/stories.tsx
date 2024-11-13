import { Meta, StoryObj } from '@storybook/react';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2963650/capsule_616x353.jpg?t=1724748394',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryObj<BannerProps> = {};
