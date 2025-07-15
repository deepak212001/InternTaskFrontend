import React from "react";
import "./Leaderboard.css";

const LeaderboardList = ({ users }) => {
  return (
    <div className="leaderboard-container">
      <h2>🏅 Leaderboard</h2>
      <ul className="leaderboard-list">
        {users.map((user, index) => (
          <li key={user._id} className={`leaderboard-item rank-${index + 1}`}>
            <span className="rank">{index + 1}</span>
            <span className="name">{user.name}</span>
            <span className="points">{user.totalPoints}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardList;