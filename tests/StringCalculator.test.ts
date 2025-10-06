import { StringCalculator } from '../src/StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe('Basic functionality', () => {
    it('should return 0 for empty string', () => {
      expect(calculator.add('')).toBe(0);
    });

  });
});