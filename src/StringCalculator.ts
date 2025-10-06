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

    const numberArray = numbers.split(/[\n,]/).map(num => parseInt(num.trim(), 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
