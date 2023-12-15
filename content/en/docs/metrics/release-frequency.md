---
type: docs
weight: 10
title: Delivery Frequency

tags:
  - metrics
  - throughput
---

How frequently per day the team releases changes to production.

### What is the intended behavior?

Small changes deployed very frequently to exercise the ability to fix production
rapidly, reduce [MTTR](/docs/metrics/mean-time-to-repair), increase quality, and reduce risk.

### How to improve it

- Reduce [Development Cycle Time](/docs/metrics/development-cycle-time).
- Remove handoffs to other teams.
- Remove manual processes.
- Improve testing and move quality ownership into the team.
- Move [hard dependencies](/docs/glossary/#dependency-hard) to [soft dependencies](/docs/glossary/#dependency-soft) with [feature flags](https://martinfowler.com/articles/feature-toggles.html) and [service virtualization](https://www.digitalocean.com/community/tutorials/how-to-mock-services-using-mountebank-and-node-js).
- Focus on [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html) with small changes integrated to the trunk continuously.
- Use [Trunk Based Development](https://trunkbaseddevelopment.com/) to reduce the risk of lost changes and process overhead.

### How to game it

- Re-deploying the same artifact repeatedly.
- Building new artifacts that contain no changes.

### Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Change Fail Rate](/docs/metrics/change-fail-rate) increases as focus shifts to speed instead of quality.
- [Quality](/docs/metrics/defect-rate) decreases if steps are skipped in refining work for the sake of output.
