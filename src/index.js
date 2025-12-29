import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { CourseProvider } from "./context/CourseContext";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
