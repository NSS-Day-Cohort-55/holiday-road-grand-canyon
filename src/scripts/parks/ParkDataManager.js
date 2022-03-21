import { settings } from "../Settings.js";

const parksURL = 'https://developer.nps.gov/api/v1/parks';
const key=settings.npsKey;

export const getParks = (stateCode) => {
    const fullURL = `${parksURL}?API_KEY=${key}&stateCode=${stateCode}`;
    console.log(fullURL);
    return fetch(fullURL)
    .then((response) => response.json())
    .then((fortnite) => {
        console.log(fortnite)
        return fortnite;
    });
}