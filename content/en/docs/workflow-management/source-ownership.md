---
title: Source Ownership
weight: 1
tags:
  - Teamwork
  - Ownership
---

**_Delivery and quality are significantly impacted by teams sharing
ownership of the source code. This adds process overhead to ensure everyone knows
what's happening in the code and dilutes quality responsibility._**

## Recommended Practices

- Utilize automated pipelines to help validate that the product remains releasable before and after any code is merged to the trunk.
- Limit ownership of a repository to a single "Two Pizza Team" that decides what code to merge.
- Give all developers on the team access to merge code to the trunk. Give read access to everyone else.
- Use an innersourcing policy so that people outside of the team know how to contribute to your product.

## Tips

- Teams looking to create an [InnerSourcing](https://innersourcecommons.org/) policy can start by applying their Definition of Done to any external contributions.
- No contributions will bypass the team's quality process.
- Automated pipelines validate that PRs from internal and external contributors conform to quality standards.
- All team members have access to merge to the trunk.
- [InnerSourcing](https://innersourcecommons.org/) and/or external contributions **fork the repository they do not branch**.
- Teams no larger than 12 people per team.

## References

- Go check out the [CD Anti Patterns](/docs/cd/cd-anti-patterns)
  page to learn about [Team Structure](/docs/cd/cd-anti-patterns#team-structure)
  and many other anti-patterns to avoid in your journey.

---
