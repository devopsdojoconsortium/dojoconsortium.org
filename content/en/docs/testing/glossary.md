---
title: Testing Terms Glossary
linkTitle: Glossary
type: docs
weight: 1
tags:
    - Testing
    - Glossary
---

Testing terms and they are notoriously overloaded. If you ask 3 people what integration testing means you will get 4 different answers. This ambiguity within an organization slows down the engineering process as the lack of ubiquitous language causes communication errors. For us to help each other improve our quality processes, it is important that we align on a common language. In doing so, we understand that many may not agree 100% on the definitions we align to. That is ok. It is more important to be aligned to consensus than to be 100% in agreement. We'll iterate and adjust as needed.

Note: Our definitions are based on the following sources:

- [Testing Categories](https://martinfowler.com/tags/test%20categories.html) by Martin Fowler
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) by Ham Vocke
- [xUnit Test Patterns \* Refactoring Test Code](https://martinfowler.com/books/meszaros.html) by Gerard Meszaros

## Glossary

### Deterministic Test

A deterministic test is any test that always returns the same results for the same beginning state and action. Deterministic tests should always be able to run in any sequence or in parallel. Only deterministic tests should be executed in a CI build or automatically block delivery during CD.

### Non-deterministic Test

A non-deterministic test is any test that may fail for reasons unrelated to adherence to specification. Reasons for this could include network instability, availability of external dependencies, state management issues, etc.

### Static Test

A static test is a test that evaluates non-running code against rules for known good practices to check for security, structure, or practice issues.

### Unit Test

Unit tests are [deterministic tests](#deterministic-test) that exercise a discrete unit of the application, such as a function, method, or UI component, in isolation to determine whether it behaves as expected.

[More on Unit Testing](/docs/testing/unit)

### Integration Test

An integration test is a [deterministic](#deterministic-test) test to verify how the unit under test interacts with other units without directly accessing external sub-systems. For the purposes of clarity, "integration test" is not a test that broadly integrates multiple sub-systems. That is an [E2E test](#end-to-end-test).

[More on Integration Testing](/docs/testing/integration)

### Contract Test

A contract test is used to validate the test doubles used in a network [integration test](#integration-test). Contract tests are run against the live external sub-system and exercises the portion of the code that interfaces to the sub-system. Because of this, they are [non-deterministic tests](#non-deterministic-test) and should not break the build, but should trigger work to review why they failed and potentially correct the contract.

**A contact test validates contract format, not specific data.**

[More on Contract Testing](/docs/testing/contract)

### Functional Test

A functional test is a [deterministic test](#deterministic-test) that verifies that all modules of a sub-system are working together. They should avoid integrating with other sub-systems as this tends to reduce determinism. Instead, test doubles are preferred. Examples could include testing the behavior of a user interface through the UI or testing the business logic of individual services through the API.

[More on Functional Testing](/docs/testing/functional)

### End to End Test

End to end tests are typically [non-deterministic](#non-deterministic-test) tests that validate the software system along with its integration with external interfaces. The purpose of end-to-end Test is to exercise a complete production-like scenario. Along with the software system, it also validates batch/data processing from other upstream/downstream systems. Hence, the name "End-to-End". End to End Testing is usually executed after [functional testing](#functional-test). It uses actual production like data and test environment to simulate real-time settings.

[More on E2E Testing](/docs/testing/e2e)

### Customer Experience Alarms

Customer Experience Alarms are a type of active alarm. It is a piece of software that sends requests to your system much like a user would. We use it to test the happy-path of critical customer workflows. These requests happen every minute (ideally, but can be as long as every 5 minutes). If they fail to work, or fail to run, we emit metrics that cause alerts. We run these in all of our environments, not just production, to ensure that they work and we catch errors early.

[More on Customer Experience Alarms](/docs/testing/experience-alarms)

### Test Doubles

Test doubles are one of the main concepts we use to create fast, independent, deterministic and reliable tests. Similar to the way Hollywood uses a \_stunt double* to film dangerous scenes in a movie to avoid the costly risk a high paid actor gets hurt, we use a *test double* in early test stages to avoid the speed and dollar cost of using the piece of software the *test double* is standing in for. We also use *test doubles* to force certain conditions or states of the application we want to test. *Test doubles* can be used in any stage of testing but in general, they are heavily used during the initial testing stages in our CD pipeline and used much less in the later stages. There are many different kinds of *test doubles* such as *stubs*, *mocks*, *spies*, etc.

[More on Test Doubles](/docs/testing/test-doubles/)
