import React, { useState } from "react";

// Reusable form for adding and editing items.
// If an `initialItem` is given, the form works in "edit" mode.
// Otherwise it works in "add" mode.
function ItemForm({ initialItem = null, onSubmit, onCancel }) {
  // Your backend uses `name` for the main text.
  const [title, setTitle] = useState(
    initialItem?.title ?? initialItem?.text ?? initialItem?.name ?? ""
  );
  const [description, setDescription] = useState(
    initialItem?.description ?? ""
  );

  function handleSubmit(event) {
    event.preventDefault();

    // Basic validation: we want at least a title
    if (!title.trim()) {
      alert("Please add a title for the item.");
      return;
    }

    // We pass the data back up to the parent component.
    // The important thing: we set `name` because backend expects `name`.
    onSubmit({
      ...initialItem,
      name: title.trim(),
      description: description.trim(),
    });

    // Clear the form only in add mode
    if (!initialItem) {
      setTitle("");
      setDescription("");
    }
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-label">
          Title
          <input
            className="input-text"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: Finish React coursework"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Description
          <textarea
            className="input-textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional: Add more details if you want."
          />
        </label>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit">
          {initialItem ? "Save changes" : "Add item"}
        </button>
        {onCancel && (
          <button
            className="btn btn-secondary"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ItemForm;
