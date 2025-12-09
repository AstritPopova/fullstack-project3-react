import React from "react";

// Small stats view to show basic numbers about the items.
// This is our second main route for the project.
function StatsPage({ items, loading }) {
  const total = items.length;
  const doneCount = items.filter(
    (item) => item.done ?? item.completed ?? false
  ).length;
  const notDoneCount = total - doneCount;

  return (
    <div className="page">
      <section className="panel panel-main">
        <div className="panel-header">
          <h2>Stats</h2>
          <p className="panel-subtitle">
            Quick overview of your coursework items.
          </p>
        </div>

        {loading && <p>Updating numbers...</p>}

        {total === 0 ? (
          <p className="empty-text">
            No items loaded yet. Go to the Items page and add something.
          </p>
        ) : (
          <div className="stats-grid">
            <div className="stat-box">
              <p className="stat-label">Total items</p>
              <p className="stat-value">{total}</p>
            </div>
            <div className="stat-box">
              <p className="stat-label">Done</p>
              <p className="stat-value">{doneCount}</p>
            </div>
            <div className="stat-box">
              <p className="stat-label">Not done</p>
              <p className="stat-value">{notDoneCount}</p>
            </div>
          </div>
        )}

        <p className="panel-hint">
          This page shows that your React frontend is using shared state
          and simple calculations on top of the API data.
        </p>
      </section>
    </div>
  );
}

export default StatsPage;
