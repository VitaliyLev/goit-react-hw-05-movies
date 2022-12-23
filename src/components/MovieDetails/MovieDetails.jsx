import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/movieApi';

import { Box } from '@mui/material';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovieById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  const { poster_path, title, vote_average, overview } = movieDetails;
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
          width={'200px'}
        />
        <div>
          <h1>{title}</h1>
          <p>User score: {vote_average * 10}%</p>
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
      </Box>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
