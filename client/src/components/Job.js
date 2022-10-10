import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useAppContext } from "../context/context";
import JobInfo from "./JobInfo";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
  allJobs,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <article className="job-box">
      <header className="job-header">
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <section className="job-info-container">
        <JobInfo
          icon={<FaLocationArrow />}
          iconType={"location"}
          text={jobLocation}
        />
        <JobInfo icon={<FaCalendarAlt />} iconType="calender" text={date} />
        <JobInfo icon={<FaBriefcase />} iconType="briefcase" text={jobType} />
        {!allJobs && (
          <div className={`job-info status ${status}`}>{status}</div>
        )}
      </section>
      {!allJobs && (
        <footer className="job-btns">
          <Link
            to="/add-job"
            className="btn edit-btn"
            onClick={() => setEditJob(_id)}
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn delete-btn"
            onClick={() => {
              deleteJob(_id);
            }}
          >
            Delete
          </button>
        </footer>
      )}
    </article>
  );
};

export default Job;
