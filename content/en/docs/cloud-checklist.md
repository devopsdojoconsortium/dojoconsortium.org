---
title: Cloud Native Checklist

tags:
  - CD
---

- [Cloud Native checklist](#cloud-native-checklist)
- [Principles and Practices](#principles-and-practices)
  - [Small, autonomous, highly-cohesive services](#small-autonomous-highly-cohesive-services)
  - [Hypermedia-driven service interactions](#hypermedia-driven-service-interactions)
  - [Modeled around business concepts](#modeled-around-business-concepts)
  - [Hide internal implementation details](#hide-internal-implementation-details)
  - [Decentralize everything](#decentralize-everything)
  - [Deploy independently](#deploy-independently)
  - [Isolate failure](#isolate-failure)
  - [Highly observable](#highly-observable)
  - [Culture of automation](#culture-of-automation)
  - [References](#references)

## Cloud Native checklist

| Capability                                             | Yes / No |
| ------------------------------------------------------ | -------- |
| Domain Context diagram current with dependencies shown |          |
| Exception logging                                      |          |
| Logs stream or self-purge                              |          |
| Dynamically configurable log levels                    |          |
| Database connections self-heal                         |          |
| Dependency connections self-heal                       |          |
| Service auto-restarts on failure                       |          |
| Automated resource and performance monitoring          |          |
| Have NFRs & SLAs defined for each service              |          |
| Automated alerting for SLAs and NFRs                   |          |
| No manual install steps                                |          |
| Utilize Correlation ID                                 |          |
| Load balanced                                          |          |
| Automated smoke tests after each deployment            |          |
| Heartbeat responds in less than 1 minute after startup |          |
| No start-up ordering required                          |          |
| Minimal critical dependencies                          |          |
| Graceful degradation for non-critical dependencies     |          |
| Circuit breakers and request throttles in place        |          |

## Principles and Practices

While practices may change over time, principles are expected to be less volatile.

### Small, autonomous, highly-cohesive services

- Prefer event-driven, asynchronous communications between services.
- Prefer eventual consistency / replication of select data elements over shared data structures.
- Be cautious about creating shared binary dependencies across services.
- Services are able to be checked out and run locally using embedded DBs, and/or mocked endpoint dependencies as necessary.

### Hypermedia-driven service interactions

- Model resources on the domain.
- Use embedded links to drive resource state transitions.
- [HATEOAS Reference](http://restcookbook.com/Basics/hateoas/)

### Modeled around business concepts

- Produce a system context diagram to understand your system boundaries. Consider following c4 architecture diagramming techniques.
- Follow Domain Driven Design practices to understand your domain early in development, and model your domain in your code.
- Use bounded contexts to isolate service boundaries and converse with canonical-model-based systems.

### Hide internal implementation details

- Model bounded contexts
- Use packaging to scope components.
- Services own their data & hide their databases.
- No database-driven integration.
- Technology-agnostic APIs (ReST).

### Decentralize everything

- Self-service whenever possible.
- Teams own their services (but also consider internal open source practices).
- Align teams to the organization.
- Prefer choreography over orchestration.
- Dumb middleware, smart endpoints.
- Deployable to cloud and local (DC/store) environments

### Deploy independently

- Coexist versioned endpoints.
- Prefer targeted releases of individual services over habitual mass-installs of several services at once.
- Avoid tightly bound client/server stub generation.
- One service per host.
- Blue/green release testing techniques.
- Consumer-driven upgrade decisions.

### Isolate failure

- Don't treat remote calls like local calls.
- Set timeouts appropriately (consider TCP connect and read timeouts in the 90ish-percentiles)
- Apply bulk-heading & circuit breaker patterns to limit fallout of failure.
- Understand and design for what should happen during network partitioning (network failures)
- Use redundancy & load balancing

### Highly observable

- Monitored endpoints.
- Use synthetic transactions to simulate real user behavior.
- Aggregate logs and statistics.
- Use correlation IDs to trace calls throughout the system.

### Culture of automation

- Automated developer driven testing: unit, functional, contract, integration, performance, & etc.
- Deploy the same way everywhere.
- Implement continuous delivery practices.
- [Trunk based development](https://trunkbaseddevelopment.com/) over branching by feature/team/release to promote continuous integration practices.
- **In the face of a lack of automation/provisioning/monitoring, prefer a properly structured monolith over many segregated smaller services.**

### References

- [Building Microservices](http://shop.oreilly.com/product/0636920033158.do) by Sam Newman
- [12 Factor Application](https://12factor.net)
- [Choosing an HTTP Status Code](https://www.codetinkerer.com/2015/12/04/choosing-an-http-status-code.html)
