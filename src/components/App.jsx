import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
