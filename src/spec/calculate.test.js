import calculate from '../logic/calculate';

describe('"calculate" function', () => {
  const defaultCalc = {
    total: null,
    next: null,
    operation: null,
  };

  const withOperandsCalc = (operation) => ({
    total: '100',
    next: '10',
    operation,
  });

  const afterOperation = (operation) => ({
    total: '100',
    next: null,
    operation,
  });

  const firstArg = (operation) => ({
    total: null,
    next: '10',
    operation,
  });

  describe('for buttonName = `AC`', () => {
    it('returns default object for default obj argument', () => {
      expect(calculate(defaultCalc, 'AC')).toEqual(defaultCalc);
    });
    it('returns default object for argument with values', () => {
      expect(calculate(withOperandsCalc('+'), 'AC')).toEqual(defaultCalc);
    });
  });

  describe('for buttonName being a digit', () => {
    it('writes on next when starting from default state', () => {
      const nextState = { ...defaultCalc, next: '3' };
      expect(nextState).toEqual(calculate(defaultCalc, '3'));
    });
    it('writes to current number in next after an operation button', () => {
      const startingState = firstArg(null);
      const nextState = { ...startingState, next: '100' };
      expect(nextState).toEqual(calculate(startingState, '0'));
    });
    it('appends to current number in next when writing a number', () => {
      const startingState = afterOperation('+');
      const nextState = { ...startingState, next: '1' };
      expect(nextState).toEqual(calculate(startingState, '1'));
    });
  });

  // . +/-
  describe('for buttonName being a `.`', () => {
    it('inserts a decimal period on next when writing a number', () => {
      const startingState = firstArg(null);
      const nextState = { ...startingState, next: startingState.next + '.' };
      expect(nextState).toEqual(calculate(startingState, '.'));
    });
    it('inserts a decimal period when writing a number', () => {
      const startingState = firstArg(null);
      const nextState = { ...startingState, next: startingState.next + '.' };
      expect(nextState).toEqual(calculate(startingState, '.'));
    });
    it.skip('inserts a decimal period when writing a number', () => {
      expect(nextState).toEqual(calculate(startingState, '.'));
    });
  });
});
