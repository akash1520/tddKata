/**
 * String Calculator Class
 *
 * This class implements the String Calculator functionality as per the requirements.
 *
 * Requirements:
 * 1. Empty string returns 0
 */

export class StringCalculator {
  /**
   * Adds numbers from a string input
   * @param numbers - String containing comma-separated numbers
   * @returns Sum of the numbers
   */
  public add(numbers: string): number {
    // Handle custom delimiter format: //[delimiter]\n[numbers...]
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      const delimiter = parts[0]?.slice(2) || ','; // Remove '//' prefix, fallback to comma
      const numberString = parts[1] || '';
      return this.parseAndSum(numberString, delimiter);
    }

    // Default: split on comma and newline
    return this.parseAndSum(numbers, /[,\n]/);
  }

  private parseAndSum(numbers: string, delimiter: string | RegExp): number {
    if (numbers === '') {
      return 0;
    }

    const numberArray = numbers.split(delimiter).map(num => parseInt(num.trim(), 10));

    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }

    const validNumbers = numberArray.filter(num => num <= 1000);
    return validNumbers.reduce((sum, num) => sum + num, 0);
  }
}
