---
title: "Starting CD"
linkTitle: "Starting CD"
weight: 1
description: >
  Migrating your system to Continuous Delivery
tags: ["CD"]
---

{{% pageinfo %}}
Continuous Delivery (CD) is the ability to deliver the latest changes on-demand, with no human touchpoints between code integration and production delivery.
{{% /pageinfo %}}

## Overview

{{< figure src="/images/CD_Pipeline_Full_Transparent.png" title="CD Pipeline" width="80%" >}}

Continuous Delivery extends beyond automation. It encompasses the entire cycle of identifying value, delivering it, and verifying with the end-user that the expected value was delivered.

## Goals

CD aims to:

- Uncover external dependencies and organizational process issues
- Reduce overhead
- Improve quality feedback
- Enhance end-user outcomes and team work/life balance

## CD Maturity

While avoiding rigid "maturity models," we can outline competency levels:

### Minimums

- Daily integration of tested changes to the trunk
- Consistent delivery process for all changes
- No manual quality gates
- Same artifact used in all environments

### Good

- New work delivered in less than 2 days
- All changes delivered from the trunk
- Commit-to-production time under 60 minutes
- Less than 5% of changes require remediation
- Service restoration time under 60 minutes

## Continuous Integration (CI)

{{% alert title="CI Working Agreement" color="primary" %}}

- Branches originate from trunk and are deleted within 24 hours
- Changes must pass existing tests before merging
- Team prioritizes completing work in progress over starting new work
- Fixing a broken build is the highest priority
{{% /alert %}}

### Desired Outcomes

- More frequent integration of smaller, higher quality changes
- Efficient test architecture
- Lean code review process
- Reduced Work In Progress (WIP)

## Continuous Delivery/Deploy

Aims to achieve:

- Increased delivery frequency and stability
- Improved deploy success and time to restore service
- Reduced development cycle time and process waste
- Smaller, less risky production releases
- High-performing product teams with domain expertise

## Getting Started

New to Continuous Delivery? Start here:

{{% alert title="Quick Start" color="success" %}}
📚 **[Getting Started with CD](/docs/cd/getting-started)** - Practical first steps for your first week
{{% /alert %}}

### Understanding CD Practices

**[CD Dependencies](/docs/cd/cd-dependency-tree)** - Visual guide showing how practices like TDD, BDD, and Trunk-Based Development build upon each other to enable CD. See [practices.minimumcd.org](https://practices.minimumcd.org) for detailed implementation guides.

## Recommended Practices

1. Conduct a [Value Stream Map](/docs/reference/value-stream-mapping)
2. Build a roadmap to remove constraints
3. Align with the CI working agreement
4. Implement a single CD automated pipeline per repository

{{% alert title="Note" color="info" %}}
A valid CD process has only one method to build and deploy any change. Deviations indicate an incomplete process that puts the team and business at risk.
{{% /alert %}}

### Pipeline Best Practices

- Focus on hardening the pipeline to block bad changes
- Integrate outside the pipeline, virtualize inside
- Limit stage gates (ideally one or fewer)
- Developers own the full pipeline

### Key Metrics

- CI cycle time: < 10 minutes from commit to artifact creation
- CD cycle time: < 60 minutes from commit to Production

## Tips

- Use trunk merge frequency, development cycle time, and delivery frequency to uncover pain points
- Keep all metrics visible and refer to them often
- See [CD best practices](/docs/cd/#recommended-practices) and [CD Roadblocks](/docs/cd/cd-problems) for more tips

## Further Reading

- [Continuous Delivery](https://continuousdelivery.com/)
- [Jez Humble: Continuous Delivery sounds great, but it won't work here @ DevOn Summit 2017](https://www.youtube.com/watch?v=837Z_oehhRg)
