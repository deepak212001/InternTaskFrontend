import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter a user name");
    onAdd(name);
    setName("");
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="add-user-input"
      />
      <button type="submit" className="add-user-button">➕ Add User</button>
    </form>
  );
};

export default AddUserForm;