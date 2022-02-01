
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