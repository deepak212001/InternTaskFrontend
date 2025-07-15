import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUserForm from "./components/AddUserForm.jsx";
import ClaimPoints from "./components/ClaimPoints.jsx";
import LeaderboardList from "./components/Leaderboard.jsx";
import History from "./components/History.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      console.log("Fetched Users:", res.data);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get("/api/leaderboard");
    setLeaderboard(res.data);
  };

  const fetchHistory = async () => {
    const res = await axios.get("/api/history");
    console.log("Fetched History:", res.data);
    setHistory(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
    fetchHistory();
  }, []);

  const handleClaim = async () => {
    if (!selectedUser) return alert("Please select a user");
    const res = await axios.post("/api/claim", {
      userId: selectedUser,
    });
    alert(`${res.data.user.name} got ${res.data.points} points!`);
    fetchLeaderboard();
    fetchUsers();
    fetchHistory();
  };


  const handleUserAdd = async (name) => {
    try {
      const res = await axios.post("/api/adduser", { name });
      alert(`${res.data.name} added successfully!`);
      console.log("User added:", res.data, res);
      fetchUsers();
      fetchLeaderboard();
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("⚠️ User already exists!");
      } else {
        alert("Something went wrong while adding the user.");
      }
    }
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "auto",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#696161ff",
    }}>
      <h1>🏆 Points Claiming System</h1>
      <AddUserForm onAdd={handleUserAdd} />

      <ClaimPoints
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onClaim={handleClaim}
      />

      {/* <Leaderboard leaderboard={leaderboard} /> */}
      {/* <TopThree topUsers={leaderboard.slice(0, 3)} /> */}
      <LeaderboardList users={leaderboard} />
      <History history={history} />
    </div>
  );
}

export default App;
