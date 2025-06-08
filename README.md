[![Build Status](https://github.com/NVBespalov/CompactNumCodec/workflows/CI/badge.svg)](https://github.com/NVBespalov/CompactNumCodec/actions)
[![Coverage Status](https://coveralls.io/repos/github/yourusername/number-sequence-compression/badge.svg?branch=main)](https://coveralls.io/github/yourusername/number-sequence-compression?branch=main)
[![npm version](https://badge.fury.io/js/number-sequence-compression.svg)](https://badge.fury.io/js/number-sequence-compression)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

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

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Testing

### Jest Setup

The project uses Jest with TypeScript support (ts-jest) for testing. The setup includes:

- Jest for test running and assertions
- ts-jest for TypeScript support
- @types/jest for TypeScript type definitions

### Test-Driven Development (TDD)

This project follows TDD methodology:

1. Write a failing test
2. Write minimal code to make the test pass
3. Refactor the code while keeping tests green

### Running Tests

To run the test suite:

```bash
npm run test
```

## Usage

Tests are organized following these conventions:

1. Place tests in `__tests__` directory or alongside source files
2. Use `.test.ts` or `.spec.ts` suffix for test files
3. Example folder structure:
   ```
   project-root/
   ├── src/
   │   └── compression.ts
   └── __tests__/
       └── compression.test.ts
   ```

### Example Test Implementation

A typical test file structure:

---

## CLI Usage

You can run the compression tool directly from the command line using the built-in CLI:

- `<inputFile>` — Path to a `.json` file containing an array of integers, e.g. `[1,2,3,...]`
- `<outputFile>` — Path where the compressed ASCII string will be written

**Example:**

**Input format:**  
The input file should be a valid JSON array with integers in the range `[1, 300]`, with up to 1000 elements.

After running, the CLI will display:

- Progress bar
- Handy info: original and compressed sizes, plus compression ratio.
