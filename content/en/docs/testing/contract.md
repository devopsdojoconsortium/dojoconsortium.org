---
title: Contract Testing

type: docs
---

> A contract test is used to validate the test doubles used in a network [integration test](/docs/testing/glossary#integration-test). Contract tests are run against the live external sub-system and exercises the portion of the code that interfaces to the sub-system. Because of this, they are [non-deterministic tests](/docs/testing/glossary#non-deterministic-test) and should not break the build, but should trigger work to review why they failed and potentially correct the contract.
>
> **A contract test validates contract format, not specific data.**
>
> -- [Testing Glossary](/docs/testing/glossary#contract-test)

<figure>
  <img src="/images/testing-images/contract-test.png" width="40%" />
  <figcaption>
    Contract tests have two points of view, Provider and Consumer.
  </figcaption>
</figure>

### Provider

Providers are responsible for validating that all API changes are backwards compatible unless otherwise indicated by changing API
versions. Every build should validate the API contract to ensure no unexpected changes occur.

### Consumer

Consumers are responsible for validating that they can consume the properties they need (see [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle)) and that no change
breaks their ability to consume the defined contract.

## Recommended Best Practices

* Provider contract tests are typically implemented as unit tests of the schema and response codes of an interface. As such they should be deterministic and should run on every commit, pull request, and verification of the trunk.
* Consumer contract tests should avoid testing the behavior of a dependency, but should focus on comparing that the contract double still matches the responses from the dependency. This should be running on a schedule and any failures reviewed for cause. The frequency of the test run should be proportional to the volatility of the interface.
* When dependencies are tightly aligned, consumer-driven contracts should be used
  * The consuming team writes automated tests with all consumer expectations
  * They publish the tests for the providing team
  * The providing team runs the CDC tests continuously and keeps them green
  * Both teams talk to each other once the CDC tests break
* Provider Responsibilities:
  * Providers should publish machine-readable documentation of their interface to facilitate consumer testing and discoverability.
  * Even better, publish a dedicated [technical compatibility kit](https://paulhammant.com/2019/06/14/tcks-and-servirtium/) that is tested on every build that provides a trusted virtual service to eliminate the need for consumer contract testing.

## Resources

* [The Practical Test Pyramid: Contract Tests](https://martinfowler.com/articles/practical-test-pyramid.html#ContractTests)
* [Contract Tests by Martin Fowler](https://martinfowler.com/bliki/ContractTest.html)

## Examples

🚧 Under Construction 🚧
