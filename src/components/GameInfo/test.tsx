import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

import GameInfo from '.';

const props = {
  title: 'My Game Title',
  description: 'My Game Description',
  price: '210.00',
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: 'My Game Title' }),
    ).toBeInTheDocument();

    expect(screen.getByText('My Game Description')).toBeInTheDocument();

    expect(screen.getByText('$210.00')).toBeInTheDocument();
  });

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /Wishlist/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add to cart/i }),
    ).toBeInTheDocument();
  });
});
