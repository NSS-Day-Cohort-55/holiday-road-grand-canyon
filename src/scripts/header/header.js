export const startHeader = (userObject) => {
  document.querySelector(".header").innerHTML = `<div class="header_logo"></div>
  <div class="welcome_aside">
        <div class="header_welcomeMessage">Welcome, ${userObject.name}, your starting point is: ${userObject.startingPoint.city}, ${userObject.startingPoint.stateCode}</div>
        <button id="openbtn" class="openbtn"> &#9776; Saved Trips</button>
        </div>`;
};
