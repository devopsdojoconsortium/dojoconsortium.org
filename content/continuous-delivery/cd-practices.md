---
published: true
title: CD Best Practices
menus:
  - Continuous Delivery
tags:
  - cd
---

## Treat the pipeline as the product

The pipeline's job is to block bad changes. The team's job is to improve its ability to do that.
Thee should only be a single method of delivering changes, the emergency process. Only use the emergency process. If a process will not be used to resolve a critical outage, it should not be happening in the CD pipeline.

## Integrate outside the pipeline. Virtualize inside the pipeline.

Direct integration to stateful dependencies (end to end testing) should be avoided in the pipeline. Tests in the pipeline should be
deterministic and the larger the number of integration points the mor difficult it is to manage state and maintain determinisim. It
**IS** a good way to validate service mocks. However, if done in the pipeline it puts fixing production at risk if the
dependency is unavailable.

## Start with Continuous Integration

Less than 10 minutes from commit to versioned artifact.

## CD Cycle Time

Less than 60 minutes from commit to Production.

## Developers responsible for the full pipeline.

No handoffs. Handoffs cause delay and dilute ownership. The team owns their pipeline and the application they deploy from birth to death.

## All test automation pre-commit

Co-located with the system under test. No handoffs for test automation.

Test engineers reviewing test strategies and test cases prior to construction and continuously reviewing the code base for where testing can be more efficient.
The goal is not 100% coverage. The goal is efficient, fast, effective testing.

## No manual steps

There should be no manual intervention after code is integrated to the trunk. Manual step inject defects.
