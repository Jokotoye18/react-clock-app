import styled from "styled-components";

import day from "./images/main.jpg";
import afternoon from "./images/afternoon.jpg";
import night from "./images/main-night.jpg";
import moreDay from "./images/more-day.jpg";
import moreNight from "./images/more-night.jpg";

export const StyledMain = styled.main`
  background: url(${(props) => {
      if (props.dayPeriod === "Morning") {
        return day;
      } else if (props.dayPeriod === "Afternoon") {
        return afternoon;
      } else {
        return night;
      }
    }})
    center no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const StyledRelatedInfo = styled.div`
  padding: 5em 0;
  background: url(${(props) => {
      if (props.dayPeriod === "Morning") {
        return moreDay;
      } else if (props.dayPeriod === "Afternoon") {
        return moreDay;
      } else {
        return moreNight;
      }
    }})
    center no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: ${(props) => {
    if (props.dayPeriod === "Morning") {
      return '#000';
    } else if (props.dayPeriod === "Afternoon") {
      return '#000';
    } else {
      return '#fff';
    }
  }};
`;
