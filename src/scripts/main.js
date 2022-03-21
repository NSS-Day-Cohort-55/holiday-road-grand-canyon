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

//for all the event listeners
const applicationElement = document.querySelector(".holiday");

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "state") {
    ParkDataManager.chooseState(event);
  }
  else if (event.target.id === "parkDropdown") {
    ParkDataManager.choosePark(event);
  }});


applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "eatery") {
    let eateryId = event.target.value.split("--");
    console.log(eateryId[1]);
    getEateries().then((allEateries) => {
      let description = allEateries[eateryId[1] - 1].description;
      document.getElementById("eatery_card_details").innerHTML = description;
    });
  }
});

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "bizarre") {
    let bizId = event.target.value.split("--");
    console.log(bizId[1]);
    getBizarre().then((allBizarre) => {
      let description = allBizarre[bizId[1] - 1].description;
      document.getElementById("bizzare_deets").innerHTML = description;
    });
  }
});
document.querySelector('#park_detailsButton').addEventListener('click' , ParkDataManager.renderSinglePark);
