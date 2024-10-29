import React from 'react';
import './Sidebar.css';

const Sidebar = ({ search, setSearch, filter, setFilter }) => {
  return (
    <aside className="sidebar bg-light p-3">
      <h4>Filters</h4>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className="form-select mb-3" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
    </aside>
  );
};

export default Sidebar;
