import React, { useEffect, useState } from "react";
import "./Matches.css";

      const getMatchData = async (token) => {
        // console.log(`hello ${token}`)
    
        try {
          const res = await fetch("/match", {
            method: "GET",
            headers: {
             Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        } catch (err) {}
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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ3OGJiYWRhYTlhZmYzZTc1YTRmNzkiLCJpYXQiOjE2NjU5ODkzNTcsImV4cCI6MTY2NjA3NTc1N30.4xaff7lqxqT38rvO-01xcwPhxxgtw7-_Yq8YzqJVfXU"        

  useEffect(() => {
getMatchData(token)
  }, []);

  return <div>{matchData}</div>;
}