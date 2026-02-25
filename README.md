# LeetCode Note

This repository contains my personal notes and implementations for LeetCode problems.

To respect copyright, problem statements are not included — only my own solutions and analysis.

## Tech Stack

- Language: TypeScript
- Test Runner: Vitest
- Git Hook: Husky (runs tests on pre-commit)
- CI: GitHub Actions
- Package Manager: pnpm

## Structure

```
/src
  /0001-two-sum
    ├─ two-sum.test.ts
    /solutions
      ├─ one-pass-hash-map.ts
      ├─ two-loop-brute-force.ts
      ├─ two-pass-hash-map.ts
```

Each problem folder may contain:
- Multiple solution approaches
- Unit tests
- Time and space complexity analysis

## What I Focus On

Rather than solving as many problems as possible, I focus on:
- Readable and maintainable code
- Clear time and space complexity analysis
- Testability
- Documenting the thinking process
