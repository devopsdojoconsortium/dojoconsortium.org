---
title: "Getting Started with Continuous Delivery"
linkTitle: "Getting Started"
weight: 1
description: >
  Practical first steps to begin your Continuous Delivery journey
tags: ["CD", "Getting Started"]
---

{{% pageinfo %}}
This guide provides actionable steps teams can take in their first week to begin implementing Continuous Delivery practices. Start small, measure progress, and build momentum.
{{% /pageinfo %}}

## Before You Begin

Continuous Delivery is a journey, not a destination. You don't need to have everything perfect before you start. Focus on making incremental improvements and learning from each change.

### Prerequisites

- A source code repository with your application
- A basic build process (even if manual)
- At least one deployed environment
- Team buy-in to try new practices

## Week 1: Foundation

### Day 1: Establish Your Baseline

**Action: Measure your current state**

Before improving, understand where you are. Capture these baseline metrics:

```shell
Current State Assessment

Development:
- How long from starting work to merging code? _____ days
- How many branches exist right now? _____
- How long do branches live before merging? _____ days
- How often does the trunk break? _____ times/week

Delivery:
- How long from code merge to production? _____ days/weeks
- How many manual steps in deployment? _____
- What % of deployments require hotfixes? _____%
- How long to restore service after failure? _____ hours
```

**Why this matters:** You can't improve what you don't measure. These numbers will guide your improvement efforts and prove progress.

### Day 2: Define Your Working Agreement

**Action: Create a CI Working Agreement**

Have a team discussion and agree to start with these practices:

```shell
CI Working Agreement (v1)

We agree to:
✓ Merge code to trunk at least once per day
✓ Keep branches alive less than 24 hours
✓ Fix broken builds before starting new work
✓ Include automated tests with every change
✓ Review pull requests within 2 hours
✓ Prioritize completing in-progress work over starting new work

Starting: [DATE]
Review: [DATE + 2 weeks]
```

{{% alert title="Tip" color="primary" %}}
Start with what feels achievable, then tighten the agreement as you improve. It's better to keep a loose agreement than break a strict one.
{{% /alert %}}

### Day 3: Automate Your Build

**Action: Create a scripted build process**

If your build has any manual steps, automate them first.

**Example build script:**

```bash
#!/bin/bash
# build.sh - Single command to build from clean checkout

set -e  # Exit on any error

echo "🔨 Building application..."

# Install dependencies
npm ci  # or: mvn dependency:resolve, pip install -r requirements.txt

# Run linters
npm run lint

# Run tests
npm test

# Build artifacts
npm run build

echo "✅ Build complete! Artifact: dist/app-${VERSION}.tar.gz"
```

**Success criteria:**
- Anyone can build from a clean checkout with one command
- Build includes automated tests
- Build produces the same artifact every time

### Day 4: Set Up Continuous Integration

**Action: Configure automated builds on every commit**

Choose a CI server (GitHub Actions, GitLab CI, Jenkins, etc.) and configure it to:

1. **Trigger on every push to trunk**
2. **Run your build script** (from Day 3)
3. **Fail the build if tests fail**
4. **Notify the team** when builds break

**Minimal GitHub Actions example:**

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
      - run: npm ci
      - run: npm test
      - run: npm run build
```

{{% alert title="Critical" color="warning" %}}
When the build breaks, **stop everything and fix it**. A broken trunk means no one can integrate safely. This is your new highest priority.
{{% /alert %}}

### Day 5: Implement Trunk-Based Development

**Action: Move to short-lived branches**

**Today's changes:**

1. **Delete all long-lived feature branches** (merge or abandon)
2. **Set branch protection rules:**
   ```
   - Require PR reviews (1 reviewer minimum)
   - Require CI to pass
   - Delete branch after merge
   ```
3. **Create a branching guide:**

```shell
Branching Guide

Creating a branch:
  git checkout main
  git pull
  git checkout -b [initials]/[story-id]-[short-description]

Example: git checkout -b brf/JIRA-123-add-login-validation

Working on a branch:
  - Keep changes small (< 400 lines changed)
  - Commit frequently
  - Push at least daily
  - Open PR early (use "Draft" if not ready)

Merging:
  - Merge within 24 hours of creation
  - Delete branch immediately after merge
```

See [Trunk-Based Development](/docs/workflow-management/branching) for detailed patterns.

## Week 2: Delivery Pipeline

### Build a Basic Deployment Pipeline

**Action: Automate deployment to one environment**

Start with your dev or test environment:

```shell
Pipeline Stages (Minimal)

1. Build & Test (automated)
   ↓
2. Deploy to Dev (automated)
   ↓
3. Smoke Test (automated)
   ↓
4. Deploy to Production (manual trigger, automated execution)
```

**Key principles:**
- Same artifact flows through all environments
- Configuration is external to the artifact
- Deployment is scripted (no manual steps)
- Failed deployments stop the pipeline

### Implement Automated Rollback

**Action: Ensure you can roll back automatically**

```bash
#!/bin/bash
# rollback.sh

PREVIOUS_VERSION=$(get_previous_version)

echo "Rolling back to version: $PREVIOUS_VERSION"
./deploy.sh $PREVIOUS_VERSION

# Verify rollback
./smoke-test.sh || echo "⚠️ Rollback verification failed!"
```

## Week 3: Improve Quality Feedback

### Expand Test Coverage

**Action: Add tests for your critical paths**

Priority order:
1. **Integration tests** for API contracts (fastest value)
2. **Unit tests** for business logic
3. **End-to-end tests** for critical user journeys (max 3-5)

See [Testing Quickstart](/docs/testing/testing-quickstart) for detailed testing guidance.

### Speed Up Feedback

**Action: Optimize CI to run under 10 minutes**

```shell
CI Time Budget

Target: < 10 minutes total

- Lint: 30 seconds
- Unit tests: 2 minutes
- Integration tests: 5 minutes
- Build: 2 minutes
- Deploy to dev: 1 minute
```

**If you're over 10 minutes:**
- Run tests in parallel
- Cache dependencies
- Split slow tests into separate pipeline
- Remove or optimize slow tests

## Week 4: Continuous Improvement

### Set Up Metrics Dashboard

**Action: Make key metrics visible**

Track these metrics from Week 1:
- Integration frequency (pushes to trunk/day)
- Build duration
- Build failure rate
- Cycle time (commit to production)

See [Metrics Quickstart](/docs/metrics/metrics-quickstart) for implementation details.

### Hold Your First Retrospective

**Action: Review what's working and what's not**

Retrospective format:
```
Duration: 1 hour

1. Review metrics (10 min)
   - What improved?
   - What got worse?

2. Three questions (30 min)
   - What's slowing us down?
   - What's one thing we could improve?
   - What do we want to try next?

3. Action items (20 min)
   - Pick ONE thing to improve
   - Define success criteria
   - Assign owner
   - Set review date
```

## Common Challenges & Solutions

### "Our branches take 3 days to merge!"

**Root causes:**
- Stories are too large
- PRs are too large
- Async code review process

**Solutions:**
- See [Story Slicing](/docs/work-decomposition/story-slicing)
- Break PRs into < 400 line changes
- Pair program or mob program to eliminate review wait time
- Set team agreement: review within 2 hours

### "We can't merge daily, our work takes weeks!"

**Reality check:** The work doesn't take weeks. The **story** takes weeks.

**Solution:**
- You can merge incomplete features using:
  - [Feature flags](/docs/glossary#feature-flag)
  - [Branch by Abstraction](https://www.branchbyabstraction.com/)
  - Hidden UI elements
  - API versioning

See [Work Breakdown](/docs/work-decomposition/work-breakdown) for techniques.

### "Our tests are too slow!"

**Common issues:**
- Too many E2E tests
- No test parallelization
- Testing anti-patterns (see [Ice Cream Cone](/docs/testing#testing-anti-patterns))

**Solutions:**
- Convert E2E tests to integration tests
- Use [test doubles](/docs/testing/test-doubles)
- Run tests in parallel
- See [Testing Best Practices](/docs/testing/best-practices)

### "We have dependencies on other teams"

**Options:**
1. **Mock the dependency** during development
2. **Use contract testing** to verify compatibility
3. **Reorganize teams** around business capabilities (Conway's Law)

See [CD Problems](/docs/cd/cd-problems) for more blockers and solutions.

## Success Criteria

After 4 weeks, you should have:

✅ **Baseline metrics captured** and visible to the team
✅ **CI working agreement** established and followed
✅ **Automated build** that runs on every commit
✅ **Short-lived branches** (< 24 hours)
✅ **Basic deployment pipeline** to at least one environment
✅ **Team retrospective** scheduled and completed

## Next Steps

Once you've established the foundation:

1. **Reduce cycle time** - See [Development Cycle Time](/docs/metrics/development-cycle-time)
2. **Improve test architecture** - See [Test Patterns](/docs/testing)
3. **Automate production deployment** - Progress from manual trigger to automatic
4. **Implement blue/green deployments** - Enable zero-downtime releases
5. **Add progressive rollout** - Feature flags with percentage-based rollout

## Further Reading

- [CI Working Agreement](/docs/cd#continuous-integration-ci) - Detailed practices
- [CD Roadblocks](/docs/cd/cd-problems) - Common issues and solutions
- [Delivery System Improvement Journey](/docs/cd/delivery-system-improvement-journey) - Long-term roadmap
- [Continuous Delivery Book](https://continuousdelivery.com/) - Jez Humble & David Farley
- [MinimumCD.org](https://minimumcd.org/) - Community-defined CD practices

## Questions?

Common questions teams ask:

**Q: Can we skip steps?**
A: You need the foundation (Days 1-4) before the delivery pipeline will work. After that, adapt to your context.

**Q: What if management won't let us merge daily?**
A: Start by demonstrating value. Show reduced bugs, faster delivery, and improved predictability. Data wins arguments.

**Q: Do we need to do all this before starting CD?**
A: No! This guide IS starting CD. You'll refine practices as you go.

**Q: How do we handle database changes?**
A: Database changes must be backward compatible. Deploy schema changes separately from code changes. More at [CD Problems](/docs/cd/cd-problems).

---

{{% alert title="Remember" color="info" %}}
Continuous Delivery is about building a culture of continuous improvement. Start where you are, measure everything, and make small, frequent improvements.
{{% /alert %}}
