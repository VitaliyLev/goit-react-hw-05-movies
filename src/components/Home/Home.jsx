import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getTrendMovie } from 'utils/movieApi';
import { MovieCard } from 'components/MovieCard/MovieCard';

import Container from '@mui/material/Container';
// import Box from '@mui/system/Box';
// import Grid from '@mui/system/Unstable_Grid';
// import { CardItem } from './Home.styled';

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
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {trendMovie &&
              trendMovie.map(({ title, id, poster_path, release_date }) => {
                return (
                  <Grid xs={2} sm={4} key={id}>
                    <CardItem>
                      <Link to={`/movies/${id}`} state={{ from: location }}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                          alt={title}
                          loading="lazy"
                          width={'100%'}
                        />
                        <h3>{title}</h3>
                      </Link>
                      <span>Release date: {release_date}</span>
                    </CardItem>
                  </Grid>
                );
              })}
          </Grid>
        </Box> */}
      </Container>
    </>
  );
}
