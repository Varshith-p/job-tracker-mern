import React from "react";
import JobsContainer from "../../components/JobsContainer";
import SearchContainer from "../../components/SearchContainer";

const AllJobs = () => {
  return (
    <section>
      <SearchContainer />
      <JobsContainer />
    </section>
  );
};

export default AllJobs;
