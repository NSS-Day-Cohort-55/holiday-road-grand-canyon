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

getEateries().then((allEateries) => {
  eaterySelectionFormatter(allEateries);
});

//some code for getting all the bizarreries into a dropdown menu

getBizarre().then((allBizarre) => {
  bizarreSelectionFormatter(allBizarre);
});

//for all the event listeners
const applicationElement = document.querySelector(".holiday");

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "state") {
    ParkDataManager.chooseState(event);
  } else if (event.target.id === "parkDropdown") {
    ParkDataManager.choosePark(event);
  }
});

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "eatery") {
    document.getElementById("eatery_card_details").style.visibility = "hidden";
    let eateryId = event.target.value.split("--");
    console.log(eateryId[1]);
    getEateries().then((allEateries) => {
      let description = allEateries[eateryId[1] - 1].description;
      document.getElementById("eatery_card_details").innerHTML = description;
      document.getElementById("bizzare_deets").style.visibility = "hidden";
    });
  }
});

applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "bizarre") {
    document.getElementById("bizzare_deets").style.visibility = "hidden";
    let bizId = event.target.value.split("--");
    console.log(bizId[1]);
    getBizarre().then((allBizarre) => {
      let description = allBizarre[bizId[1] - 1].description;
      document.getElementById("bizzare_deets").innerHTML = description;
      document.getElementById("bizzare_deets").style.visibility = "hidden";
    });
  }
});

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "bizarre_button") {
    let details = document.getElementById("bizzare_deets");
    if (
      details.style.visibility === "hidden" ||
      details.style.visibility === ""
    ) {
      details.style.visibility = "visible";
    } else {
      details.style.visibility = "hidden";
    }
  }

  if (event.target.id === "eatDetailButton") {
    let details = document.getElementById("eatery_card_details");
    if (
      details.style.visibility === "hidden" ||
      details.style.visibility === ""
    ) {
      details.style.visibility = "visible";
    } else {
      details.style.visibility = "hidden";
    }
  }

  if (event.target.id === "park_detailsButton") {
    let details = document.getElementById("parkCardDetails");
    if (
      details.style.visibility === "hidden" ||
      details.style.visibility === ""
    ) {
      details.style.visibility = "visible";
    } else {
      details.style.visibility = "hidden";
    }
  }
});

// document
//   .querySelector("#park_detailsButton")
//   .addEventListener("click", ParkDataManager.renderSinglePark);
