const axios =require("axios")

function getData(endpoint) {
    axios
  .get(`http://localhost:8080${endpoint}`)
  .then(function (response) {
    console.log(response);
    return response
  });
  }

module.exports = getData;
