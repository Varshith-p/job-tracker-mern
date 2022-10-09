import React from "react";
import JobsContainer from "../../components/JobsContainer";
import SearchContainer from "../../components/SearchContainer";

const AppliedJobs = () => {
  return (
    <section>
      <SearchContainer allJobs={false} />
      <JobsContainer allJobs={false} />
    </section>
  );
};

export default AppliedJobs;
