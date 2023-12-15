---
type: docs
weight: 10
title: Code Integration Frequency

tags:
  - metrics
  - throughput
---

The average number of production-ready pull requests a team closes per day, normalized by the number of developers on
the team. On a team with 5 developers, healthy CI practice is
at least 5 per day.

## What is the intended behavior?

- Increase the frequency of code integration
- Reduce the size of each change
- Improve code review processes
- Remove unneeded processes
- Improve quality feedback

## How to improve it

- Decompose code changes into smaller units to incrementally deliver features.
- Use [BDD](/docs/work-decomposition/behavior-driven-development) to aid functional breakdown.
- Use TDD to design more modular code that can be integrated more frequently.
- USe feature flags, branch by abstraction, or other coding techniques to control the release of new features.

## How to game it

- Meaningless changes integrated to trunk.
- Breaking changes integrated to trunk.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) decreases if testing is skipped.

## Recommended Practices

- [Trunk Based Development](https://trunkbaseddevelopment.com/)
- [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html)
- [Feature Flagging](https://martinfowler.com/articles/feature-toggles.html)
