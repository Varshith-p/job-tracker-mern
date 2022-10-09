import React from "react";

const JobInfo = ({ icon, iconType, text }) => {
  console.log(iconType);
  return (
    <div className="job-info">
      <span className={`icon ${iconType}`}>{icon}</span>
      <span className="job-info-text">{text}</span>
    </div>
  );
};

export default JobInfo;
