const getData =require("./Problem3");

describe ("Fetching data testing",()=>{

    test("should return 200",()=>{
        expect(getData('/houses').toBe(200))

    });


})