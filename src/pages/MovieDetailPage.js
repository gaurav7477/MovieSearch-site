import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import '../styles/MovieDetailPage.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="movie-content">
        <div className="movie-poster">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movie.Title}</h1>
          <p className="movie-year1">{movie.Year}</p>
          <p className="movie-genre">{movie.Genre}</p>
          <p className="movie-director"><strong>Director:</strong> {movie.Director}</p>
          <p className="movie-actors"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="movie-plot"><strong>Description: </strong>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
