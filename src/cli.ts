import * as process from 'process';
import { serialize } from './compression';
import { loadNumbers, writeOutput } from './file-utils';
import { showProgressBar } from './progress';
import { printCompressionInfo } from './report';
import { CompressionInputConfig } from './types';

function printUsage(): void {
  console.log('Usage: npx ts-node src/cli.ts <inputFile> <outputFile>');
  console.log('Input should be a JSON array of integers, e.g. [1,2,3,...]');
}

const [, , inputFile, outputFile] = process.argv;
if (!inputFile || !outputFile) {
  printUsage();
  process.exit(1);
}

const config: CompressionInputConfig = { inputFile, outputFile };
const { numbers, originalContent } = loadNumbers(config);

showProgressBar(numbers.length);
const compressed = serialize(numbers);

writeOutput(outputFile, compressed);
printCompressionInfo(originalContent, compressed);
