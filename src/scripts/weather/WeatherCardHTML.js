import { formatDate } from "../helpers/formatDate.js";

export const weatherReport = (weatherArr) => {
  let weatherElement = document.querySelector(".weather_card_area");
  weatherElement.innerHTML = "";
  weatherArr.forEach((weatherObj) => {
    weatherElement.innerHTML += `<div class="weather_card">
            <h5 id='date'>${formatDate(weatherObj.date)}</h5>
            <p id='weather'>${weatherObj.weather}</p>
            <img src ="${weatherObj.iconUrl}" alt="weather icon">
            <p id='temp'>${weatherObj.temp}</p>
        </div>`;
  });
};
