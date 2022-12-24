import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'utils/movieApi';
import { ReviewList } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsById(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length !== 0) {
    return (
      <ReviewList>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ReviewList>
    );
  } else {
    return <h3>We don`t have any reviews for this movie</h3>;
  }
}
