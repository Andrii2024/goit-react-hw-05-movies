import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from 'servises/api';

import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/movies');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetails({ movie_id: movieId });
        setMovie(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Movie Details</h2>
      <Link
        className={s.linkDetail}
        to={goBackRef.current}
        // state={searchParam}
      >
        Go back
      </Link>
      <div className={s.wrapper}>
        <div className={s.wrapImg}>
          <div>
            <img src={movie.image} alt={movie.title} />
          </div>
          <h2>{movie.title}</h2>
          <div className={s.wrapper}>
            <p>{movie.overview}</p>
            <p>
              <span>Genres:</span>
              {movie.genres}
            </p>
            <p>
              <span>User Score:</span> {movie.userScore}
            </p>
          </div>
        </div>
        <nav>
          <ul className={s.listDetails}>
            <li>
              <Link className={s.linkDetail} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className={s.linkDetail} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
