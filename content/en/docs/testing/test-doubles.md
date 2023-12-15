---
title: Test Doubles

type: docs
---

> Test doubles are one of the main concepts we use to create fast, independent, deterministic and reliable tests. Similar to the way Hollywood uses a \_stunt double\* to film dangerous scenes in a movie to avoid the costly risk a high paid actor gets hurt, we use a _test double_ in early test stages to avoid the speed and dollar cost of using the piece of software the _test double_ is standing in for. We also use _test doubles_ to force certain conditions or states of the application we want to test. _Test doubles_ can be used in any stage of testing but in general, they are heavily used during the initial testing stages in our CD pipeline and used much less in the later stages. There are many different kinds of _test doubles_ such as _stubs_, _mocks_, _spies_, etc.
>
> -- [Testing Glossary](/docs/testing/glossary#test-doubles)

![Test Double](/images/testing-images/test-double.png)

- **<mark>Test Double</mark>**: A test double is a generic term for any case where you replace a production object for testing purposes.
- **<mark>Dummy</mark>**: A dummy is passed around but never actually used. Usually it is just used to fill parameter lists.
- **<mark>Fake</mark>**: A fake actually has a working implementation, but usually takes some shortcut which makes it not suitable for production (an InMemoryTestDatabase is a good example).
- **<mark>Stub</mark>**: A stub provides canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
- **<mark>Spy</mark>**: A spy is a stub that also records some information based on how it was called. One form of this might be an email service that records how many messages it was sent.
- **<mark>Mock</mark>**: A mock is pre-programmed with expectations which form a specification of the calls it is expected to receive. It can throw an exception if it receives a call it doesn't expect and is checked during verification to ensure it got all the calls it was expecting.

## Resources

- [Test Double Patterns](http://xunitpatterns.com/Test%20Double%20Patterns.html)
- [TestDouble](https://martinfowler.com/bliki/TestDouble.html)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
    @Before
    public void init() throws Exception {

    // ===============Arrange===============
    userService = Mockito.spy(userService);
    ObjectMapper mapper = new ObjectMapper();
    // Here we are putting data from user_spy.json
    spyData = mapper.readValue(new File(TestConstants.DATA_FILE_ROOT + "user_spy.json"), User.class);
    Mockito.doReturn(spyData).when(userService).getUserInfo(TestConstants.userId);// spy json data for the user data
    }

    @Test
    // Mock the userService
    public void verifySpyUserDetails() throws Exception {
    
    // ===============Act===============
    User user = userService.getUserInfo(TestConstants.userId); // user data comes from spy
    verify(userService).getUserInfo(TestConstants.userId); // verify the userservice.getUserInfo method is called
    verify(userService, times(1)).getUserInfo(TestConstants.userId);// verify from spy the getUserInfo called one
    
    // ===============Assert===============
    // validate the expected spyData is matching with actual user Data
    Assert.assertEquals(spyData.getManager(), user.getManager());
    Assert.assertEquals(spyData.getVp(), user.getVp());
    Assert.assertEquals(spyData.getOrganization(), user.getOrganization());
    Assert.assertEquals(spyData.getDirector(), user.getDirector());
    Assert.assertEquals(spyData.getDirector(), user.getDirector());
    }

    @After
    public void cleanUp() {
    reset(userService);// Reseting the userServiceSpy
    }
  {{< /tab >}}
{{< /tabpane >}}

## Recommended Frameworks

### Platform Independent Mocking Frameworks

| Framework                                              | Reasoning                                                                                                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [JSON-Server](https://github.com/typicode/json-server) | <ul><li>Simple, great for scaffolding</li><li>Follows REST conventions</li><li>Stateful</li></ul>                                                                        |
| [Mountebank](https://github.com/bbyars/mountebank)     | <ul><li>Allows for more than just HTTP (multi-protocol)</li><li>Simple to use and configure</li><li>Large language support</li></ul>                                     |

### GraphQL

| Framework                                                   | Reasoning                                                                                                                                                                                                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GraphQL-Faker](https://github.com/APIs-guru/graphql-faker) | <ul><li>Supports proxying existing GraphQL APIs.</li><li>Simple GraphQL directive-based data mocking.</li><li>Uses faker.js under the hood.</li></ul>                                                                                                   |
| [GraphQL-Tools](https://github.com/ardatan/graphql-tools)   | <ul><li>Built-in utilities for mocking collections (MockList)</li><li>Great documentation and interoperability with existing GraphQL (NodeJS) solutions.</li></ul> |

### Platform Specific

#### Javascript

| Framework                                               | Reasoning                                              |
| ------------------------------------------------------- | ------------------------------------------------------ |
| [expect(jest)](https://jestjs.io/docs/expect)        | For all generic assertions/mocking                     |
| [jest-dom](https://github.com/testing-library/jest-dom) | For DOM assertions                                     |
| [supertest](https://github.com/visionmedia/supertest)   | For in-process test a http server                      |
| [nock](https://github.com/nock/nock)                    | for http server endpoint assertion/mocking with NodeJS |

For FE mocking, the recommendation is kept more open to allow for other frameworks as necessary, such as [msw](https://mswjs.io/) or [mirage](https://miragejs.com/)

#### Android

| Framework                                                                   | Reasoning                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MockK (Kotlin projects)](http://mockk.io/)                                 | <ul><li>Provides a common when this →then that mocking API in an Idiomatic Kotlin DSL</li><li>Built in support for mocking top level functions, extensions, static objects</li><li>Detailed documentation with examples of how to mock and verify different cases</li><li>Concise and descriptive exception logs</li><li>Minimal configuration per TestClass (limited to resetting state)</li></ul> |
| [MockWebServer](https://github.com/square/okhttp/tree/master/mockwebserver) | <ul><li>Process local mock server</li><li>Embedded in tests, no separate mock execution</li><li>Simplistic but powerful api that can support state</li><li>Easy to use. Start MWS before test, initialize netApi with the baseUrl of the MWS instance, configure in test's // GIVEN phase, stop server after.</li></ul>                                                                             |

#### iOS

For iOS, Apple test frameworks support a rich feature set, documentation and community. As a team we prefer using 1P tooling and adding Homegrown solution on top of it. The reason we do this is because Apple has been notorious in changing API's at rapid iterations. This also results us to constantly update 3P solutions which have a risk of getting discontinued and maintaining them is a challenge. Hence iOS team prefers to use more maintainable solution which would be 1P with additional Homegrown Utilities as required.

#### Java (BE)

| Framework                                                | Reasoning                                                                                                            |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Powermock](https://github.com/powermock/powermock/wiki) | <ul><li>Power mock is actually superset of Mockito.</li><li>Provides Static mocking functionality</li></ul>          |
| [Mockito](https://site.mockito.org/)                     | <ul><li>Standard mocking tool</li><li>Has annotations for easy creation of many mocks at test construction</li></ul> |
