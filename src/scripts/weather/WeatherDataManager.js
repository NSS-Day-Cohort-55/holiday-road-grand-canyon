import settings from "settings.js";

lat = 0;
lon = 0;

export const getGeocode = (city, state, countryCode) => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&limit=1&appid=${settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      // do something
      console.log(json);
      return json;
    });
};

export const getWeatherReport = (lat, lon) => {
  return fetch(
    `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${settings.weatherKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      // do something
      console.log(json);
      return json;
    });
};
