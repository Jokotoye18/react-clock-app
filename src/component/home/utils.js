const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const formatTimestamp = (timestamp) => {
  let datetime = new Date(timestamp);
  let hours = datetime.getHours();
  let minutes = datetime.getMinutes();
  let seconds = datetime.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

export const getDayPeriod = (timestamp) => {
  let period;
  let datetime = new Date(timestamp);
  let hours = datetime.getHours();
  if (hours >= 5 && hours < 12) {
    period = "Morning";
  } else if (hours >= 12 && hours < 17) {
    period = "Afternoon";
  } else {
    period = "Evening";
  }
  return period;
};

export const getWeekDay = (timestamp) => {
  let datetime = new Date(timestamp);
  let day = datetime.getDay();
  return days[day];
};

export const getRandom = (length) => {
  return Math.floor(Math.random() * length);
};
