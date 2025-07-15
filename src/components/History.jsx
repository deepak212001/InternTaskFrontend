import React from "react";

const History = ({ history }) => {
  return (
    <div>
      <h2>📋 Claim History</h2>
      <table border="1" cellPadding="8">
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
              <td>{h.userId.name}</td>
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
