---
type: docs
weight: 10
title: Change Fail Rate

tags:
  - metrics
  - stability
---

The percentage of changes that result in negative customer impact, or rollback.

`changeFailRate = failedChangeCount / changeCount`

## What is the intended behavior?

Reduce the percentage of failed changes.

## How to improve it

- Release more, smaller changes to make quality steps more effective and reduce the impact of failure.
- Identify root cause for each failure and improve the automated quality checks.

## How to game it

- Deploy fixes without recording the defect.
- Create defect review meetings and re-classify defects as feature requests.
- Re-deploy the latest working version to increase deploy count.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Delivery frequency](/docs/metrics/release-frequency) can decrease if focus is placed on "zero defect" changes.
- [Defect rates](/docs/metrics/defect-rate) can increase as reduced delivery frequency increases code change batch size and delivery risk.

## References

- ["Accelerate" Ch2: Measuring
  Performance](https://learning.oreilly.com/library/view/accelerate/9781457191435/13-ch2.xhtml) - Nicole Forsgren PhD, Jez Humble & Gene Kim
