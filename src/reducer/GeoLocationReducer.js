export const GeoLocationReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        coords: action.payload,
        isRequesting: null,
        error: null,
      };
    case "ERROR":
      return {
        coords: null,
        isRequesting: null,
        error: action.payload,
      };
    case "REQUESTING":
      return {
        coords: null,
        isRequesting: true,
        error: null,
      };
    default:
      return state;
  }
};
