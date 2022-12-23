import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'utils/movieApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsById(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <h3>We don`t have any reviews for this movie</h3>;
  }
}
