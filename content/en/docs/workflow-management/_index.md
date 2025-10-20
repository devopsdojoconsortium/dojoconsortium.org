---
title: "Team Workflow"
linkTitle: "Team Workflow"
weight: 3
description: >
  Practices for managing team workflow, making work visible, and optimizing flow from backlog to done
tags: ["Workflow", "Team", "Collaboration"]
---

{{% pageinfo %}}
Effective workflow management means the team collaborates to deliver value rapidly, avoiding work assignment silos and prioritizing completion over starting new work.
{{% /pageinfo %}}

## Overview

Working together as a team is how we move things from "In Progress" to "Done" as rapidly as possible in value sequence. It's important for minimizing {{< glossary "WIP" >}} that the team looks at the backlog as shared work, not pre-assigned tasks.

The key insight: **Flow efficiency matters more than resource efficiency.** Keeping everyone busy doesn't optimize for delivery speed - finishing work does.

## The Three Core Activities

### 1. Make Work Visible

To create and maintain flow of delivery, we need:

- **[Definition of Done](/docs/workflow-management/definition-of-done)** - Shared agreement on what "complete" means
- **[Visualizing Workflow](/docs/workflow-management/visualizing-workflow)** - Physical or virtual board showing work status
- **Prioritized backlog** - Not refined too far ahead (requirements age like milk)
- **WIP limits** - Explicit constraints on started work

Visibility enables:
- Quick identification of bottlenecks
- Team-wide understanding of current state
- Data for improvement decisions
- Accountability without micromanagement

### 2. Do Work

Completed work should:
- Meet the [Definition of Ready](/docs/work-decomposition/definition-of-ready) when starting
- Meet the [Definition of Done](/docs/workflow-management/definition-of-done) when delivered
- Be completable in less than two days
- Flow through the system without handoffs

**Common workflow smells:**

- **Context switching** - Working on multiple items simultaneously
- **Ineffective demos** - Not getting real feedback from stakeholders
- **Multiple team ownership** - Build team, test team, deploy team create handoffs
- **Unclear status** - Can't quickly see what's blocked or at risk
- **Siloed work** - Individuals working in isolation
- **Long code review delays** - PRs waiting days for review
- **[Too much WIP](/docs/workflow-management/limiting-wip)** - More started than can be finished

### 3. Improve Work

An [improvement process](/docs/cd/delivery-system-improvement-journey#3-continuous-improvement) must be in place, centered around feedback loops.

**Common improvement challenges:**

- **Infrequent demos** - Missing opportunities for course correction
- **[Ineffective retrospectives](/docs/workflow-management/retrospective)** - No actions or same issues recurring
- **No time for improvement** - Always fighting fires instead of preventing them
- **Ignored metrics** - Data collected but not acted upon

## Workflow Best Practices

### Source Control & Integration

- **[Branching Strategy](/docs/workflow-management/branching)** - Trunk-Based Development with short-lived branches
- **[Source Ownership](/docs/workflow-management/source-ownership)** - Collective code ownership by the team
- **[Code Review](/docs/workflow-management/code-review)** - Lean, fast reviews that don't block flow

**Key principles:**
- All branches originate from and merge to trunk
- Branches live less than 24 hours
- Small changes (< 400 lines) enable fast review
- Code review is second-highest priority (after unblocking others)

### Team Collaboration

- **[Limiting WIP](/docs/workflow-management/limiting-wip)** - Finish before starting new work
- **[Managing Unplanned Work](/docs/workflow-management/unplanned-work)** - Handle interruptions systematically
- **[Retrospectives](/docs/workflow-management/retrospective)** - Regular inspect-and-adapt cycles
- **Mob/pair programming** - Collaborate on complex work
- **Daily standups** - Quick synchronization, not status reports

**Anti-patterns to avoid:**
- Assigning all tasks at sprint planning
- Working alone on long-lived branches
- Optimizing for individual productivity over team throughput
- Starting new work when current work is blocked

## Measuring Workflow Effectiveness

Track these metrics to identify improvement opportunities:

**Flow Metrics:**
- **[WIP](/docs/metrics/work-in-progress)** - Count of started but unfinished work (lower is better)
- **[Development Cycle Time](/docs/metrics/development-cycle-time)** - Time from starting work to production
- **[Lead Time](/docs/metrics/lead-time)** - Time from request to delivery
- **Throughput** - Work items completed per week

**Quality Metrics:**
- **[Change Fail Rate](/docs/metrics/change-fail-rate)** - Percentage of changes causing issues
- **[Mean Time to Repair](/docs/metrics/mean-time-to-repair)** - Time to restore service after incident
- **Code review time** - How long PRs wait for review

**Target values:**
- WIP: 1-2 items per team member
- Development Cycle Time: < 2 days
- Code review time: < 4 hours
- Change Fail Rate: < 15%

## Common Workflow Problems

### Problem: Too Much WIP

**Symptoms:** Everything in progress, nothing finishing; constant context switching; missed commitments

**Solutions:**
- Set explicit WIP limits per workflow stage
- Swarm on blocked items before starting new work
- Visualize age of work items (highlight old items)
- Prioritize finishing over starting

### Problem: Unplanned Work Disruption

**Symptoms:** Can't complete planned work; constant firefighting; unpredictable delivery

**Solutions:**
- Reserve capacity for unplanned work (20-30%)
- Make unplanned work visible on the board
- Track root causes to enable prevention
- Establish clear escalation criteria

### Problem: Handoffs and Dependencies

**Symptoms:** Waiting on other teams; coordination overhead; delays

**Solutions:**
- Cross-train team members
- Organize teams around value streams, not technical layers
- Automate handoff steps (testing, deployment)
- Use {{< glossary "Trunk-Based Development" >}} to reduce integration delays

## Anti-Patterns

**Resource efficiency over flow efficiency:**
- Keeping everyone "100% utilized" actually slows delivery
- Multitasking reduces quality and increases cycle time
- Solution: Optimize for finishing work, not starting work

**Component teams instead of feature teams:**
- Frontend team, backend team, database team require coordination
- Handoffs between teams add delay and quality issues
- Solution: Cross-functional teams that own complete features

**Long-lived feature branches:**
- Integration delayed until branch merges
- Merge conflicts and integration issues multiply
- Solution: Trunk-Based Development with feature flags

**Skipping retrospectives when "too busy":**
- Never make time to improve the process
- Same problems repeat indefinitely
- Solution: Retrospectives are not optional, they're how we get less busy

## Related Topics

- **[Work Decomposition](/docs/work-decomposition)** - Break work small enough to flow
- **[Testing Patterns](/docs/testing)** - Build quality into the workflow
- **[CI Working Agreement](/docs/cd#continuous-integration-ci)** - Integration practices that enable flow
- **[Value Stream Mapping](/docs/reference/value-stream-mapping)** - Identify bottlenecks and waste

## Further Reading

- [Making Work Visible](https://learning.oreilly.com/library/view/making-work-visible/9781457191428/) - Dominica DeGrandis
- [The Phoenix Project](https://learning.oreilly.com/library/view/the-phoenix-project/9781457191350/) - Gene Kim et al
- [Kanban: Successful Evolutionary Change](https://learning.oreilly.com/library/view/kanban-successful-evolutionary/9780984521425/) - David J. Anderson
- [The Principles of Product Development Flow](https://learning.oreilly.com/library/view/the-principles-of/9781935401001/) - Donald Reinertsen
