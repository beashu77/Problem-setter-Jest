const dataPromoted = require("./problem2");
describe("you are given list of promoted and not promoted students.", () => {
  test("List promoted and not promoted", () => {
    let data = [
        {
          name: "Hewie",
          age: 9,
          promoted: true,
          gender: "Male",
        },
        {
          name: "Brantley",
          age: 14,
          promoted: true,
          gender: "Female",
        },
        {
          name: "Sophie",
          age: 8,
          promoted: true,
          gender: "Female",
        },
        {
          name: "alvin",
          age: 14,
          promoted: false,
          gender: "Male",
        },
      ];

    let result = {
        totalPromoted: 3,
        totalPromotedAvgAge: 10,
        totalPromotedUnder15: 3,
        totalAgePromotedMale: 9,
        totalPromotedFemaleAscByAge:  [
            { name: 'Brantley', age: 14, promoted: true, gender: 'Female' },
            { name: 'Sophie', age: 8, promoted: true, gender: 'Female' }
          ]
      }
      expect(dataPromoted(data)).toEqual(result);
  });
});
