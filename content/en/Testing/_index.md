---
title: "Designing Tests"
linkTitle: "Designing Tests"

type: docs
weight: 20
menu:
  main:
    weight: 20
---

{{% pageinfo %}}
Test patterns, frustratingly, have no common definitions. Ask 2 people about an "integration test" and you will get three answers. The following are definitions some of us use so that we can speak to each other with a common language.

{{% /pageinfo %}}

There are common patterns to show how much of each kind of test is generally recommended. The most used are the [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) and the [Test Trophy](https://kentcdodds.com/blog/write-tests). Both are trying to communicate the same thing: design a test suite that is fast, gives you confidence, and is not more expensive to maintain than the value it brings.

## Our Testing Principles

- Balance cost and confidence
- Move failure detection as close to the developer as possible
- Increase the speed of running tests
  - Aim for CI to take less than 10 minutes. Full test suite should take less than an hour.

## Recommended Test Pattern

Most of the tests are [integration](/en/testing/integration) tests and emphasize maximizing deterministic test coverage in process with the development cycle, so developers can find errors sooner. [E2E](/en/testing/e2e) & [functional](/en/testing/functional) tests should primarily focus on happy/critical path and tests that absolutely require a browser/app.

When executing continuous delivery, test code is a first class citizen that requires as much design and maintenance as production code. Flakey tests undermine confidence and should be terminated with extreme prejudice.

### Testing Matrix

| Feature                  | Static | Unit |  Integration   |   Functional   | Visual Regression |    Contract    | E2E |
| ------------------------ | :----: | :--: | :------------: | :------------: | :---------------: | :------------: | :-: |
| Deterministic            |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| PR Verify, Trunk Verify |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Break Build              |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Test Doubles             |  Yes   | Yes  |      Yes       |      Yes       |        Yes        | See Definition | No  |
| Network Access           |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |
| File System Access       |   No   |  No  |       No       |       No       |        No         |       No       | Yes |
| Database                 |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |

### Testing Anti-pattern

"Ice cream cone testing" is the **anti-pattern** where the most expensive, fragile, [non-deterministic](/en/docs/glossary#non-deterministic-test) tests are prioritized over faster and less expensive [deterministic](/en/docs/glossary#deterministic-test) tests because it "feels" right.

[Google Test Blog: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

<img src="/images/testing-images/ice-cream-cones-software-testing.png" width="50%" />

### Testing Best Practices

General testing best practices are documented [here](/en/testing/best-practices).  Best practices specific to test types are documented within each test type page.

## Test Pattern Resources

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing Pyramids & Ice-Cream Cones](https://alisterscott.github.io/TestingPyramids.html)
- [Test Trophy](https://kentcdodds.com/blog/write-tests)
