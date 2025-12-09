import React from "react";

// Very simple loading indicator so the user knows that something is happening.
function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="loading">
      <div className="loading-dot" />
      <div className="loading-dot" />
      <div className="loading-dot" />
      <span className="loading-text">{text}</span>
    </div>
  );
}

export default LoadingSpinner;
