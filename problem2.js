function dataPromoted(arr) {
  let totalPromoted = 0;
  let totalPromotedAvgAge = 0;
  let totalPromotedAge = 0;
  let totalPromotedUnder15 = 0;
  let totalAgePromotedMale = 0;
  let totalPromotedFemaleAscByAge = [];
  arr.map((elem) => {
    if (elem.promoted) {
      totalPromotedAge += elem.age;
      totalPromoted++;
      if (elem.age < 15) {
        totalPromotedUnder15++;
      }
      if (elem.gender === "Male") {
        totalAgePromotedMale += elem.age;
      } else {
        totalPromotedFemaleAscByAge.push(elem);
      }
    }
  });

  let ans ={
    totalPromoted: totalPromoted,
    totalPromotedAvgAge: Number((totalPromotedAge / totalPromoted).toFixed(0)),
    totalPromotedUnder15: totalPromotedUnder15,
    totalAgePromotedMale: totalAgePromotedMale,
    totalPromotedFemaleAscByAge: totalPromotedFemaleAscByAge
  }

  return ans;


}
 module.exports = dataPromoted;
