import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>Welcome to the Course Management System</h1>

      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
