import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <section className="welcomeBackground">
        <div className="welcomeContainer">
          Chowie and Paddy welcome you to participate in the 2022 world cup
          sweepstakes!
        </div>
        <Link to="/registration">
          <button className="regButton" action={'/registration'}>Register</button>
        </Link>   
 </section>
    </>
  );
}
