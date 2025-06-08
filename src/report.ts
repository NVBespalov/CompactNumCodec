export function printCompressionInfo(
  originalContent: string,
  compressedContent: string,
): void {
  const originalSize = Buffer.byteLength(originalContent, 'utf-8');
  const compressedSize = Buffer.byteLength(compressedContent, 'utf-8');
  const ratio = ((100 * compressedSize) / originalSize).toFixed(2);
  console.log(`Original size: ${originalSize} bytes`);
  console.log(`Compressed size: ${compressedSize} bytes`);
  console.log(`Compression ratio: ${ratio}%`);
}
