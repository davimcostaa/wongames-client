import { screen } from '@testing-library/react';

import Profile from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

jest.mock('next/router', () => ({
  usePathname: jest.fn(() => '/profile/me'),
}));

jest.mock('@/components/Heading', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Heading">{children}</div>;
  },
}));

jest.mock('@/components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu" />;
  },
}));

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsumm</Profile>);
    expect(screen.getByText('Lorem Ipsumm')).toBeInTheDocument();
    expect(screen.getByText('My profile')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
  });
});
