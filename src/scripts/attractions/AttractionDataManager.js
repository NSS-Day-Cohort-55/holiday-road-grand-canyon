//this handles fetching the Bizarre places


export const getBizarre = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
      .then((response) => response.json())
      .then((parsedResponse) => {
          console.log(parsedResponse);
          return parsedResponse;
      });
  };