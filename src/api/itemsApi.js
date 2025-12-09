// Small helper file for all API calls.
// Works with Project 2 backend on Render.

// Read base URL from .env, fallback to Render backend if missing
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://fullstack-project2-uves.onrender.com/api";

// Just to see in console which URL is used
console.log("API_BASE_URL in frontend:", API_BASE_URL);

// Helper: build full URL for a given path, for example "/items"
function buildUrl(path) {
  return `${API_BASE_URL}${path}`;
}

// =======================
// GET all items
// =======================
export async function fetchItems() {
  const response = await fetch(buildUrl("/items"));

  if (!response.ok) {
    throw new Error(`GET /items failed with status ${response.status}`);
  }

  const data = await response.json();
  return data; // array of { id, name, done }
}

// =======================
// CREATE item
// =======================
export async function createItem(formData) {
  // Accept both shapes: { title, description } OR { name, description }
  const name = (formData.name ?? formData.title ?? "").toString().trim();
  const description = (formData.description ?? "").toString().trim();

  if (!name) {
    throw new Error("Name/title is required before sending to API.");
  }

  const newItem = {
    name,        // Project 2 backend expects "name"
    description, // optional
  };

  const response = await fetch(buildUrl("/items"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });

  if (!response.ok) {
    throw new Error(`POST /items failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// =======================
// UPDATE item
// =======================
export async function updateItem(id, updatedItem) {
  // Make sure name is not empty if provided
  if (updatedItem.name) {
    updatedItem.name = updatedItem.name.toString().trim();
  }

  const response = await fetch(buildUrl(`/items/${id}`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  });

  if (!response.ok) {
    throw new Error(`PATCH /items/${id} failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// =======================
// DELETE item
// =======================
export async function deleteItemById(id) {
  const response = await fetch(buildUrl(`/items/${id}`), {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`DELETE /items/${id} failed with status ${response.status}`);
  }

  return true;
}
