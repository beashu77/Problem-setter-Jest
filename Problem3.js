const axios = require("axios");

function fetchAlbum () {
  return axios
    .get("http://localhost:8080/houses")
    .then((response) => {
      return response.data;
    });
 };

 module.exports= fetchAlbum;