import * as WeatherDataManager from "./weather/WeatherDataManager.js";
import { getStates } from "./directions/DirectionDataManager.js"
import { stateSelectionFormatter } from "./directions/states.js"
import { getEateries } from "./eateries/EateryDataManager.js"

// temp code for getting weather report
WeatherDataManager.getGeocode("Nashville", "TN", "USA").then(
  (parsedResponse) => {
    WeatherDataManager.getWeatherReport(
      parsedResponse[0].lat,
      parsedResponse[0].lon
    );
  }
);

//some code for getting all the states for the state drop down box
getStates().then(allStates => {
  stateSelectionFormatter(allStates)
} )

//some code for getting all the eateries for the eatery drop down box

getEateries();