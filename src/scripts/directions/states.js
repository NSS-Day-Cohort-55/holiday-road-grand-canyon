//For directions first the states need to be specified
///"states": [
// {
//     "id": 1,
//     "name": "Alabama",
//     "abbreviation": "AL"
// },

export const stateSelectionFormatter = (statesArr) => {
  let htmlPosition = document.querySelector("#card_stateSelect");
  let stateHTMLelement = `<select name="state" id="state">
    <option value="" selected="selected" disabled>Select a State</option>`;

  for (const stateObj of statesArr) {
    stateHTMLelement += `<option value="${stateObj.abbreviation}" >${stateObj.name}</option>`;
  }
  stateHTMLelement += ` </select>`;
  htmlPosition.innerHTML = `${stateHTMLelement}`;
};
