import axios from 'axios';
import options from './ApiOptions';

const FetchSearch = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};
export default FetchSearch;
