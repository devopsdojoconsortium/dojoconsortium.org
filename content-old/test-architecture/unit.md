---
published: true
title: Unit Testing
menus:
  - Test Architecture
tags:
  - test
---

> Unit tests are [deterministic tests](../glossary#deterministic-test) that exercise a discrete unit of the application, such as a function, method, or UI component, in isolation to determine whether it behaves as expected.
>
> -- [Testing Glossary](../glossary#unit-test)

When testing the specs of functions, prefer testing public API (methods, interfaces, functions) to private API: the spec of private functions and methods are meant to change easily in the future, and unit-testing them would amount to writing a Change Detector Test, which is an anti-pattern.

![Unit Test](../images/testing-images/unit-test.png#width=50%)

The purpose of unit tests are to:

- Verify the functionality of a unit (method, class, function, etc.) in isolation
- Good for testing hi-complexity logic where there may be many permutations (e.g. business logic)
- Keep cyclomatic complexity low through good separations of concerns and architecture

### Principles

- Unit tests are low-level and focus on discrete units of the application
- All dependencies are typically replaced with test-doubles to remove non-determinism
- Unit tests are fast to execute
- Test Suite is ran after every code change

## Recommended Best Practices

- Run a subset of your test suite based on the part of the code your are currently working on
  - Following TDD practices plus the watch functionality of certain testing frameworks is an easy way to achieve this
- Pre-commit hooks to run the test suite before committing code to version control
  - Verification during PR and during the CI build on the HEAD to verify that earlier verification happened and was effective.
- Discourage disabling of static tests (e.g. skipping tests, ignoring warnings, ignoring code on coverage evaluation, etc)
- Write custom rules (lint, formatting, etc) for common code review feedback

## Resources

- [Unit Testing by Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
- [xUnit Patterns](http://xunitpatterns.com/index.html)

## Examples

```java
@Test
// Mock the userService
public void verifyMockedUserDetails() throws Exception {

  // ===============Arrange===============
  ObjectMapper mapper = new ObjectMapper();
  User userMockData = mapper.readValue(new File(TestConstants.DATA_FILE_ROOT + "user_mock.json"), User.class);

  // This code mocks the getUserInfo method for userService
  // Any call made to the getUserInfo will not make actual method call instead
  // returns the userMockData
  Mockito.when(userService.getUserInfo(TestConstants.userId)).thenReturn(userMockData);

  // ===============Act===============
  RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/user/" + TestConstants.userId)
  .accept(MediaType.APPLICATION_JSON);

  MvcResult mvcResponse = mockMvc.perform(requestBuilder).andReturn();
  String responsePayload = mvcResponse.getResponse().getContentAsString();
  String status = JsonPath.parse(responsePayload).read("$.STATUS");
    Map<String, String> userMap = JsonPath.parse(responsePayload).read("$.payload");

  // ===============Assert===============
  JSONAssert.assertEquals(TestConstants.PARTIAL_MOCK_SUCCESS_PAYLOAD, responsePayload, false); // disable strict
  // validate the expected userMockData is matching with actual userMap Data
  Assert.assertEquals(TestConstants.SUCCESS, status);
  Assert.assertEquals(userMockData.getManager(), userMap.get("manager"));
  Assert.assertEquals(userMockData.getVp(), userMap.get("vp"));
  Assert.assertEquals(userMockData.getOrganization(), userMap.get("organization"));
  Assert.assertEquals(userMockData.getDirector(), userMap.get("director"));
  Assert.assertEquals(userMockData.getCostcenter(), userMap.get("costcenter"));
}
```

```javascript
//TODO
```

## Recommended Tooling

| Platform   | Tools                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Android    | **Framework:** JUnit5<br/>**Assertion:** Google Truth                                                                            |
| iOS        | XCTest                                                                                                                           |
| Web        | **Framework:** jest<br/>**Code Coverage:** instanbul/nyc (jest)                                                                  |
| Java BE    | **Framework:** TestNG, JUnit5<br/>**Mocking:** Powermock, Mockito<br/>**Virtual Services:** Wiremock, Mountebank                 |
| JS/node BE | **Framework:** jest<br/>**Mocking:** nock<br/>**Virtual Services:** Mountebank <br/>**Code Coverage:** instanbul/nyc (jest)<br/> |
