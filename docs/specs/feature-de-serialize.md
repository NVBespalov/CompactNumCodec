# Number Sequence Compression - Deserialization Specification

## Task Description

- Input: A set (unordered array) of integers ranging from 1 to 300
- Maximum sequence length: 1000 numbers
- Goal: Create compact serialization/deserialization functions with at least 50% compression ratio
- Requirements: Serialized string must contain only ASCII characters

## Deserialization Approach

1. Input Processing
    - Accept compressed ASCII string
    - Validate input string format and characters
    - Split into metadata and data sections

2. Technical Implementation
    - Parse run-length encoding sections
    - Handle range-based compression
    - Convert base64-encoded chunks back to numbers
    - Reconstruct original number set

3. Performance Considerations
    - Time complexity: O(n) where n is the compressed string length
    - Space complexity: O(m) where m is the original sequence length
    - Efficient string parsing without multiple passes

## Test Cases

1. Simple Cases
    - Single digit numbers: [1,2,3,4,5]
    - Double digit numbers: [10,20,30,40,50]
    - Triple digit numbers: [100,200,300]

2. Random Sequences
    - 50 numbers
    - 100 numbers
    - 500 numbers
    - 1000 numbers

3. Edge Cases
    - All single-digit numbers (1-9)
    - All double-digit numbers (10-99)
    - All triple-digit numbers (100-300)
    - Repeated numbers (300 occurrences of 3 different numbers)

4. Verification Requirements
    - Original sequence
    - Compressed string
    - Compression ratio
    - Successful round-trip verification
