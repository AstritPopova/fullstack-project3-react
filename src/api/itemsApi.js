// Small helper file for all API calls.
// This keeps the fetch logic in one place and makes it easy to change later.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  // This will show up in the browser console.
  console.warn(
    "VITE_API_BASE_URL is not set. Please add it to your .env file in the project root."
  );
}

// Helper to build full URL for a given path
const buildUrl = (path) => {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
};

// Read all items from the backend
export async function fetchItems() {
  const response = await fetch(buildUrl("/items"));

  if (!response.ok) {
    throw new Error(`GET /items failed with status ${response.status}`);
  }

  // Backend returns JSON array of items: [{ id, name, done }]
  const data = await response.json();
  return data;
}

// Create a new item
export async function createItem(formData) {
  // formData.title comes from ItemForm
  const response = await fetch(buildUrl("/items"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Backend expects { name }
    body: JSON.stringify({
      name: formData.title,
    }),
  });

  if (!response.ok) {
    throw new Error(`POST /items failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Update an existing item by id (backend uses PATCH)
export async function updateItem(id, updatedItem) {
  const response = await fetch(buildUrl(`/items/${id}`), {
    method: "PATCH", // 🔹 important: PATCH, not PUT
    headers: {
      "Content-Type": "application/json",
    },
    // We send name + done + any other fields we might have.
    body: JSON.stringify(updatedItem),
  });

  if (!response.ok) {
    throw new Error(`PATCH /items/${id} failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Delete an item by id
export async function deleteItemById(id) {
  const response = await fetch(buildUrl(`/items/${id}`), {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`DELETE /items/${id} failed with status ${response.status}`);
  }

  // No JSON body expected, just return true
  return true;
}
