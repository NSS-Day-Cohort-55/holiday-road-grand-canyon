import { settings } from "../Settings.js";

let lat = 0;
let lon = 0;

export const getGeocode = (city, state, countryCode) => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&limit=1&appid=${settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      // do something
      lon = json[0].lon;
      lat = json[0].lat;
      return json;
    });
};

//
export const getWeatherReport = (latitude, longitude) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      // do something
      console.log(json);
      return json;
    });
};
