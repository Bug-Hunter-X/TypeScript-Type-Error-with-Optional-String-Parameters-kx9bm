# TypeScript Type Error with Optional String Parameters

This repository demonstrates a common TypeScript type error that occurs when using optional parameters with the string type and comparing to `undefined`.

## Bug

The issue arises when checking for an optional parameter using `undefined`.  TypeScript doesn't automatically narrow the type to `string` after checking against `undefined`.  This leads to a type error, even though the logic is correct.

## Solution

The solution involves using type guards or type assertions to explicitly tell TypeScript that the variable is a `string` after the check.

## Reproduction

1. Clone the repository.
2. Run `tsc bug.ts` to see the type error.
3. Run `tsc bugSolution.ts` to see the correct compilation.

This example highlights the importance of careful type handling and understanding TypeScript's type narrowing behavior when dealing with optional parameters.