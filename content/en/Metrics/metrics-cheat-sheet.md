---
weight: 2
title: Metrics Cheat Sheet
type: docs
tags:
  - metrics
---

## Organizational Metrics

These metrics are important for teams and management to track the health of the delivery system

| Metric                                                      | Meaning                                                                      | Goal of Measuring                                                                                                                                            | Guardrail Metrics                               |
|-------------------------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [Integration/Merge Frequency](./integration-frequency.html) | How frequently code changes are integrated to the trunk for testing          | Reduce the size of change to improve quality and reduce risk                                                                                                 | Defect Rates should not increase                |
| [Build Cycle Time](./build-duration.html)                   | Total duration from commit to production delivery                            | Improve the ability to deliver changes to improve feedback and reduce MTTR                                                                                   | Defect Rates should not increase                |
| [Change Fail %](./change-fail-rate.html)                    | The % of production deploys that are reverted                                | Improve the upstream quality processes                                                                                                                       | Development Cycle Time should not increase      |
| [Code Inventory](./code-inventory.html)                     | Lines of code added or removed that have not been delivered to production    | Reduce the amount of code inventory and move closer to Just In Time delivery.                                                                                | Change Fail % & Defect Rate should not increase |
| [Defect Rate](./defect-rate.html)                           | Number of defects created during a set interval                              | Improve the quality processes in the delivery flow                                                                                                           | Delivery Frequency should not reduce            |
| [Development Cycle Time](./development-cycle-time.html)     | Time from when a story is started until marked "done"                        | Reduce the size of work to improve the feedback from the end user on the value of the work and to improve the quality of the acceptance criteria and testing | Defect Rate should not increase                 |
| [MTTR](./mean-time-to-repair.html)                          | The time from when customer impact begins until it is resolved               | Improve the stability and resilience of both the application and the system of delivery                                                                      | Quality should not decrease                     |
| [Delivery Frequency](./release-frequency.html)              | The frequency that changes are delivered to production                       | Reduce the size of delivered change, improve the feedback loop on quality and increase the speed of value delivery.                                          | Defect Rates should not degrade                 |
| [Work in Progress](./work-in-progress.html)                 | The number of items in progress on the team relative to the size of the team | Reduce the number of items in progress so that the team can focus on completing work vs/ being busy.                                                         | Delivery frequency should not degrade           |

## Team Metrics

These metrics should only be used by teams to inform decision making. They are ineffective for measuring quality, productivity, or
delivery system health.

| Metric                                 | Meaning                                                                                                                                                         | Goal of Measuring                                                                     | Issues with Metric                                                                                |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [Code Coverage](./code-coverage.html)  | The % of code that us executed by test code                                                                                                                     | Prevent unexpected reduction of code coverage. Find code that should be better tested | When coverage goals are set, can generate tests that meet the goals but are ineffective as tests. |
| [Velocity/Throughput](./velocity.html) | The average amount of the backlog delivered during a sprint by the team. Used by the product team for planning. There is no such thing as good or bad velocity. |                                                                                       |                                                                                                   |
