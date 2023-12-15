---
type: docs
weight: 10
title: Code Coverage

tags:
  - metrics
  - stability
---

A measure of the amount of code that is executed by test code.

## What is the intended behavior?

Inform the team of risky or complicated portions of the code that are not sufficiently covered by tests. Care should be
taken not to confuse high coverage with good testing.

## How to improve it

- Write tests for code that SHOULD be covered but isn't
- Refactor the application to improve testability
- Remove unreachable code
- Delete pointless tests
- Refactor tests to test behavior rather than implementation details

## How to game it

- Tests are written for code that receives no value from testing.
- Test code is written without assertions.
- Tests are written with meaningless assertions.

Example: The following test will result in 100% function, branch, and line coverage with no behavior tested.

```javascript
/* Return the sum of two integers */
/* Return null if one of that parms is not an integer */
function addWholeNumbers(a, b) {

  if (a % 1 === 0 && b % 1 === 0) {
    return a + b; 
  } else {
    return null;
  }
}

it('Should not return null of both numbers are integers' () => {
  /*
  * This call will return 4, which is not null. 
  * Pass 
  */
  expect(addWholeNumbers(2, 2)).not.toBe(null);
  
  /*
  * This returns "22" because JS sees a string will helpfully concatenate them.
  * Pass
  */
  expect(addWholeNumbers(2, '2')).not.toBe(null);

  /* 
  * The function will never return the JS `NaN` constant 
  * Pass
  */  
  expect(addWholeNumbers(1.1, 0)).not.toBe(NaN);
})
```

The following is an example of test code with no assertions. This will also produce 100% code coverage reporting but does not test anything because there are no assertions to cause the test to fail.

```javascript
it('Should not return null if both numbers are integers' () => {
  addWholeNumbers(2, 2);
  addWholeNumbers(2, '2');
  addWholeNumbers(1.1, 0);
})
```

## Guardrail Metrics

Test coverage should never be used as a goal or an indicator of application health. Measure outcomes. If testing is poor, the following metrics will show poor results.

- [Defect Rates](/docs/metrics/defect-rate) will increase as poor-quality tests are created to meet coverage targets that do not reliably catch defects.
- [Development Cycle Time](/docs/metrics/development-cycle-time) will increase as more emphasis is placed on improper testing methods (manual functional testing, testing teams, etc.) to overcome the lack of reliable tests.
