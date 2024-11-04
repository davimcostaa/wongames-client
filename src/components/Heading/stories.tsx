import { Meta } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default { component: Heading } as Meta;

export const Default = {
  render: (args: HeadingProps) => <Heading {...args} />,
  args: {
    children: 'Most Populars',
  },
};
