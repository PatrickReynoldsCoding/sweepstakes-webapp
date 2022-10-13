import React, { useEffect } from "react";
import "./Matches.css";

export default function Matches() {
  const login = async () => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email: "patrickreynoldscoding@gmail.com",
          password: "password",
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
      });
    } catch (err) {}
  };

  useEffect(() => {
    login()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div></div>;

  return <div>Matches</div>;
}
