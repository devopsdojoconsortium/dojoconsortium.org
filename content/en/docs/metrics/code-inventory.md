---
type: docs
weight: 10
title: Code Inventory

tags:
  - metrics
  - throughput
---

The lines of code that have been changed but have not been delivered to production. This can be measured at several points in the
delivery flow, starting with code not merged to trunk.

## What is the intended behavior?

Reduce the size of individual changes and reduce the duration of branches to improve quality feedback. We also want to
eliminate stale branches that represent risk of lost change or merge conflicts that result in additional
manual steps that add risk.

## How to improve it

- Improve [continuous integration](/docs/metrics/integration-frequency) behavior where changes are integrated to the trunk and
  verified multiple times per day.

## How to game it

- Use forks to hide changes.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) can decrease as quality steps are skipped or batch size increases.
