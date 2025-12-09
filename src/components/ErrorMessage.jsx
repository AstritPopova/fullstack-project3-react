import React from "react";

// Reusable error message component.
// Shows a friendly text and an optional retry button.
function ErrorMessage({ message, onRetry, children }) {
  return (
    <div className="error-box">
      <p className="error-title">Oops, something went wrong.</p>
      {children && <p className="error-body">{children}</p>}
      <p className="error-details">{message}</p>
      {onRetry && (
        <button className="btn btn-secondary" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
