import { settings } from "../Settings.js";

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
};

export const choosePark = (event) => {
  document.querySelector("#parkCardDetails").innerHTML = '';
  parkCode = event.target.value;
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

export const renderSinglePark = () => {
  const thisPark = getParkByCode(parkCode).then((thisPark) => {
    let thisHTML = `
    <ul>
        <li>${thisPark.data[0].fullName}</li>
        <li>${thisPark.data[0].description}</li>
        <li>${thisPark.data[0].states}</li>
    </ul>`;
    document.querySelector("#parkCardDetails").innerHTML = thisHTML;
  });
};