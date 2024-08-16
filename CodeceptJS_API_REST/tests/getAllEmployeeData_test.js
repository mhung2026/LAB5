Feature('demo');
Scenario('Get all employee data',  async({ I }) => {
    const res = await I.sendGetRequest('/employees');
    console.log(res.data);
});
