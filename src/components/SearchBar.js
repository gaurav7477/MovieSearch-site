import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

function SearchBar({ initialQuery = "", onSearch }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

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
        <div>
      <input
      id="search-bar-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for a movie..."
        />
        </div>

        {/* <div
          id="search-bar-input"
          onInput={(e) => setQuery(e.target.textContent)}
          placeholder="Search for a movie..."
        ></div> */}
        {/* <div id="search-bar-button" onClick={handleSubmit} tabIndex={1}>
          <i className="fa fa-search"></i>
        </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
