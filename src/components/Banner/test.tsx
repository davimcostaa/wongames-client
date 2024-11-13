import { render, screen } from '@testing-library/react';

import Banner from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const props = {
  img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2963650/capsule_616x353.jpg?t=1724748394',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);

    // verifique se o titulo está sendo renderizado
    expect(
      screen.getByRole('heading', { name: 'Defy death' }),
    ).toBeInTheDocument();
    // verifique se o subtitle está sendo renderizado
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands/i }),
    ).toBeInTheDocument();
    //verifique se a imagem está sendo renderizado
    expect(
      screen.getByRole('img', { name: /Defy death/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
