import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { fetchItems, createItem, updateItem, deleteItemById } from "./api/itemsApi.js";
import ItemsPage from "./pages/ItemsPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

// Small helper to get id from item objects that may use `id` or `_id`.
const getItemId = (item) => item.id ?? item._id;

function App() {
  // All items coming from the backend
  const [items, setItems] = useState([]);
  // Loading and error state for API calls
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Search text and status filter (all / done / not-done)
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Load items when the app starts
  useEffect(() => {
    loadItems();
  }, []);

  // Fetch all items from the backend
  async function loadItems() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchItems();
      // We keep the data as is, just store it directly
      setItems(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load items from the API.");
    } finally {
      setLoading(false);
    }
  }

  // Create a new item
  async function handleAddItem(formData) {
    // formData comes from ItemForm and should have title + description
    setLoading(true);
    setError(null);
    try {
      const created = await createItem(formData);
      // Add the new item to the list
      setItems((prev) => [...prev, created]);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to create a new item.");
    } finally {
      setLoading(false);
    }
  }

  // Update an item (for example when toggling done or editing text)
  async function handleUpdateItem(updatedItem) {
    const id = getItemId(updatedItem);
    if (!id) {
      console.warn("Item has no id, cannot update", updatedItem);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const saved = await updateItem(id, updatedItem);
      // Replace the old item in the array with the saved one
      setItems((prev) =>
        prev.map((item) => (getItemId(item) === getItemId(saved) ? saved : item))
      );
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update the item.");
    } finally {
      setLoading(false);
    }
  }

  // Delete an item
  async function handleDeleteItem(itemToDelete) {
    const id = getItemId(itemToDelete);
    if (!id) {
      console.warn("Item has no id, cannot delete", itemToDelete);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await deleteItemById(id);
      setItems((prev) => prev.filter((item) => getItemId(item) !== id));
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to delete the item.");
    } finally {
      setLoading(false);
    }
  }

  // Filter items by search text and status
  const filteredItems = items.filter((item) => {
    const title = item.title ?? item.text ?? "";
    const description = item.description ?? "";
    const done = Boolean(item.done ?? item.completed ?? false);

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "done"
        ? done
        : !done; // "not-done"

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app-root">
      <header className="app-header">
        <h1 className="app-title">Coursework App – React Frontend</h1>
        <p className="app-subtitle">
          Simple React UI for your Full Stack Project 2 API.
        </p>
        <nav className="app-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Items
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Stats
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        {/* Show top-level loading and error so user always sees what is happening */}
        {loading && <LoadingSpinner text="Talking to the API..." />}
        {error && (
          <ErrorMessage message={error} onRetry={loadItems}>
            Something went wrong when calling your backend.
          </ErrorMessage>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <ItemsPage
                items={filteredItems}
                rawItems={items}
                onAddItem={handleAddItem}
                onUpdateItem={handleUpdateItem}
                onDeleteItem={handleDeleteItem}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                onReload={loadItems}
              />
            }
          />
          <Route
            path="/stats"
            element={<StatsPage items={items} loading={loading} />}
          />
        </Routes>
      </main>

      <footer className="app-footer">
        <small>
          Project 3 – React Front-End · Uses API from Project 2 on Render.
        </small>
      </footer>
    </div>
  );
}

export default App;
