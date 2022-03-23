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
      return fortnite;
    });
};

export const chooseState = (anEvent) => {
  const parkList = getParks(anEvent.target.value).then((parkList) => {
    renderParkHTML(parkList.data);
  });
  document.querySelector("#parkCardDetails").innerHTML = "";
  const weatherParent = document.getElementById("weather_card_area");
  weatherParent.innerHTML = "";
  document.querySelector(".weather_title").innerHTML = "";
};

export const choosePark = (event) => {
  parkCode = event.target.value;
  const thisPark = getParkByCode(parkCode).then((thisParkComplex) => {
    let thisPark = thisParkComplex.data[0];
    console.log(thisPark);
    let thisHTML = "";
    thisHTML += `
      <h3>${thisPark.name}<h3>
      <h4><em>${thisPark.addresses[0].city}, ${thisPark.addresses[0].stateCode}</em></h4>
      <h5>${thisPark.description}</h5>
      <img class ='parkPic' src='${thisPark.images[0].url}' alt='${thisPark.images[0].altText}' />
    `;
    document.querySelector("#parkCardDetails").innerHTML = thisHTML;
    RenderWeather.renderWeather(
      thisPark.addresses[0].city,
      thisPark.addresses[0].stateCode
    );
  });
  document.querySelector("#parkCardDetails").innerHTML = "";
  document.getElementById("parkCardDetails").style.visibility = "hidden";
  // let weatherElement = document.querySelector(".weather_card_area");
  // weatherElement.innerHTML = "";
};

export const renderParkHTML = (parkList) => {
  let thisHTML = `<select name="parkDropdown" id="parkDropdown">
                    <option value="" selected="selected" disabled>Select a Park</option>`;
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
