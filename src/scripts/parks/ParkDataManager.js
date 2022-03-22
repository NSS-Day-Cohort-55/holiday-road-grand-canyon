import { settings } from "../Settings.js";
import * as RenderWeather from "../weather/RenderWeather.js";

const parksURL = "https://developer.nps.gov/api/v1/parks";
const key = settings.npsKey;
let parkCode = "";

export const getParks = (stateCode) => {
  const fullURL = `${parksURL}?API_KEY=${key}&stateCode=${stateCode}`;
  return fetch(fullURL)
    .then((response) => response.json())
    .then((fortnite) => {
      return fortnite;
    });
};

export const getParkByCode = (code) => {
  const fullURL = `${parksURL}?API_KEY=${key}&parkCode=${code}`;
  return fetch(fullURL)
    .then((response) => response.json())
    .then((fortnite) => {
      console.log(fortnite);
      return fortnite;
    });
};

export const chooseState = (anEvent) => {
  const parkList = getParks(anEvent.target.value).then((parkList) => {
    renderParkHTML(parkList.data);
  });
};

export const choosePark = (event) => {
  parkCode = event.target.value;
  const thisPark = getParkByCode(parkCode).then((thisPark) => {
    console.log(thisPark);
    let thisHTML = '';
    thisHTML += `<h4>${thisPark.data[0].description}</h4>`;
    document.querySelector("#parkCardDetails").innerHTML = thisHTML;
    RenderWeather.renderWeather(
      thisPark.data[0].addresses[0].city,
      thisPark.data[0].addresses[0].stateCode
    );
  });
  document.querySelector("#parkCardDetails").innerHTML = "";
  document.getElementById("parkCardDetails").style.visibility = "hidden";
  // let weatherElement = document.querySelector(".weather_card_area");
  // weatherElement.innerHTML = "";
};

export const renderParkHTML = (parkList) => {
  let thisHTML = `<select name="parkDropdown" id="parkDropdown">
                    <option value="" selected="selected">Select a Park</option>`;
  for (let park of parkList) {
    thisHTML += `<option value="${park.parkCode}">${park.fullName}</option>`;
  }
  thisHTML += `</select>`;
  document.querySelector(".card_userSelection").innerHTML = thisHTML;
};

// export const renderSinglePark = () => {
//   // const thisPark = getParkByCode(parkCode).then((thisPark) => {
//   //   let thisHTML = `${thisPark.data[0].description}`;
//   //   document.querySelector("#parkCardDetails").innerHTML = thisHTML;
//   //   RenderWeather.renderWeather(thisPark.data[0].addresses[0].city , thisPark.data[0].addresses[0].stateCode);
//   // });
//   // document.getElementById("parkCardDetails").style.visibility = "hidden";
// };
