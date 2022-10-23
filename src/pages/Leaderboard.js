import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

//components
import LeaderboardCard from "../components/LeaderboardCard";

const getStandingData = async (token) => {
  // console.log(`hello ${token}`)

  try {
    return fetch("/standings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }).then((res) => res.json());
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

export default function Leaderboard() {
  const [standingData, setStandingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getToken()
      .then((res) => getStandingData(res.data.token))
      .then((res) => setStandingData(JSON.parse(JSON.stringify(res.data))))
      .then(() => setLoading(false))
      .then(() => console.log(standingData))
      .catch(console.error);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        standingData.map((team) => {
          return (
            <div key={team._id}>
              Group: {match.group} - Matchday {match.matchday} of 3<br />
              {match.home_team_en} vs {match.away_team_en} <br />
              {match.local_date}
            </div>
          );
        })
      )}
    </div>
  );
}
