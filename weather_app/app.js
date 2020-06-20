const mapbox_api = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const request = require("request"); //require the request to use it

mapbox_api.mapboxApi(
  "Cleveland",
  (error, { latitude, longitude, placeName } = {}) => {
    //const { latitude, longitude, placeName } = data; // 5-es6 object Destructuring syntax new syntax used here data is the object and { latitude, longitude, placeName } are local variables based on the object properties
    if (error) {
      return console.log(error);
    } else {
      console.log(placeName);
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log(error);
        }
        console.log(forecastData);
      });
    }
  }
);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// request({ url: url }, function (error, response) {
//   //request function require two thing 1_ object 2_ function with two parameters the first one is error and it will catch the error and the second one is the response that will return the .json
//   const data = JSON.parse(response.body); // Here we need to parse the string(Json file) to object to access. in this case we are interested in response.body only
//   console.log(data.current);
// });
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//This is similar code but we don't have to manually parse json in this example
// const url =
//   "http://api.weatherstack.com/current?access_key=05d9e812c4cd60085742af53f3aefc27&%20query=&units=f"; // save the url as string. &units=f when you add this it will change the unit of the temp

// request({ url: url, json: true }, function (error, response) {
//   if (error) {
//     console.log("Unable to connect to weather service ==>" + error);
//   } else if (response.body.error) {
//     console.log(response.body.error.info);
//   } else {
//     console.log(response.body.current);
//   }
//   // we added anther property {json: true} this will parse it to object without using the parse method
// });

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// const mapbox =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Cleveland.json?access_token=pk.eyJ1IjoiYWhtZWRhbGlhYmQiLCJhIjoiY2tibDlmN2pvMTZ3ejJzb2RoMHlsZmpxcyJ9.DVKIykqNJN3j4X_A4tqMBw&limit=1";

// request({ url: mapbox, json: true }, function (error, response) {
//   if (error) {
//     console.log("Unable to connect to weather service ==>" + error);
//   } else if (response.body.features.length === 0) {
//     console.log(response.body.query[0] + " Unvalid value");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });
