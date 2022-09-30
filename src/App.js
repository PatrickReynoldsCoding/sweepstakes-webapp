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
    <div className="App">
  
    </div>
  );
}

export default App;
