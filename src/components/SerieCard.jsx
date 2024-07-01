import React from 'react';

const SerieCard = ({ serie }) => {
  return (
    <div className="card">
      <h2>{serie.título}</h2>
      <p><strong>Año:</strong> {serie.Año}</p>
      <p><strong>Género:</strong> {serie.género}</p>
      <p><strong>Director:</strong> {serie.director}</p>
      <p><strong>Protagonistas:</strong> {serie.protagonistas.join(', ')}</p>
      <p>{serie.descripción}</p>
    </div>
  );
};

export default SerieCard;