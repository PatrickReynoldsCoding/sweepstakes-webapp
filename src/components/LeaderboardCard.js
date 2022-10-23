import React from "react";

import "./Leaderboardcard.css";

// Components
import TeamDataBox from "./TeamDataBox";

export default function () {
  return (
    <div>
      <div className="leadercard-container">
        <div className="team-container">
          <div className="team-icon">Icon</div>
          <div className="team-text">France - Hakim</div>
        </div>
        <div className="teamdata-container">
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
          <div className="teamdata-box">
            <div className="databox-header">MP</div>
            <div className="databox-value">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
