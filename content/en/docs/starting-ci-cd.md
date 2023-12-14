---
title: Getting Started with CD

weight: 1
tags:
  - cd
---

- [Introduction to CD](#introduction-to-cd)
- [Goals](#goals)
- [CD Maturity](#cd-maturity)
  - [Minimums](#minimums)
  - [Good](#good)
  - [Continuous Integration](#continuous-integration)
  - [Continuous Delivery/Deploy](#continuous-deliverydeploy)
- [CD Anti-Patterns](#cd-anti-patterns)
  - [Work Breakdown](#work-breakdown)
  - [Workflow Management](#workflow-management)
  - [Teams](#teams)
  - [Testing Process](#testing-process)
- [Recommended Practices](#recommended-practices)
  - [Pipeline](#pipeline)
  - [Short CI Cycle Time](#short-ci-cycle-time)
  - [Integrate outside the pipeline. Virtualize inside the pipeline](#integrate-outside-the-pipeline-virtualize-inside-the-pipeline)
  - [All test automation pre-commit](#all-test-automation-pre-commit)
- [Tips](#tips)
- [References](#references)

## Introduction to CD

Continuous delivery is the ability to deliver the latest changes on-demand. CD is not build/deploy automation. It is the continuous flow of changes to the end-user with no human touchpoints between code integrating to the trunk and delivery to production. This can take the form of triggered delivery of small batches or the immediate release of the most recent code change.

CD is not a reckless throwing of random change into production. Instead, it is a disciplined team activity of relentlessly automating all of the validations required for a release candidate, improving the speed and reliability of quality feedback, and collaborating to improve the quality of the information used to develop changes.

CD is based on and extends the extreme programming practice of continuous integration. There is no CD without CI.

The path to continuous integration and continuous delivery may seem daunting to teams that are just starting out. We offer this guide to getting started with a focus on outcome metrics to track progress.

![CD Pipeline](/images/CD_Pipeline_Full_Transparent.png "CD_Pipeline_Full_Transparent.png")

Continuous Delivery is far more than automation. It is the entire cycle of identifying value, delivering the value, and verifying
with the end user that we delivered the expected value. The shorter we can make that feedback loop, the better our bottom line will
be.

---

## Goals

Both CI and CD are behaviors intended to improve certain goals. CI is very effective at uncovering issues in work decomposition and testing within the team's processes so that the team can improve them. CD is effective at uncovering external dependencies, organizational process issues, and test architecture issues that add waste and cost.

The relentless improvement of how we implement CD reduces overhead, improves quality feedback, and improves both the outcomes of the end-user and the work/life balance of the team.

## CD Maturity

It has been common for organizations to apply "maturity models" to activities such as CD. However, this has been found to lead to cargo culting and aligning goals to the process instead of the outcomes. Understanding what capabilities you have and what capabilities need to be added to fully validate and operate changes are important, but the goals should always align to improving the flow of value delivery to the end-user. This requires analyzing every process from idea to delivery and identifying what should be removed, what should be automated, and how we can continuously reduce the size of changes delivered.

There should never be an understanding that we are "mature" or "immature" with delivery. We can always improve. However, there should be an understanding of what competency looks like.

### Minimums

- Each developer integrates tested changes to the trunk at least daily.
- Changes always use the same process to deliver.
- There are no process differences between deploying a feature or a fix.
- There are no manual quality gates.
- All test and production environments use the same artifact.
- If the release cadence requires release branches, then the release branches deploy to all test environments and production.

### Good

- New work requires less than 2 days from start to delivery
- All changes deliver from the trunk
- The time from committing change and delivery to production is less than 60 minutes
- Less than 5% of changes require remediation
- The time to restore service is less than 60 minutes.

### Continuous Integration

This working agreement for CI focuses on developing teamwork and delivering quality outcomes while removing waste.

- Branches originate from the trunk.
- Branches are deleted in less than 24 hours.
- Changes must be tested and not break existing tests before merging to the trunk.
- Changes are not required to be "feature complete".
- Helping the team complete work in progress (code review, pairing) is more important than starting
  new work.
- Fixing a broken build is the team's highest priority.

**Desired outcomes:**

- [More frequent](/metrics/integration-frequency) integration of smaller, higher quality, lower risk changes.
- More efficient and effective test architecture
- [Lean code review process](/docs/workflow-management/code-review)
- Reduced [Work In Progress](/docs/workflow-management/limiting-wip) (WIP)

### Continuous Delivery/Deploy

- Increased [delivery frequency](/metrics/release-frequency)
- [Increased stability](/metrics/quality)
- Improved [deploy success](/metrics/change-fail-rate)
- Reduced [development cycle time](/metrics/development-cycle-time)
- Improved [time to restore service](/metrics/mean-time-to-repair)
- Reduced process waste
- Smaller, less risky production releases.
- Small, cohesive, high morale, high-performing product teams with business domain expertise.

---

## CD Anti-Patterns

### Work Breakdown

| Issue                 | Description                                      | Good Practice                                                                                                                     |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Unclear requirements  | Stories without testable acceptance criteria     | Work should be defined with acceptance tests to improve clarity and enable developer driven testing.                              |
| Long development Time | Stories take too long to deliver to the end user | Use BDD to decompose work to testable acceptance criteria to find smaller deliverables that can be completed in less than 2 days. |

### Workflow Management

| Issue                                   | Description                                                                                                                                                                                                           | Good Practice                                                                                                                                                                                |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rubber band scope                       | Scope that keeps expanding over time                                                                                                                                                                                  | Use BDD to clearly define the scope of a story and never expand it after it begins.                                                                                                          |
| Focusing on individual productivity     | Attempting to manage a team by reporting the "productivity" of individual team members. This is the fastest way to destroy teamwork.                                                                                  | Measure team efficiency, effectiveness, and morale                                                                                                                                           |
| Estimation based on resource assignment | Pre-allocating backlog items to the people based on skill and hoping that those people do not have life events.                                                                                                       | The whole team should own the team's work. Work should be pulled in priority sequence and the team should work daily to remove knowledge silos.                                             |
| Meaningless retrospectives              | Having a retrospective where the outcome does not results in team improvement items.                                                                                                                                  | Focus the retrospective on the main constraints to daily delivery of value.                                                                                                                  |
| Skipping demo                           | No work that can be demoed was completed.                                                                                                                                                                             | Demo the fact that no work is ready to demo                                                                                                                                                  |
| No definition of "Done" or "Ready"      | Obvious                                                                                                                                                                                                               | Make sure there are clear entry gates for "ready" and "done" and that the gates are applied without exception                                                                                |
| One or fewer deliveries per sprint      | The sprint results in one or fewer changes that are production ready                                                                                                                                                  | Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint. Uncertainty increases with time. Distant deliverables need detailed analysis. |
| Pre-assigned work                       | Assigning the list of tasks each person will do as part of sprint planning. This results in each team member working in isolation on a task list instead of the team focusing on delivering the next high value item. | The whole team should own the team's work. Work should be pulled in priority sequence and the team should work daily to remove knowledge silos.                                             |

### Teams

| Issue                | Description                                                                                                                                                                                       | Good Practice                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unstable Team Tenure | People are frequently moved between teams                                                                                                                                                         | Teams take time to grow. Adding or removing anyone from a team lowers the team's maturity and average expertise in the solution. Be mindful of change management |
| Poor teamwork        | Poor communication between team members due to time delays or "expert knowledge" silos                                                                                                            | Make sure there is sufficient time overlap and that specific portions of the system are not assigned to individuals                                              |
| Multi-team deploys   | Requiring more than one team to deliver synchronously reduces the ability to respond to production issues in a timely manner and delays delivery of any feature to the speed of he slowest teams. | Make sure all dependencies between teams are handled in ways that allow teams to deploy independently in any sequence.                                           |

### Testing Process

| Issue              | Description                                                                                                | Good Practice                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Outsourced testing | Some or all of acceptance testing performed by a different team or an assigned subset of the product team. | Building in the quality feedback and continuously improving the same is the responsibility of the development team.                                                        |
| Manual testing     | Using manual testing for functional acceptance testing.                                                    | Manual tests should only be used for things that cannot be automated. In addition, manual tests should not be blockers to delivery but should be asynchronous validations. |

---

## Recommended Practices

While implementation is contextual to the product, there are key
steps that should be done whenever starting the CD journey.

- [Value Stream Map](/docs/vsm): This is a standard Lean tool to make visible
  the development process and highlight any constraints the team has. This is a
  critical step to begin improvement.
Build a road map of the constraints and use a disciplined improvement process
  to remove the constraints.
- Align to the Continuous Integration team working agreement and use the
  impediments to feed the team's improvement process.
- We always branch from Trunk.
- Branches last less than 24 hours.
- Changes must be tested and not break existing tests.
- Changes are not required to be "feature complete".
- Code review is more important than starting new work.
- Fixing a broken build is the team's highest priority.
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

Developers are responsible for the full pipeline. No handoffs. Handoffs cause delays and dilute ownership. The team owns its pipelines and the applications they deploy from birth to death.

### Short CI Cycle Time

CI cycle time should be less than 10 minutes from commit to artifact creation. CD cycle time should be less than 60 minutes from commit to Production.

### Integrate outside the pipeline. Virtualize inside the pipeline

Direct integration to stateful dependencies (end-to-end testing) should be avoided in the pipeline. Tests in the pipeline should be deterministic and the larger the number of integration points the more difficult it is to manage state and maintain determinism. It is a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the dependency is unstable/unavailable.

### All test automation pre-commit

Tests should be co-located with the system under test and all acceptance testing should be done by the development team. The goal is not 100% coverage. The goal is efficient, fast, effective testing.

No manual steps
There should be no manual intervention after the code is integrated into the trunk. Manual steps inject defects.

---

## Tips

Use [trunk merge frequency](/metrics/integration-frequency),
[development cycle time](/metrics/development-cycle-time), and
[delivery frequency](/metrics/release-frequency) to uncover pain points. The team has
complete control merge frequency and development cycle time and can
uncover most issues by working to improve those two metrics.

Make sure to keep all metrics visible and refer to them often to help drive the
change.

See [CD best practices](/docs/starting-ci-cd/#recommended-practices) and [CD anti-patterns](/docs/cd-anti-patterns) for more tips on effectively introducing CICD improvements to your team processes.

---

## References

- [Continuous Delivery](https://continuousdelivery.com/)
- [Jez Humble: Continuous Delivery sounds great, but it won't work here @ DevOn Summit 2017](https://www.youtube.com/watch?v=837Z_oehhRg)

---
