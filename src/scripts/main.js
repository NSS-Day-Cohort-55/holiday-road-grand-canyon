import { getStates } from "./directions/DirectionDataManager.js";
import { stateSelectionFormatter } from "./directions/states.js";
import { getEateries } from "./eateries/EateryDataManager.js";
import { eaterySelectionFormatter } from "./eateries/eateries.js";
import { getBizarre } from "./attractions/AttractionDataManager.js";
import { bizarreSelectionFormatter } from "./attractions/attractions.js";
import * as ParkDataManager from "./parks/ParkDataManager.js";
import { asideSelectionFormatter } from "./aside/aside.js";
import { getSavedTrips, saveTrip } from "./aside/asideDataManager.js";

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

//This makes the aside populate with Saved Trips
getSavedTrips().then((allTrips) => {
  asideSelectionFormatter(allTrips);
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

//eatery
applicationElement.addEventListener("change", (event) => {
  if (event.target.id === "eatery") {
    document.getElementById("eatery_card_details").style.visibility = "hidden";
    let eateryId = event.target.value.split("--");
    console.log(eateryId[1]);
    getEateries().then((allEateries) => {
      let description = allEateries[eateryId[1] - 1].description;
      document.getElementById("eatery_card_details").innerHTML = description;
      document.getElementById("eatery_card_details").style.visibility =
        "hidden";
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

applicationElement.addEventListener("click", (event) => {
  if (event.target.id === "saveTrip") {
    let elementS = document.getElementById("state");
    let state = elementS.options[elementS.selectedIndex].text;

    let elementE = document.getElementById("eatery");
    let eatery = elementE.options[elementE.selectedIndex].text;

    let elementB = document.getElementById("bizarre");
    let bizarre = elementB.options[elementB.selectedIndex].text;

    let elementP = document.getElementById("parkDropdown");
    let park = elementP.options[elementP.selectedIndex].text;

    const tripObject = {
      bizarre: bizarre,
      eatery: eatery,
      park: {
        state: state,
        parkName: park,
      },
    };

    saveTrip(tripObject).then(
      getSavedTrips().then((allTrips) => {
        allTrips.push(tripObject);
        asideSelectionFormatter(allTrips);
      })
    );
  }
});
