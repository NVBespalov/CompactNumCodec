import * as fs from 'fs';
import { CompressionInputConfig, NumberParseResult } from './types';

const MAX_NUMBERS = 1000;
const MIN_NUMBER = 1;
const MAX_NUMBER = 300;

export function loadNumbers(config: CompressionInputConfig): NumberParseResult {
  try {
    const content = fs.readFileSync(config.inputFile, 'utf-8');
    const numbers = JSON.parse(content);
    if (!Array.isArray(numbers) || numbers.length > MAX_NUMBERS) {
      throw new Error(
        `Input JSON must be an array of up to ${MAX_NUMBERS} numbers.`,
      );
    }
    if (
      !numbers.every(
        (n) => Number.isInteger(n) && n >= MIN_NUMBER && n <= MAX_NUMBER,
      )
    ) {
      throw new Error(
        `All numbers must be integers from ${MIN_NUMBER} to ${MAX_NUMBER}.`,
      );
    }
    return { numbers, originalContent: content };
  } catch (e) {
    console.error('Input file loading error:', (e as Error).message);
    process.exit(1);
  }
}

export function writeOutput(outputFile: string, data: string): void {
  fs.writeFileSync(outputFile, data, 'utf-8');
  console.log(`Compression completed. Result written to ${outputFile}`);
}
