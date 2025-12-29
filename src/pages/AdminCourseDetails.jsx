import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

const AdminCourseDetails = () => {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);

  const course = courses.find(c => c.id.toString() === id);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Duration: {course.duration}</p>
      <p>Status: {course.status}</p>
    </div>
  );
};

export default AdminCourseDetails;

