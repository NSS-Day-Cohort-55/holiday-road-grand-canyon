import * as WeatherDataManager from "./weather/WeatherDataManager.js";
import * as ParkDataManager from "./parks/ParkDataManager.js";

// temp code for getting weather report
WeatherDataManager.getGeocode("Nashville", "TN", "USA").then(
  (parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    );
  }
);

ParkDataManager.getParks('TN');



// copy this to your settings.js and insert your specific keys
// export const settings = {
// 	graphhopperKey: "",
// 	npsKey: "",
// 	npsURL: "https://developer.nps.gov/api/v1/parks",
// 	weatherKey: "",
// 	bizarreryURL: "http://holidayroad.nss.team/bizarreries",
// 	eateryURL: "http://holidayroad.nss.team/eateries"
// };