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

  describe('New line support', () => {
    it('should handle new lines between numbers', () => {
      expect(calculator.add('1\n2,3')).toBe(6);
    });
  });

  describe('Custom delimiters', () => {
    it('should support custom delimiter', () => {
      expect(calculator.add('//;\n1;2')).toBe(3);
    });

    it('should fallback to comma when no delimiter specified', () => {
      expect(calculator.add('//\n1,2')).toBe(3);
    });

    it('should handle empty number string after custom delimiter', () => {
      expect(calculator.add('//;\n')).toBe(0);
    });
  });

  describe('Negative numbers', () => {
    it('should throw exception for single negative number', () => {
      expect(() => calculator.add('-1')).toThrow('negative numbers not allowed -1');
    });

    it('should throw exception for multiple negative numbers', () => {
      expect(() => calculator.add('-1,2,-3')).toThrow('negative numbers not allowed -1,-3');
    });
  });

  describe('Large numbers', () => {
    it('should ignore numbers bigger than 1000', () => {
      expect(calculator.add('2,1001')).toBe(2);
    });

    it('should include numbers equal to 1000', () => {
      expect(calculator.add('2,1000')).toBe(1002);
    });

    it('should ignore multiple large numbers', () => {
      expect(calculator.add('1,1001,2,2000,3')).toBe(6);
    });
  });

});