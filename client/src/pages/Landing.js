import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "../assets/index.css";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Job tracker</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="text">
        <h2>Job tracker</h2>
        <p>
          Welcome to the one stop for all <br />
          your job needs. Keep track of <br />
          all your jobs from one place. <br />
          <Link to="/register" className="btn" style={{ marginTop: "1em" }}>
            Login/Register
          </Link>
        </p>
      </div>
      <img src={main} alt="main" className="img-main" />
    </React.Fragment>
  );
};

export default Landing;
