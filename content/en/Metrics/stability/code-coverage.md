---
type: docs
weight: 10
title: Code Coverage
---

Measure of the amount of code that is executed by test code.

## What is the intended behavior?

Inform the team of risky or complicated portions of the code that are not sufficiently covered by tests. Care should be
taken not to confuse high coverage with good testing.

## How to improve it

- Write tests for code that SHOULD be covered but isn't.
- Refactor the application to improve testability.
- Remove unreachable code.

## How to game it

- Tests are written for code that receives no value from testing.
- Test code is written without assertions.
- Code is inappropriately excluded from test coverage reporting.

Example: The following test will result in 100% function, branch, and line coverage with no behavior tested.

```javascript
/* Returns the sum of two integers */
/* Returns NaN for non-integers */
function addWholeNumbers(a, b) {

  if (a % 1 === 0 && b % 1 === 0) {
    return a + b;
  } else {
    return NaN;
  }
}

it('Should add two whole numbers' () => {
  expect(addWholeNumbers(2, 2)).to.not.be.NaN;
  expect(addWholeNumbers(1.1, 0)).to.not.be.null;
})
```

The following will report the same code coverage results

```javascript
it('Should add two whole numbers' () => {
  addWholeNumbers(2, 2)
  addWholeNumbers(1.1, 0)
})
```

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Development Cycle Time](../development-cycle-time) increases with additional development time dedicated to
  chasing the coverage metric.
- [Defect rates](../defect-rate) can increase as poor quality tests are created to meet the coverage minimums.
