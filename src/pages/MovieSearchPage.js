import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import './MovieSearchPage.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MovieSearchPage() {
  const [movies, setMovies] = useState([]);
  const query = useQuery().get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const results = await searchMovies(query);
        setMovies(results);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div className="movie-search-page">
      <SearchBar initialQuery={query} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSearchPage;
