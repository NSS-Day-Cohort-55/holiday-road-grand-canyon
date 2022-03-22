//This populates the aside with saved trips

export const getSavedTrips = () => {
    return fetch(`http://localhost:8088/trips`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        return parsedResponse;
      });
  };