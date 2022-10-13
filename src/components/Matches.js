import React, { useEffect } from "react";
import "./Matches.css";


//functions
import { login } from "../functions/worldCupApi/login";

export default function Matches() {


  useEffect(() => {
    login()

  }, []);

  return <div></div>;

  return <div>Matches</div>;
}
