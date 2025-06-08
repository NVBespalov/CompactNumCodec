/**
 * Serializes an array of numbers into a base64 encoded string by computing deltas
 * between consecutive numbers and converting them to characters.
 *
 * The function first sorts the input array in ascending order, then calculates
 * the differences between consecutive numbers (deltas). These deltas are converted
 * to characters by adding 33 to each delta and using the resulting value as a
 * character code. Finally, the string is encoded using base64.
 *
 * @param numbers - An array of numbers to be serialized
 * @returns A base64 encoded string representing the serialized numbers
 *
 * @example
 * ```TypeScript
 * serialize([1, 5, 2]) // Returns base64 string representing sorted [1, 2, 5]
 * serialize([10, 5, 8]) // Returns base64 string representing sorted [5, 8, 10]
 * ```
 */
export function serialize(numbers: number[]): string {
  numbers.sort((a, b) => a - b);

  let prev = numbers[0];
  const deltas: number[] = [prev];

  for (let i = 1; i < numbers.length; i++) {
    deltas.push(numbers[i] - prev);
    prev = numbers[i];
  }

  const serializedStr = deltas.map((n) => String.fromCharCode(n + 33)).join('');
  return btoa(serializedStr);
}
