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