import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/context";

const Banner = () => {
  const { logoutUser } = useAppContext();
  return (
    <section className="banner">
      <h2 className="logo">Job Tracker</h2>
      <nav className="links">
        <NavLink
          to="/all-jobs"
          className="li"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "grey",
              fontWeight: isActive ? 500 : 400,
            };
          }}
        >
          All jobs
        </NavLink>
        <NavLink
          to="/applied-jobs"
          className="li"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "grey",
              fontWeight: isActive ? 500 : 400,
            };
          }}
        >
          Applied jobs
        </NavLink>
        <NavLink
          to="/add-job"
          className="li"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "grey",
              fontWeight: isActive ? 500 : 400,
            };
          }}
        >
          Add job
        </NavLink>
      </nav>
      <button className="btn" onClick={logoutUser}>
        Logout
      </button>
    </section>
  );
};

export default Banner;
