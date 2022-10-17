import React, { useEffect, useState } from "react";
import "./Matches.css";

//functions
import { login } from "../functions/worldCupApi/login";

export default function Matches() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);


    const login = async () => {
      try {
        const res = await fetch("/user/login", {
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
        })
          .then((res) => res.json())
          .then((data) => {
            setToken(data.data.token);
            setIsLoading(true)
            
          });
      } catch (err) {}
      }

      const getMatchData = async () => {
        console.log(`hello ${token}`)
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ3OGJiYWRhYTlhZmYzZTc1YTRmNzkiLCJpYXQiOjE2NjU5NzYxODgsImV4cCI6MTY2NjA2MjU4OH0.dZjnJb8R9N5nKtWPSbMkpIBMZm2duYYnmryOVWqrrqw"
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


  useEffect(() => {
    login()
    getMatchData()
  }, []);

  return <div>
    {isLoading ? token : "loading" }
        </div>;

}
