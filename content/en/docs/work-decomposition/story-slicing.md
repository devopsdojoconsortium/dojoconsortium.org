---
title: Story Slicing
tags: 
   - Batch Size
   - Teamwork
---

Story slicing is the activity of taking large stories and splitting them into
smaller, more predictable deliveries. This allows the team to deliver higher
priority changes more rapidly instead of tying those changes to others that may
be of lower relative value.

---

## Recommended Practices

Stories should be sliced vertically.
That is, the story should be aligned such that it fulfills a consumer request
without requiring another story being deployed. After slicing, they should still
meet the [INVEST principle](/docs/glossary).

Example stories:

```gherkin
As an hourly associate I want to be able to log my arrival time so that I can be
 paid correctly.
```

```gherkin
As a consumer of item data, I want to retrieve item information by color so that
 I can find all red items.
```

Stories should **not** be sliced along tech stack layer or by activity. If you
need to deploy a UI story and a service story to implement a new behavior, you
have sliced horizontally.

### Do not slice by tech stack layer

- UI "story"
- Service "story"
- Database "story"

### Do not slice by activity

- Coding "story"
- Review "story"
- Testing "story"

## Tips

- If you're unsure if a story can be sliced thinner, look at the acceptance
  tests from the [BDD activity](/docs/work-decomposition/behavior-driven-development) and see if it
  makes sense to defer some of the tests to a later release.

- While stories should be sliced vertically, it's quite possible that multiple
  developers can work the story with each developer picking up a task that
  represents a layer of the slice.

- Minimize [hard dependencies](/docs/glossary/#dependency-hard) in a story. The odds of delivering on time for any
  activity are `1 in 2^n` where `n` is the number of hard dependencies.

---
