import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses, updateStatus } = useContext(CourseContext);

  const course = courses.find(c => c.id.toString() === id);
  if (!course) return <p>Course not found</p>;

  return (
    <div className="page">
      <h2>{course.name}</h2>
      <p>Duration: {course.duration}</p>
      <p>Status: {course.status}</p>
      <button onClick={() => updateStatus(course.id, "Active")}>
        Activate Course
      </button>
    </div>
  );
};

export default CourseDetails;
