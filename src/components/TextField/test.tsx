import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/utils/tests/helpers';
import TextField from '.';

import { Email } from '@styled-icons/material-outlined/Email';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />);
    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders without Label', () => {
    renderWithTheme(<TextField />);
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        name="TextField"
        disabled
      />,
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    const text = 'This is my new text';
    userEvent.type(input, text);
    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('Changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />,
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);
    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
        error="Error message"
      />,
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('Is accessible by tab', async () => {
  //   renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

  //   const user = userEvent.setup();
  //   const input = screen.getByRole('textbox');

  //   expect(document.body).toHaveFocus();

  //   screen.debug(); // Debug antes da tabulação
  //   await user.tab();
  //   screen.debug();
  //   expect(input).toHaveFocus();
  // });

  it('should render an icon version', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
      />,
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        name="TextField"
      />,
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    );
    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      'flex-direction': 'row-reverse',
    });
  });
});
