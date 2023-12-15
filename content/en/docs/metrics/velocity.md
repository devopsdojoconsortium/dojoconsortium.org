---
type: docs
weight: 10
title: Velocity / Throughput

tags:
  - metrics
---

The average amount of the backlog delivered during a sprint by the team. Used by the product team for planning. There is no such thing as good or bad velocity. This is commonly misunderstood to be a productivity metric. It is not.

## What is the intended behavior?

After a team stabilizes, the standard deviation should be low. This will enable realistic planning of future
deliverables based on relative complexity. Find ways to increase this over time by reducing waste, improving planning,
and focusing on teamwork.

## How to improve it

- Reduce story size so they are easier to understand and more predictable.
- Minimize [hard dependencies](/docs/glossary/#dependency-hard). Each hard dependency reduces the odds of on-time
  delivery by 50%.
- Swarm stories by decomposing them into tasks that can be executed in parallel so that the team is working as a unit to deliver faster.

## How to game it

- Cherry pick easy, low priority items.
- Increase story points
- Skip quality steps.
- Prematurely sign-off work only to have defects reported later.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/quality) defect ratio goes up as more defects are reported.
- [WIP](/docs/metrics/work-in-progress) increases as teams start more work to look more
  busy.

## References

[Harvard Business Review: Six Myths of Product Development](https://hbr.org/2012/05/six-myths-of-product-development)
[Scrum.org: Velocity](https://www.scrum.org/resources/blog/agile-metrics-velocity#:~:text=Velocity%20is%20an%20indication%20of,Velocity%20or%20a%20Bad%20Velocity)
