import { render, screen } from '@testing-library/react';

import { Grid } from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
