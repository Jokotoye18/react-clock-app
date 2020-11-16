import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import "./Home.css";
import Toggler from "../Toggle";
import { RiSunFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import Quote from "./Quote";
import RelatedInfo from "./RelatedInfo";
import Error from "../../component/Error";
import { getDayPeriod, getWeekDay } from "./utils";
import { data } from "../../data/data";
import { GeoLocationContext } from "../../context/GeoLocationContext";
import { StyledMain, StyledRelatedInfo } from "../../styled";
import Loading from "../Loading";

const Index = ({ time }) => {
  const {
    state: { coords },
  } = useContext(GeoLocationContext);
  const { latitude, longitude, timestamp } = coords;

  const dayPeriod = getDayPeriod(timestamp);

  const [toggle, setToggle] = useState(false);
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `//api.weatherapi.com/v1/current.json?key=9a4c6597f05f4214ab1111603201411&q=${latitude},${longitude}`
      )
      .then((response) => {
        console.log(response.data.location);
        setGeoData(response.data.location);
        setError(false);
        setLoading(false);
        console.log(response);
        console.log(response.data.location);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
        setGeoData(null);
      });
    // axios
    //   .get(
    //     `https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=fd3ae4862182abb93a3345723c7f869c`
    //   )
    //   .then((response) => {
    //     setGeoData(response.data);
    //     setName(response.data.list[0].name);
    //     setCountry(response.data.list[0].sys.country);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <StyledMain dayPeriod={dayPeriod}>
      <div className="container">
        <Quote toggle={toggle} />
        <div className={toggle ? "time-up" : "time"}>
          <div className="time-flex">
            <div>
              <div className="time-greeting">
                <div className="time-greeting-icon">
                  {dayPeriod.toLowerCase() === "Morning".toLowerCase() ||
                  dayPeriod.toLowerCase() === "Afternoon".toLowerCase() ? (
                    <RiSunFill />
                  ) : (
                    <FaMoon />
                  )}
                </div>
                <p className="time-greeting-text">
                  Good {dayPeriod}, it's currently
                </p>
              </div>
              <p>
                <time className="current-time">{time}</time>
                <sub className="time-zone">
                  <small></small>
                </sub>
              </p>
              <h4 className="time-location">
                Around {geoData.name}, {geoData.country}
              </h4>
            </div>

            <Toggler toggle={toggle} handleToggle={handleToggle} />
          </div>
        </div>
      </div>
      {toggle ? (
        <StyledRelatedInfo dayPeriod={dayPeriod}>
          <div className="container">
            <div className='related-info'>
              <div className='first'>
                <RelatedInfo
                  title="Current Timezone"
                  titleValue={geoData.tz_id}
                />
                <RelatedInfo title="Latitude" titleValue={latitude} />
              </div>
              <div>
                <RelatedInfo
                  title="Day of the week"
                  titleValue={getWeekDay(timestamp)}
                />
                <RelatedInfo title="Longitude" titleValue={longitude} />
              </div>
            </div>
          </div>
        </StyledRelatedInfo>
      ) : null}
    </StyledMain>
  );
};

export default React.memo(Index);
