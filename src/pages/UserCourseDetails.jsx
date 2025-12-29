import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import { AuthContext } from "../context/AuthContext";

const UserCourseDetails = () => {
  const { id } = useParams();
  const { courses } = useContext(CourseContext);
  const { currentUser, updateUser } = useContext(AuthContext);

  const course = courses.find(c => c.id === Number(id));
  const enrolledCourse = currentUser?.enrolledCourses?.find(ec => ec.id === course?.id);

  const [completion, setCompletion] = useState(enrolledCourse ? enrolledCourse.completion : 0);

  if (!course) return <p>Course not found</p>;
  if (!currentUser) return <p>Please login to view course details.</p>;

  const handleUpdate = () => {
    if (!enrolledCourse) return;
    const updatedCourses = currentUser.enrolledCourses.map(ec =>
      ec.id === course.id ? { ...ec, completion } : ec
    );
    updateUser({ ...currentUser, enrolledCourses: updatedCourses });
    alert("Completion updated!");
  };

  return (
    <div className="page">
      <h2>{course.name}</h2>
      <p>Duration: {course.duration}</p>
      <p>Status: {course.status}</p>

      {enrolledCourse ? (
        <>
          <label>Completion: {completion}%</label>
          <input
            type="number"
            value={completion}
            min={0}
            max={100}
            onChange={e => setCompletion(Number(e.target.value))}
          />
          <button onClick={handleUpdate}>Update Completion</button>
        </>
      ) : (
        <p>You are not enrolled in this course.</p>
      )}
    </div>
  );
};

export default UserCourseDetails;
