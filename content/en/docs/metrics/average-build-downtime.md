---
type: docs
weight: 10

title: Average Build Downtime
tags:
  - Metrics
  - Throughput
  - Stability
---

The average length of time between when a build breaks and when it is fixed.

## What is the intended behavior?

Keep the pipelines always deployable by fixing broken builds as rapidly as possible. Broken builds are the highest priority since
they prevent production fixes from being deployed in a safe, standard way.

## How to improve it

- Refactor to improve testability and modularity.
- Improve tests to locate problems more rapidly.
- Decrease the size of the component to reduce complexity.
- Add automated alerts for broken builds.
- Ensure the proper team practice is in place to support each other in solving the problem as a team.

## How to game it

- Re-build the previous version.
- Remove tests that are failing.

## Guardrail Metrics

Metrics to use in combination with this metric to prevent unintended consequences.

- [Integration Frequency](../integration-frequency) decreases as additional manual or automated process overhead is
  added before integration to trunk.
