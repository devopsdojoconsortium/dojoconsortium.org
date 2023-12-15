---
title: Testing Best Practices
linkTitle: Best Practices

type: docs
---

## General

| Recommendation                                                          | Benefits Gained                                                                                                                                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Use case-centric tests](#use-case-coverage)                                | Lower cost to maintain, confidence                                                                                                                                         |
| [TDD & BDD](#test-first-approach-bdd-and-tdd)                                                               | Lower cost to maintain, confidence, stability                                                                                                                              |
| [Naming conventions](#naming-conventions)                                                      | Time to develop, lower cost to maintain                                                                                                                                    |
| [Testing your tests](#continuously-assess-your-tests-effectiveness)                                                      | Lower cost to maintain, confidence, stability                                                                                                                              |
| Follow test-type specific recommendations,<br/>[shifting left on testing](#continuously-assess-your-tests-effectiveness) | Lower cost to maintain, faster speed to execute, less time to develop, confidence, stability                                                                               |

## Use Case Coverage

One of the main points behind testing is to be able to code with confidence. Code coverage is one way developers have traditionally used to represent how confident they feel about working on a given code base. That said, how much confidence is needed will likely vary by team and the type of application being tested. E.g. if working on a life saving med tech piece of software, you probably want all of the confidence in the world. The following discusses how code coverage, if misused, can be misleading and create a false sense of confidence in the code being worked on and as a result, hurt quality. Recommendations on how to manage code coverage in a constructive way will be presented, along with concrete approaches on how to implement them.

In simple terms, coverage refers to a measurement of how much of your code is executed while tests are running. As such, it's entirely possible achieve 100% coverage by running through your code without really testing for anything, which is what opens the door for coverage having the potential of hurting quality if you don't follow best practices around it. **A recommended practice is to look at coverage from the perspective of the set of valid use cases supported by your code.** For this, you would follow an approach similar to what follows:

- Start writing code and writing tests to cover for the use cases you're supporting with your code.
- Refine this by going over the tests and making sure valid edge cases and alternative scenarios are covered as well.
- When done, look at your code's coverage report and identify gaps in your testing
- For each gap, decide if the benefit of covering it (odds of it failing and impact if it does) outweighs the cost (how complicated / time consuming would it be to cover it)
- Write more tests where appropriate

This practices shifts the value of coverage from being a representation of your code's quality to it being a tool for finding untested parts of your code. When looking at coverage through this lens, you might also uncover parts of the code with low coverage because it's not supporting a valid use case. **We recommend tests are not written for this, instead this code should be removed from the code base if at all possible.**

You might ask yourself ***"How do I know I have good coverage? What's the magic number?"***. We believe there's no magic number, as it'll all depend on your teams' needs. If you are writing tests for the use cases you build into your application, your team feels very confident when modifying the code base, and you're post-production error rate is very low, your coverage is probably fine, whatever the numbers say. In the end, forcing a coverage percentage is known to have the potential of hurting your quality. By chasing after every single code path, you can very well end up missing the use cases that if gone wrong, will hurt the most. Another consideration is the false sense of confidence you can get by high coverage numbers obtained by "gaming the system", or as Martin Fowler said, ***"The trouble is that high coverage numbers are too easy to reach with low quality testing"*** ([Fowler, 2012](https://martinfowler.com/bliki/TestCoverage.html)). We do recognize there is such a thing as too little coverage. If your coverage is very low (e.g. < 50%) there might be something off, like having a ton of unnecessary code you might want to get rid of, or your tests just not hitting all the critical use cases in your application. There are methods you can employ to make sure there are no instances of "gaming the system" in your test code. One of these is to create linting rules that look for these practices and fail the build when it finds them. **We recommend using plugins like [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) to make sure things like not expecting (asserting) or disabling of tests cause the build to break.**

```json
{
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/expect-expect": "error",
    "jest/no-commented-out-tests": "error",
    "jest/valid-describe": "warn",
    "jest/valid-expect": "error"
  }
}
```

**Another recommendation when managing your code coverage is to track when it goes down.** Generally it shouldn't and if / when it does, it should be explainable and trigger a build failure. Along this same line, raising the bar whenever coverage is increased is a good practice as it ensures the level of coverage in other areas is maintained as they were. **We recommend automating this so that whenever your coverage percentage increases, so do your minimum thresholds.** Once you have reached a certain level of coverage through the methods discussed above (e.g. covering for use cases, taking care of valid edge cases when appropriate, etc) **we don't recommend you actively work on increasing your code coverage percentages. Instead, the way we recommend coverage to go up is as a side effect of building good software.** This means that, as you increase your delivery frequency while monitoring your key stability metrics (e.g post-production defects, performance or service degradations, etc) you should see your code coverage increase.

## Test-First Approach: BDD and TDD

Defining tests prior to writing code is the best way to lock in behavior and produce clean code. BDD and TDD are complementary processes to accomplish this goal and we recommend teams use both to first uncover requirements (BDD) and then do development against these requirements (TDD).

### BDD

Behavior Driven Development is the process of defining business requirements as testable acceptance criteria and then implementing them using a test-first development approach. Examples and references for BDD can be found in the [playbook on BDD](/docs/work-decomposition/behavior-driven-development/).

When coding tests, the test statements should clearly describe what is being executed so that we can create a shared understanding of what's getting build by all stakeholders. Tests are the living documentation for what the application is doing and test results should be effective on-boarding documentation.

### TDD

Test-driven development is the practice of writing a failing test before the implementation of a feature or bug fix. **Red -> Green -> Refactor** refers to the TDD process of adding a failing (red) test, implementing that failing test to make it pass (green) and then cleaning up the code after that (refactor). This approach to testing gives you confidence as it avoids any false positives and also serves as a design mechanism to help you write code that is decoupled and free of unnecessary extra code. TDD also drives up code coverage organically due to the fact that each use case gets a new test added.

People often confuse writing tests in general with TDD. Writing tests after implementing a use case is not the same as TDD, that would be test oriented application development (TOAD) and like a toad, it has many warts. The process for toad would be green, green then refactor at a later date, maybe. The lack of a failing test in that process opens the door for false positive tests and often ends up taking more time as the code and tests end up needing to both be refactored. In addition, the design of an api is not considered as things are developed from the bottom up, not from the top down. This can lead to tight coupling, unnecessary logic and other forms of tech debt in the codebase.

## Naming Conventions

Test names should generally be descriptive and inclusive of what is being tested. A good rule of thumb when deciding a test name is to follow the "given-when-then" or "arrange-act-assert" conventions focusing on the "when" and "act" terms respectively. In both of these cases there is an implied action or generalized assertion that is expected, a test name should include this implication explicitly with an appropriate result effect description. For example:

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    // Jest Example
    // "input validator with valid inputs should contain a single valid field caller receives success state"
    describe("input validator", () => {
      describe("with valid inputs", () => {
        it("should contain a single valid field caller receives success state", () => {});
      });
    });
  {{< /tab >}}
  {{< tab header="Java" >}}
    // JUnit Example
    // "input validator with valid inputs should contain a single valid field caller receives success state"

    @DisplayName("input validator") 
    public class InputValidationTest { 
        @Nested @DisplayName("with valid inputs") 
        class ValidScenarios { 
            @Test @DisplayName("should contain a single valid field caller receives success state") 
                public void containsSingleValidField() { 
                // 
            } 
        } 
    }
  {{< /tab >}}
{{< /tabpane >}}

### Casing

For test environments that require method names to describe its tests and suites it is recommended that they follow their language and environment conventions. See formatting under [static testing](/docs/testing/static/) for further best practices.

### Grouping

Where possible suites and their respective tests should be grouped to allow for higher readability and identification; If the environment supports it nested groups is also a useful and good practice to employ. For example a logical nesting of "unit-scenario-expectation" allows for encapsulating multiple scenarios that could potentially apply to a unit under test. For example:

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="JavaScript" >}}
    describe("unit-under-test", () => {
        describe("scenario-for-unit", () => {
            test("expectation-for-scenario", () => {});
        });
    });
  {{< /tab >}}
  {{< tab header="Java" >}}
    @DisplayName("unit-under-test")
    class ExampleTest {
        @Nested @DisplayName("scenario-for-unit")
        class ExampleScenario {
            @Test @DisplayName("expectation-for-scenario")
            void expectationForScenario() {
                //
            }
        }
    }
  {{< /tab >}}
{{< /tabpane >}}

## Continuously Assess your Tests Effectiveness

Prevent common anti-patterns like disabling, skipping, or commenting test cases or coverage gathering
Make sure it's still covering for valid use cases

## Shift Left

***["Write tests, not too many, mostly integration." - Kent C. Dodds](https://kentcdodds.com/blog/write-tests)***
