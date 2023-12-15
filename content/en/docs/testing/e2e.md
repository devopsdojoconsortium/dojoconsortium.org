---
title: E2E Testing

type: docs
---

> End to end tests are typically [non-deterministic](/docs/testing/glossary#non-deterministic-test) tests that validate the software system along with its integration with external interfaces. The purpose of end-to-end Test is to exercise a complete production-like scenario. Along with the software system, it also validates batch/data processing from other upstream/downstream systems. Hence, the name "End-to-End". End to End Testing is usually executed after [functional testing](/docs/testing/glossary#functional-test). It uses actual production like data and test environment to simulate real-time settings
>
> -- [Testing Glossary](/docs/testing/glossary#end-to-end-test)

End to end tests have the advantage of exercising the system in ways that [functional tests](/docs/testing/glossary#functional-test) cannot. However, they also have
the disadvantage of being slower to provide feedback, require more state management, constant maintenance, and can fail for reasons unrelated to code defects. As such, it is recommended
that they be the smallest number of tests executed.

!["E2E Test"](/images/testing-images/e2e-test.png)

End-to-end tests are segmented into two categories: vertical and horizontal tests.

### Vertical E2E Tests

Vertical tests are end to end tests which target features under the control of a single team. Examples of these may be "when I click the heart icon on an item, it's favorited and that persists across a refresh" or "a user can create a new saved list and add items to it".

### Horizontal E2E Tests

A horizontal test, by contrast, spans multiple teams. An example of this may be going from the homepage through checkout. That involves coordination across the homepage, item page, cart, and checkout teams.

Because of the inherent complexity of horizontal tests (multi-team), they are unsuitable for blocking release pipelines.

## Recommended Best Practices

* E2E tests should be the least used due to their cost in run time and in maintenance required.
* Focus on happy-path validation of business flows
* E2E tests can fail for reasons unrelated to the coding issues. Capture the frequency and cause of failures so that efforts can be made to make them more stable.
* Vertical E2E tests should be maintained by the team at the start of the flow and versioned with the component (UI or service).
* CD pipelines should be optimized for the rapid recovery of production issues. Therefore, horizontal E2E tests should not be used to block delivery due to their size and relative failure surface area.
* A team may choose to run vertical E2E in their pipeline to block delivery, but efforts must be made to decrease false positives to make this valuable.

## Alternate Terms

Integration test and end to end are often used internchangeably.

## Resources

* [Testing Strategies in a Microservice Architecture: E2E Introduction](https://martinfowler.com/articles/microservice-testing/#testing-end-to-end-introduction)
* [The Practical Test Pyramid: E2E Tests](https://martinfowler.com/articles/practical-test-pyramid.html#End-to-endTests)
* [Google Test Blog \* Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

## Examples

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
    @Test(priority = 1, dependsOnMethods = { "navigate" })
    @Parameters({ "validUserId" })
    public void verifyValidUserId(@Optional(TestConstants.userId) String validUserId) throws Exception {

    // ************************************************************
    // Valid UserId Test
    // ************************************************************
    
    // ===============Act===============
    homePage.getUserData(validUserId);
    TestUtil.explicitWait(wait,By.xpath(TestConstants.NAME_XPATH));
    
    // ===============Assert===============
    Assert.assertEquals(homePage.getName(), TestConstants.NAME, TestConstants.NAME_CONFIRM);
    Assert.assertEquals(homePage.getManagerName(), TestConstants.MANAGER_NAME,
        TestConstants.MANAGER_NAME_CONFIRM);
    Assert.assertEquals(homePage.getVpName(), TestConstants.VP_NAME, TestConstants.VP_NAME_CONFIRM);
    Assert.assertEquals(homePage.getOrgName(), TestConstants.ORG_NAME, TestConstants.ORG_NAME_CONFIRM);
    Assert.assertEquals(homePage.getDirName(), TestConstants.DIR_NAME, TestConstants.DIR_NAME_CONFIRM);
    Assert.assertEquals(homePage.getCcName(), TestConstants.CC_NAME, TestConstants.CC_NAME_CONFIRM);
    }
  {{< /tab >}}
{{< /tabpane >}}
