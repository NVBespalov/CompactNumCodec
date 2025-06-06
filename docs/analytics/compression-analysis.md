# Integer Set Compression Analysis

## Problem Statement

Implement efficient serialization and deserialization functions for an unordered set of integers.

## Requirements

### Input Constraints

- Integer values range: 1 to 300
- Set size: up to 1000 elements
- Element order is not significant
- Serialized output must use ASCII characters only

### Performance Goals

- Achieve minimum 50% compression ratio compared to basic serialization
- Maintain data integrity during compression/decompression cycle

## Implementation

The solution should provide:

1. Serialization function: array of integers → ASCII string
2. Deserialization function: ASCII string → array of integers

## Test Cases

### Basic Tests

- Short sequences with few elements
- Random sequences:
    - 50 elements
    - 100 elements
    - 500 elements
    - 1000 elements

### Edge Cases

- All single-digit numbers (1-9)
- All double-digit numbers (10-99)
- All triple-digit numbers (100-300)
- Uniform distribution (3 occurrences of each number, ~900 total)

### Test Documentation

Each test case should include:

- Original set content
- Compressed string representation
- Compression ratio analysis
