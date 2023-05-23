import axios from 'axios';
import options from './ApiOptions';
export const getReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews `,
    options
  );
  return response.data;
};
