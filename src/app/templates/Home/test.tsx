import 'match-media-mock.js';

import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighligth: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByText(/follow us/i)).toBeInTheDocument();
  });

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />);
    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    // card game ( 5 sections com 4 cards cada = 5x4 = 20)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20);
    // highlight
    expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3);
  });
});
