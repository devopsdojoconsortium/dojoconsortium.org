describe("retrieving Hygieia data", () => {
  it("should return counts of merged pull requests per day", async () => {
    const successStatus = 200;
    const result = await hygieiaConnector.getResultsByDay(
      hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
      testConfig.HYGIEIA_TEAMS[0],
      testConfig.getTestStartDate(),
      testConfig.getTestEndDate()
    );

    expect(result.status).to.equal(successStatus);
    expect(result.data).to.be.an("array");
    expect(result.data[0]).to.haveOwnProperty("value");
    expect(result.data[0]).to.haveOwnProperty("dateStr");
    expect(result.data[0]).to.haveOwnProperty("dateTime");
    expect(result.team).to.be.an("object");
    expect(result.team).to.haveOwnProperty("totalAllocation");
  });

  it("should return an empty array if the team does not exist", async () => {
    const result = await hygieiaConnector.getResultsByDay(
      hygieiaConnector.hygieiaConfigs.integrationFrequencyRoute,
      0,
      testConfig.getTestStartDate(),
      testConfig.getTestEndDate()
    );
    expect(result.status).to.equal(successStatus);
    expect(result.data).to.be.an("array");
    expect(result.data.length).to.equal(0);
  });
});
