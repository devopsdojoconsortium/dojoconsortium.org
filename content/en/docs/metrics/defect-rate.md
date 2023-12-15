---
type: docs
weight: 10
title: Defect Rate

tags:
  - metrics
  - stability
---

Defect rates are the total number of defects by severity reported for a period of time.

`Defect count / Time range`

## What is the intended behavior?

Use defect rates and trends to inform improvement of upstream quality processes.

Defect rates in production indicate how effective our overall quality process is. Defect rates in lower environments inform us of
specific areas where quality process can be improved. The goal is to push detection closer to the developer.

## How to improve it

Track trends over time and identify common issues for the defects Design test design changes that would reduce the time
to detect defects.

## How to game it

- Mark defects as enhancement requests
- Don't track defects
- Deploy changes that do not modify the application to improve the percentage

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery frequency](/docs/metrics/release-frequency) is reduced if too much emphasis is place on zero defects. This can be
  self-defeating as large change batches will contain more defects.
