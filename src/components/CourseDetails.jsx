import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

function CourseDetails() {
  const { id } = useParams();
  const { courses, updateStatus } = useContext(CourseContext);

  const course = courses.find(
    (c) => c.id.toString() === id
  );

  if (!course) return null;

  return (
    <div>
      <p>{course.name}</p>
      <p>{course.duration}</p>
      <p>{course.status}</p>

      <button onClick={() => updateStatus(course.id, "Active")}>
        Update Status
      </button>
    </div>
  );
}

export default CourseDetails;
