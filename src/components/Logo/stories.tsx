import { Meta, StoryObj } from '@storybook/react';
import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
} as Meta<typeof Logo>;

export const Default: StoryObj<LogoProps> = {
  args: {
    color: 'white',
    size: "large",
    $hideOnMobile: false,
  },
};
