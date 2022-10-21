import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div className="welcome-wrapper">
        <div className="welcome-container">
          <div className="welcome-icon"></div>
          <div className="welcome-text">Welcome!</div>
        </div>
        <div className="welcome-message">Chowie and Paddy invite you to join the 2022 worldcup sweepstakes</div>
        <div className="button-container">
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "none" }}
          >
            <div className="button" action={"/registration"}>
              Register
            </div>
          </Link>
          <Link
            to="/registration"
            style={{ textDecoration: "none", color: "none" }}
          >
            <div className="button" action={"/"}>
              login
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
