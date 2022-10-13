import React, { useEffect, useState } from "react";
import "./Matches.css";


//functions
import { login } from "../functions/worldCupApi/login";

export default function Matches() {
const [token, setToken] = useState("")

  useEffect(() => {
    login()
    .then(res => setToken(res))
    console.log(token)
  }, []);

  return <div></div>;

  return <div>Matches</div>;
}
