import { screen } from '@testing-library/react';

import TextContent from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`,
};

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />);

    expect(
      screen.getByRole('heading', { name: /description/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i }),
    ).not.toBeInTheDocument();
  });

  it('should render the right color', () => {
    renderWithTheme(<TextContent {...props} />);

    const wrapper = screen.getByRole('heading', {
      name: /description/i,
    }).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width:  768px)',
    });
  });
});
