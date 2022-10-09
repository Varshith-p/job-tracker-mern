import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/welcome.svg";
import { useAppContext } from "../../context/context";

const Welcome = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      <div className="text">
        <h2>Welcome, {user.name}</h2>
        <p>
          Take a look at the <br />
          available jobs here. <br />
          <Link to="/all-jobs" className="btn" style={{ marginTop: "1em" }}>
            All jobs
          </Link>
        </p>
      </div>
      <img src={logo} alt="welcome" className="img-main" />
    </React.Fragment>
  );
};

export default Welcome;
