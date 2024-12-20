import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    //input associado
    expect(screen.getByLabelText('checkbox label')).toBeInTheDocument();

    // label a partir do texto
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check');
  });

  it('should not render label if label prop not passed', () => {
    renderWithTheme(<Checkbox />);
    expect(screen.queryByLabelText('checkbox label')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );
    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
