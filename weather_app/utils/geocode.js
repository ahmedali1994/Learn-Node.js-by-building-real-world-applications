const request = require("request");

const mapboxApi = function (address, callback) {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) + // This method ==> encodeURIComponent(city) <== is to avoid any special character such as ?/^&*%$
    ".json?access_token=pk.eyJ1IjoiYWhtZWRhbGlhYmQiLCJhIjoiY2tibDlmN2pvMTZ3ejJzb2RoMHlsZmpxcyJ9.DVKIykqNJN3j4X_A4tqMBw&limit=1";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service ==>" + error, undefined);
    } else if (response.body.message) {
      callback(response.body.message + " ", undefined);
    } else if (response.body.features.length === 0) {
      callback(response.body.query[0] + " Unvalid value", undefined);
    } else {
      const data = {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        placeName: response.body.features[0].place_name,
      };
      callback(undefined, data); // we know in this case no error will be found
    }
  });
};

module.exports = {
  mapboxApi: mapboxApi,
};
