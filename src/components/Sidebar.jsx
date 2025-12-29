import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Slidebar.css"
const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h3>Corporate Training</h3>
      <Link to="/dashboard">Dashboard</Link>
      {currentUser?.role === "admin" && <Link to="/add-course">Add Course</Link>}
      {currentUser?.role === "admin" && <Link to="/add-user">Add User</Link>}
    </div>
  );
};

export default Sidebar;
