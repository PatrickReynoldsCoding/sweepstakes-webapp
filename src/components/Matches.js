import React, { useEffect, useState } from "react";
import "./Matches.css";

const getMatchData = async (token) => {
  console.log(token.data.token)
  return fetch("/match", {
    method: "GET",
    headers: {
      Authentication: `Bearer ${token.data.token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  })
    .then((res) => res.json())
};

const getToken = async () => {
  return fetch("/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: "patrickreynoldscoding@gmail.com",
      password: "password",
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  }).then((res) => res.json());
};

export default function Matches() {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    getToken()
      .then(getMatchData)
      // .then(setMatchData)
      .catch(console.error)
  }, []);

  return <div>{matchData}</div>;
}