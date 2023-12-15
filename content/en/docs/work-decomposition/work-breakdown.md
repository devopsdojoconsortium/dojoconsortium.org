---
title: Work Decomposition
weight: 1
tags: 
   - Batch Size
   - Teamwork
   - Planning
   - Product Ownership
---

In order to effectively understand and implement the work breakdown flow, the
team needs to have the following prerequisites and understandings.

- [Definition of Ready](/docs/work-decomposition/definition-of-ready)
- [Definition of Done](/docs/workflow-management/definition-of-done)
- Backlog refinement cadence with the appropriate team members and stakeholders involved

---

## Work Breakdown Process

The goal of the work breakdown process is to decompose work into small batches
that can be delivered frequently, multiple times a week, to deliver value faster with less rework.

The general work breakdown process involves:

![Work Breakdown Flow](/images/work-breakdown.png#width=80%)

It is important that the team keep these tips in mind when decomposing work:

1. Known poor quality should not flow downstream. This includes acceptance criteria that require interpretation. If the
   acceptance criteria cannot be understood by the whole team then we are developing defects, not value.
2. Refining work requires significant brainpower and is the primary quality process. Meetings should be planned around
   this. Hold them when people are mentally alert and time box them to prevent mental fatigue.
3. Good acceptance criteria come from good communication. Avoid the following anti-patterns:
   1. Someone outside the team writes acceptance criteria and hands it to the team. Since the team was not involved with
      the conversation, there's no chance to uncover assumptions and the team has less investment in the outcomes.
   2. One person on the team writes acceptance criteria. The same problem is above.
   3. Each team member is assigned work based on their expertise. This removes communication and also ensures that
      people are only focused on understanding **their** tasks. Again, the team as a whole isn't invested in the
      outcomes. This typically results in finger-pointing when something fails. Also, if someone is unavailable, the
      rest of the team lacks context to pick it up.
4. Refining should be focused on outcomes, not volume. If we have a 1-hour meeting and 10 stories to refine, it's better
   to have one fully refined story we can work on than 10 partially refined stories that we'll "figure out during
   development". Stop refining a story when we agree on the acceptance criteria or agree it's blocked and needs more
   information. Only then should we move to the next story. Stop the meeting at the scheduled time.

![Workflow](/images/work-breakdown-flow.png#width=10%)

### Intake/Product Ideas

Ideas become epics with defined outcomes, clear goals and value.
Epics become a list of features.

Common struggles for teams when breaking down ideas into epics and features:

- [Unclear requirements](/docs/work-decomposition/behavior-driven-development)
- [Unclear goals](/docs/work-decomposition/defining-product-goals)

---

### Refining Epics/Features into Stories

Stories are observable changes that have clear acceptance criteria and can be
completed in less than two days. Stories are made up of one or more tasks.

Typical problems teams experience with decomposition are:

- [Stories are too big or complex](/docs/work-decomposition/story-slicing)
- [Stories lack testable acceptance criteria](/docs/work-decomposition/behavior-driven-development)
- [Lack of dependency knowledge](/docs/work-decomposition/contract-driven-development)
- [Managing research tasks](/docs/work-decomposition/spikes)

---

### Refining Stories into Development Tasks

- Tasks are independently deployable changes that can be merged to trunk daily.
- Breaking stories down into tasks gives teams the ability to swarm work and deliver value faster.
- For teams to visualize tasks required to implement scenarios, they need to understand what a [good task](/docs/work-decomposition/task-decomposition) looks like.

---

### Measuring Success

Tracking the team's [Development Cycle Time](/docs/metrics/development-cycle-time) is the best way to judge improvements
to decomposition. Stories should take 1-2 days to deliver and should not have rework, delays waiting for
explanations, or dependencies on other stories or teams.
