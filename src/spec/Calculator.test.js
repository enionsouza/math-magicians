import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  it('Calculator snapshot test', () => {
    const { asFragment: calculator } = render(<Calculator />);

    expect(calculator()).toMatchSnapshot();
  });

  describe('Calculator interaction tests', () => {
    it('test interaction: 50.1 + 50 = 100.1, then press AC', () => {
      const { container } = render(<Calculator />);
      const display = container.querySelector('.display');

      ['5', '0', '.', '1'].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });

      expect(display.innerHTML).toEqual('50.1');

      ['+', '5', '0', '='].forEach((input) => {
        fireEvent.click(screen.getByText(input));
      });

      expect(display.innerHTML).toEqual('100.1');

      fireEvent.click(screen.getByText('AC'));

      expect(display.innerHTML).toEqual('0');
    });
  });
});
