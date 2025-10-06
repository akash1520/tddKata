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

    it('should return the number for single number input', () => {
      expect(calculator.add('1')).toBe(1);
    });
  });

  describe('Multiple numbers', () => {
    it('should handle any amount of numbers', () => {
      expect(calculator.add('1,2,3,4,5')).toBe(15);
    });
  });
});