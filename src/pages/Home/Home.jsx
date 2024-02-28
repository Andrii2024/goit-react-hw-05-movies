import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchFilms } from '../../servises/api';
import s from './Home.module.css';
const Home = () => {
  const [trendingTodays, setTrendingTodays] = useState([]);

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
              <NavLink className={s.navLink} to={`/${movie.id}`}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Home;
