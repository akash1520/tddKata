# String Calculator TDD Kata

## Requirements

1. Empty string returns 0: `""` → `0`
2. Single number returns the number: `"1"` → `1`
3. Two numbers separated by comma: `"1,5"` → `6`
4. Handle any amount of numbers: `"1,2,3,4,5"` → `15`
5. Handle new lines between numbers: `"1\n2,3"` → `6`
6. Support different delimiters: `"//;\n1;2"` → `3`
7. Throw exception for negative numbers: `"-1"` → `Error: negative numbers not allowed -1`

## Tech Stack

- Node.js, TypeScript, Jest, ESLint

## Setup

```bash
npm install
npm test
```

## Scripts

- `npm test` - Run tests
- `npm run test:watch` - Watch mode
- `npm run test:coverage` - Coverage report
- `npm run build` - Compile TypeScript
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── StringCalculator.ts
└── index.ts
tests/
└── StringCalculator.test.ts
```