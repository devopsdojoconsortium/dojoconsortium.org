---

type: docs
title: Customer Experience Alarms
linkTitle: Experience Alarms
tags:
  - Testing
---

> Customer Experience Alarms are a type of active alarm. It is a piece of software that sends requests to your system much like a user would. We use it to test the happy-path of critical customer workflows. These requests happen every minute (ideally, but can be as long as every 5 minutes). If they fail to work, or fail to run, we emit metrics that cause alerts. We run these in all of our environments, not just production, to ensure that they work and we catch errors early.
>
> -- [Testing Glossary](/docs/testing/glossary#customer-experience-alarms)

These are different than having log-based alarms because we can't guarantee that someone is working through all of the golden-path workflows for our system at all times. If we rely entirely on logs, we wouldn't know if the golden workflows are accurate when we deploy at 3am on a Saturday due to an automated process.

These tests have a few important characteristics:

- They are run in all environments, including production.
- They aren't generated from UI workflows, but rather from direct API access
- They ideally run every minute.
- If they don't work (in production) they page someone. Even at 3am.

### Alternate Terms

- Synthetic Probes (Google)
- Canary (Amazon, although it doesn't mean what Canary means here)
