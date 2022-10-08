import React, { useEffect } from "react";
import { useAppContext } from "../context/context";
import Job from "./Job";

const JobsContainer = () => {
  const { jobs, totalJobs, page, getJobs, isLoading } = useAppContext();
  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (jobs.length === 0) {
    return <h2>No jobs to display...</h2>;
  }
  return (
    <section className="jobs-container">
      <h5>
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </section>
  );
};

export default JobsContainer;
