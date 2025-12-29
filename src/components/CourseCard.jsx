import React, { useState } from "react";

const CourseCard = ({ course, isAdmin, onDelete, onUpdateCompletion }) => {
  const [completion, setCompletion] = useState(course.completion || 0);

  const handleCompletionChange = (e) => {
    const newValue = Number(e.target.value);
    setCompletion(newValue);
    onUpdateCompletion(course.id, newValue); // inform parent
  };

  return (
    <div className={`course-card ${completion === 100 ? "completed" : ""}`}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      {/* Completion Badge */}
      <div className="completion-badge">{completion}%</div>

      {/* User updates completion */}
      {!isAdmin && (
        <input
          type="range"
          min="0"
          max="100"
          value={completion}
          onChange={handleCompletionChange}
          className="completion-slider"
        />
      )}

      {/* Admin Delete Button */}
      {isAdmin && (
        <button className="delete-btn" onClick={() => onDelete(course.id)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default CourseCard;
