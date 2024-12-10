import Wishlist from '../templates/Wishlist';

import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
};

export default function WishlistPage() {
  return <Wishlist {...props} />;
}
