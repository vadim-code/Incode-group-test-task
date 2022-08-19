import React from 'react';
import './styles.css';

function Search({ onSerchChange }) {
  function onChange(e) {
    onSerchChange(e.target.value);
  }

  return (
    <input
      type="text"
      className="search"
      name="searchInput"
      placeholder="Search ticker..."
      onChange={(e) => onChange(e)}
    />
  );
}

export default Search;
