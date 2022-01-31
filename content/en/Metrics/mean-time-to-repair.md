---
type: docs
weight: 10
title: MTTR
tags:
  - metrics
  - stability
---

Mean Time to Repair is the average time between when a incidents is
detected and when it is resolved.

"Software delivery performance is a combination of three metrics: [lead time](../development-cycle-time), [release
frequency](../release-frequency), and MTTR. [Change fail rate](../change-fail-rate) is not included, though it
is highly correlated."

["Accelerate"](https://itrevolution.com/book/accelerate/) uses Lead Time for [Development Cycle Time](../development-cycle-time).

## What is the intended behavior?

Improve the ability to more rapidly resolve system instability and service outages.

## How to improve it

- Make sure the pipeline alway deployable.
- Keep [build cycle time](../build-duration) short to allow roll-forward.
- Implement feature flags for larger feature changes to allow the them to be deactivated without re-deploying.
- Identify stability issues and prioritize them in the backlog.

## How to game it

- Updating support incidents to "closed" before service is restored.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](../defect-rate) decreases if issues re-occur due to lack of improving pipeline quality gates.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim
