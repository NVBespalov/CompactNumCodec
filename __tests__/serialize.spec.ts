import { serialize, deserialize } from '../src/compression';
describe('Дифференциальное кодирование', () => {
  const testCases: number[][] = [
    [1, 2, 3, 4, 5, 6],
    Array(50).fill(100),
    Array.from({ length: 300 }, (_, i) => i + 1),
    Array(1000).fill(150),
    Array(300)
      .fill(1)
      .concat(Array(300).fill(100))
      .concat(Array(300).fill(200)),
  ];

  let totalCompressionRatio = 0;

  testCases.forEach((test, index) => {
    it(`Тест #${index + 1}: Сериализация и коэффициент сжатия`, () => {
      const compressed = serialize(test);
      const decompressed = deserialize(compressed);

      expect(decompressed).toEqual(test);

      const originalSize = JSON.stringify(test).length;
      const compressedSize = compressed.length;
      const compressionRatio = compressedSize / originalSize;

      totalCompressionRatio += compressionRatio;
    });
  });

  it('Средний коэффициент сжатия не менее 50%', () => {
    const averageCompression =
      (1 - totalCompressionRatio / testCases.length) * 100;
    console.log(
      `Средний коэффициент сжатия: ${averageCompression.toFixed(2)}%`,
    );
    expect(averageCompression).toBeGreaterThanOrEqual(50);
  });
});
