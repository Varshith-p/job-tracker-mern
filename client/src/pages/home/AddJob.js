import React from "react";
import { useAppContext } from "../../context/context";
import Alert from "../../components/Alert";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: "1em" }}>
        {isEditing ? "Edit job" : "Add job"}
      </h3>
      {showAlert && <Alert />}

      <FormRow
        type="text"
        name="position"
        value={position}
        handleChange={handleJobInput}
        className="inline-row"
      />
      <FormRow
        type="text"
        name="company"
        value={company}
        handleChange={handleJobInput}
        className="inline-row"
      />
      <FormRow
        type="text"
        name="jobLocation"
        value={jobLocation}
        handleChange={handleJobInput}
        className="inline-row"
      />
      <FormRowSelect
        labelText="status"
        name="status"
        value={status}
        handleChange={handleJobInput}
        list={statusOptions}
      />
      <FormRowSelect
        labelText="job type"
        name="jobType"
        value={jobType}
        handleChange={handleJobInput}
        list={jobTypeOptions}
      />

      <div className="inline-row">
        <button
          type="submit"
          className="btn btn-block submit-btn"
          disabled={isLoading}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-block clear-btn"
          onClick={(e) => {
            e.preventDefault();
            clearValues();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddJob;
