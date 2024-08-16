Feature('demo');
Scenario('Update an employee record',  async({ I }) => {
    const id = 1;
    const res = await I.sendPutRequest('/update/${id}');
    // I.seeResponseCodeIsSuccessful();
    I.seeResponseCodeIs(200);
    console.log(res.data);
});