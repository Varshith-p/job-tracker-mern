import React from "react";
import FormRow from "./FormRow";

const SearchContainer = () => {
  return (
    <section>
      <form className="form">
        <h4>Search form</h4>
        <div>
          <FormRow type="text" name="search" value={search} />
        </div>
      </form>
    </section>
  );
};

export default SearchContainer;
