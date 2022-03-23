export const formatMDY = (integer) => {
  const date = new Date(integer);
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();
  const formattedDate = month + "/" + day + "/" + year;
  return formattedDate; // returns the date with desired format
};

export const formatDate = (integer) => {
  const date = new Date(integer * 1000);
  let day = date.getDay();
  let dow = getDayOfWeek(day);
  return dow;
};

const getDayOfWeek = (day) => {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = week[day];
  return dayOfWeek;
};
