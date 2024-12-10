import { Divider } from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Divider />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
