import { Layout } from 'components/Layout';
import Cast from 'pages/Cast/Cast';
import Details from 'pages/Details/Details';
import MovieDetails from 'pages/MoviesDetails/MoviesDetails';

import NotFound from 'pages/NotFound/NotFound';
import Reviews from 'pages/Reviews/Reviews';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route index element={<Details />} />
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
