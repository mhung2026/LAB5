Feature('demo');
Scenario('Get a single employee data',  async({ I }) => {
    const id = 1;
    const res = await I.sendGetRequest('/employee/${id}');
    // I.seeResponseCodeIsSuccessful();
    I.seeResponseCodeIs(200);
    console.log(res.data);

});