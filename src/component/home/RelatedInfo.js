import React from "react";

const RelatedInfo = ({ title, titleValue }) => {

  return (
    <div className="info">
      <p className="info-title">{title}</p>
      <p className="info-title-value">{titleValue}</p>
    </div>
  );
};

export default React.memo(RelatedInfo);
