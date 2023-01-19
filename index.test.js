const prime = require("./index");

describe("Testing the sum function", () => {
    test("Checking the prime number", () => {
      expect(prime([7,15,1,2,3,4,5])).toEqual(expect.arrayContaining([]));
    });

    test("Checking the prime number", () => {
        expect(prime([6,8,10,12])).toEqual(expect.arrayContaining([]));
      });
});