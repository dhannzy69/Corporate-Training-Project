import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CourseProvider } from "./context/CourseContext";

ReactDOM.render(
 <React.StrictMode>
  <CourseProvider>
   <App />
  </CourseProvider>
 </React.StrictMode>,
 document.getElementById("root")
);

reportWebVitals();
