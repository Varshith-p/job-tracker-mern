import React, { useEffect } from "react";
import { useAppContext } from "../context/context";
import Job from "./Job";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = ({ allJobs }) => {
  const {
    jobs,
    totalJobs,
    page,
    numOfPages,
    getJobs,
    getAllJobs,
    isLoading,
    search,
    searchType,
    searchStatus,
    sort,
  } = useAppContext();

  useEffect(() => {
    if (!allJobs) {
      getJobs();
    }
  }, [page, search, searchStatus, searchType, sort]);

  useEffect(() => {
    if (allJobs) {
      getAllJobs();
    }
  }, [page, search, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return <h2 className="no-jobs">No jobs to display...</h2>;
  }
  return (
    <div>
      <h5 className="jobs-count">
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <section className="jobs-container">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} allJobs={allJobs} />;
        })}
      </section>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default JobsContainer;
