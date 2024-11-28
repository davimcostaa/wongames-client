import { render, screen } from '@testing-library/react';

import Form from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          <a href="#">My nice link</a>
        </FormLink>
      </FormWrapper>,
    );

    expect(container.parentElement).toMatchSnapshot();
  });
});
