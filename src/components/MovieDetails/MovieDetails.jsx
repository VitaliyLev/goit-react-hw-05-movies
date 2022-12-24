import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import { getMovieById } from 'utils/movieApi';

import { Box, Button } from '@mui/material';
import { MdArrowBack } from 'react-icons/md';
import { StyledLink } from './MovieDetails.styled';
import { Container } from '@mui/material';
import { BoxCard } from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    getMovieById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  const { poster_path, title, vote_average, overview } = movieDetails;
  return (
    <Container fixed>
      <StyledLink to={backLinkHref}>
        <span>
          <MdArrowBack style={{ fill: 'blue' }} />
        </span>
        <Button>Previous page</Button>
      </StyledLink>

      <Container fixed>
        <BoxCard>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
            width={'200px'}
          />
          <div>
            <h1>{title}</h1>
            <p>User score: {Math.floor(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <Box sx={{ display: 'flex' }}>
              {movieDetails.genres?.map(({ name, id }) => (
                <p key={id} style={{ marginRight: '10px' }}>
                  {name}
                </p>
              ))}
            </Box>
          </div>
        </BoxCard>
      </Container>

      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
