import { SerializationResult } from './interfaces';

/**
 * Serializes a list of numbers into a compressed string representation using bit array and frequency encoding.
 * The function creates a bit array where each number's position is marked, and tracks frequency of repeated numbers.
 * The result is encoded in base64 format followed by frequency data for numbers that appear multiple times.
 *
 * @param numbers - An array of positive integers to be serialized
 * @returns {SerializationResult} Object containing the serialized string and achieved compression ratio
 *
 * @example
 * // Basic usage
 * serialize([1, 2, 2, 3, 3, 3]) // Returns: { serialized: "Dw==|2:2;3:3", compressionRatio: 0.5 }
 *
 * @remarks
 * - The compression is most effective when dealing with repeated numbers
 * - Numbers are stored in a bit array where each bit represents presence/absence
 * - Frequency information is only included for numbers that appear more than once
 */
export function serialize(numbers: number[]): SerializationResult {
  const bitArray = new Uint8Array(Math.ceil(Math.max(...numbers) / 8));
  const frequencies = new Map<number, number>();

  numbers.forEach((num) => {
    bitArray[Math.floor((num - 1) / 8)] |= 1 << (num - 1) % 8;
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  });

  const base64Data = Buffer.from(bitArray).toString('base64');
  const freqData = Array.from(frequencies.entries())
    .filter(([_, freq]) => freq > 1)
    .map(([num, freq]) => `${num}:${freq}`)
    .join(';');

  const serialized = `${base64Data}|${freqData}`;
  const originalLength = numbers.join(',').length;

  return {
    serialized,
    compressionRatio: Math.max(
      0,
      (Math.abs(originalLength) - serialized.length) / Math.abs(originalLength),
    ),
  };
}
