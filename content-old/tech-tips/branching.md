---
title: Source Branching
weight: 1
---

> _Trunk-based development, is a requirement for Continuous Integration._

## Recommended Practices

- All changes begin with a branch from trunk and integrate back to the trunk.
  - Branches should live no longer than 24 hours. The smaller the PR, the easier it is to identify issues. The smaller the change, the less risk associated with that change.
  - Pull requests reviewed by a second party are a compliance requirement.
- Trunk can always be built and deployed without breaking production.
  - When needed, use techniques like the Branch by Abstraction pattern or feature flags to ensure backwards compatibility.
- All changes to trunk include _all_ appropriate automated tests.
  - [Unit tests](../../test-architecture/unit)
  - [Functional test](../../test-architecture/functional)
  - [Contract tests](../../test-architecture/contract)
  - etc.
- Branching vs. Forking: It is important that the right process be use for the right reason. Branches are the primary flow for CI
  and are critical for allowing the team to have visibility to work in progress that the team is responsible for completing. Forks
  are how proposed, unplanned changes are made from outside the team to ensure quality control and to reduce confusion from
  unexpected branches.
  - Forks should be used for:
    - Contribution from a contributor outside the team to ensure proper quality controls are followed.
    - Contribution that may be abandoned and that lost work will not impact team goals.
  - Branches should be for:
    - All planned work done inside the team to prevent lost work due to illness or emergency.

### Tips

- [Story Slicing](../../work-decomposition/story-slicing) helps break
  development work into more easily consumable, testable chunks.
- You don't have to wait to be story/feature complete as long as you have tested
  and won't break production.
- Pull requests should be small and should be prioritized over starting new development.

### Common Issues

Trunk based continuous integration often takes workflow adjustments on the team.
The main reasons teams struggle with CI are:

- [Test architecture](../../test-architecture/cd-testing)
- [Work that is too big and / or lacks proper refinement](../../work-decomposition/work-breakdown)
- Issues with [source code ownership](../source-ownership) (one repo owned by more than one team)
- [Workflow management](../../workflow-management/workflow-process) within the team

---

## References

- [Trunk Based Development](https://trunkbaseddevelopment.com/).
- [Branching by Abstraction](https://www.branchbyabstraction.com/).
- [Feature Flags/Toggles](https://martinfowler.com/articles/feature-toggles.html).

---

## Value

As a team, the use of trunk-based development enhances our ability to
deliver small, value adding, functional enhancements to trunk while
also decreasing the time it takes to get feedback on our changes.

## Acceptance Criteria

- All Development begins with branching from trunk.
- The artifact resulting from changes to trunk is running in production.
- Branches live an average of less than 24 hours.
- Team members hold each other accountable to the size and frequency of integrations.
- Repositories only have short-lived branches and trunk.

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
