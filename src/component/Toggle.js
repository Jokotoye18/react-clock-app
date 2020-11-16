import React from "react";
import { HiArrowCircleDown } from "react-icons/hi";
import { HiArrowCircleUp } from "react-icons/hi";

const Toggle = ({handleToggle, toggle}) => {
  console.log(toggle);
  return (
    <div className="toggler" onClick={handleToggle}>
      <p className="toggler-text">{toggle ? "less" : "more"}</p>
      <div className="toggler-icon-container">
        {toggle ? <HiArrowCircleUp /> : <HiArrowCircleDown />}
      </div>
    </div>
  );
};

export default React.memo(Toggle);
