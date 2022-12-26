import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendMovie } from 'utils/movieApi';
import { MovieCard } from 'components/MovieCard/MovieCard';

import Container from '@mui/material/Container';

export default function Home() {
  const [trendMovie, setTrendMovie] = useState();
  const location = useLocation();

  useEffect(() => {
    getTrendMovie().then(data => setTrendMovie(data.results));
  }, []);

  return (
    <>
      <Container fixed>
        <h1>Trending today</h1>

        <MovieCard movieList={trendMovie} state={location} />
      </Container>
    </>
  );
}
