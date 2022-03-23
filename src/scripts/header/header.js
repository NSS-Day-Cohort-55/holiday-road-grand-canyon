export const startHeader = () => {
  document.querySelector(
    ".header"
  ).innerHTML = `<div class="header_logo">Grand canyon Travel Planners</div>
        <div class="header_welcomeMessage">Welcome So-and-So</div>
        <div class="header_startingPointMessage">
            Your Starting Point
            <div class="header_startingPoint">Nashville,TN</div>
        </div>`;
};
