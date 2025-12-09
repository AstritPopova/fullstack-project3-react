import React from "react";

// A single item card in the list.
// Shows title, description and actions.
function ItemCard({ item, onToggleDone, onEdit, onDelete }) {
  // Your backend uses `name` for the main text.
  const title = item.title ?? item.text ?? item.name ?? "Untitled item";
  const description = item.description ?? "";
  const done = Boolean(item.done ?? item.completed ?? false);

  return (
    <div className={`item-card ${done ? "item-card-done" : ""}`}>
      <div className="item-card-main">
        <div>
          <h3 className="item-title">
            {done && <span className="item-status-dot" />}
            {title}
          </h3>
          {description && (
            <p className="item-description">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="item-card-actions">
        <button
          className="btn btn-small btn-secondary"
          onClick={() => onToggleDone(item)}
        >
          {done ? "Mark as not done" : "Mark as done"}
        </button>
        <button
          className="btn btn-small btn-primary"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>
        <button
          className="btn btn-small btn-danger"
          onClick={() => onDelete(item)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
