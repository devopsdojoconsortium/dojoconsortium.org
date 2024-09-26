---
title: "Functional Testing"
linkTitle: "Functional Testing"
weight: 5
description: >
  Understanding and implementing Functional Testing in software development
tags: ["Testing", "Functional"]
---

{{% pageinfo %}}
Functional testing is a deterministic test that verifies all modules of a sub-system are working together. It avoids integrating with other sub-systems, preferring test doubles instead.
{{% /pageinfo %}}

{{< figure src="/images/testing-images/functional-test.png" title="Functional Test" >}}

## Overview

Functional testing verifies a system's specification and fundamental requirements systematically and deterministically. It introduces an actor (typically a user or service consumer) and validates the ingress and egress of that actor within specific consumer environments.

{{% alert title="Key Points" color="primary" %}}

- Covers broad-spectrum behavioral tests (UI interactions, presentation-logic, business-logic)
- Side-effects are mocked and don't cross boundaries outside the system's control
- Differs from [E2E tests](/docs/testing/e2e) which have no mocks
{{% /alert %}}

## Recommended Best Practices

1. Write tests from the perspective of an "actor" (user interacting with UI or service interacting with API)
2. Avoid real I/O to reduce flakiness and ensure deterministic side-effects
3. Use [test doubles](/docs/testing/test-doubles/) when the system under test needs to interact with an out-of-context sub-system

## Alternate Terms

- Component test

## Resources

- [Component Tests](https://martinfowler.com/bliki/ComponentTest.html)
- [Testing Strategies in a Microservice Architecture: Component Testing Introduction](https://martinfowler.com/articles/microservice-testing/#testing-component-introduction)

## Examples

🚧 Under Construction 🚧

## Recommended Tooling

| Platform   | Tools                                                                                                                 |
|------------|-----------------------------------------------------------------------------------------------------------------------|
| Android    | Google Truth/JUnit 5, Android Espresso                                                                                |
| iOS        | XCTest, XCUITest                                                                                                      |
| Web        | Testcafe                                                                                                              |
| Java BE    | TestNG, JUnit5                                                                                                        |
| JS/node BE | **Framework:** jest<br>**Assertion & Mocking:** expect (jest), supertest, nock, apollo<br>**Code Coverage:** istanbul/nyc |
