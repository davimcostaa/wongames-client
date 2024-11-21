import { fireEvent, render, screen } from '@testing-library/react';

import GameCard from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjseuV3GNDQTFisjeXr5ZJQJIM9CTmYxp53w&s',
  price: 'R$ 235,00',
};

const propsWithPromotionalPrice = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjseuV3GNDQTFisjeXr5ZJQJIM9CTmYxp53w&s',
  price: 'R$ 235,00',
  promotionalPrice: 'R$ 200,00',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    //verificar title
    expect(
      screen.getByRole('heading', { name: 'Population Zero' }),
    ).toBeInTheDocument();
    // verificar developer
    expect(
      screen.getByRole('heading', { name: 'Rockstar Games' }),
    ).toBeInTheDocument();
    //verificar imagem
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
    //verificar preco
    expect(
      screen.getByRole('heading', { name: 'R$ 235,00' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />);

    // preço não tenha line-through
    const headingElement = screen.getByRole('heading', { name: /R\$ 235,00/i });
    expect(headingElement).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );

    // preço tenha o background verde
    expect(headingElement).toHaveStyleRule('background-color', '#3CD3C1');
  });

  it('should render a line-through in price when promotion', () => {
    // renderiza o componente (com promotionalPrice) //
    renderWithTheme(<GameCard {...propsWithPromotionalPrice} />);

    const oldPrice = screen.getByRole('heading', { name: /R\$ 235,00/i });
    const promotionalPrice = screen.getByRole('heading', {
      name: /R\$ 200,00/i,
    });

    // preço tenha line-through (200 reais)

    expect(oldPrice).toHaveStyleRule('text-decoration', 'line-through');
    //preço promocional não vai ter
    expect(promotionalPrice).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );
  });

  it('should render a filled favorite icon when favorite is true', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} favorite />);

    // preço não tenha line-through
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();
    // renderiza o componente
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    // preço não tenha line-through
    expect(onFav).toHaveBeenCalled();
  });

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    );
    const ribbon = screen.getByText(/my ribbon/i);
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
    expect(ribbon).toBeInTheDocument();
  });
});
