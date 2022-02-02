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