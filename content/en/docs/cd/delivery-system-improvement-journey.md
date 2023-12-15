---
title: Pipeline & Application Architecture
tage:
  - CD
  - Pipeline Architecture
---

Whenever teams or areas want to improve their ability to deliver, there is a recommended order of operations to ensure the
improvement is effective. This value stream improvement journey's goal is to provide the steps and guide you to good implementation
practices.

Prerequisite: Please review the [CD Getting Started](/docs/cd) guide for context.

- [1. Build a Deployment Pipeline](#1-build-a-deployment-pipeline)
  - [Entangled Architecture - Requires Remediation](#entangled-architecture---requires-remediation)
    - [Common Entangled Practices](#common-entangled-practices)
    - [Improvement Plan](#improvement-plan)
  - [Tightly Coupled Architecture - Transitional](#tightly-coupled-architecture---transitional)
    - [Common Tightly Coupled Practices](#common-tightly-coupled-practices)
    - [Improvement Plan](#improvement-plan-1)
  - [Loosely Coupled Architecture - Goal](#loosely-coupled-architecture---goal)
    - [Common Loosely Coupled Practices](#common-loosely-coupled-practices)
- [2. Stabilize the Quality Signal](#2-stabilize-the-quality-signal)
  - [Remediating Test Instability](#remediating-test-instability)
- [3. Continuous Improvement](#3-continuous-improvement)
- [References](#references)

## 1. Build a Deployment Pipeline

Before any meaningful improvement can happen, the first constraint must be cleared. We need to make sure there is a single,
automated deployment pipeline to production. Human intervention after the code is integrated should be limited to approving
stage gates to trigger automation where needed.
A well-architected pipeline will build an artifact once and deploy that artifact to all required test environments for validation
and deliver changes safely to production.
It will also trigger all of the tests and provide rapid feedback as near the source of failure as possible. This is critical for
informing the developer who created the defect so that they have the chance to learn the reasons the defect was created and prevent
future occurrences.

### Entangled Architecture - Requires Remediation

[![Entangled Architecture](/images/entangled-pipelines.png)](/images/entangled-pipelines.png)

With an entangled architecture, there is no clear ownership of individual components or their quality. Every team could cause a
defect anywhere in the system because they are not working within product boundaries. The pipeline's quality signal will
be delayed compared to better-optimized team architectures. When a defect is found, it will require effort to identify
which team
created the defect and a multi-team effort to improve the development process to prevent regression. [Continuous delivery](/docs/testing/glossary#continuous-delivery)
is difficult with this architecture.

The journey to CD begins with each team executing [continuous
integration](/docs/glossary/#continuous-integration) on a team branch and those branches are
integrated automatically into a master CI flow daily.

[![Multi-team Branching](/images/multi-team-branching.png)](/images/multi-team-branching.png)

Any breaks in the pipeline should be addressed immediately by the team who owns the branch.

#### Common Entangled Practices

**Team Structure**: Feature teams focused on cross-cutting deliverables instead of product ownership and capability expertise.

**Development **Process**: Long-lived feature branches integrated after features are complete

**Branching**: Team branches with each team working towards CI on their branch and daily integration of team branches
to the trunk that re-runs the team-level tests.

**[Inverted Test Pyramid](https://alisterscott.github.io/TestingPyramids.html)**: The "ice cream cone testing" anti-pattern is
common. However, the teams should be focusing on improving the quality feedback and engineering tests that alert earlier
in the build cycle.

**Pipeline**: Establishing reliable build/deploy automation is a high priority.

**Deploy Cadence / Risk**: Delivery cadence in this architecture tends to be extended. This in turn leads to large code
change delta and high risk.

#### Improvement Plan

Find the architectural boundaries in the application that can be used to divide sub-systems between the
teams to create product teams. This step will realign the teams to a [tightly coupled
architecture](#tightly-coupled-architecture---transitional) with defined ownership, will improve quality outcomes, and
allow them to further decouple the system using the [Strangler](https://martinfowler.com/bliki/StranglerFigApplication.html)](https://martinfowler.com/bliki/StranglerFigApplication.html) process

---

### Tightly Coupled Architecture - Transitional

[![coupled pipelines](/images/coupled-pipelines.png)](/images/coupled-pipelines.png)

With tightly coupled architecture, changes in one portion of the application can cause unexpected changes in another portion of
the application. It's quite common for even simple changes to take days or weeks of analysis to verify the implications of the
change.

Tightly coupled applications have sub-assemblies assigned to product teams along logical application boundaries. This enables each
team to establish a quality signal for their components and have the feedback required for improving their quality process. This
architecture requires a more complicated integration pipeline to make sure each of the components can be tested
individually and as a larger application. Simplifying the pipelines and decoupling the application will result in higher
quality with less overhead.

#### Common Tightly Coupled Practices

**Team Structure**: Product teams focused on further de-coupling sub-systems

**Development Process**: [Continuous integration](/docs/glossary#continuous-integration). Small, tested changes are applied to the trunk as soon as complete on each product team. In addition, a larger CI pipeline is required to frequently run larger tests on the
integrated system, at least once per day.

**Branching**: Because [CI](/docs/glossary#continuous-integration) requires frequent updates to the trunk, [Trunk-Based](https://trunkbaseddevelopment.com)
Development](https://trunkbaseddevelopment.com) is used for CI.

**[Developer Driven Testing](https://medium.com/@LaSoft/developer-driven-testing-991ca1dab63a)**: The team is responsible for
architecting and continuously improving a suite of tests that give rapid feedback on quality issues. The team is also responsible
for the outcomes of poor testing, such as L1 support. This is a critical feedback loop for quality improvement.

**Pipeline**: CI pipeline working to progress to continuous delivery.

**Deploy Cadence / Risk**: Deliveries can be more frequent. Risk is inversely proportional to delivery frequency.

#### Improvement Plan

1. As more changes are needed, the team continues extracting independent domain
   services](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577) with
   [well-defined APIs](https://www.openapis.org/)
2. For infrequently changed portions of the application that are poorly tested, re-writing may result in lost business
   capabilities. Wrapping these components in an API without re-architecting may be a better solution.

---

### Loosely Coupled Architecture - Goal

[![](/images/decoupled-pipelines.png)](/images/decoupled-pipelines.png)

With a loosely coupled architecture, components are delivered independently of each other in any sequence. This reduces
complexity and improves quality feedback loops. This not only relies on clean separations of teams and sub-assemblies but also on mature testing practices that include the use of virtual services to verify integration.

It's critical when planning to decompose to smaller services that [Domain Driven
Design](/docs#domain-driven-design) is used to inform service boundaries, value objects, and team
ownership. Services should use [good micro-service design patterns](/docs/cloud-checklist)

Once we have built our production deployment pipeline, the next most critical constraint to address is the trustworthiness of our
tests.

#### Common Loosely Coupled Practices

**Team Structure**: Product teams maintain independent components with well-defined APIs.

**Development Process**: [Continuous integration](/docs/glossary#continuous-integration). Small, tested changes are applied to the trunk as soon as complete on each product team.

**Branching**: Because [CI](/docs/glossary#continuous-integration) requires frequent updates to the trunk, [Trunk-Based](https://trunkbaseddevelopment.com)
Development](https://trunkbaseddevelopment.com) is used for CI.

**[Developer Driven Testing](https://medium.com/@LaSoft/developer-driven-testing-991ca1dab63a)**: The team is responsible for
architecting and continuously improving a suite of tests that give rapid feedback on quality issues. The team is also responsible
for the outcomes of poor testing, such as L1 support. This is a critical feedback loop for quality improvement.

**Pipeline**: One or more CD pipelines that are independently deployable at any time in any sequence.

**Deploy Cadence / Risk**: Deliveries can occur on demand or immediately after being verified by the pipeline. Risk is
inversely proportional to delivery frequency.

## 2. Stabilize the Quality Signal

Establishing a production pipeline allows us to evaluate and improve our quality signal. Quality gates should
be designed to inform the team of poor quality as close to the source as possible. This goal will be disrupted by
unstable tests.

### Remediating Test Instability

Unstable test results will create a lack of trust in the test results and encourage bypassing test failure. To correct this:

- Remove flaky tests from the pipeline
  to ensure that tests in the pipeline are trusted by the team
- Identify the causes for test instability and take corrective action
  - If the test can be stabilized and provides value, correct it and move it back into the pipeline
  - If it cannot be stabilized but is required, schedule it to run outside the pipeline
  - If not required, remove it

In general, bias should be towards testing **enough**, but not over-testing. Tracking the
duration of the pipeline and enacting a quality gate for maximum pipeline duration (from PR merge to production) is a good way to keep testing efficient.

After stabilizing the quality signal, we can track where most of the defects are detected and the type of defects they
are. Start tracking the trends for the number of defects found in each environment and the root cause distribution of
the defects to inform the test suite improvement plan. Then focus the improvements on moving the majority of defect detection closer to the developer. The ultimate goal is for most defects to be trapped in the developer's environment and not leak into the
deployment pipeline.

## 3. Continuous Improvement

After removing noise from the quality signal, we need to find and remove more waste on a
continuous basis. We start by mapping the deployment process from coding to production delivery and identifying the choke points
that are constraining the entire flow. The process for doing this and the effectiveness are documented in Goldratt's ["Theory of
Constraints" (TOC)](https://www.tocinstitute.org/theory-of-constraints.html). The TOC states that the entire system is constrained
by one constraint and improvement of the system will only be effective once that constraint is resolved.

1. [Identify the system constraint](/docs/vsm).
2. Decide how to exploit the system constraint.
3. Subordinate everything else to the above decisions.
4. Elevate the constraint.
5. If, in the previous steps, a constraint has been broken, go
   back to step one but do not allow the inertia to cause a system constraint.

Some common constraints are:

- **Resource Constraints** - resources such as the number of people who can perform the task, access to environments, etc. which
  block the flow based on its limited capacity for the desired outcomes.
- **Policy Constraints** - policies, practices or metrics that artificially impede flow due to their poor alignment with the overall performance of the system.

Working daily to relentlessly remove constraints is the most important work a team can do. Doing so means they are constantly
testing their improved delivery system by delivering value and constantly improving their ability to do so. Quality, predictability,
stability, and speed all improve.

## References

|Title|Author|
|---|---|
| [Accelerate](https://itrevolution.com/product/accelerate/) | Forsgren, Humble, & Kim - 2018|
| [Engineering the Digital Transformation](https://garygruver.com/engineering-digital-transformation.php)| Gruver - 2019|
|[A Practical Approach to Large-Scale Agile Development: <br> How HP Transformed LaserJet FutureSmart Firmware](https://www.amazon.com/Practical-Approach-Large-Scale-Agile-Development/dp/0321821726)| Gruver et al - 2012|
| [Theory of Constraints](https://www.tocinstitute.org/theory-of-constraints.html)| Goldratt|
