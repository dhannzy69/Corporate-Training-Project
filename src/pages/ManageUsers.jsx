import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const ManageUsers = () => {
  const { users, addUser, deleteUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = () => {
    if (!username || !password) return alert("Fill all fields");
    addUser({ id: Date.now(), username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="page">
      <h2>Manage Users</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <h3>Existing Users</h3>
      <ul>
        {users.map(u => (
          <li key={u.id} style={{ marginBottom: "10px" }}>
            {u.username} 
            <button 
              style={{ marginLeft: "10px" }}
              onClick={() => deleteUser(u.id)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
