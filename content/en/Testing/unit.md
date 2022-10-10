---
title: Unit Testing
aliases: [/test-architecture/unit/]
type: docs
---

> Unit tests are [deterministic tests](/testing/glossary#deterministic-test) that exercise a discrete unit of the application, such as a function, method, or UI component, in isolation to determine whether it behaves as expected.
>
> -- [Testing Glossary](/testing/glossary#unit-test)

When testing the specs of functions, prefer testing public API (methods, interfaces, functions) to private API: the spec of private functions and methods are meant to change easily in the future, and unit-testing them would amount to writing a Change Detector Test, which is an anti-pattern.

<img src="/images/testing-images/unit-test.png" width="50%" />

The purpose of unit tests are to:

- Verify the functionality of a unit (method, class, function, etc.) in isolation
- Good for testing hi-complexity logic where there may be many permutations (e.g. business logic)
- Keep Cyclomatic Complexity low through good separations of concerns and architecture

### Principles

- Unit tests are low-level and focus on discrete units of the application
- All dependencies are typically replaced with test-doubles to remove non-determinism
- Unit tests are fast to execute
- Test Suite is ran after every code change

## Recommended Best Practices

- Run a subset of your test suite based on the part of the code your are currently working on
  - Following TDD practices plus the watch functionality of certain testing frameworks is an easy way to achieve this
- Pre-commit hooks to run the test suite before committing code to version control
  - Verification during PR and during the CI build on the HEAD to verify that earlier verification happened and was effective.
- Discourage disabling of static tests (e.g. skipping tests, ignoring warnings, ignoring code on coverage evaluation, etc)
- Write custom rules (lint, formatting, etc) for common code review feedback

## Resources

- [Unit Testing by Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
- [xUnit Patterns](http://xunitpatterns.com/index.html)

## Examples

<CodeTabs id="unit-test-examples">

`embed:examples/unit-test.java`
`embed:examples/unit-test.js`

</CodeTabs>

## Recommended Tooling

Tooling recommendations based on [Testing Strategy ADR](/adrs/001)

| Platform   | Tools                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android    | **Framework:** JUnit5<br/>**Assertion:** Google Truth                                                                                                                                                |
| iOS        | XCTest                                                                                                                                                                                               |
| Web        | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest), jest-dom, others as necessary<br/>**Code Coverage:** instanbul/nyc (jest)                                                            |
| Java BE    | **Framework:** TestNG, JUnit5<br/>**Code Coverage:** sonar (sonarlint)<br/>**Mocking:** Powermock, Mockitoi<br/>**Assertion:** REST Assured, Truth, TestNG/JUnit5                                    |
| JS/node BE | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest) - generic, supertest or nock - http server endpoint, apollo - graphql server testing<br/>**Code Coverage:** instanbul/nyc (jest)<br/> |
