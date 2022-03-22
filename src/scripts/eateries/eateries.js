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
