---
title: Source Management
weight: 1
tags:
  - Workflow
  - Testing
  - CI
---

## Use Trunk Based Development

- All branches originate from the trunk
- All branches merge into the trunk
- Branches, if used, are very short-lived
  - The smaller the PR, the easier it is to identify issues. The smaller the change, the less risk associated with that change.
- The trunk can always be built and deployed without breaking production.
  - When needed, use techniques such as [Branch by Abstraction](https://www.branchbyabstraction.com/) or feature flags to ensure backward compatibility.
- The change includes __all__ appropriate automated tests to validate that the change is deliverable.
  - [Unit tests](/docs/testing/unit)
  - [Functional test](/docs/testing/functional)
  - [Contract tests](/docs/testing/contract)
  - etc.
  
## Branching vs. Forking

Use the right pattern for the right reason. Branches are the primary flow for CI
  and are critical for allowing the team to have visibility to work in progress that the team is responsible for completing. Forks
  are how proposed, unplanned changes are made from outside the team to ensure quality control and to reduce confusion from
  unexpected branches.

- Use forks for:
  - Contribution from a contributor outside the team to ensure proper quality controls are followed and to prevent
      cluttering up the team's repository with external contributions that may be abandoned.
- Use branches for:
  - All internal work to keep that work visible to the team.

### Tips

- [Story Slicing](/docs/work-decomposition/story-slicing) helps break
  development work into more easily consumable, testable chunks.
- You don't have to wait for a story/feature to be complete as long as you have tested
  that won't break production.
- Pull requests should be small and should be prioritized over starting any new development.

### Common Issues

Trunk-based development and continuous integration often take workflow adjustments on the team.
The main reasons teams struggle with CI are:

- [Test architecture](/docs/testing)
- [Work that is too big and/or lacks proper refinement](/docs/work-decomposition/work-breakdown)
- Issues with [source code ownership](/docs/workflow-management/source-ownership) (one repo owned by more than one team)
- [Workflow management](/docs/workflow-management/) within the team

---

## References

- [Trunk Based Development](https://trunkbaseddevelopment.com/).
- [Branching by Abstraction](https://www.branchbyabstraction.com/).
- [Feature Flags/Toggles](https://martinfowler.com/articles/feature-toggles.html).

## FAQ

- [Pre-requisites for TBD](https://trunkbaseddevelopment.com/deciding-factors/)
- [Benefits of using TBD](https://trunkbaseddevelopment.com/5-min-overview/)
- [Releasing From Trunk](https://trunkbaseddevelopment.com/release-from-trunk/)
- [Handling Infrequent Releases](https://trunkbaseddevelopment.com/youre-doing-it-wrong/#cherry-pick-of-bug-fixes-from-release-branches-to-the-trunk)
- [Handling Bug Fixes](https://trunkbaseddevelopment.com/branch-for-release/#fix-production-bugs-on-trunk)
- [Handling Incomplete Code/Features](https://trunkbaseddevelopment.com/feature-flags/)
- [Validating Release Quality](https://trunkbaseddevelopment.com/continuous-integration/#ci-services-bots-verifying-human-actions)
- [Transitioning to Trunk Based Development](https://medium.com/super-dispatch/the-transition-to-trunk-based-development-c131fd3ae361)
- [Trunk Based Development- You're doing it wrong](https://trunkbaseddevelopment.com/youre-doing-it-wrong/)

---
