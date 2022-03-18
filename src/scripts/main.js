import * as WeatherDataManager from "./weather/WeatherDataManager.js";

// temp code for getting weather report
WeatherDataManager.getGeocode("Nashville", "TN", "USA").then(
  (parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    );
  }
);
