/**
 * Deserializes a base64 encoded string back into an array of numbers.
 * The function decodes deltas between consecutive numbers and reconstructs
 * the original sequence.
 *
 * @param serializedStr - A base64 encoded string containing the serialized sequence
 * @returns An array of numbers representing the original sequence
 *
 * @example
 * ```TypeScript
 * const encoded = 'ABC'; // example encoded string
 * const numbers = deserialize(encoded); // returns decoded number sequence
 * ```
 */
export function deserialize(serializedStr: string): number[] {
  const decodedStr = atob(serializedStr);
  const deltas = Array.from(decodedStr).map((ch) => ch.charCodeAt(0) - 33);

  let numbers: number[] = [deltas[0]];
  for (let i = 1; i < deltas.length; i++) {
    numbers.push(numbers[i - 1] + deltas[i]);
  }

  return numbers;
}
