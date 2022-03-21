//This will fetch the eateries

export const getEateries = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
      .then((response) => response.json())
      .then((parsedResponse) => {
          console.log(parsedResponse);
          return parsedResponse;
      });
  };
