import React from 'react';
import { useState } from 'react';
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.query.value);
    getQueryMovie(e.target.query.value).then(data =>
      setmovieSearch(data.results)
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {/* <Input id="outlined-basic" label="Search" variant="outlined" />
        <Btn variant="outlined" sx={{ height: '50' }}>
          Primary
        </Btn> */}
          <input type="text" name="query" />
          <button>Search</button>
        </form>
      </div>
      <div>
        <ul>
          {movieSearch &&
            movieSearch.map(({ title, id }) => {
              return <li key={id}>{title}</li>;
            })}
        </ul>
      </div>
    </>
  );
}
