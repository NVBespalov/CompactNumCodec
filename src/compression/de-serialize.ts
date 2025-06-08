export function deserialize(serializedStr: string): number[] {
  const decodedStr = atob(serializedStr);
  const deltas = Array.from(decodedStr).map((ch) => ch.charCodeAt(0) - 33);

  let numbers: number[] = [deltas[0]];
  for (let i = 1; i < deltas.length; i++) {
    numbers.push(numbers[i - 1] + deltas[i]);
  }

  return numbers;
}
