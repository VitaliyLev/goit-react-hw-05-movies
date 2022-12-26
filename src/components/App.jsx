import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Header/Header';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const PageHome = lazy(() => import('./Home/Home'));
const PageMovies = lazy(() => import('./Movies/Movies'));
const PageMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<PageHome />} />
          <Route path="home" element={<PageHome />} />
          <Route path="movies" element={<PageMovies />} />

          <Route path="movies/:movieId" element={<PageMovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<PageHome />} />
        </Route>
      </Routes>
    </>
  );
};
