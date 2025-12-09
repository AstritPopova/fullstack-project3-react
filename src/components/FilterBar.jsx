import React from "react";

// Filter bar for search text and status filter.
// This is a controlled component: values come from props, and changes
// are sent back via callback functions.
function FilterBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="input-text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="input-select"
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
      >
        <option value="all">All items</option>
        <option value="done">Done</option>
        <option value="not-done">Not done</option>
      </select>
    </div>
  );
}

export default FilterBar;
