---
title: "Test Doubles"
linkTitle: "Test Doubles"
weight: 6
description: >
  Understanding and implementing Test Doubles in software testing
tags: ["Testing", "Test Doubles"]
---

{{% pageinfo %}}
Test doubles are used to create fast, independent, deterministic, and reliable tests. They stand in for real components, similar to how stunt doubles are used in movies.
{{% /pageinfo %}}

{{< figure src="/images/testing-images/test-double.png" title="Test Double" >}}

## Types of Test Doubles

{{% alert title="Key Concepts" color="primary" %}}

- **Test Double**: Generic term for any production object replacement in testing
- **Dummy**: Passed around but never used; fills parameter lists
- **Fake**: Has a working implementation, but not suitable for production
- **Stub**: Provides canned answers to calls made during the test
- **Spy**: A stub that records information about how it was called
- **Mock**: Pre-programmed with expectations, forming a specification of expected calls
{{% /alert %}}

## Resources

- [Test Double Patterns](http://xunitpatterns.com/Test%20Double%20Patterns.html)
- [TestDouble](https://martinfowler.com/bliki/TestDouble.html)

## Example

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
@Before
public void init() throws Exception {
    userService = Mockito.spy(userService);
    ObjectMapper mapper = new ObjectMapper();
    spyData = mapper.readValue(new File(TestConstants.DATA_FILE_ROOT + "user_spy.json"), User.class);
    Mockito.doReturn(spyData).when(userService).getUserInfo(TestConstants.userId);
}

@Test
public void verifySpyUserDetails() throws Exception {
    User user = userService.getUserInfo(TestConstants.userId);
    verify(userService).getUserInfo(TestConstants.userId);
    verify(userService, times(1)).getUserInfo(TestConstants.userId);

    Assert.assertEquals(spyData.getManager(), user.getManager());
    Assert.assertEquals(spyData.getVp(), user.getVp());
    Assert.assertEquals(spyData.getOrganization(), user.getOrganization());
    Assert.assertEquals(spyData.getDirector(), user.getDirector());
}

@After
public void cleanUp() {
    reset(userService);
}
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Frameworks

### Platform Independent Mocking Frameworks

| Framework | Reasoning |
|-----------|-----------|
| [JSON-Server](https://github.com/typicode/json-server) | Simple, great for scaffolding; Follows REST conventions; Stateful |
| [Mountebank](https://github.com/bbyars/mountebank) | Allows for more than just HTTP (multi-protocol); Simple to use and configure; Large language support |

### GraphQL

| Framework | Reasoning |
|-----------|-----------|
| [GraphQL-Faker](https://github.com/APIs-guru/graphql-faker) | Supports proxying existing GraphQL APIs; Simple GraphQL directive-based data mocking; Uses faker.js under the hood |
| [GraphQL-Tools](https://github.com/ardatan/graphql-tools) | Built-in utilities for mocking collections (MockList); Great documentation and interoperability with existing GraphQL (NodeJS) solutions |

### Platform Specific

#### Javascript

| Framework | Reasoning |
|-----------|-----------|
| [expect(jest)](https://jestjs.io/docs/expect) | For all generic assertions/mocking |
| [jest-dom](https://github.com/testing-library/jest-dom) | For DOM assertions |
| [supertest](https://github.com/visionmedia/supertest) | For in-process test a http server |
| [nock](https://github.com/nock/nock) | For http server endpoint assertion/mocking with NodeJS |

{{% alert title="Note" color="info" %}}
For FE mocking, consider other frameworks as necessary, such as [msw](https://mswjs.io/) or [mirage](https://miragejs.com/)
{{% /alert %}}

#### Android

| Framework | Reasoning |
|-----------|-----------|
| [MockK (Kotlin projects)](http://mockk.io/) | Provides a common when this →then that mocking API in an Idiomatic Kotlin DSL; Built-in support for mocking top-level functions, extensions, static objects; Detailed documentation with examples |
| [MockWebServer](https://github.com/square/okhttp/tree/master/mockwebserver) | Process local mock server; Embedded in tests, no separate mock execution; Simplistic but powerful API that can support state |

#### iOS

{{% alert title="iOS Approach" color="warning" %}}
For iOS, we prefer using Apple test frameworks with homegrown solutions on top. This approach helps manage rapid API changes and reduces dependency on potentially discontinued third-party solutions.
{{% /alert %}}

#### Java (BE)

| Framework | Reasoning |
|-----------|-----------|
| [Powermock](https://github.com/powermock/powermock/wiki) | Superset of Mockito; Provides Static mocking functionality |
| [Mockito](https://site.mockito.org/) | Standard mocking tool; Has annotations for easy creation of many mocks at test construction |
