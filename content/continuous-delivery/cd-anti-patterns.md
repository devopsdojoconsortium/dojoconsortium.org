---
published: true
title: Common Blockers
navPriority: 1
menus:
  - Continuous Delivery
tags:
  - cd
---

The following are very frequent issues that teams encounter that become critical roadblocks to [continuous delivery](../../glossary#continuous-delivery)

## Work Breakdown

### Stories without testable acceptance criteria

All stories should be defined with declarative and testable acceptance criteria. This dramatically reduces the amount
of waiting and rework once coding begins and enables a much smoother testing workflow.

Acceptance criteria should define "done" for the story. No behavior other than that specificed by the acceptance
criteria should be implemented. This prevents scope creep and gold-plating and makes delivery much more consistant.

### Stories too large

Commonly stories are between 5 and 10 days in duration. This far exceeds to 1 to 2 day intended duration of stories.
Large stories hide complexity, uncertainty, and dependencies.

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

Having an explicit definition of done is important to keeping [WIP](../../glossary#WIP) low and finishing work.

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

## Workflow Management

- Rubber band scope
- No definition of "Done"
- No definition of "Ready"
- Focusing on individual tasks completed
- Assigning tasks
- Estimation based on resource assignment

## Assigning tasks for the sprint

Work should always be pulled by the next available team member. Assigning tasks results in each team member working in isolation on a task list instead of the team
focusing on delivering the next high value item. New work should be started only after helping others
complete work in progress.

## Co-dependant releases

Multi-component release trains increase batch size and reduce delivered quality. Teams cannot improve efficiency if they are constantly waiting. Handle dependencies with code, do not manage them with process.

## Handoffs to other teams

If the normal flow of work requires waiting on another team then natch sizes increase and quality is reduced.

## Excessive backlog

Large product backlogs extend lead time and reduce customer satisfaction. LArge backlogs also indicate over utilized teams or ineffective backlog review.

- Continuously review backlog for expired requests and remove them.
- Reassign components to less utilized teams.

## Early story refining

Stories refined too fr in advance create overproduction waste. Odds are that they will require re-refining. Time is better spent delivering the current priorities.

## Manual test as a stage gate

- Manual testing is neither repeatable nor deterministic.
- Use continuous exploratory testing to find missing tests that should be added.

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
