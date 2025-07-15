import React, { useState } from "react";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter new user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit" style={{ marginLeft: "10px" }}>Add User</button>
    </form>
  );
};

export default AddUserForm;
