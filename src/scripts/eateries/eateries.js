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


export const eaterySelectionFormatter = (statesArr) => {
    let htmlPosition = document.querySelector("#card_stateSelect")
    let stateHTMLelement = `<select name="state" id="state">
    <option value="" selected="selected">Select a State</option>`;

    for(const stateObj of statesArr){
        stateHTMLelement += 
        `<option value="${stateObj.abbreviation}">${stateObj.name}</option>`
    }
    stateHTMLelement += ` </select>`
    htmlPosition.innerHTML = `${stateHTMLelement}`  
   
}