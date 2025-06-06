# Integer Array Serialization Feature Specification

## Overview

Implementation of efficient serialization and deserialization functions for arrays of integers with custom compression
algorithm.

## Requirements

### Functional Requirements

1. Input data:
    - Array of integers (unordered set)
    - Numbers range: 1 to 300
    - Array length: up to 1000 elements
2. Output format:
    - ASCII-only string representation
    - Compression ratio target: at least 50% compared to basic serialization
3. Functions:
    - serialize(numbers: number[]): string
    - deserialize(encoded: string): number[]

### Technical Requirements

1. Implementation in TypeScript
2. Comprehensive test coverage
3. Lossless compression/decompression
4. Performance optimization for the given constraints

## Design Approach

### Compression Strategy

1. Run-length encoding for repeated numbers
2. Delta encoding for sequences
3. Base64-like encoding for number ranges
4. Bit-packing for small numbers

### Test Cases

1. Simple cases:
    - Small arrays (3-5 elements)
    - Single digit numbers
2. Random data:
    - 50 numbers
    - 100 numbers
    - 500 numbers
    - 1000 numbers
3. Edge cases:
    - All single-digit numbers
    - All two-digit numbers
    - All three-digit numbers
    - 900 numbers (300 numbers repeated 3 times)

## Performance Metrics

### Compression Ratio Measurement

1. Original size: numbers.length * (avg digits per number)
2. Compressed size: encoded string length
3. Compression ratio = (original - compressed) / original * 100%

### Acceptance Criteria

1. All test cases pass with correct serialization/deserialization
2. Average compression ratio ≥ 50%
3. All encoded strings contain only ASCII characters
4. Handling of all edge cases without errors
