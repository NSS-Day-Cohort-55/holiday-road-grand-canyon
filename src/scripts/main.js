import * as WeatherDataManager from "./weather/WeatherDataManager.js";
import { getStates } from "./directions/DirectionDataManager.js";
import { stateSelectionFormatter } from "./directions/states.js";
import { getEateries } from "./eateries/EateryDataManager.js";
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

//some code for getting all the states for the state drop down box
getStates().then((allStates) => {
  stateSelectionFormatter(allStates);
});

//some code for getting all the eateries for the eatery drop down box

getEateries();
ParkDataManager.getParks("TN");

//for all the event listeners
const applicationElement = document.querySelector(".holiday");

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "state") {
    ParkDataManager.choosePark(event);
  }
});

// const parkButton = document.querySelector('.card_detailsButton');
// const parkDropdown = document.querySelector('#state');
// parkButton.addEventListener('click' , ParkDataManager.renderParkHTML);
// parkDropdown.addEventListener('change' , ParkDataManager.renderParkHTML2);

// copy this to your settings.js and insert your specific keys
// export const settings = {
// 	graphhopperKey: "",
// 	npsKey: "",
// 	npsURL: "https://developer.nps.gov/api/v1/parks",
// 	weatherKey: "",
// 	bizarreryURL: "http://holidayroad.nss.team/bizarreries",
// 	eateryURL: "http://holidayroad.nss.team/eateries"
// };
