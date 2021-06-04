---
published: true
title: Getting Started with CD
menus:
  - Continuous Delivery
tags:
  - cd
---

- [Introduction to CD](#introduction-to-cd)
- [Goals](#goals)
  - [Continuous Integration](#continuous-integration)
  - [Continuous Delivery/Deploy](#continuous-deliverydeploy)
  - [CD Anti-Patterns](#cd-anti-patterns)
    - [Work breakdown](#work-breakdown)
    - [Workflow Management](#workflow-management)
    - [Teams](#teams)
    - [Testing Process](#testing-process)
- [Recommended Practices](#recommended-practices)
  - [Pipeline](#pipeline)
  - [Cycle Time](#cycle-time)
  - [Testing](#testing)
- [Tips](#tips)
- [References](#references)

## Introduction to CD

The path to [Continuous Integration](../../glossary.html#continuous-integration)
and [Continuous Delivery](./glossary.html#continuous-delivery) may seem
daunting
to teams that are just starting out. We offer this guide to getting
started with a focus on outcome metrics to track progress.

Continuous Delivery is far more than automation. It is the entire cycle of identifying value, delivering the value, and verifying
with the end user that we delivered the expected value. The shorter we can make that feedback loop, the better our bottom line will
be.

<a href="../../CD_Pipeline_Full_Tranparent.png" target="_blank">
  <img src="../../CD_Pipeline_Full_Tranparent.png" width="100%">
</a>

---

## Goals

Both CI and CD are behaviors intended to improve certain goals. CI is very effective
at uncovering issues in work decomposition and testing within the team's processes so that the team can improve them. CD
is effective at uncovering external dependencies and test architecture issues. The overall goal of CD is to improve
quality feedback loops to alert the team to issues as rapidly and as close to the kepboard as possible.

### Continuous Integration

This working agreement for CI puts focus on developing teamwork and delivering quality outcomes while removing waste.

- Branches originate from Trunk.
- Branches are deleted in less than 24 hours.
- Changes must be tested and not break existing tests before merging to trunk.
- Changes are not required to be "feature complete".
- Helping the team complete work in progress (code review, pairing) is more important than starting
  new work.
- Fixing a broken build is the team's highest priority.

**Desired outcomes:**

- [More frequent](./metrics/integration-frequency.html) integration of smaller changes.
  - Higher quality
  - Lower risk
- Improved test architecture
  - More focus on [unit](#unit-test) and [integration contract](#integration-test) tests
- [Lean code review process](code-review)
- Reduced [Work In Progress](workflow-management/limiting-wip) (WIP)

### Continuous Delivery/Deploy

- Increased [delivery frequency](./metrics/release-frequency.html)
- [Increased stability](./metrics/quality.html)
- Improved [deploy success](./metrics/change-fail-rate.html)
- Reduced [development cycle time](./metrics/development-cycle-time.html)
- Improved [time to restore service](./metrics/mean-time-to-repair.html)
- Reduced process waste
- Smaller, less risky production releases.
- Small, cohesive, high morale, high-performing product teams with business domain expertise.

---

### CD Anti-Patterns

#### Work breakdown

| Issue                 | Description                                      | Good Practice                                                                                                                     |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Unclear requirements  | Stories without testable acceptance criteria     | Work should be defined with acceptance tests to improve clarity and enable developer driven testing.                              |
| Long development Time | Stories take too long to deliver to the end user | Use BDD to decompose work to testable acceptance criteria to find smaller deliverables that can be completed in less than 2 days. |

#### Workflow Management

- Rubber band scope
- Focusing on individual productivity
- Estimation based on resource assignment
- Meaningless retrospectives
- Skipping demo
- No definition of "Done" or "Ready"

Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint. Uncertainty increases with time. Distant deliverables need detailed analysis.

Assigning tasks for the sprint results in each team member working in isolation on a task list instead of the team focusing on delivering the next high value item.

#### Teams

| Issue                | Description                                                                                                                                                                                       | Good Practice                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unstable Team Tenure | People are frequently moved between teams                                                                                                                                                         | Teams take time to grow. Adding or removing anyone from a team lowers the team's maturity and average expertise in the solution. Be mindful of change management |
| Poor teamwork        | Poor communication between team members due to time delays or "expert knowledge" silos                                                                                                            | Make sure there is sufficient time overlap and that specific portions of the system are not assigned to individuals                                              |
| Multi-team deploys   | Requiring more than one team to deliver synchronously reduces the ability to respond to production issues in a timely manner and delays delivery of any feature to the speed of he slowest teams. | Make sure all dependencies between teams are handled in ways that allow teams to deploy independently in any sequence.                                           |

#### Testing Process

In CD, testing is completed before submitting code for review. There are no handoffs to QA for testing.

Manual testing is neither repeatable nor deterministic. Do not use manual testing as a stage gate. Use continuous exploratory testing to find missing tests that should be added.

Hardening, testing, and tech debt sprints are not real things. Sprints represent work that can be delivered to production.

---

## Recommended Practices

While implementation is contextual to the product, there are key
steps that should be done whenever starting the CD journey.

- [Value Stream Map](./playbooks/vsm.html): This is a standard Lean tool to make visible
  the development process and highlight any constraints the team has. This is a
  critical step to begin improvement.
- Build a road-map of the constraints and use a [disciplined improvement process](./playbooks/improvement-kata.html)
  to remove the constraints.
- Align to the Continuous Integration team working agreement and use the
  impediments to feed the team's improvement process.

<pre>
  - We always branch from Trunk.
  - Branches last less than 24 hours.
  - Changes must be tested and not break existing tests.
  - Changes are not required to be "feature complete".
  - Code review is more important than starting new work.
  - Fixing a broken build is the team's highest priority.
</pre>

- Build and continuously improve a single CD automated pipeline for each
  repository. There should only be a single configuration for each repository
  that will deploy to all test and production environments.

**A valid CD process will have only a single method to build and deploy any
change. Any deviation for emergencies indicates an incomplete CD process that
puts the team and business at risk and must be improved.**

---

### Pipeline

Focus on hardening the pipeline. Its job is to block bad changes. The team's job is to develop its ability to do that. Only use the emergency process. If a process will not be used to resolve a critical outage, it should not be happening in the CD pipeline.

Integrate outside the pipeline. Virtualize inside the pipeline. Direct integration is not a good testing method for validating behavior because the data returned is not controlled. It **IS** a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the dependency is unavailable.

There should be one or fewer stage gates. Until release and deploy are decoupled, one approval for production. No other stage gates.

Developers are responsible for the full pipeline. No handoffs. Handoffs cause delay and dilute ownership. The team owns their pipeline and the application they deploy from birth to death.

### Cycle Time

CI cycle time should be less than 10 minutes from commit to Proximity. CD cycle time should be less than 60 minutes from commit to Production.

### Testing

Manual testing is for exploration only. All test automation pre-commit. Co-located with the system under test, no handoffs for test automation.

Test engineers reviewing test strategies and test cases prior to construction and continuously reviewing the code base for where testing can be more efficient.
The goal is not 100% coverage. The goal is efficient, fast, effective testing.

---

## Tips

Use [trunk merge frequency](./metrics/integration-frequency.html),
[development cycle time](./metrics/development-cycle-time.html), and
[delivery frequency](./metrics/release-frequency.html) to uncover pain points. The team has
complete control merge frequency and development cycle time and can
uncover most issues by working to improve those two metrics.

Make sure to keep all metrics visible and refer to them often to help drive the
change.

See [CD best practices](./cd-best-practices.html) and [CD anti-patterns](./cd-anti-patterns.html) for more tips on effectively introducing CICD improvements to your team processes.

---

## References

- [Continuous Delviery](https://continuousdelivery.com/)
- [Jez Humble: Continuous Delivery sounds great, but it won't work here @ DevOn Summit 2017](https://www.youtube.com/watch?v=837Z_oehhRg)

---
