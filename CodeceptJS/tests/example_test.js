Feature('example');

Scenario('test something',  async({ I }) => {
    const res = await I.sendGetRequest('/employees');
    I.seeResponseCodeIs(200)
    console.log(res.data);
});
