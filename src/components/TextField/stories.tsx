import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';
import { StoryObj } from '@storybook/react';
import { Email } from 'styled-icons/material-outlined';
export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;
export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: StoryObj = {};

WithIcon.args = {
  icon: <Email />,
};
