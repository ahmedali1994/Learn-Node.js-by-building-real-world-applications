const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=05d9e812c4cd60085742af53f3aefc27&%20query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, response) => {
    const {} = response;
    if (error) {
      callback("Unable to connect to weather service ==>" + error, undefined);
    } else if (response.body.error) {
      callback(response.body.error.info, undefined);
    } else {
      const data = {
        data: response.body.current,
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
