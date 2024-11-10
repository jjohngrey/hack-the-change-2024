// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here, integrate with Google Places API if needed
    console.log(`Searching for ${query}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for accessible locations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
