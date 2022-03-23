import { getBizarre } from "./AttractionDataManager.js";

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
  let bizarrehtmlPosition = document.querySelector("#card_bizarreSelect");
  let bizarreHTMLelement = `<select name="bizarre" id="bizarre">
    <option value="" selected="selected" disabled>Select an Attraction</option>`;

  for (const bizObj of bizArr) {
    bizarreHTMLelement += `<option value="biz--${bizObj.id}">${bizObj.name}</option>`;
  }
  bizarreHTMLelement += ` </select>`;
  bizarrehtmlPosition.innerHTML = `${bizarreHTMLelement}`;
};

export const renderBizarreHTML = (event) => {
  document.getElementById("bizzare_deets").style.visibility = "hidden";
  let bizId = event.target.value.split("--");
  // console.log(bizId[1]);
  getBizarre().then((allBizarre) => {
    const thisBiz = allBizarre[bizId[1] - 1];
    let description = "";
    description += `
        <h3>${thisBiz.name}</h3>
        <h4><em>${thisBiz.city}, ${thisBiz.state}</em></h4>
        <h5>${thisBiz.description}</h5>
    `;
    description += checkBizAmeneties(thisBiz);
    document.getElementById("bizzare_deets").innerHTML = description;
    document.getElementById("bizzare_deets").style.visibility = "hidden";
  });
};

const checkBizAmeneties = (bizObj) => {
  let HTMLString = "";
  if (bizObj.ameneties.souvenirs === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/souvenirIcon.png' alt='souvenirs' />`;
  }
  if (bizObj.ameneties.restrooms === true) {
    HTMLString += `<img class ='amenityIcon' src='././images/restroomIcon.png' alt='restrooms'/>`;
  }
  return HTMLString;
};
