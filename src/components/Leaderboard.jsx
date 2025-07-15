// LeaderboardList.js
import React from "react";
// import trophy from "../assets/trophy.png";
import "./Leaderboard.css";
import ClaimPoints from "./ClaimPoints.jsx";

const LeaderboardList = ({ users }) => {
  return (
    <div className="leaderboard-list">
      {users.map((user, i) => (
        <div className="user-row" key={user.rank}>
          <span className="rank">{user.rank}</span>
          {/* <img src={user.avatar} alt="avatar" className="avatar-small" /> */}
          <span className="name">{user.name}</span>
          <span className="points-row">
            {user.totalPoints.toLocaleString()}
            {/* <img src={trophy} alt="🏆" /> */}
          </span>
        </div>
      ))}
      
    </div>
  );
};

export default LeaderboardList;
