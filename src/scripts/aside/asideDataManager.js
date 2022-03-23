//This populates the aside with saved trips

export const getSavedTrips = (userId) => {
  return fetch(`http://localhost:8088/trips?userId=${userId}`)
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};

export const saveTrip = (tripObj) => {
  return fetch(`http://localhost:8088/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tripObj),
  }).then((response) => response.json());
};
