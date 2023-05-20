import axios from 'axios';
import options from './ApiOptions';

const FetchSearch = async searchQuery => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  );
  const movies = response.data.results.map(({ id, name, title }) => ({
    id,
    name,
    title,
  }));
  return { movies };
};

export default FetchSearch;

// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US credits
// https://api.themoviedb.org/3/movie/{movie_id}/reviews  reviews
