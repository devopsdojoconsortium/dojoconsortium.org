---
title: "E2E Testing"
linkTitle: "E2E Testing"
weight: 4
description: >
  Understanding and implementing End-to-End (E2E) testing in software development
tags: ["Testing", "E2E"]
---

{{% pageinfo %}}
End-to-end tests validate the entire software system, including its integration with external interfaces. They exercise complete production-like scenarios, typically executed after functional testing.
{{% /pageinfo %}}

{{< figure src="/images/testing-images/e2e-test.png" title="E2E Test" >}}

## Types of E2E Tests

### Vertical E2E Tests

Target features under the control of a single team. Examples:

- Favoriting an item and persisting across refresh
- Creating a new saved list and adding items to it

### Horizontal E2E Tests

Span multiple teams. Example:

- Going from homepage through checkout (involves homepage, item page, cart, and checkout teams)

{{% alert title="Note" color="warning" %}}
Due to their complexity, horizontal tests are unsuitable for blocking release pipelines.
{{% /alert %}}

## Recommended Best Practices

 E2E tests should be the least used due to their cost in run time and in maintenance required.
- Focus on happy-path validation of business flows
- E2E tests can fail for reasons unrelated to the coding issues. Capture the frequency and cause of failures so that efforts can be made to make them more stable.
- Vertical E2E tests should be maintained by the team at the start of the flow and versioned with the component (UI or service).
- CD pipelines should be optimized for the rapid recovery of production issues. Therefore, horizontal E2E tests should not be used to block delivery due to their size and relative failure surface area.
- A team may choose to run vertical E2E in their pipeline to block delivery, but efforts must be made to decrease false positives to make this valuable.

## Alternate Terms

"Integration test" and "end-to-end test" are often used interchangeably.

## Resources

- [Testing Strategies in a Microservice Architecture: E2E Introduction](https://martinfowler.com/articles/microservice-testing/#testing-end-to-end-introduction)
- [The Practical Test Pyramid: E2E Tests](https://martinfowler.com/articles/practical-test-pyramid.html#End-to-endTests)
- [Google Test Blog: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

## Example

{{< tabpane langEqualsHeader=true >}}
  {{< tab header="Java" >}}
@Test(priority = 1, dependsOnMethods = { "navigate" })
@Parameters({ "validUserId" })
public void verifyValidUserId(@Optional(TestConstants.userId) String validUserId) throws Exception {
    // Valid UserId Test

    // Act
    homePage.getUserData(validUserId);
    TestUtil.explicitWait(wait, By.xpath(TestConstants.NAME_XPATH));
    
    // Assert
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
