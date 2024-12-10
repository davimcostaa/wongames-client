import { screen } from '@testing-library/react';

import GameItem from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

const props = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqu6JeoBx5wZ0weKRQRaoo_W_Ew2Mh1wrgg&s',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
};

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /red dead redemption 2/i }),
    ).toBeInTheDocument();

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
  });

  it('should render the item with download link', () => {
    const downloadLink = 'https://link';

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` }),
    ).toHaveAttribute('href', downloadLink);
  });

  it('should render the payment info', () => {
    const downloadLink = 'https://link';
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32',
    };

    renderWithTheme(
      <GameItem
        {...props}
        downloadLink={downloadLink}
        paymentInfo={paymentInfo}
      />,
    );

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img,
    );

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
