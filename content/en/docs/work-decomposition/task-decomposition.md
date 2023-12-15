---
title: Task Decomposition
weight: 10
tags: 
   - Batch Size
   - Teamwork
---

## What does a good task look like?

A development task is the smallest independently deployable change to implement
acceptance criteria.

---

### Recommended Practices

Create tasks that are meaningful and take less than two days to complete.

```gherkin
Given I have data available for Integration Frequency
Then score entry for Integration Frequency will be updated for teams

Task: Create Integration Frequency Feature Flag.
Task: Add Integration Frequency as Score Entry.
Task: Update Score Entry for Integration Frequency.
```

Use [Definition of Done](/docs/workflow-management/definition-of-done) as your
checklist for completing a development task.

---

### Tips

- If a task includes integration to another dependency, add a simple contract
  mock to the task so that parallel development of the consumer and provider will
  result in minimal integration issues.
- Decomposing stories into tasks allows teams to swarm stories and deliver value
  faster

---
