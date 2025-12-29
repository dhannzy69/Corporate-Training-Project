import React from "react";
import "./Navbar.css"
const Navbar = ({ role, logout }) => {
  return (
    <div className="navbar">
      <h2>Corporate Training System</h2>
      <div className="profile">
        <span style={{ marginRight: "12px" }}>
          {role?.toUpperCase()}
        </span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
