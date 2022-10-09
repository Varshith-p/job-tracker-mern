import React from "react";
import JobsContainer from "../../components/JobsContainer";
import SearchContainer from "../../components/SearchContainer";

const AllJobs = () => {
  return (
    <section>
      <SearchContainer allJobs={true} />
      <JobsContainer allJobs={true} />
    </section>
  );
};

export default AllJobs;
