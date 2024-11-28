import { Meta, StoryObj } from '@storybook/react';
import FormSignUp from '.';

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
} as Meta;

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '300', margin: 'auto' }}>
      <FormSignUp {...args} />
    </div>
  ),
};
