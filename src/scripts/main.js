import * as WeatherDataManager from "./weather/WeatherDataManager.js";
import { getStates } from "./directions/DirectionDataManager.js";
import { stateSelectionFormatter } from "./directions/states.js";

import { getEateries } from "./eateries/EateryDataManager.js";
import { eaterySelectionFormatter } from "./eateries/eateries.js";

import { getBizarre } from "./attractions/AttractionDataManager.js";
import { bizarreSelectionFormatter } from "./attractions/attractions.js";

import { renderWeather } from "./weather/RenderWeather.js";

import * as ParkDataManager from "./parks/ParkDataManager.js";

renderWeather("Nashville", "TN");


//some code for getting all the states for the state drop down box
getStates().then((allStates) => {
  stateSelectionFormatter(allStates);
});

//some code for getting all the eateries for the eatery drop down box

getEateries().then(allEateries => {
  eaterySelectionFormatter(allEateries)
})

//some code for getting all the bizarreries into a dropdown menu

getBizarre().then(allBizarre => {
  bizarreSelectionFormatter(allBizarre)
})


ParkDataManager.getParks('TN');


//for all the event listeners
const applicationElement = document.querySelector(".holiday");

applicationElement.addEventListener("change", event => {
	if (event.target.id === "state") {
		console.log("you changed a state!")
	}
})


// copy this to your settings.js and insert your specific keys
// export const settings = {
// 	graphhopperKey: "",
// 	npsKey: "",
// 	npsURL: "https://developer.nps.gov/api/v1/parks",
// 	weatherKey: "",
// 	bizarreryURL: "http://holidayroad.nss.team/bizarreries",
// 	eateryURL: "http://holidayroad.nss.team/eateries"
// };
