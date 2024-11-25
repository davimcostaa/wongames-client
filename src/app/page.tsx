import Home from './templates/Home';

import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

export default function Index() {
  const mocks = {
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
  return <Home {...mocks} />;
}
