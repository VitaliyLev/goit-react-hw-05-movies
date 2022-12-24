import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import styled from '@emotion/styled';

import { getQueryMovie } from 'utils/movieApi';

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const Input = styled(TextField)`
//   width: 300px;
//   height: 50px;
// `;
// const Btn = styled(Button)`
//   width: 100px;
//   height: 50px;
// `;

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
    getQueryMovie(queryUrl).then(data => setmovieSearch(data.results));
  }, [queryUrl]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {/* <Input id="outlined-basic" label="Search" variant="outlined" />
        <Btn variant="outlined" sx={{ height: '50' }}>
          Primary
        </Btn> */}
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
      <div>
        <ul>
          {movieSearch &&
            movieSearch.map(({ title, id }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
