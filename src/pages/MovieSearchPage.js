import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import '../styles/MovieSearchPage.css';
import debounce from 'lodash.debounce';

function MovieSearchPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();
  const location = window.location;

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query') || '';
    setSearchQuery(query);
    if (query) {
      fetchMovies(query);
    }
  }, [location.search]);
   // Function to fetch movies based on query
   const fetchMovies = async (query) => {
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  // Debounced version of fetchMovies for better performance
  const debouncedFetchMovies = debounce(fetchMovies, 300);

  

  // Handle search bar input
  const handleSearch = (query) => {
    setSearchQuery(query);
    debouncedFetchMovies(query);
    history(`/search?query=${query}`);
  };

  return (
    <div className="movie-search-page">
      <button className="back-button" onClick={() => history(-1)}>Back</button>
      <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
      {loading && <div className="loading">Loading...</div>}
      {!loading && movies.length === 0 && (
        <div className="no-results">No movies found for "{searchQuery}"</div>
      )}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSearchPage;
