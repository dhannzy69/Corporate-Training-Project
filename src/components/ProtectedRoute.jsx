import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  if (role && currentUser.role !== role) return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;
