---
title: Behavior Driven Development
weight: 2
tags: 
   - Batch Size
   - Teamwork
   - Testing
   - Planning
   - Product Ownership
---

Behavior Driven Development is the collaborative process where we discuss the intent and behaviors of a feature and
document the understanding in a declarative, testable way. These testable acceptance criteria should be the
[Definition of Done](/docs/workflow-management/definition-of-done) for a
user story.
BDD is **not** a technology or automated tool. BDD is the process of **defining** the behavior. We can then
automate tests for those behaviors.

Example:

```gherkin
Feature: I need to smite a rabbit so that I can find the Holy Grail

Scenario: Use the Holy Hand Grenade of Antioch
Given I have the Holy Hand Grenade of Antioch
When I pull the pin
And I count to 3
But I do not count to 5
And I lob it towards my foe
And the foe is naughty in my sight
Then my foe should snuff it
```

---

## Recommended Practices

Gherkin is the domain specific
language that allows acceptance criteria to be expressed in "Arrange, Act, Assert" in a
way that is understandable to all stakeholders.
Example:

```gherkin
Feature: As an hourly associate I want to be able to log my arrival time so that I can be
paid correctly.

Scenario: Clocking in
Given I am not clocked in
When I enter my associate number
Then my arrival time will be logged
And I will be notified of the time

Scenario: Clocking out
Given I am clocked in
When I enter my associate number
And I have been clocked in for more than 5 minutes
Then I will be clocked out
And I will be notified of the time

Scenario: Clocking out too little time
Given I am clocked in
When I enter my associate number
And I have been clocked in for less than 5 minutes
Then I will receive an error
```

---

### Using Acceptance Criteria to Negotiate and Split

With the above criteria, it may be acceptable to remove the time validation and accelerate the delivery of the time
logging ability. After delivery, we may learn that the range validation
isn't required. If true, we've saved money and time by NOT delivering
unneeded features.
First, we deliver the ability to clock in and see if we really do need the ability
to verify.

```gherkin
Feature: As an hourly associate I want to be able to log my arrival time so that I can be
paid correctly.

Scenario: Clocking in
Given I am not clocked in
When I enter my associate number
Then my arrival time will be logged
And I will be notified of the time

Scenario: Clocking out
Given I am clocked in
When I enter my associate number
And I have been clocked in for more than 5 minutes
Then I will be clocked out
And I will be notified of the time
```

If, in production, we discover that the sanity check is required to prevent time
clock issues, we can quickly add that behavior.

```gherkin
Feature: As an hourly associate I want to be prevented from clocking out immediately after
clocking in.

Scenario: Clocking out more than 5 minutes after arrival
Given I am clocked in
And I have been clocked in for more than 5 minutes
When I enter my associate number
Then I will be clocked out
And I will be notified of the time

Scenario: Clocking out less than 5 minutes after arrival
Given I am clocked in
And I have been clocked in for less than 5 minutes
When I enter my associate number
Then I will receive an error
```

---

### Tips

- Scenarios should be written from the point of view of the consumer. If the consumer; either a user, UI, or another service.
- Scenarios should be focused on a specific function and should not attempt to
  describe multiple behaviors.
- If a story has more than 6 acceptance criteria, it can probably be split.
- No acceptance test should contain more than 10 conditions. In fact, much less
  is recommended.
- Acceptance tests can be used to describe a full end-to-end user experience. They are also recommended for describing
  the behavior of a single component in the flow of the overall behavior.

---

## References

- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [BDD Primer](https://lizkeogh.com/behaviour-driven-development/) - Liz Keogh
- [Better Executable Specifications](https://www.youtube.com/watch?v=5CXSEINRojM) - Dave Farley
- [A Real-world Example of BDD](https://www.youtube.com/watch?v=9P5WG8CkPrQ) - Dave Farley
- <a href="/assets/ATDD - How to Guide.pdf" target="_blank">ATDD - How to Guide</a> - Dave Farley

---
