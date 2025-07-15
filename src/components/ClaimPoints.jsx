import React from "react";

const ClaimPoints = ({ users, selectedUser, setSelectedUser, onClaim }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Select User --</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>
      <button onClick={onClaim} style={{ marginLeft: "10px" }}>
        Claim Points
      </button>
    </div>
  );
};

export default ClaimPoints;
