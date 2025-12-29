import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { courses } = useContext(CourseContext);
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map(c => (
          <div key={c.id} className="course-card">
            <h3>{c.name}</h3>
            <p>Duration: {c.duration}</p>
            <button onClick={() => navigate(`/user/course/${c.id}`)}>View Course</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
