import { render, screen } from '@testing-library/react';

import FormSignIn from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    renderWithTheme(<FormSignIn />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);
    expect(
      screen.getByRole('link', { name: /forgot your password\?/i }),
    ).toBeInTheDocument();
  });
});
