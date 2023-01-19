const prime = require("./Problem1");

describe("Testing the sum function", () => {
    test("Checking the prime number", () => {
      expect(prime([7,15,1,2,3,4,5])).toEqual(expect.arrayContaining([7,3,5]));
    });

    test("Checking the prime number", () => {
        expect(prime([6,8,10,12])).toEqual(expect.arrayContaining([]));
      });
});