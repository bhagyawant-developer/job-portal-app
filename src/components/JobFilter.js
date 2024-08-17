import React from 'react';

function JobFilter({ onFilter }) {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <label>Filter by Gender: </label>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>
  );
}

export default JobFilter;
