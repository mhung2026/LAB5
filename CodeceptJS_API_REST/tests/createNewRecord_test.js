Feature('demo');
//POST
Scenario('Create new record in database',  async({ I }) => {
    const res = await I.sendPostRequest('/create',{       
        "name":"avsa",
        "salary":"123",
        "age":"23"
    });
    I.seeResponseCodeIs(200);
    console.log(res.data);
});
