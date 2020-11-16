import React, { createContext, useReducer } from "react";
import { GeoLocationReducer } from "../reducer/GeoLocationReducer";

const initialState = {
  coords: null,
  isRequesting: true,
  error: null,
};

export const GeoLocationContext = createContext(initialState);

export const GeoLocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GeoLocationReducer, initialState);

  return (
    <GeoLocationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GeoLocationContext.Provider>
  );
};
