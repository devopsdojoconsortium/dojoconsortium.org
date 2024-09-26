---
title: "Metrics Overview"
linkTitle: "Metrics Overview"
weight: 3
description: >
  An overview of key metrics for measuring and improving Continuous Delivery performance
tags: ["Metrics"]
---

{{% pageinfo %}}
Metrics are crucial for organizational improvement. Without measurement, improvement attempts are aimless. This guide outlines key metrics for Continuous Delivery (CD) and Continuous Integration (CI).
{{% /pageinfo %}}

{{< figure src="/images/Goodharts-law.jpg" title="Goodhart's Law" width="50%" >}}

## CD Execution Metrics

These metrics measure our ability to reliably and sustainably deliver high-quality changes through frequent, small batches.

### Throughput

{{% alert title="Key Metrics" color="primary" %}}

- [Development Cycle Time](/docs/metrics/development-cycle-time)
- [Delivery Frequency](/docs/metrics/release-frequency)
{{% /alert %}}

### Stability

{{% alert title="Key Metrics" color="primary" %}}

- [Change Failure Rate](/docs/metrics/change-fail-rate)
- [Defect Rate](/docs/metrics/defect-rate)
- [Mean Time to Repair](/docs/metrics/mean-time-to-repair)
{{% /alert %}}

## CI Execution Metrics

Continuous Integration is the foundation of Continuous Delivery. These metrics focus on amplifying quality feedback.

{{% alert title="Key Metrics" color="primary" %}}

- [Integration Frequency](/docs/metrics/integration-frequency)
- [Build Cycle Time](/docs/metrics/build-duration)
{{% /alert %}}

### Integration Frequency Guidelines

- Mob programming: Several times a day
- Pair programming: Several times a day per pair
- Individual tasks: Several times a day per developer

## Workflow Management Metrics

These metrics help manage and optimize the overall development workflow.

{{% alert title="Key Metrics" color="primary" %}}

- [Velocity / Throughput](/docs/metrics/velocity)
- [Lead Time](/docs/metrics/lead-time)
- [Work In Process (WIP)](/docs/metrics/work-in-progress)
{{% /alert %}}

## Metrics Usage Guide

1. Use metrics in offsetting groups
2. Focus improvement efforts on the group of metrics as a whole, not individual measures
3. Refer to the [Metrics Cheat Sheet](/docs/metrics/metrics-cheat-sheet) for a high-level view of key metrics, their intent, and appropriate usage

{{% alert title="Remember" color="warning" %}}
Metrics, like any tool, must be used correctly to drive the improvement we need. Focusing on a single metric can lead to unintended consequences and suboptimal outcomes.
{{% /alert %}}
