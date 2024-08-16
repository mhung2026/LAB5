Feature('demo');
Scenario('Get a single employee data',  async({ I }) => {
    const id = 22;
    const res = await I.sendGetRequest('/delete/${id}');
    I.seeResponseCodeIsSuccessful();
    console.log(res.data);
});