// TopThree.js
import React from "react";
import "./Leaderboard.css"; // CSS file for styles
// import trophy from "../assets/trophy.png"; // 🏆 Trophy image

const TopThree = ({ topUsers }) => {
    return (
        <div className="top-three-container">
            {topUsers.map((user, i) => (
                <div className={`top-card rank-${i + 1}`} key={user.rank}>
                    <img src={user.avatar} alt={user.name} className="avatar" />
                    <h4>{user.name}</h4>
                    <div className="points">
                        {/* <img src={trophy} alt="trophy" /> */}
                        <span>{user.totalPoints.toLocaleString()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopThree;
