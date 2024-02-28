import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import s from './MovieDetails.module.css';
import { fetchDetails } from 'servises/api';
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const gobackRef = useRef(location.state?.from || '/');

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
      <Link className={s.linkDetail} to={gobackRef.current}>
        Go back
      </Link>
      <div className={s.wrapper}>
        <div className={s.wrapImg}>
          <div>
            <img src={movie.image} alt={movie.title} />
          </div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <span>Genres:</span> {movie.genres}
          </p>
          <p>
            <span>User Score:</span> {movie.userScore}
          </p>
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
