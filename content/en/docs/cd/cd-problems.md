---
title: Common Blockers
weight: 2
tags:
  - CD
---

The following are very frequent issues that teams encounter when working to improve the flow of delivery.

## Work Breakdown

### Stories without testable acceptance criteria

All stories should be defined with [declarative and testable acceptance criteria](/docs/work-decomposition/behavior-driven-development). This reduces the amount
of waiting and rework once coding begins and enables a much smoother testing workflow.

Acceptance criteria should define "done" for the story. No behavior other than that specified by the acceptance
criteria should be implemented. This ensures we are consistently delivering what was agreed to.

### Stories too large

It's common for teams using two week sprints to have stories that require five to ten days to complete. Large stories hide complexity, uncertainty, and dependencies.

- Stories represent the smallest user observable behavior change.
- To enable rapid feedback, higher quality acceptance
  criteria, and more predictable delivery, Stories should require no more than two days for a team to deliver.

### No definition of "ready"

Teams should have a working agreement about the definition of "ready" for a story or task. Until the team agrees it has
the information it needs, no commitments should be made and the story should not be added to the "ready" backlog.

```shell
Definition of Ready

- Story
  - Acceptance criteria aligned with the value statement agreed to and understood.
  - Dependencies noted and resolution process for each in place
  - Spikes resolved.

- Sub-task
  - Contract changes documented
  - Component acceptance tests defined
```

### No definition of "Done"

Having an explicit definition of done is important to keeping [WIP](/docs/glossary#WIP) low and finishing work.

```shell
Definition of Done

- Sub-task
  - Acceptance criteria met
  - Automated tests verified
  - Code reviewed
  - Merged to Trunk
  - Demoed to team
  - Deployed to production

- Story
  - PO Demo completed
  - Acceptance criteria met
  - All tasks "Done"
  - Deployed to production
```

## Team Workflow

### Assigning tasks for the sprint

Work should always be pulled by the next available team member. Assigning tasks results in each team member working in isolation on a task list instead of the team
focusing on delivering the next high value item. It also means that people are less invested in the work other people
are doing. New work should be started only after helping others
complete work in progress.

### Co-dependant releases

Multi-component release trains increase batch size and reduce delivered quality. Teams cannot improve efficiency if they
are constantly waiting. Handle dependencies with code, do not manage them with process. If you need a person to
coordinate releases, things are seriously broken.

### Handoffs to other teams

If the normal flow of work requires waiting on another team then batch sizes increase and quality is reduced. Teams
should be organized so they can deliver their work without coordinating outside the team.

### Early story refining

As soon as we decide a story has been refined to where we can begin developing it, the information begins to age because
we will never fully capture everything we decided on. The longer a story is "ready" before we being working, the less
context we retain from the conversation. Warehoused stories age like milk. Limit the inventory and spend more time on
delivering current work.

## Manual test as a stage gate

In this context, a __test__ is a repeatable, deterministic activity to verify the releasability of the system. There are
manual activities related to exploration of edge cases and how usable the application is for the intended consumer, but these
are not tests.

There should be no manual validation as a step before we deploy a change. This includes, but is not limited to manual
acceptance testing, change advisory boards (CAB), and manual security testing.

## Meaningless retrospectives

Retrospectives should be metrics driven. Improvement items should be treated as business features.

## Hardening / Testing / Tech Debt Sprints

**Just no.** These are not real things. Sprints represent work that can be
delivered to production.

## Moving "resources" on and off teams to meet "demand"

Teams take time to grow, they cannot be "constructed". Adding or removing anyone
from a team lowers the team's maturity and average problem space expertise. Changing too many people on a team
reboots the team.

## One delivery per sprint

Sprints are planning increments, not delivery increments. Plan what will be delivered daily during the sprint.

## Skipping demo

If the team has nothing to demo, demo that. Never skip demo.

## Committing to distant dates

Uncertainty increases with time. Distant deliverables need detailed analysis.

## Not committing to dates

Commitments drive delivery. Commit to the next Minimum Viable Feature.

## Velocity as a measure of productivity

Velocity is planning metric. "We can typically get this much done in this much time." It's an estimate of relative
capacity for new work that tends to change over time and these changes don't necessarily indicate a shift in productivity. It's
also an arbitrary measure that varies wildly between organizations, teams and products. There's no credible means of
translating it into a normalized figure that can be used for meaningful comparison.

By equating velocity with productivity there is created an incentive to optimize velocity at the expense of developing quality software.

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
