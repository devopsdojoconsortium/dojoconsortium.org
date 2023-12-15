---
weight: 3
title: Metrics Overview
type: docs
tags:
  - Metrics
---

Metrics are key to organizational improvement. If we do not measure, then any attempt at improvement is aimless.
Metrics, like any tool, must be used correctly to drive the improvement we need. It's important to use metrics in
offsetting groups and to focus improvement efforts on the group of metrics as a whole, not as individual measures.

The [Metrics Cheat Sheet](/docs/metrics//metrics-cheat-sheet) has a high-level view of the key metrics, their intent, and how to
use them appropriately.

![Goodhart's Law](/images/Goodharts-law.jpg#width=50%)

## CD Execution

When measuring the performance of continuous delivery, we are measuring our ability to reliably and sustainably deliver high-quality changes. We do this by focusing on very frequent small batches of high-quality delivery.

- Change frequency is important to make sure that waste is driven out of the process. This reduces costs, improves the
  sustainability of flow, and ensures there is a verified quality process for emergency changes.
- Small batches are easier to inspect for quality and limit the impact of any quality issues.
- Change success is an important offsetting metric. If we only focus on change size and change frequency,
  quality will suffer. If we only focus on reducing the number of defects and eliminating impacting changes, batch size
  and frequency suffer. The data shows that this actually results in more defects and more costs.

- **Throughput**
  - [Development Cycle Time](/docs/metrics//development-cycle-time): Time from when a task is started until it is "Done". The
    suggested definition of "Done" is delivered to production. KPI for how big a unit of work is. Indicator of
    possible upstream quality issues with requirements definition and teamwork.
  - [Delivery Frequency](/docs/metrics//release-frequency): KPI for batch size, cost, and efficient quality process.
- **Stability**

  - [Change Failure Rate](/docs/metrics//change-fail-rate): Percentage of changes that require remediation. KPI for
    effectiveness of the quality process.
  - [Defect Rate](/docs/metrics//defect-rate): Rate of defect creation over time relative to change frequency, generally P1 and P2.
  - [Mean Time to Repair](/docs/metrics//mean-time-to-repair): KPI for the maturity of our disaster response preparations and
    the forethought to design for recovery instead of just for delivery.

## CI Execution

Continuous delivery stands on the bedrock of continuous integration. If code is not continuously integrating, it cannot
be safely delivered.

The focus of CI is to amplify quality feedback. The more frequently code is integrated and tested, the sooner any
quality issues will be found and the smaller those issues will be.

- [Integration Frequency](/docs/metrics//integration-frequency): Frequency of code integrating to the trunk. KPI for efficacy of
  refining requirements, quality process, and teamwork.
  - When a team is mob programming, this should occur several times a day.
  - When a team is pair programming, this should occur several times a day per pair.
  - When the team is working on individual tasks, this should occur several times a day per developer.
- [Build Cycle Time](/docs/metrics//build-duration): Time from commit to production deploy. KPI for the stability of the
  pipeline and efficiency of the quality process. Long build cycle times have a direct negative impact on MTTR, and
  batch size. This encourages abandoning defined quality checks in emergency situations making emergency changes the
  riskiest changes to make.

## Workflow Management

- [Velocity / Throughput](/docs/metrics/velocity): Planning metric to allow the team to predict date ranges for delivery. The
  standard deviation of this metric is a KPI for predictability. The average value of the metric has no meaning outside
  the team.
- [Lead Time](/docs/metrics/lead-time): Total time from when a request is made until it is delivered. KPI for team over-utilization.
  As the team's utilization approaches 100%, this metric approaches infinity.
- [Work In Process (WIP)](/docs/metrics//work-in-progress): Key flow metric. Excessive WIP results in rework and delivery delays.
