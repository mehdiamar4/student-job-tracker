function FilterBar({ selectedStatus, onFilterChange }) {
  const statuses = ["All", "Saved", "Applied", "Interview", "Rejected", "Offer"];

  return (
    <div className="filter-bar">
      <h2>Filter Applications</h2>

      <div className="filter-buttons">
        {statuses.map((status) => (
          <button
            key={status}
            className={selectedStatus === status ? "active-filter" : ""}
            onClick={() => onFilterChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;