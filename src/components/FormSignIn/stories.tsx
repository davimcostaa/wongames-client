import { Meta, StoryObj } from '@storybook/react';
import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '300', margin: 'auto' }}>
      <FormSignIn {...args} />
    </div>
  ),
};
