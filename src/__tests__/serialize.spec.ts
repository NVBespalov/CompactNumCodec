import { deserialize, serialize } from '../compression';

describe('Differential Encoding', () => {
  describe('Test case 1: Simple sequence', () => {
    it('should handle simple incremental sequence', () => {
      const test = [1, 2, 3, 4, 5, 6];
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);
      expect(decompressed).toEqual(test);
    });
  });

  describe('Test case 2: Repeated values', () => {
    it('should handle array with same values', () => {
      const test = Array(50).fill(100);
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);
      expect(decompressed).toEqual(test);
    });
  });

  describe('Test case 3: Large incremental sequence', () => {
    it('should handle large incremental sequence', () => {
      const test = Array.from({ length: 300 }, (_, i) => i + 1);
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);
      expect(decompressed).toEqual(test);
    });
  });

  describe('Test case 4: Large repeated values', () => {
    it('should handle large array with same values', () => {
      const test = Array(1000).fill(150);
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);
      expect(decompressed).toEqual(test);
    });
  });

  describe('Test case 5: Multiple segments', () => {
    it('should handle array with multiple segments of repeated values', () => {
      const test = Array(300)
        .fill(1)
        .concat(Array(300).fill(100))
        .concat(Array(300).fill(200));
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);
      expect(decompressed).toEqual(test);
    });
  });

  describe('Compression ratio', () => {
    it('Average compression ratio should be at least 50%', () => {
      const testCases = [
        [1, 2, 3, 4, 5, 6],
        Array(50).fill(100),
        Array.from({ length: 300 }, (_, i) => i + 1),
        Array(1000).fill(150),
        Array(300)
          .fill(1)
          .concat(Array(300).fill(100))
          .concat(Array(300).fill(200)),
      ];

      const totalCompressionRatio = testCases.reduce((total, test) => {
        const compressed = serialize(test);
        const originalSize = JSON.stringify(test).length;
        const compressedSize = compressed.length;
        return total + compressedSize / originalSize;
      }, 0);

      const averageCompression =
        (1 - totalCompressionRatio / testCases.length) * 100;
      console.log(
        `Average compression ratio: ${averageCompression.toFixed(2)}%`,
      );
      expect(averageCompression).toBeGreaterThanOrEqual(50);
    });
  });
});
