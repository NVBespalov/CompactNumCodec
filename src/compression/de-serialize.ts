/**
 * Deserializes a compressed string representation back into an array of numbers.
 * The input string consists of two parts separated by '|':
 * 1. Base64-encoded bit array representing the presence of numbers
 * 2. Optional frequency data in format "number:frequency;number:frequency"
 *
 * @param input - A compressed string containing base64 data and optional frequency information
 * @returns An array of numbers reconstructed from the compressed data
 *
 * @example
 * // Returns [1, 1, 1, 5, 5]
 * deserialize("AQ==|1:3;5:2")
 */
export function deserialize(input: string): number[] {
  const [base64Data, freqData] = input.split('|');
  const bitArray = new Uint8Array(Buffer.from(base64Data, 'base64'));
  const frequencies = new Map<number, number>();

  if (freqData) {
    freqData.split(';').forEach((pair) => {
      const [num, freq] = pair.split(':').map(Number);
      frequencies.set(num, freq);
    });
  }

  const result: number[] = [];
  for (let byte = 0; byte < bitArray.length; byte++) {
    for (let bit = 0; bit < 8; bit++) {
      if (bitArray[byte] & (1 << bit)) {
        const num = byte * 8 + bit + 1;
        const freq = frequencies.get(num) || 1;
        for (let i = 0; i < freq; i++) {
          result.push(num);
        }
      }
    }
  }

  return result;
}
