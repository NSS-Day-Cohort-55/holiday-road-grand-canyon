const loggedInUser = {
  id: 1,
  name: "Jae",
  email: "jae@admin.com",
  startingPoint: {
    city: "Nashville",
    stateCode: "TN",
  },
};

export const getLoggedInUser = () => {
  return loggedInUser;
};

export const getUsers = () => {
  return fetch("http://localhost:8088/users")
    .then((response) => response.json())
    .then((parsedResponse) => {
      // do something with response here
      return parsedResponse;
    });
};

export const getTripsWithUsers = () => {
  return fetch("http://localhost:8088/posts?_expand=user") // expand to include user element, in order to grab username later.
    .then((response) => response.json())
    .then((parsedResponse) => {
      return parsedResponse;
    });
};
