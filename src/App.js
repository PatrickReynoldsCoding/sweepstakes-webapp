import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//dummyData
const teams = [
  {
    name: "Qatar",
    availible: true
  },
    {
    name: "Ecuador",
    availible: true
  },
    {
    name: "Senegal",
    availible: false
  },
    {
    name: "Netherlands",
    availible: true
  },
  
]

const availibleTeams = teams.filter(team => team.availible)


const randomTeam = availibleTeams[Math.floor(Math.random() * availibleTeams.length)];
console.log(randomTeam)
function App() {
  return (
<>
  <div className="container">
    <div className="title">2022 World Cup Sweepstakes</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
</>
  );
}

export default App;
