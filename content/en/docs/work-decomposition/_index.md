---
title: "Work Decomposition"
linkTitle: "Work Decomposition"
weight: 2
description: >
  Breaking down work to enable small batch delivery, faster feedback, and predictable outcomes through story slicing and clear acceptance criteria
tags: ["Work Decomposition", "Planning"]
---

{{% pageinfo %}}
Reducing batch size is one of the most impactful improvements teams can make. Small, well-defined work items lead to faster delivery, higher quality, and better team predictability.
{{% /pageinfo %}}

## Why Work Decomposition Matters

Large stories and epics hide complexity, dependencies, and risk. When we break work into smaller increments, we:

- **Reduce assumptions** - Defining testable acceptance criteria exposes questions early
- **Limit hope creep** - We know within a day if we bit off too much
- **Enable pivoting** - Less sunk cost means easier course correction when requirements change
- **Improve predictability** - Consistent delivery of small items builds trust with stakeholders
- **Reset expectations** - What we thought was "small" is often massive once we see what small really is
- **Increase quality** - Smaller changes are easier to review, test, and validate
- **Reduce risk** - Less code in flight means less to go wrong

### The Cost of Large Batches

Working in large batches creates significant problems:

- **Long cycle times** - Weeks or months instead of days
- **Late discovery** - Problems found after significant investment
- **Estimation difficulty** - Can't accurately predict completion
- **Wasted effort** - When priorities change, large batches must be abandoned
- **Context switching** - Waiting on others while work is incomplete
- **Integration conflicts** - More changes mean more merge conflicts
- **Delayed feedback** - Can't validate assumptions until work is complete

## Target: Stories Delivered in < 2 Days

All completed work should go from "In Progress" to "In Production" in less than two days. This forces:

- Clear, testable acceptance criteria
- Reduced scope per story
- Better decomposition techniques
- Faster feedback loops from production

## Work Decomposition Practices

The following playbooks help teams deliver smaller batches:

### Getting Started

Start here if you're new to work decomposition:

1. **[Definition of Ready](/docs/work-decomposition/definition-of-ready)** - Establish when work is ready to start
2. **[Behavior-Driven Development](/docs/work-decomposition/behavior-driven-development)** - Create testable acceptance criteria
3. **[Story Slicing](/docs/work-decomposition/story-slicing)** - Break large stories into smaller deliveries

### Advanced Techniques

Once you've mastered the basics:

4. **[Task Decomposition](/docs/work-decomposition/task-decomposition)** - Break stories into smallest deployable changes
5. **[Contract-Driven Development](/docs/work-decomposition/contract-driven-development)** - Enable parallel development with API contracts
6. **[Spikes](/docs/work-decomposition/spikes)** - Handle uncertainty through time-boxed research

### Planning & Alignment

For product and program-level work:

7. **[Defining Product Goals](/docs/work-decomposition/defining-product-goals)** - Align team efforts to measurable objectives
8. **[From Roadmap to User Story](/docs/work-decomposition/program-to-user)** - Break down multi-team initiatives
9. **[Work Breakdown](/docs/work-decomposition/work-breakdown)** - Overall decomposition strategy

## Common Problems with Work Breakdown

Teams often struggle with:

- **Stories without testable acceptance criteria** - Can't verify when done
- **Stories too large** - 5-10 days of work or more
- **No Definition of Ready** - Work starts before it's truly ready
- **Work refined too far in advance** - Requirements age like milk, not wine
- **Dependencies on other teams** - Creates waiting and coordination overhead
- **Horizontal slicing** - Database story, API story, UI story (all must deploy together)
- **Technical stories** - "Update framework version" with no user value

See [CD Roadblocks: Work Breakdown](/docs/cd/cd-problems#work-breakdown) for detailed solutions.

## Best Practices

**Do:**
- Break stories vertically (fully functional slice across all layers)
- Include acceptance criteria before starting work
- Deliver stories independently without coordinating with other stories
- Use concrete examples to clarify requirements
- Get feedback early and often

**Don't:**
- Create separate frontend/backend/database stories
- Start work before acceptance criteria are clear
- Batch stories for "efficiency"
- Use story points on defects or spikes
- Adjust points after work is complete

## Related Topics

- **[Development Cycle Time](/docs/metrics/development-cycle-time)** - Measure time from start to production
- **[Branching Strategy](/docs/workflow-management/branching)** - Integrate small changes frequently to trunk
- **[Limiting WIP](/docs/workflow-management/limiting-wip)** - Finish work before starting new items
- **[Definition of Done](/docs/workflow-management/definition-of-done)** - Ensure work meets quality standards

## Success Metrics

Track these to measure improvement:

- Average story size (should trend toward 1-2 days)
- Stories completed per week (throughput)
- Percentage of stories meeting Definition of Ready
- Number of stories requiring rework after starting
- Development cycle time (start to production)

## Further Reading

- [Story Splitting Flowchart](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/) - Visual guide to slicing techniques
- [Example Mapping](https://cucumber.io/blog/bdd/example-mapping-introduction/) - Collaborative technique for exploring requirements
- [INVEST Criteria](https://www.agilealliance.org/glossary/invest/) - Independent, Negotiable, Valuable, Estimable, Small, Testable
- [Elephant Carpaccio](https://docs.google.com/document/d/1TCuuu-8Mm14oxsOnlk8DqfZAA1cvtYu9WGv67Yj_sSk/) - Exercise for practicing vertical slicing
