import React from 'react';
import { Form, Link } from 'react-router-dom';

const Movies = () => {
  const movies = [];

  return (
    <div>
      <h2>Movies</h2>
      <Form />
      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Movies;
