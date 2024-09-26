---
title: "Work Decomposition"
linkTitle: "Work Decomposition"
weight: 1
description: >
  A guide to effectively breaking down work into manageable, deliverable units
tags: 
   - Batch Size
   - Teamwork
   - Planning
   - Product Ownership
---

{{% pageinfo %}}
Effective work decomposition is crucial for delivering value faster with less rework. This guide outlines the process and best practices for breaking down work from ideas to tasks.
{{% /pageinfo %}}

## Prerequisites

Before implementing the work breakdown flow, ensure your team has:

- [Definition of Ready](/docs/work-decomposition/definition-of-ready)
- [Definition of Done](/docs/workflow-management/definition-of-done)
- Backlog refinement cadence with appropriate team members and stakeholders

## Work Breakdown Process

{{< figure src="/images/work-breakdown.png" title="Work Breakdown Flow" width="80%" >}}

{{% alert title="Goal" color="primary" %}}
Decompose work into small batches that can be delivered frequently, multiple times a week.
{{% /alert %}}

### Key Tips for Work Decomposition

1. Known poor quality should not flow downstream
2. Plan refinement meetings when people are mentally alert
3. Good acceptance criteria come from good communication
4. Focus on outcomes, not volume, during refinement

{{< figure src="/images/work-breakdown-flow.png" title="Workflow" width="10%" >}}

## Stages of Work Breakdown

### 1. Intake/Product Ideas

- Ideas become epics with defined outcomes, clear goals, and value
- Epics become a list of features

Common struggles:

- [Unclear requirements](/docs/work-decomposition/behavior-driven-development)
- [Unclear goals](/docs/work-decomposition/defining-product-goals)

### 2. Refining Epics/Features into Stories

Stories are observable changes with clear acceptance criteria, completable in less than two days.

Typical problems:

- [Stories are too big or complex](/docs/work-decomposition/story-slicing)
- [Stories lack testable acceptance criteria](/docs/work-decomposition/behavior-driven-development)
- [Lack of dependency knowledge](/docs/work-decomposition/contract-driven-development)
- [Managing research tasks](/docs/work-decomposition/spikes)

### 3. Refining Stories into Development Tasks

- Tasks are independently deployable changes, mergeable to trunk daily
- Breaking stories into tasks allows teams to swarm work and deliver value faster
- Teams need to understand [what makes a good task](/docs/work-decomposition/task-decomposition)

## Measuring Success

{{% alert title="Key Metric" color="info" %}}
Track the team's [Development Cycle Time](/docs/metrics/development-cycle-time) to judge improvements in decomposition.
{{% /alert %}}

Ideal characteristics:

- Stories take 1-2 days to deliver
- No rework
- No delays waiting for explanations
- No dependencies on other stories or teams
