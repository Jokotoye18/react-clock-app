import React, { useContext, useState, useEffect, useCallback } from "react";
import { GeoLocationContext } from "./context/GeoLocationContext";
import { getLocationErrorMessage } from "./data/data";
import Home from "./component/home/Index";
import "./App.css";
import Requesting from "./component/Requesting";
import Error from "./component/Error";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { state, dispatch } = useContext(GeoLocationContext);

  const { coords, isRequesting, error } = state;

  useEffect(() => {
    getCoords();
    let tick = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(tick);
    };
  }, []);

  const getCoords = useCallback(() => {
    console.log("coords");
    const success = ({ coords: { latitude, longitude }, timestamp }) => {
      // let time = formatTimestamp(timestamp);
      const coords = {
        latitude,
        longitude,
        timestamp,
      };
      dispatch({
        type: "SUCCESS",
        payload: coords,
      });
    };
    const error = (error) => {
      let message = getLocationErrorMessage(error);
      dispatch({
        type: "ERROR",
        payload: message,
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      dispatch({
        type: "ERROR",
        payload: "Geolocation is not supported by this browser/Device.",
      });
    }
  }, [coords]);

  if (isRequesting) {
    return <Requesting />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <Home time={time} />;
};

export default App;
