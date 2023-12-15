---
type: docs
weight: 10
title: Build Cycle Time

tags:
  - metrics
  - throughput
---

The time from code commit to production deploy. This is the minimum time changes can be applied to production. This is
referenced as "hard lead time" in Accelerate

## What is the intended behavior?

Reduce pipeline duration to improve [MTTR](/docs/metrics/mean-time-to-repair) and improve test efficiency to
give the team more rapid feedback to any issues. Long build cycle times delay quality feedback
and create more opportunity for defect penetration.

## How to improve it

- Identify areas of the build that can run concurrently.
- Replace end to end tests in the pipeline with virtual services and move end to end testing to an asynchronous process.
- Break down large services into smaller sub-domains that are easier and faster to build / test.
- Add alerts to the pipeline if a maximum duration is exceeded to inform test refactoring priorities.

## How to game it

- Reduce the number of tests running or test types executed.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Defect rates](/docs/metrics/defect-rate) increase if quality gates are skipped to reduce build time.
