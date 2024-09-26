---
title: "Pipeline & Application Architecture"
linkTitle: "Pipeline & Architecture"
weight: 3
description: >
  A guide to improving your delivery pipeline and application architecture for Continuous Delivery
tags: ["CD", "Pipeline Architecture"]
---

{{% pageinfo %}}
This guide provides steps and best practices for improving your delivery pipeline and application architecture. Please review the [CD Getting Started](/docs/cd) guide for context.
{{% /pageinfo %}}

## 1. Build a Deployment Pipeline

The first step is to create a single, automated deployment pipeline to production. Human intervention should be limited to approving stage gates where necessary.

### Entangled Architecture - Requires Remediation

{{< figure src="/images/entangled-pipelines.png" title="Entangled Architecture" width="80%" >}}

{{% alert title="Characteristics" color="warning" %}}

- No clear ownership of components or quality
- Delayed quality signal
- Difficult to implement Continuous Delivery
{{% /alert %}}

#### Common Entangled Practices

- **Team Structure**: Feature teams focused on cross-cutting deliverables
- **Development Process**: Long-lived feature branches
- **Branching**: Team branches with daily integration to trunk
- **Testing**: Inverted test pyramid common
- **Pipeline**: Focus on establishing reliable build/deploy automation
- **Deploy Cadence / Risk**: Extended delivery cadence, high risk

#### Entangled Improvement Plan

Find architectural boundaries to divide sub-systems between teams, creating product teams. This will realign to a [tightly coupled architecture](#tightly-coupled-architecture---transitional).

### Tightly Coupled Architecture - Transitional

{{< figure src="/images/coupled-pipelines.png" title="Tightly Coupled Architecture" width="80%" >}}

{{% alert title="Characteristics" color="info" %}}

- Changes in one part can affect other parts unexpectedly
- Sub-assemblies assigned to product teams
- Requires a more complex integration pipeline
{{% /alert %}}

#### Common Tightly Coupled Practices

- **Team Structure**: Product teams focused on decoupling sub-systems
- **Development Process**: Continuous integration
- **Branching**: Trunk-Based Development
- **Testing**: Developer Driven Testing
- **Pipeline**: Working towards continuous delivery
- **Deploy Cadence / Risk**: More frequent deliveries, lower risk

#### Tightly Coupled Improvement Plan

1. Extract independent domain services with well-defined APIs
2. Consider wrapping infrequently changed, poorly tested components in APIs

### Loosely Coupled Architecture - Goal

{{< figure src="/images/decoupled-pipelines.png" title="Loosely Coupled Architecture" width="80%" >}}

{{% alert title="Characteristics" color="success" %}}

- Components delivered independently
- Reduced complexity
- Improved quality feedback loops
- Relies on clean team separations and mature testing practices
{{% /alert %}}

#### Common Loosely Coupled Practices

- **Team Structure**: Product teams maintain independent components
- **Development Process**: Continuous integration
- **Branching**: Trunk-Based Development
- **Testing**: Developer Driven Testing
- **Pipeline**: One or more independently deployable CD pipelines
- **Deploy Cadence / Risk**: On-demand or immediate delivery, lowest risk

## 2. Stabilize the Quality Signal

After establishing a production pipeline, focus on improving the quality signal:

1. Remove flaky tests from the pipeline
2. Identify causes for test instability and take corrective action
3. Bias towards testing enough, but not over-testing
4. Track pipeline duration and set a quality gate for maximum duration

## 3. Continuous Improvement

Use the [Theory of Constraints (TOC)](https://www.tocinstitute.org/theory-of-constraints.html) to continuously improve your delivery process:

1. [Identify the system constraint](/docs/vsm)
2. Decide how to exploit the constraint
3. Subordinate everything else to the above decisions
4. Elevate the constraint
5. If a constraint is broken, return to step one

Common constraints include:

- **Resource Constraints**: Limited capacity of people or environments
- **Policy Constraints**: Policies or practices that impede flow

## Further Reading

| Title | Author |
|-------|--------|
| [Accelerate](https://itrevolution.com/product/accelerate/) | Forsgren, Humble, & Kim - 2018 |
| [Engineering the Digital Transformation](https://garygruver.com/engineering-digital-transformation.php) | Gruver - 2019 |
| [A Practical Approach to Large-Scale Agile Development](https://www.amazon.com/Practical-Approach-Large-Scale-Agile-Development/dp/0321821726) | Gruver et al - 2012 |
| [Theory of Constraints](https://www.tocinstitute.org/theory-of-constraints.html) | Goldratt |
