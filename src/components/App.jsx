// import DrawerAppBar from './Home/Home';
import Header from './Header/Header';
import Home from './Home/Home';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Movies />
    </>
  );
};

// API KEY
// 388e7c1d810433186d944819803a330c
// Example API request
// https://api.themoviedb.org/3/movie/550?api_key=388e7c1d810433186d944819803a330c

//запити для ДЗ
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
