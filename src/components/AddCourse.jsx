import React, { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const { addCourse } = useContext(CourseContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddCourse = () => {
    addCourse({
      id: Date.now(),
      name,
      duration,
      status: "Pending",
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Add New Course</h2>

      <input
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button onClick={handleAddCourse}>
        Add Course
      </button>
    </div>
  );
}

export default AddCourse;
