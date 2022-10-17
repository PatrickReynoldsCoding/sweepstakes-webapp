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
        // console.log(`hello ${token}`)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ3OGJiYWRhYTlhZmYzZTc1YTRmNzkiLCJpYXQiOjE2NjU5ODc2MDcsImV4cCI6MTY2NjA3NDAwN30.Ol-B7s8qkVlv5Yrng6rpYCf8EC99wWwluz-d_jzlXtQ"        
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
    getMatchData()
  }, []);

  return <div>
    {isLoading ? token : "loading" }
        </div>;

}
