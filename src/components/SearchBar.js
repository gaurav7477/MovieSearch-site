import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ initialQuery = "", onSearch }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div
          contentEditable
          id="search-bar-input"
          onInput={(e) => setQuery(e.target.textContent)}
          placeholder="Search for a movie..."
        ></div>
        <div id="search-bar-button" onClick={handleSubmit} tabIndex={1}>
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
