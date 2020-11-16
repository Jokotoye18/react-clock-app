import axios from "axios";

export const getLocationErrorMessage = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for Geolocation.";
    case error.POSITION_UNAVAILABLE:
      return "Location information is unavailable.";
    case error.TIMEOUT:
      return "The request to get user location timed out.";
    case error.UNKNOWN_ERROR:
      return "An unknown error occurred.";
    default:
      return 'Unclarified Error occured.';
  }
};

export const data = [
  {
    title: "Current Timezone",
    titleValue: "Europe/London",
  },
  {
    title: "Day of the Year",
    titleValue: "295",
  },
  {
    title: "Day of the week",
    titleValue: "5",
  },
  {
    title: "Week number",
    titleValue: "43",
  },
];


