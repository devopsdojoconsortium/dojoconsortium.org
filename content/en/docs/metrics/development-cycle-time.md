---
type: docs
weight: 10
title: Development Cycle Time
tags:
  - Flow Metrics
---

The average time from starting work until release to production.

## What is the intended behavior?

Reduce the time it takes to deliver refined work to production to mitigate the effects of priorities changing and get
rapid feedback on quality.

## How to improve it

- Decompose work so it can be delivered in smaller increments and by more team members.
- Identify and remove process waste, handoffs, and delays in the construction process.
- Improve test design.
- Automate and standardize the build and deploy pipeline.

## How to game it

- Move things to "Done" status that are not in production.
- Move items directly from "Backlog" to "Done" after deploying to production.
- Split work into functional tasks that should be considered part of development (development task, testing task,
  etc.).

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) decreases if quality processes are skipped.
- Standard deviation of the control chart can show issues being closed too rapidly.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim
