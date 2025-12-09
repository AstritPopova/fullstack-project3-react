import React from "react";

// Very small and simple modal.
// It covers the screen with a semi-transparent background.
// Clicking on the dark background also closes the modal.
function Modal({ title, onClose, children }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          // Stop click from bubbling so we don't close when clicking inside the modal
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
