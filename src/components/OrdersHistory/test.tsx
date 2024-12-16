import { screen } from '@testing-library/react';

import OrdersHistory from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

import mock from './mock';

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>;
  },
}));

describe('<OrdersHistory />', () => {
  it('should render the gameitems', () => {
    renderWithTheme(<OrdersHistory items={mock} />);

    expect(
      screen.getByRole('heading', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
  });

  it('should render the empty state', () => {
    renderWithTheme(<OrdersHistory />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
