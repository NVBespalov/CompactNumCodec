# Number Sequence Compression

A TypeScript implementation of a compact serialization/deserialization algorithm for number sequences.

## Task Requirements

- Input: Array of integers (unordered) in range [1, 300]
- Array size: up to 1000 elements
- Goal: Achieve at least 50% compression ratio compared to simple serialization
- Output: ASCII-only string representation
- Implementation includes comprehensive test suite

## Implementation Details

- Language: TypeScript
- Compression algorithm: Custom implementation
- ASCII-safe serialization
- Unit tests for various scenarios

## Test Cases

The implementation includes the following test scenarios:

1. Simple short sequences
2. Random sequences:
    - 50 numbers
    - 100 numbers
    - 500 numbers
    - 1000 numbers
3. Edge cases:
    - All single-digit numbers
    - All two-digit numbers
    - All three-digit numbers
    - 900 numbers (300 unique numbers, each repeated 3 times)

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
