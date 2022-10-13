import React, { useEffect, useState } from "react";
import "./Matches.css";

//functions
import { login } from "../functions/worldCupApi/login";

export default function Matches() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // console.log(token);

    // const login = async () => {
    //   try {
    //     const res = await fetch("/user/login", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: "patrickreynoldscoding@gmail.com",
    //         password: "password",
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers":
    //           "Origin, X-Requested-With, Content-Type, Accept",
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setToken(data);
    //       });
    //   } catch (err) {}
      const getMatchData = async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ3OGJiYWRhYTlhZmYzZTc1YTRmNzkiLCJpYXQiOjE2NjU2NDUxNzEsImV4cCI6MTY2NTczMTU3MX0.6vkgTRzIH5_1crSuI7wfIPWSlkvxT06WXHVhi4Hl0Pk"
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
      getMatchData();
    // };

    // login();
  }, []);

  return <div></div>;

  return <div>Matches</div>;
}
