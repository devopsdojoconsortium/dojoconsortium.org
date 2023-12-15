---
title: Functional Testing

type: docs
---

> A functional test is a [deterministic test](/docs/testing/glossary#deterministic-test) that verifies that all modules of a sub-system are working together. They should avoid integrating with other sub-systems as this tends to reduce determinism. Instead, test doubles are preferred. Examples could include testing the behavior of a user interface through the UI or testing the business logic of individual services through the API.
>
> -- [Testing Glossary](/docs/testing/glossary#functional-test)

![Functional Test](/images/testing-images/functional-test.png)

At a high level functional testing is a means of verifying a systems specification and fundamental requirements in a systematic and deterministic way. Functional tests further unit and integration tests by introducing an actor, typically a user or service consumer, and validating the ingress and egress of that actor. Functional tests allow for capturing, within specific consumer environments, potential issues that are inherit to that context. More often than not a functional test will cover broad-spectrum behavioral tests such as UI interactions, presentation-logic, and business-logic and their respective side-effects; Side-effects at this level are mocked and do not cross or proxy to boundaries outside of the systems control – contrast that to [E2E tests](/docs/testing/e2e) where there are no mocks.

## Recommended Best Practices

- Tests should be written from the lens of an "actor" be that a user interacting with a UI component or a service interacting with a potentially stateful API.
- Proxying or otherwise real I/O should be avoided to reduce flakiness and ensure deterministic side-effects.
- [Test doubles](/docs/testing/test-doubles/) should generally always be used in the case where the system under test needs to interact with an out-of-context sub-system.
- [Test doubles](/docs/testing/

## Alternate Terms

- Component test

## Resources

- [Component Tests](https://martinfowler.com/bliki/ComponentTest.html)
- [Testing Strategies in a Microservice Architecture: Component Testing Introduction](https://martinfowler.com/articles/microservice-testing/#testing-component-introduction)

## Examples

🚧 Under Construction 🚧

## Recommended Tooling

| Platform   | Tools                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android    | Google Truth/JUnit 5<br/>Android Espresso                                                                                                                                                            |
| iOS        | XCTest<br/>XCUITest                                                                                                                                                                                  |
| Web        | Testcafe                                                                                                                                                                                             |
| Java BE    | TestNG, JUnit5                                                                                                                                                                                       |
| JS/node BE | **Framework:** jest<br/>**Assertion & Mocking:** expect (jest) - generic, supertest or nock - http server endpoint, apollo - graphql server testing<br/>**Code Coverage:** instanbul/nyc (jest)<br/> |
