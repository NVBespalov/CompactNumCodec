import { deserialize, serialize } from '../src/compression';

describe('serialize', () => {
  test('simple short sequence', () => {
    const input = [1, 2, 3, 4, 5];
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('random sequence of 50 numbers', () => {
    const input = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 1000),
    );
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
    const decoded = deserialize(result.serialized);
    decoded.forEach((num) => {
      expect(input.includes(num));
    });
  });

  test('random sequence of 100 numbers', () => {
    const input = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 1000),
    );
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('random sequence of 500 numbers', () => {
    const input = Array.from({ length: 500 }, () =>
      Math.floor(Math.random() * 1000),
    );
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('random sequence of 1000 numbers', () => {
    const input = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000),
    );
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('all single-digit numbers', () => {
    const input = Array.from({ length: 9 }, (_, i) => i + 1);
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('all two-digit numbers', () => {
    const input = Array.from({ length: 90 }, (_, i) => i + 10);
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('all three-digit numbers', () => {
    const input = Array.from({ length: 900 }, (_, i) => i + 100);
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });

  test('repeated numbers (300 of each digit length)', () => {
    const input = [
      ...Array(300).fill(5),
      ...Array(300).fill(42),
      ...Array(300).fill(123),
    ];
    const result = serialize(input);
    expect(result).toBeDefined();
    expect(result.compressionRatio).toBeGreaterThan(0);
  });
});
