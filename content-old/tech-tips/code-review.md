---
title: Code Review
weight: 1
---

As Wikipedia puts it, "Code review is systematic examination of computer
source
code. It is intended to find and fix mistakes overlooked in the initial
development phase, improving both the overall quality of software and the
developers' skills."

## Recommended Practices

- Small changes allow for faster code review and enhance the feedback loops.
- Everyone on the team is capable of performing code review.
- Code reviews are the second highest priority for a team behind blocked issues and
  ahead of [WIP](/metrics/work-in-progress).

## Tips

- Automated Code Review processes like linting and static code analysis.
- Code review that there are tests that meet the acceptance criteria agreed upon by
  the team.
- Keep pull requests small. Look in to [Work Decomposition](..//docs/work-decomposition/work-breakdown)
  for guidance.
- As the person being reviewed, remember the 10 Commandments of Code Review
  - Thou shalt not take it personally
  - Thou shalt not marry thy code
  - Thou shalt consider all feedback
  - Thou shalt articulate thy rationale
  - Thou shalt be willing to compromise
  - Thou shalt contribute to others’ code reviews
  - Thou shalt treat submitters how thou would like to be treated
  - Thou shalt not be intimidated by the number of comments
  - Thou shalt not repeat the same mistakes
  - Thou shalt embrace the nits

---

## References

- [The 10 commandments of navigating code reviews](https://techbeacon.com/app-dev-testing/10-commandments-navigating-code-reviews)

## Value

- Finds issues before deployment, saving time and money.
- Increased [Quality](/metrics/quality).
- Decreased [Change Failure Rate](/metrics/change-fail-rate).

## Acceptance Criteria

- Automated checks for standards and complexity.
- Code is reviewed for testing and clarity.
- Pull requests are small and last no more then a day.
- CI tests run upon opening and modifying pull requests.

---
