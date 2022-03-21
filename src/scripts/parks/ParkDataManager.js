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
</ul>`;

export const choosePark = (anEvent) => {
    const parkList = getParks(anEvent.target.value)
    .then(parkList => {renderParkHTML(parkList)});
}

export const renderParkHTML = (parkList) => {
    console.log(parkList);
}