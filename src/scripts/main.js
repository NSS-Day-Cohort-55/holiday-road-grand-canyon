import { renderWeather } from "./weather/RenderWeather.js";
import { getStates } from "./directions/DirectionDataManager.js";
import { stateSelectionFormatter } from "./directions/states.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import * as ParkDataManager from "./parks/ParkDataManager.js";

renderWeather("Nashville", "TN");

//some code for getting all the states for the state drop down box
getStates().then((allStates) => {
  stateSelectionFormatter(allStates);
});

//some code for getting all the eateries for the eatery drop down box

getEateries();
ParkDataManager.getParks("TN");

// copy this to your settings.js and insert your specific keys
// export const settings = {
// 	graphhopperKey: "",
// 	npsKey: "",
// 	npsURL: "https://developer.nps.gov/api/v1/parks",
// 	weatherKey: "",
// 	bizarreryURL: "http://holidayroad.nss.team/bizarreries",
// 	eateryURL: "http://holidayroad.nss.team/eateries"
// };
