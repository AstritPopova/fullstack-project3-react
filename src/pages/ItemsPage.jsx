import React, { useState } from "react";
import FilterBar from "../components/FilterBar.jsx";
import ItemForm from "../components/ItemForm.jsx";
import ItemCard from "../components/ItemCard.jsx";
import Modal from "../components/Modal.jsx";

// Main page that shows and manages all items.
// It receives all data and handlers from App.jsx via props.
function ItemsPage({
  items,
  rawItems,
  onAddItem,
  onUpdateItem,
  onDeleteItem,
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onReload,
}) {
  // For editing we keep track of the item that is being edited.
  const [editingItem, setEditingItem] = useState(null);

  // When the user clicks "Edit", we open the modal.
  function handleEditClick(item) {
    setEditingItem(item);
  }

  // When the user submits the edit form
  function handleEditSubmit(updatedItemData) {
    // Combine old and new data
    const merged = {
      ...editingItem,
      ...updatedItemData,
    };
    onUpdateItem(merged);
    setEditingItem(null);
  }

  // Toggle done / not done
  function handleToggleDone(item) {
    const done = !(item.done ?? item.completed ?? false);
    const updated = { ...item, done };
    onUpdateItem(updated);
  }

  // Delete with small confirm
  function handleDelete(item) {
    const title = item.title ?? item.text ?? "this item";
    const ok = window.confirm(`Delete "${title}"?`);
    if (!ok) return;
    onDeleteItem(item);
  }

  return (
    <div className="page">
      <section className="panel panel-main">
        <div className="panel-header">
          <h2>Your coursework items</h2>
          <p className="panel-subtitle">
            These items are coming from your Project 2 backend.
          </p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          statusFilter={statusFilter}
          onStatusFilterChange={onStatusFilterChange}
        />

        <div className="items-list">
          {items.length === 0 && (
            <p className="empty-text">
              No items match this filter. You can add a new one below.
            </p>
          )}

          {items.map((item) => (
            <ItemCard
              key={item.id ?? item._id}
              item={item}
              onToggleDone={handleToggleDone}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </section>

      <section className="panel panel-side">
        <div className="panel-header">
          <h2>Add new item</h2>
          <p className="panel-subtitle">
            Fill the form and send it to your API as a POST request.
          </p>
        </div>

        <ItemForm onSubmit={onAddItem} />

        <div className="panel-footer">
          <button className="btn btn-secondary btn-full" onClick={onReload}>
            Reload items from API
          </button>

          <p className="panel-hint">
            Items currently loaded: <strong>{rawItems.length}</strong>
          </p>
        </div>
      </section>

      {/* Simple edit modal */}
      {editingItem && (
        <Modal
          title="Edit item"
          onClose={() => {
            setEditingItem(null);
          }}
        >
          <ItemForm
            initialItem={editingItem}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditingItem(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default ItemsPage;
