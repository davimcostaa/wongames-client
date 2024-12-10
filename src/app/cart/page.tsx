import Cart from '../templates/Cart';

import itemsMock from '@/components/CartList/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';
import cardsMock from '@/components/PaymentOptions/mock';

const props = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  items: itemsMock,
  total: 'R$ 230',
  cards: cardsMock,
};

export default function CartPage() {
  return <Cart {...props} />;
}
