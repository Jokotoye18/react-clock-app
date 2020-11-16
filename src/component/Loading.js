import React from "react";

const Loading = ({ toggle }) => {
  console.log('loading');
  return (
    <div className={toggle? 'loading-hide' : 'loading'}>
      <div className="activity-indicator"></div>
    </div>
  );
};

export default React.memo(Loading);
