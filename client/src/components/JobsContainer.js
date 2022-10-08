import React, { useEffect } from "react";
import { useAppContext } from "../context/context";
import Job from "./Job";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    jobs,
    totalJobs,
    page,
    numOfPages,
    getJobs,
    isLoading,
    search,
    searchType,
    searchStatus,
    sort,
  } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return <h2 className="jobs-container">No jobs to display...</h2>;
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
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};

export default JobsContainer;
