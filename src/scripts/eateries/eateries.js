import { getEateries } from "./EateryDataManager.js";

// {
//     "businessName": "Marge's Pancake House",
//     "description": "Marge has been making pancakes from her family recipe for 50 years. People love to eat at Marge's Pancake House because everyone who works there dresses as a famous actor every day for work.",
//     "state": "IN",
//     "city": "Gary",
//     "id": 1,
//     "ameneties": {
//         "wheelchairAccessible": true,
//         "petFriendly": false,
//         "wifi": true,
//         "diaperFacility": false,
//         "playground": false,
//         "restrooms": true
//     }
// }

export const eaterySelectionFormatter = (eateriesArr) => {
  let eathtmlPosition = document.querySelector("#card_eaterySelect");
  let eateryHTMLelement = `<select name="eatery" id="eatery">
        <option value="eat--aa" selected="selected" disabled>Select an Eatery</option>`;
  for (const eateryObj of eateriesArr) {
    eateryHTMLelement += `<option value="eat--${eateryObj.id}">${eateryObj.businessName}</option>`;
  }
  eateryHTMLelement += `</select>`;
  eathtmlPosition.innerHTML = `${eateryHTMLelement}`;
};

export const renderEateryHTML = (event) => {
  document.getElementById("eatery_card_details").style.visibility = "hidden";
  let eateryId = event.target.value.split("--");
  // console.log(eateryId[1]);
  getEateries().then((allEateries) => {
    const thisEatery = allEateries[eateryId[1] - 1];
    let description = "";
    description += `
      <h3>${thisEatery.businessName}</h3>
      <h4><em>${thisEatery.city}, ${thisEatery.state}</em></h4>
      <h5>${thisEatery.description}</h5>
    `;
    description += checkEatAmeneties(thisEatery);
    document.getElementById("eatery_card_details").innerHTML = description;
    document.getElementById("bizzare_deets").style.visibility = "hidden";
  });
};

const checkEatAmeneties = (eatObj) => {
  let HTMLString = "";
  if (eatObj.ameneties.wheelchairAccessible === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/wheelchairIcon.png' alt='souvenirs' />`;
  }
  if (eatObj.ameneties.petFriendly === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/petIcon.png' alt='souvenirs' />`;
  }
  if (eatObj.ameneties.wifi === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/wifiIcon.webp' alt='souvenirs' />`;
  }
  if (eatObj.ameneties.diaperFacility === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/diaperIcon.webp' alt='souvenirs' />`;
  }
  if (eatObj.ameneties.playground === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/playgroundIcon.webp' alt='souvenirs' />`;
  }
  if (eatObj.ameneties.restrooms === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/restroomIcon.png' alt='restrooms'/>`;
  }
  return HTMLString;
};

// let htmlElement = `<p>${eateryObj.description}</p>`;
//     const insertHTMLpoint = document.querySelector("#eatery_card_details")
//     insertHTMLpoint.innerHTML = `${htmlElement}`

// export const eaterySelected = (value) => {
//     let eathtmlPosition = document.querySelector("#card_eaterySelect")
//     let eateryHTMLelement = `<select name="eatery" id="eatery">
//     <option value="" selected="selected">Select an Eatery</option>`;

//     for(const eateryObj of eateriesArr){
//         eateryHTMLelement +=
//         `<option value="eat--${eateryObj.id}">${eateryObj.businessName}</option>`
//     }
//     eateryHTMLelement += ` </select>`
//     eathtmlPosition.innerHTML = `${eateryHTMLelement}`
// }
