---
title: Complexity and Estimation
aliases: [/work-decomposition/complexity-and-estimation/]
tags: [estimation]
---

When refining work, teams should focus on reducing complexity, minimizing
dependencies, and estimating based on complexity and effort, not time.

Small things can be estimated more accurately than big things because the margin
of error is lower and dependencies are clear. Eliminating or reducing
[hard dependencies](/docs/glossary/#dependency-hard) is critical because the probability that something will
delivered late doubles for every hard dependency. Those
could include database changes, coordination with other teams, or changes that are
tightly coupled with another component.

---

## Recommended Practices

Decompose stories using [Behavior Driven Development](../behavior-driven-development).
This not only helps with feature discovery and with uncovering dependencies, but
also aids with [story slicing](../story-slicing) since each acceptance test
is naturally a thin, vertical
slice.

Prior to refining, use relative sizing to project order of magnitude estimates
for delivery. However, these should not be used for commitments. Committing to
unrefined deliveries increases team allocation with re-work and "Date Driven
Development", reduces quality, and lowers end user satisfaction.

To avoid hard dependencies, first slice stories as small as possible to minimize
the number of possible dependencies. After that, attempt to make any hard
dependencies "soft" with feature flags, API versioning, or other coding
solutions.

### Tips

- Use [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework) to aid in
  estimating complexity.
- If the team does not agree with the estimate, refine further. Avoid "averaging"
  the team's estimate.
- Track estimates against actual to see how consistent the team is.

---
