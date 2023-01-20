const axios = require("axios");
const  fetchAlbum  = require("./Problem3");

jest.mock("axios");

test("mock axios get function", async () => {
    expect.assertions(1);
    const data = [
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
    const payload = { data: data };
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(fetchAlbum()).resolves.toEqual(data);
  });