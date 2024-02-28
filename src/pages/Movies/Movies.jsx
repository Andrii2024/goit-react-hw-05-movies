import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Form } from './Form';
import { fetchSearchMovies } from '../../servises/api';

import s from './Movies.module.css';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  const handleSearch = async searchTerm => {
    try {
      const results = await fetchSearchMovies(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <Form setSearchParams={handleSearch} />
      {searchResults.length > 0 && (
        <div className={s.wrapper}>
          <ul className={s.listHome}>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link
                  className={s.navLink}
                  state={{ from: location }}
                  to={`/${movie.id}`}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Movies;
