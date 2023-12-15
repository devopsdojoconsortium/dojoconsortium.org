---
title: Value Stream Mapping
weight: 9
tags:
  - CD
  - Lean
---

The purpose of the Value Stream Mapping Workshop is to uncover all of the steps required to take an idea from conception to production. The goal is to uncover the following:

- Steps that exist that can be removed
- Steps that require waiting on another step to continue the flow
- Steps that have a high defect rate

We use the outcome to design an improved value stream so we can prioritize the changes required to reduce the waste in the current flow.

## Prerequisites

1. For a "to be" value stream, there must be an established process for value delivery.
2. Everyone who has a touch point in the value stream should be present for the exercise. This includes, but is not
   limited to developers, managers, product owners, and representatives from external teams that have required steps
   between conception and production.
3. Understand terms associated with value stream mapping.
   - Wait time/non-value time: Time between processes where activity is not occurring.
   - Process time/value add time: Time spent executing a step in the value stream.
   - Percent Complete/Accurate: Percentage of work that is not rejected by the next step in the process. i.e. If code fails
     code review 20% of the time, the %C/A is 80%.

## Recommended Practices

When value stream mapping your team, start from delivery and move backward through each step. You are less likely to miss steps in the process.

## Identify the source

_Example_ Team Demo

For each source of _Requests_

- What is the average process time for this step?
- Who is involved in this step?
- What percentage of work is rejected by the next step in the process?

Your team will need to identify these things for each step in the process. Don't forget to identify where your intake process originated, whether that be stakeholder conversations, service desk, etc.

![Process step](/images/process-step.png "process-step.png")

### Identify Rework Loops

After your team has completed the initial value stream map, they have most likely identified a few rework loops. Rework
loops are interruptions in the value stream where steps have to be corrected.

![Rework loops](/images/rework-loop.png "rework-loop.png")

In this example, the team had to fix code review comments 10% of the time before they could be reviewed and merged into master.

### Identify Wait Time

Once your team has completed the above steps, you will go back through the value stream to identify the wait time
between each step in the process. Make sure to take your cadence into account when calculating.

Add your total process time/wait time to get an average lead time. Understand that the value stream is an
estimate/average based on your team's feedback.

![Wait time](/images/wait-time.png "wait-time.png")

## Outcomes

- Process time/wait time of your flow.
- Visual representation of the value stream(s) of the team.
- Possible constraints to your flow based on process time/wait time, rework loops, and percent complete/accurate. You
  can present these on your VSM as kaizen bursts.

[![](/images/value-stream-map.png)](/images/value-stream-map.png)

## Tips

- Review and maintain the value stream map to show wins associated with your team's improvement plan.
- Take into account all potential flows for team processes, and value stream those as well.

## Value

As a team, we want to understand how to value stream map our team processes, so that we may understand our constraints
to delivery and identify ways to improve.

## Acceptance Criteria

- Value stream all things associated with delivering value.
- Create action items of improvement from exercise.

## References

- [Value Stream Mapping Guide](https://creately.com/blog/diagrams/value-stream-mapping-guide/)
- [Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation](https://learning.oreilly.com/library/view/value-stream-mapping/9780071828918/)
