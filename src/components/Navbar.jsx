import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Course List</Link>{" "}
      <Link to="/add">Add Course</Link>
    </nav>
  );
}

export default Navbar;

