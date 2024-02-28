import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchFilms } from '../../servises/api';

import s from './Home.module.css';

const Home = () => {
  const [trendingTodays, setTrendingTodays] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingTodays = async () => {
      try {
        const response = await fetchFilms();

        setTrendingTodays(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingTodays();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <nav className={s.wrapper}>
        <ul className={s.listHome}>
          {trendingTodays.map(movie => (
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
      </nav>
      <Outlet />
    </div>
  );
};
export default Home;
