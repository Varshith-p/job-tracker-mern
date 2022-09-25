import React from "react";
import { useState, useEffect } from "react";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://api.indeed.com/")
      .then((res) => res.text)
      .then((res) => console.log(res));
  });
  return <div>Job</div>;
};

export default Job;
