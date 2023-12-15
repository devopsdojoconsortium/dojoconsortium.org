---
title: Contract Driven Development
tags: 
   - Batch Size
   - Testing
   - Planning
   - Evolutionary Development
   - API Management
---

Contract Driven Development is the process of defining the contract changes
between two dependencies during design and prior to construction. This allows
the provider and consumer to work out how components should interact so that
mocks and fakes can be created that allow the components to be developed and
delivered asynchronously.

---

## Recommended Practices

For services, define the expected behavior changes for the affected verbs along
with the payload. These should be expressed as contract tests, the unit test of
an API, that both provider and consumer can use to validate the integration independently.

For more complicated interaction that require something more than simple canned
responses, a common repository that represents a fake of the new service or tools
like [Mountebank](http://www.mbtest.org/) or [WireMock](http://wiremock.org/)
can be used to virtualize more complex behavior. It's important that both
components are testing the same behaviors.

Contract tests should follow [Postel's Law](https://en.wikipedia.org/wiki/Robustness_principle):
`"Be conservative in what you do, be liberal in what you accept from others"`.

### Tips

- For internal services, define the payload and responses in the developer task
  along with the expected functional test for that change.
- For external services, use one of the open source tools that allow recording
  and replaying responses.
- Always create contract tests before implementation of behavior.

---
