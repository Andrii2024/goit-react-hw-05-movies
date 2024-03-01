import React, { useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Form } from './Form';
import { fetchSearchMovies } from '../../servises/api';

import s from './Movies.module.css';
import { useEffect } from 'react';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const handleSearch = searchTerm => {
    setSearchParams(searchTerm ? { query: searchTerm } : {});
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetchSearchMovies(query);
      setSearchResults(data);
    };
    getData();
  }, [query]);

  return (
    <div>
      <h2>Movies</h2>
      <Form setSearchParams={handleSearch} />
      {query && <h2>Current query: {query}</h2>}
      {searchResults.length > 0 && (
        <div className={s.wrapper}>
          <ul className={s.listHome}>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link
                  className={s.navLink}
                  state={{ from: location }}
                  to={`/movies/${movie.id}`}
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
