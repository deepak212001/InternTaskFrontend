import React from "react";
import "./History.css";

const History = ({ history }) => {
  return (
    <div className="history-container">
      <h2>📋 Claim History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, index) => (
            <tr key={index}>
              <td>{h.userId?.name || "N/A"}</td>
              <td>{h.points}</td>
              <td>{new Date(h.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
