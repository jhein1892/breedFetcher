const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0){
      callback(error, null);
      return;
    }
    if (error) {
      callback(error, null);
      return;
    } else {
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = fetchBreedDescription;