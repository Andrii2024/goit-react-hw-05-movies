import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchCast } from '../../servises/api';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={s.wrapper}>
        {cast.map(actor => (
          <li className={s.itemCast} key={actor.id}>
            {actor.profile_path && (
              <img
                className={s.actorImage}
                src={actor.profile_path}
                alt={`${actor.name} profile`}
              />
            )}
            <p className={s.actorName}>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Cast;
