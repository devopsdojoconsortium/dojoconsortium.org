---
title: "Definition of Ready"
linkTitle: "Definition of Ready"
weight: 1
description: >
  Team-agreed criteria that defines when work is ready to begin, helping manage uncertainty and set clear expectations
tags: ["Work Decomposition", "Planning", "Team"]
---

_Is it REALLY Ready?_

A Definition of Ready is a set of criteria decided by the team that defines when
work is ready to begin. The goal of the Definition of Ready to help the team
decide on the level of uncertainty that they are comfortable with taking on with
respect to their work. Without that guidance, any work is fair game. That is a
recipe for confusion and disaster.

---

## Recommended Practices

When deciding on a Definition of Ready, there are certain minimum criteria that
should always be there. These are:

- Description of the value the work provides (Why do we want to do this?)
- Testable Acceptance Criteria (When do we know we've done what we need to?)
- The team has reviewed and agreed the work is ready (Has the team seen it?)

However, the context of a team can make many other criteria applicable. Other
criteria could include:

- Wireframes for new UI components
- Contracts for APIs/services we depend on
- All relevant test types identified for subtasks
- Team estimate of the size of the story is no more than 2 days

The Definition of Ready is a living document that should evolve over time as
the team works to make their delivery system more predictable. The most
important thing is to actually enforce the Definition of Ready. If it's not
enforced, it's completely useless.

1. If any work in "Ready to Start" does not meet the Definition of Ready, move
   it back to the Backlog until it is refined.
2. Any work that is planned for a sprint/iteration must meet the Definition of
   Ready. Do not accept work that isn't ready!
3. If work needs to be expedited, it needs to go through the same process.
   (Unless there is an immediate production impact, of course)

---

## Tips

1. Using [Behavior Driven Development](/docs/work-decomposition/behavior-driven-development) is one
   of the best ways to define testable acceptance criteria.
2. Definition of Ready is also useful for support tickets or other types of work
   that the team can be responsible for. It's not just for development work!
3. It's up to everyone on the team, including the Product Owner, to make sure
   that non-ready work is refined appropriately.
4. The recommended DoR for CD is that any story can be completed, either by the team or a single developer, in 2 days or less

---

## Be Careful: The Hidden Dangers of a Definition of Ready

A Definition of Ready can help you set boundaries, but it can also become a **bureaucratic gate** that slows you down. When you treat it like a contract or a checklist to pass, you create a **false sense of certainty** that doesn’t exist in complex work.

If you wait until everything is perfectly known, you’ll block learning and delay value. Teams that overuse readiness criteria often reject valuable but unclear work, mistaking uncertainty for risk.

Scrum is **empirical**, not linear. Use the Definition of Ready to create enough shared understanding to begin, **not to eliminate uncertainty**. If it stops the flow of learning, it has become part of the problem, not the solution.

---
