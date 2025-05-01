import React, { useState } from 'react';
import '../App.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}>
      <input
        type="text"
        placeholder="Search Destinations"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        aria-label="Search Destinations"
        style={{minWidth:'220px'}}
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
