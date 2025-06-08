export function serialize(numbers: number[]): string {
  numbers.sort((a, b) => a - b); // Сортируем для последовательного кодирования

  let prev = numbers[0];
  const deltas: number[] = [prev];

  for (let i = 1; i < numbers.length; i++) {
    deltas.push(numbers[i] - prev);
    prev = numbers[i];
  }

  const serializedStr = deltas.map((n) => String.fromCharCode(n + 33)).join(''); // ASCII-смещение
  return btoa(serializedStr); // Base64 для ASCII-совместимости
}
