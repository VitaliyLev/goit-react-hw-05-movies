import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';
import { getCreditsById } from 'utils/movieApi';

// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state); // { from: "/dashboard?name=hoodie" }

//   return <Link to={location.state.from}>Back to products</Link>;
// };

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCreditsById(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      {cast &&
        cast.map(({ id, profile_path, original_name, character }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="No image"
                height={300}
                width={200}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              //     src="http://artismedia.by/blog/wp-content/uploads/2018/05/in-blog2-1.png"
              //     alt="No image"
              //     height={300}
              //     width={200}
              //   />
              // eslint-disable-next-line

              <p>Ойй, Скоріш за все, кортинка не загрузилась</p>
            )}
            <div>
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
    </div>
  );
}
