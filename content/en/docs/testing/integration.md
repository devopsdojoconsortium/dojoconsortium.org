---
title: Integration Testing

type: docs
---

> An integration test is a [deterministic](/docs/testing/glossary#deterministic-test) test to verify how the unit under test interacts with other units without directly accessing external sub-systems. For the purposes of clarity, "integration test" is not a test that broadly integrates multiple sub-systems. That is an [E2E test](/docs/testing/e2e).
>
> -- [Testing Glossary](/docs/testing/glossary#integration-test)

Some examples of an integration test are validating how multiple units work together (sometimes called a "sociable unit test") or validating the portion of the code that interfaces to an external network sub-system while using a test double to represent that sub-system.

<figure>
  <img src="/images/testing-images/integration-test.png" width="60%" />
  <figcaption>
    Validating the behavior of multiple units with no external sub-systems
  </figcaption>
</figure>

<figure>
  <img src="/images/testing-images/network-integration-test.png" width="15%" />
  <figcaption>
    Validating the portion of the code that interfaces to an external network
    sub-system
  </figcaption>
</figure>

When designing network integration tests, it's recommended to also have [contract tests](/docs/testing/glossary#contract-test) running asynchronously to validate the service test doubles.

## Recommended Best Practices

Integration tests provide the best balance of speed, confidence, and cost when building tests to ensure your system is properly functioning.  The goal of testing is to give developers confidence when refactoring, adding features or fixing bugs.  Integration tests that are decoupled from the implementation details will give you this confidence without giving you extra work when you refactor things.  Too many unit tests, however, will lead to very brittle tests.  If you refactor code (i.e. change the implementation w/out changing the functionality) the goal should be to NOT break any tests and ideally not even touch them at all.  If lots of tests are breaking when you refactor, it's probably a sign of too many unit tests and not enough integration tests.

* Tests should be written from the perspective of how the actor experiences it.
* Avoid hasty abstractions. Duplication in tests is not the enemy. In fact, it's often better to have duplicated code in tests than it is to have complex abstractions. Tests should be **damp**, not **DRY**.
* Design tests that alert to failure as close to defect creation as possible.
* "Don't poke too many holes in reality."  Only use mocks or test doubles when absolutely necessary to maintain determinism in your test. [Justin Searls has a great talk about this](https://blog.testdouble.com/talks/2018-03-06-please-dont-mock-me/).
* Flakey tests need to be corrected to prevent false positives that degrade the ability of the tests to act as an effective code gate.
* Write tests from the **actor's perspective** and **don't introduce a test user**.  (e.g. When I give this input, I expect this outcome)
  * End-User - when building a UI, what response will each input provide to the user?
  * Consumer - when building a library or service, what output will be expected for a given input?
  * Test User - a non-existent user/consumer that exists just for the purpose of writing a test.  **Avoid this type of user**.  [Kent Dodds has a great post about this user](https://kentcdodds.com/blog/avoid-the-test-user/).
* Don't test implementation details. Tests should focus on **what** the outcomes are, not **how** the outcomes occurred.
  * Examples of testing implementation details include:
    * internal state
    * private methods/properties etc
    * things a user won't see/know about.
* Integration tests are normally run with unit tests.

### Service Integration Tests

Service integration tests are focused on validating how the system under test responds to information from an external service and that service contracts can be consumed as expected. They should be deterministic and should not test the behavior of the external service. The integration can be from UI to service or service to service. A typical service integration test is a set of unit tests focused on interface schema and response codes for the expected interaction scenarios.

* Use virtual services or static mocks instead of live services to ensure the test is repeatable and deterministic.
* Implement contract tests to continuously validate the virtual service or mock is current.
* Don't over-test. When validating service interactions, testing that a dependency returns a specific value is testing the behavior of the dependency instead of the behavior of the SUT.

### Database Integration Tests

Test data management is one of the more complex problems, so whenever possible using live data should be avoided.

Good practices include:

* In-memory databases
* Personalized datasets
* Isolated DB instances
* Mocked data transfer objects

### Front End Driven Integration Tests

* Don't use tools like Enzyme that let you peek behind the curtain.
* Follow the Accessibility order of operations to get a reference to elements (in prioritized order):
  1. Things accessible to all users (Text, placeholder, label, etc)
  2. Accessibility features (role, title, alt tag, etc)
  3. Only after exhausting the first 2, then use test ID or CSS/XPath selectors as an escape hatch.  But remember, the user doesn't know about these so try to avoid them.

## Alternate Terms

* Sociable Unit Test

## Alternate Definitions

* When integrating multiple sub-systems into a larger system: this is an [End to End Test](/docs/testing/glossary#end-to-end-test).
* When testing all modules within a sub-system through the API or user interface: this is a [Functional Test](/docs/testing/glossary#functional-test).

## Resources

* [Integration Testing](https://martinfowler.com/bliki/IntegrationTest.html)
* [Testing Strategies in a Microservice Architecture: Integration Testing Introduction](https://martinfowler.com/articles/microservice-testing/#testing-integration-introduction)
* [Write tests, not too many, mostly integration](https://kentcdodds.com/blog/write-tests)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    describe("retrieving Hygieia data", () => {
      it("should return counts of merged pull requests per day", async () => {
        const successStatus = 200;
        const result = await hygieiaConnector.getResultsByDay(
          hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
          testConfig.HYGIEIA_TEAMS[0],
          testConfig.getTestStartDate(),
          testConfig.getTestEndDate()
        );

        expect(result.status).to.equal(successStatus);
        expect(result.data).to.be.an("array");
        expect(result.data[0]).to.haveOwnProperty("value");
        expect(result.data[0]).to.haveOwnProperty("dateStr");
        expect(result.data[0]).to.haveOwnProperty("dateTime");
        expect(result.team).to.be.an("object");
        expect(result.team).to.haveOwnProperty("totalAllocation");
      });

      it("should return an empty array if the team does not exist", async () => {
        const result = await hygieiaConnector.getResultsByDay(
          hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
          0,
          testConfig.getTestStartDate(),
          testConfig.getTestEndDate()
        );
        expect(result.status).to.equal(successStatus);
        expect(result.data).to.be.an("array");
        expect(result.data.length).to.equal(0);
      });
    });
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Tooling

Integration Tooling is the same as recommended for [Unit Tests](/docs/testing/unit)
