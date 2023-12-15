---
type: docs
weight: 10
title: Lead Time
tags:
  - Flow Metrics
---

This shows the average time it takes for a new request to be delivered. This is
measured from the creation date to release date for each unit of work and includes [Development Cycle Time](/docs/metrics/development-cycle-time).

## What is the intended behavior?

Identify over utilized teams, backlogs that need more Product Owner attention,
or in conjunction with [velocity](/docs/metrics/velocity) to help teams optimize their processes.

## How to improve it

Relentlessly remove old items from the backlog.
Improve team processes to reduce [Development Cycle Time](/docs/metrics/development-cycle-time).
Use Innersourcing to allow other teams to help when surges of work arrive.
Re-assign, carefully, some components to another team to scale delivery.

## How to game it

- Requests can be tracked in spreadsheet or other locations and then added to
  the backlog just before development. This can be identified by decreased
  customer satisfaction.
- Reduce feature refining rigour.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Quality](/docs/metrics/defect-rate) is reduced if less time is spent refining and defining
  testable requirements.

## References

- [InnerSourcing](https://paypal.github.io/InnerSourceCommons/).
