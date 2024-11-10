// components/FilterOptions.js
import React from 'react';

const FilterOptions = ({ onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    const filter = event.target.name;
    onFilterChange((prev) => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]);
  };

  return (
    <div className="filter-options">
      <label>
        <input type="checkbox" name="wheelchair" onChange={handleCheckboxChange} />
        Wheelchair Accessible
      </label>
      <label>
        <input type="checkbox" name="audio" onChange={handleCheckboxChange} />
        Audio Support
      </label>
      <label>
        <input type="checkbox" name="braille" onChange={handleCheckboxChange} />
        Braille Available
      </label>
      {/* Add more filters as needed */}
    </div>
  );
};

export default FilterOptions;
