import React, { useState, useRef } from "react";
import "./ClaimPoints.css";

const ClaimPoints = ({ users, selectedUser, setSelectedUser, onClaim }) => {

  return (
    <div className="claim-container">
      <select
        className="claim-select"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>

      <button className="spin-button" onClick={onClaim}>
        Claim
      </button>

    </div>
  );
};

export default ClaimPoints;