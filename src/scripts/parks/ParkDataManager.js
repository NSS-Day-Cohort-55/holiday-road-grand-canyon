import { settings } from "../Settings.js";

const parksURL = 'https://developer.nps.gov/api/v1/parks';
const key=settings.npsKey;

export const getParks = (stateCode) => {
    const fullURL = `${parksURL}?API_KEY=${key}&stateCode=${stateCode}`;
    return fetch(fullURL)
    .then((response) => response.json())
    .then((fortnite) => {
        return fortnite;
    });
}

const parkHTMLTemplate = 
`<ul>
    <li>select an item</li>
    <li>select an item</li>
    <li>select an item</li>
    <li>select an item</li>
</ul>`

export const parkSelectionFormatter = (statesArr) => {
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
;

export const choosePark = (anEvent) => {
    const parkList = getParks(anEvent.target.value)
    .then(parkList => {renderParkHTML(parkList.data)});
}

export const renderParkHTML = (parkList) => {
    let thisHTML = `<select name="parkDropdown" id="parkDropdown">
                    <option value="" selected="selected">Select a Park</option>`;
    for (let park of parkList) {
        thisHTML += `<option value="${park.parkCode}">${park.fullName}</option>`;
    }
    thisHTML += `</select>`;
    console.log(parkList);
    document.querySelector('.card_userSelection').innerHTML = thisHTML;
}

