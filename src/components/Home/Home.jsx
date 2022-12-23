import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrendMovie } from 'utils/movieApi';

import { useLocation } from 'react-router-dom';

export default function Home() {
  const [trendMovie, setTrendMovie] = useState();

  const location = useLocation();

  useEffect(() => {
    getTrendMovie().then(data => setTrendMovie(data.results));
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        <ul>
          {trendMovie &&
            trendMovie.map(({ title, id }) => {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
