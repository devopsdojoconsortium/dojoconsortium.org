---
title: Glossary
weight: 1
tags:
    - Glossary
---

- [Continuous Delivery](#continuous-delivery)
- [Continuous Deployment](#continuous-deployment)
- [Continuous Integration](#continuous-integration)
- [Hard Dependency](#hard-dependency)
- [Soft Dependency](#soft-dependency)
- [Story Points](#story-points)
- [Toil](#toil)
- [Unplanned Work](#unplanned-work)
- [Vertical Sliced Story](#vertical-sliced-story)
- [WIP](#wip)

## Continuous Delivery

The ability to deliver the latest changes to production **on demand**.

## Continuous Deployment

Delivering the latest changes to production **as they occur**.

## Continuous Integration

> Continuous integration requires that every time somebody commits any change, the entire application is built and a comprehensive
> set of automated tests is run against it. Crucially, if the build or test process fails, the development team stops whatever they
> are doing and fixes the problem immediately. The goal of continuous integration is that the software is in a working state all the
> time.
>
> Continuous integration is a practice, not a tool. It requires a degree of commitment and discipline from your development team.
> You need everyone to check in small incremental changes frequently to mainline and agree that the highest priority task on the
> project is to fix any change that breaks the application. If people don't adopt the discipline necessary for it to work, your
> attempts at continuous integration will not lead to the improvement in quality that you hope for.

<small>-- "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment
Automation." - Jez Humble & David Farley</small>

You can find recommended [practices for CI at MimimumCD.org](https://minimumcd.org/minimumcd/ci/)

## Hard Dependency

A hard dependency is something that must be in place before a feature is
delivered. In most cases, a hard dependency can be converted to a soft dependency with feature flags.

## Soft Dependency

A soft dependency is something that must be in place before a feature can be fully functional, but does not block the
delivery of code.

## Story Points

A measure of the relative complexity of delivering a story. Historically, 1 story point was 1 "ideal
day". An ideal day is a day where there are no distractions, the code is flowing, and we aren't waiting on anything. No
such day exists. :wink:

There are many common story point dysfunctions: pointing defects, unplanned work, and [spikes](/docs/work-decomposition/spikes) are some of the more
common. Adjusting points after work is done is another common mistake. The need for story points is a good indication
that we do not understand the work. If we have [decomposed the work](/docs/work-decomposition/behavior-driven-development) correctly, everything should be 1 point.

## Toil

The repetitive, predictable, constant stream of tasks related to
maintaining an application.

[SRE Workbook: Eliminating Toil](https://landing.google.com/sre/workbook/chapters/eliminating-toil/)

## Unplanned Work

Any work that the team inserts before the current planned work. Critical defects and "walk up" requests are unplanned
work. It's important that the team track all unplanned work and the reason so that steps can be taken by the team to
reduce the future impact.

## Vertical Sliced Story

A story should represent a response to a request that can be deployed
independently of other stories. It should be aligned across the tech stack so
that no other story needs to be deployed in concert to make the function work.

Examples:

- Submitting a search term and returning results.
- Requesting user information from a service and receiving a response.

## WIP

Work in progress is any work that has been started but not delivered to the end-user
