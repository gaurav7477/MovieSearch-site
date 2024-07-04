import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
      <div className="movie-card">
        <div className="poster-container">
          <img className="poster" alt={movie.Title} src={movie.Poster} />
          <div className="overlay" />
        </div>
        <div className="movie-info">
          <div className="movie-title">{movie.Title}</div>
          <div className="movie-year">{movie.Year}</div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
