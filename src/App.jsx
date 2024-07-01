import React from 'react';
import MovieCard from './components/MovieCard';
import SerieCard from './components/SerieCard';
import peliculasData from './../peliculas.json';
import './App.css';


const App = () => {
  const { películas, serie } = peliculasData.NETFLIX;

  return (
    <div className="App">
      <h1>Películas</h1>
      <div className="card-container">
        {películas.map(movie => (
          <MovieCard key={movie.identificador} movie={movie} />
        ))}
      </div>
      <h1>Series</h1>
      <div className="card-container">
        {serie.map(serie => (
          <SerieCard key={serie.identificador} serie={serie} />
        ))}
      </div>
    </div>
  );
};

export default App;
