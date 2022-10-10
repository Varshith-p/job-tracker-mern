import React from "react";
import { useAppContext } from "../context/context";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const SearchContainer = ({ allJobs }) => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <form className="big-form">
      <h4>Search form</h4>
      <FormRow
        type="text"
        name="search"
        value={search}
        handleChange={handleSearch}
        className="inline-row"
      />
      {!allJobs && (
        <FormRowSelect
          name="searchStatus"
          value={searchStatus}
          handleChange={handleSearch}
          list={["all", ...statusOptions]}
        />
      )}
      <FormRowSelect
        name="searchType"
        value={searchType}
        handleChange={handleSearch}
        list={["all", ...jobTypeOptions]}
      />
      <FormRowSelect
        name="sort"
        value={sort}
        handleChange={handleSearch}
        list={sortOptions}
      />
      <button
        className="btn clear-filters-btn"
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Clear filters
      </button>
    </form>
  );
};

export default SearchContainer;
