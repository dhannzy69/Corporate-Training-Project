import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";

import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/AddCourse";
import AddUser from "./pages/AddUser";
import Login from "./pages/Login";
import UserCourseDetails from "./pages/UserCourseDetails";
import "./App.css"
import Profile from "./components/Profile";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h3>Corporate Training</h3>
      {currentUser && <a href="/dashboard">Dashboard</a>}
      {currentUser?.role === "admin" && <a href="/add-course">Add Course</a>}
      {currentUser?.role === "admin" && <a href="/add-user">Add User</a>}
    </div>
  );
};

// Protected Route
const ProtectedRoute = ({ children, adminOnly }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  if (adminOnly && currentUser.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
};

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <Router>
          <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />

            <div style={{ flex: 1 }}>
              {/* Topbar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "10px 20px",
                  background: "#e0e0e0",
                }}
              >
                <Profile />
              </div>

              {/* Page Content */}
              <div className="page-content">
                <Routes>
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/add-course"
                    element={
                      <ProtectedRoute adminOnly={true}>
                        <AddCourse />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/add-user"
                    element={
                      <ProtectedRoute adminOnly={true}>
                        <AddUser />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/course/:id"
                    element={
                      <ProtectedRoute>
                        <UserCourseDetails />
                      </ProtectedRoute>
                    }
                  />

                  {/* Default */}
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
