---
type: docs
weight: 10
title: Quality

tags:
  - metrics
  - stability
---

Quality is measured as the percentage of finished work that is unused, unstable, unavailable, or defective according to the end user.

## What is the intended behavior?

Continuously improve the quality steps in the construction process, reduce the size of delivered change, and increase
the speed of feedback from the end user. Improving this cycle improves roadmap decisions.

## How to improve it

- Add automated checks to the pipeline to prevent re-occurrence of root causes.
- Only begin new work with testable acceptance criteria.
- Accelerate feedback loops at every step to alert to quality, performance, or availability issues.

## How to game it

- Log defects as new features

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery [frequency](/docs/metrics/release-frequency) may be reduced if more manual quality steps are added
- [Build cycle time](/docs/metrics/build-duration) may increase as additional tests are added to the pipeline
- [Lead time](/docs/metrics/lead-time) can increase as more time is spent on business analysis
