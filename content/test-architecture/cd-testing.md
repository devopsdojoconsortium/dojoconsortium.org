---
published: true
title: Designing Tests for CI/CD
menus:
  - Test Architecture
navPriority: 1
tags:
  - test
  - cd
---

The purpose of a well designed test suite is to move the detection of any defect as close as possible to the source of the defect.
Optimally, the individual developer who created the defect will be quickly informed so that they can learn how to prevent that
defect in the future, thus reducing future defects at the source. Good test architecture is critical to achieve that goal.

> Goal: Bug Repellent
>
> Yes, tests find bugs—but that really isn't what automated testing is about. Automated testing tries to prevent bugs from being
> introduced. Think of automated tests as "bug repellent" that keeps nasty little bugs from crawling back into our software after
> we have made sure it doesn't contain any bugs. Wherever we have regression tests, we won't have bugs because the tests will point
> the bugs out before we even check in our code. (We are running all the tests before every check-in, aren't we?

Excerpt From: Gerard Meszaros. "xUnit Test Patterns: Refactoring Test Code

- [Mindset](#mindset)
- [Testing Principles](#testing-principles)
- [Recommended Test Pattern](#recommended-test-pattern)
  - [Testing Matrix](#testing-matrix)
  - [Testing Anti-pattern](#testing-anti-pattern)
- [Test Pattern Resources](#test-pattern-resources)
- [Tests that should run in the pipeline](#tests-that-should-run-in-the-pipeline)

## Mindset

- Our primary role is to keep the pipeline quality signal trustworthy and improve its ability to to make the application prove it is
  production worthy. If we don't trust a test, we remove it from the deployment flow until it is stable.
- We want tests to detect a defect as close to the source as possible. While not always possible, our goal is to inform the developer who created the defect so they can learn and prevent repetition.
- We are testing everything about the artifact, not only the code. To do that, we use the same artifact in every environment and
  always test every artifact the same way. No branch deploys.

## Testing Principles

- Balance cost and confidence
- Move failure detection as close to the developer as possible
- Increase the speed of running tests
  - Aim for CI to take less than 10 minutes. Full test suite should take less than an hour.

## Recommended Test Pattern

Trophy tessting emphasizes integration testing to maximize deterministic test coverage in process with the development cycle, so developers can find errors sooner. [E2E](./e2e) tests should primarily focus on happy/critical path and tests that absolutely require a browser/app.

When executing continuous delivery, test code is a first class citizen that requires as much design and maintenance as
production code. Flakey tests undermine confidence and should be terminated with extreme prejudice.

### Testing Matrix

| Feature                 | Static | Unit |  Integration   |   Functional   | Visual Regression |    Contract    | E2E |
| ----------------------- | :----: | :--: | :------------: | :------------: | :---------------: | :------------: | :-: |
| Deterministic           |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| PR Verify, Trunk Verify |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Break Build             |  Yes   | Yes  |      Yes       |      Yes       |        Yes        |       No       | No  |
| Test Doubles            |  Yes   | Yes  |      Yes       |      Yes       |        Yes        | See Definition | No  |
| Network Access          |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |
| File System Access      |   No   |  No  |       No       |       No       |        No         |       No       | Yes |
| Database                |   No   |  No  | localhost only | localhost only |        No         |      Yes       | Yes |

### Testing Anti-pattern

- "Ice cream cone testing" is the anti-pattern where the most expensive, fragile, [non-deterministic](./glossary/index#non-deterministic-test) tests are prioritized over faster and less expensive [deterministic](./glossary/index#deterministic-test) tests because it "feels" right.
  - ![Ice cream cone testing](../images/testing-images/ice-cream-cones-software-testing.png#width=400px)
- Excessive E2E testing. [Google Test Blog \* Just Say No to More End-to-End
  Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

## Test Pattern Resources

- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing Pyramids & Ice-Cream Cones](https://watirmelon.blog/testing-pyramids/)

## Tests that should run in the pipeline

Only deterministic tests should be run in the deployment pipeline. Determinism means that any failure of the test is a positive indicator of a
problem in the code we've changed. Determinism is compromised by dependance on eternal resources that cannot be controlled by the
test. It is also impacted by activities like loading production data for the test or using one data set for multiple test runs. Both
are anti-patterns for determinism.

- Static Tests: Are there code smells or security issues?
- [Unit Tests](../unit): Does this method / function work?
- [Integration Tests (Network)](../integration): Do I understand this API response?
- [Integration Tests (Functional)](../integration): Does this group of method/function perform the expected business flow?
- [Component Functional Tests](../functional): Does this component work well as a whole?
