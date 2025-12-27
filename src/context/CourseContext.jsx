import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const updateStatus = (id, status) => {
    setCourses(
      courses.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateStatus }}>
      {children}
    </CourseContext.Provider>
  );
};
