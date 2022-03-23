export const startHeader = () => {
  document.querySelector(
    ".header"
  ).innerHTML = `<div class="header_logo">Grand Canyon Travel Planners</div>
  <div class="welcome_aside">
        <div class="header_welcomeMessage">Welcome So-and-So</div>
        <button id="openbtn" class="openbtn"> &#9776; Saved Trips</button>
        </div>
        <div class="header_startingPointMessage">
            Your Starting Point...
            <div class="header_startingPoint">Nashville,TN</div>
        </div>`;
};
