// src/pages/AdminDashboard.jsx
import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { courses, deleteCourse } = useContext(CourseContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <Link
        to="/add-course"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Add New Course
      </Link>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <tr key={course.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{course.id}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{course.title}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{course.description}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => deleteCourse(course.id)}
                    style={{
                      padding: "5px 10px",
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                No courses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
