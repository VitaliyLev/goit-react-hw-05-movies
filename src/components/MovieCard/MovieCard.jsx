import { Link } from 'react-router-dom';

import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { CardItem } from './MovieCard.styled';

export const MovieCard = ({ movieList, state }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {movieList &&
          movieList.map(({ title, id, poster_path, release_date }) => {
            return (
              <Grid xs={2} sm={4} key={id}>
                <CardItem>
                  <Link to={`/movies/${id}`} state={{ from: state }}>
                    {poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        loading="lazy"
                        width={'100%'}
                      />
                    ) : (
                      <img
                        src="https://media.tproger.ru/uploads/2018/04/docker-404-pic.jpg"
                        alt={title}
                        loading="lazy"
                        width={'100%'}
                      />
                    )}
                    <h3>{title}</h3>
                  </Link>
                  <span>Release date: {release_date}</span>
                </CardItem>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
