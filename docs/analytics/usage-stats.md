# Sequence Compression Algorithm

## Overview

This document describes an efficient algorithm for compressing and decompressing sequences of integers. The
implementation focuses on achieving optimal compression ratios while maintaining data integrity.

## Technical Requirements

- Input: Array of integers (unordered)
- Number range: 1 to 300
- Maximum sequence length: 1000 elements
- Output format: ASCII-encoded string
- Compression target: >50% ratio compared to basic serialization
- Implementation: TypeScript

## Test Cases

### Simple Tests

- Input: [1, 2, 3]
- Compressed: "123"
- Compression ratio: 33.3%

### Random Sequences

1. 50 numbers test

   - Input: Random sequence of 50 numbers
   - Expected compression: >50%

2. 100 numbers test

   - Input: Random sequence of 100 numbers
   - Expected compression: >50%

3. 500 numbers test

   - Input: Random sequence of 500 numbers
   - Expected compression: >50%

4. 1000 numbers test
   - Input: Random sequence of 1000 numbers
   - Expected compression: >50%

### Edge Cases

1. Single-digit numbers

   - Input: Sequence of numbers 1-9
   - Expected compression: >50%

2. Double-digit numbers

   - Input: Sequence of numbers 10-99
   - Expected compression: >50%

3. Triple-digit numbers

   - Input: Sequence of numbers 100-300
   - Expected compression: >50%

4. Mixed length (900 numbers)
   - Input: Each number repeated 3 times (1-300)
   - Expected compression: >50%

## Implementation Notes

The compression algorithm utilizes efficient encoding techniques to achieve the target compression ratio while
maintaining ASCII compatibility.
