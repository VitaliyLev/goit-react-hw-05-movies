import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';

import { getQueryMovie } from 'utils/movieApi';

import Container from '@mui/material/Container';

export default function Movies() {
  const [movieSearch, setmovieSearch] = useState([]);
  const [querySearch, setQuerySearch] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryUrl = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();

    if (!querySearch) {
      setSearchParams('');
      return;
    }

    setSearchParams({ query: querySearch });
  };

  useEffect(() => {
    if (!queryUrl) {
      return;
    }

    setQuerySearch(queryUrl);
    getQueryMovie(queryUrl.toLowerCase()).then(data =>
      setmovieSearch(data.results)
    );
  }, [queryUrl]);

  return (
    <Container fixed>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            name="query"
            value={querySearch}
            onChange={e => setQuerySearch(e.target.value.trim())}
          />
          <button>Search</button>
        </form>
      </div>

      <MovieCard movieList={movieSearch} state={location} />
    </Container>
  );
}
