import 'match-media-mock.js';

import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mockItems from './mock';

import Gallery from '.';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' }),
    ).toHaveAttribute('src', mockItems[0].src);

    expect(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 2' }),
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' }),
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 2' }),
    );

    const img = await screen.findByRole('img', { name: 'Gallery Image 2' });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' }),
    );

    fireEvent.click(screen.getByRole('button', { name: 'close modal' }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('should handle close modal when esc is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />,
    );

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 1' }),
    );

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
