// components/SearchBar.js
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here, integrate with Google Places API if needed
    console.log(`Searching for ${query}`);
  };

  return (
    <div className="top-bar">
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search for accessible locations"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        {/* TODO add search feature*/}
        <button onClick={handleSearch}>
            <CiSearch style={{
                fontSize:"30px",
                padding: "0.5rem",
                backgroundColor: "white",
                color: "rgb(244, 0, 151)",
                border: "none",
                cursor: "pointer",
                borderRadius: "50cap"
                }}/></button>
        </div>
        <div className="menu">
            {/* TODO add onclick*/}
            <button ><CiMenuBurger style={{
                fontSize:"30px",
                padding: "0.5rem",
                backgroundColor: "white",
                color: "rgb(244, 0, 151)",
                border: "none",
                cursor: "pointer",
                borderRadius: "50cap"
                }}/></button>
        </div>
    </div>
    
  );
};

export default SearchBar;
