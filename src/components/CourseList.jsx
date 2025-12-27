import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";

function CourseList() {
  const { courses } = useContext(CourseContext);

  return (
    <div>
      <h2>Course List</h2>

      {courses.length === 0 && <p>No courses available</p>}

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
