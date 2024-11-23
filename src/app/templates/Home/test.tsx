import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
  });
});