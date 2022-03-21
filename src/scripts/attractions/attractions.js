//this area formats the bizarre places into a dropdown list

// {
//     "id": 1,
//     "name": "Big White Shirt",
//     "state": "AL",
//     "city": "Andalusia",
//     "description": "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
//     "ameneties": {
//         "souvenirs": false,
//         "restrooms": false
//     }
// }


export const bizarreSelectionFormatter = (bizArr) => {
    let bizarrehtmlPosition = document.querySelector("#card_bizarreSelect")
    let bizarreHTMLelement = `<select name="bizarre" id="bizarre">
    <option value="" selected="selected">Select an Attraction</option>`;

    for(const bizObj of bizArr){
        bizarreHTMLelement += 
        `<option value="biz--${bizObj.id}">${bizObj.name}</option>`
    }
    bizarreHTMLelement += ` </select>`
    bizarrehtmlPosition.innerHTML = `${bizarreHTMLelement}`    
}