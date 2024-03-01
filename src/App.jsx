import { Layout } from 'components/Layout';
import { Route, Routes } from 'react-router-dom';

import MovieDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';

import React, { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
