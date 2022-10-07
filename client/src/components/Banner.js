import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../context/context";
import { links } from "../assets/links";

const Banner = () => {
  const { logoutUser } = useAppContext();
  return (
    <section className="banner">
      <h2 className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "#10c79c" }}>
          Job Tracker
        </Link>
      </h2>
      <nav className="links">
        {links.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className="li"
              style={({ isActive }) => {
                return {
                  color: isActive ? "black" : "grey",
                  fontWeight: isActive ? 500 : 400,
                };
              }}
            >
              {item.text}
            </NavLink>
          );
        })}
      </nav>
      <button className="btn" onClick={logoutUser}>
        Logout
      </button>
    </section>
  );
};

export default Banner;
