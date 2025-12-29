import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courses = JSON.parse(localStorage.getItem("courses") || "[]");
    const newCourse = { id: Date.now(), name: courseName };
    localStorage.setItem("courses", JSON.stringify([...courses, newCourse]));
    setCourseName("");
    alert("Course added successfully!");
  };

  if (currentUser.role !== "admin") return <p>You are not authorized to add courses.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        /><br/><br/>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
