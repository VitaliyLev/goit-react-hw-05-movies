import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'utils/movieApi';

//mui
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { CardItem } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCreditsById(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {cast &&
          cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <Grid xs={2} sm={4} key={id}>
                <CardItem>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={original_name}
                      loading="lazy"
                      width={'100%'}
                    />
                  ) : (
                    <img
                      src="https://media.tproger.ru/uploads/2018/04/docker-404-pic.jpg"
                      alt={original_name}
                      loading="lazy"
                      width={'100%'}
                    />
                  )}

                  <p>Name: {original_name}</p>
                  <p>Character: {character}</p>
                </CardItem>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
