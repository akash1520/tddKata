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
    if (numbers === '') {
      return 0;
    }

    // Check for custom delimiter format: //[delimiter]\n[numbers...]
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      if (parts.length >= 2 && parts[0] && parts[1]) {
        const delimiter = parts[0].slice(2); // Remove '//' prefix
        const numberString = parts[1];
        const numberArray = numberString.split(delimiter).map(num => parseInt(num.trim(), 10));
        return numberArray.reduce((sum, num) => sum + num, 0);
      }
    }

    // Default: split on comma and newline
    const numberArray = numbers.split(/[,\n]/).map(num => parseInt(num.trim(), 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
