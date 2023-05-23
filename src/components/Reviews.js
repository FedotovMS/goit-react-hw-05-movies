import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getReviews } from 'services/MovieReview-api';

const useReviews = movieId => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (movieId) {
      getReviews(movieId).then(response => {
        setReviews([...response.results]);
      });
    }
  }, [movieId]);

  return { reviews };
};

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews } = useReviews(movieId);

  if (!reviews) return <p>Loading...</p>;

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.author}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
