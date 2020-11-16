import React from "react";

const Error = ({ error }) => {
  return (
    <div className="error">
      <div className="error-message-box">
        <h1 className="permission-text">{error}</h1>
      </div>
    </div>
  );
};

export default Error;
