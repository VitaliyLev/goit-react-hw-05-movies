import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrendMovie } from 'utils/movieApi';

export default function Home() {
  const [trendMovie, setTrendMovie] = useState();

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
                  <Link to={`/movies/${id}`}>{title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}