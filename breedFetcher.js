const request = require('request');
const breedRequest = process.argv.slice(2);

request(`https:/,/api.thecatapi.com/v1/breeds/search?q=${breedRequest}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('URL is wrong');
    return;
  }
  if (data.length === 0) {
    console.log("This doesn't exist");
  } else {
    console.log(data[0].description);
  }
});
