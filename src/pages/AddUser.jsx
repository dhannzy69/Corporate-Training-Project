import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AddUser = () => {
  const { addUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(username, password);
    setUsername("");
    setPassword("");
    alert("User added successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/><br/>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/><br/>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
