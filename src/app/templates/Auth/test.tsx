import { render, screen } from '@testing-library/react';

import Auth from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>,
    );

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i,
      }),
    ).toBeInTheDocument();

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i,
      }),
    ).toBeInTheDocument();

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /auth title/i }),
    ).toBeInTheDocument();

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
