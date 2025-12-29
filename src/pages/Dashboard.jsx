import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { courses } = useContext(CourseContext);
  const { currentUser, updateUser, users, deleteUser } = useContext(AuthContext);

  // User enrolls in a course
  const handleEnroll = (course) => {
    if (currentUser.enrolledCourses.find(c => c.id === course.id)) return;
    const updated = { 
      ...currentUser, 
      enrolledCourses: [...currentUser.enrolledCourses, { ...course, completion: 0 }] 
    };
    updateUser(updated);
    alert("Enrolled successfully!");
  };

  // Admin removes user from a course
  const handleRemoveUserFromCourse = (course, user) => {
    const updatedUser = {
      ...user,
      enrolledCourses: user.enrolledCourses.filter(c => c.id !== course.id)
    };
    updateUser(updatedUser);
    alert(`Removed ${user.username} from ${course.name}`);
  };

  return (
    <div className="page">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map(course => {
          const enrolled = currentUser?.enrolledCourses?.find(c => c.id === course.id);

          return (
            <div key={course.id} className={`course-card ${enrolled ? "completed" : ""}`}>
              <h3>{course.name}</h3>
              <p>Duration: {course.duration}</p>
              <p>Status: {course.status}</p>

              {/* For regular users: enroll button */}
              {currentUser.role === "user" && (
                enrolled ? (
                  <div className="completion-badge">{enrolled.completion}%</div>
                ) : (
                  <button className="primary-btn" onClick={() => handleEnroll(course)}>
                    Enroll
                  </button>
                )
              )}

              {/* For admin: show enrolled users */}
              {currentUser.role === "admin" && (
                <div style={{ marginTop: "10px" }}>
                  <strong>Enrolled Users:</strong>
                  <ul>
                    {users
                      .filter(u => u.enrolledCourses?.some(c => c.id === course.id))
                      .map(u => (
                        <li key={u.id} style={{ marginBottom: "5px" }}>
                          {u.username}
                          <button
                            onClick={() => handleRemoveUserFromCourse(course, u)}
                            style={{
                              marginLeft: "8px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "#ef4444",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Remove from course
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete user ${u.username}?`)) {
                                deleteUser(u.id);
                              }
                            }}
                            style={{
                              marginLeft: "5px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "#b91c1c",
                              color: "white",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Delete User
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
