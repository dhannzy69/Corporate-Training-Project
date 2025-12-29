// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, username: "admin", password: "admin123", role: "admin" },
      { id: 2, username: "user1", password: "user123", role: "user", enrolledCourses: [] },
    ];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = (username, password) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return null;
    setCurrentUser(found);
    return found;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const addUser = (username, password) => {
    setUsers([...users, { id: Date.now(), username, password, role: "user", enrolledCourses: [] }]);
  };

  const updateUser = updatedUser => {
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    if (currentUser?.id === updatedUser.id) setCurrentUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, login, logout, addUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
