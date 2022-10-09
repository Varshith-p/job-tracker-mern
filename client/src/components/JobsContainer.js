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
    return <h2 className="jobs-container">No jobs to display...</h2>;
  }
  return (
    <section className="jobs-container">
      <h5>
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} allJobs={allJobs} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};

export default JobsContainer;
