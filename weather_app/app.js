const mapbox_api = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const request = require("request"); //require the request to use it
const express = require("express");

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
