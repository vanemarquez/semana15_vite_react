import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <h2>{movie.título}</h2>
      <p><strong>Año:</strong> {movie.Año}</p>
      <p><strong>Género:</strong> {movie.género}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Protagonistas:</strong> {movie.protagonistas.join(', ')}</p>
      <p>{movie.descripción}</p>
    </div>
  );
};

export default MovieCard;