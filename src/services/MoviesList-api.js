import axios from 'axios';
import options from './ApiOptions';

const period = 'day';

const FetchMoviesList = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/${period}?language=en-US`,
    options
  );

  const movies = response.data.results.map(
    ({ id, name, title, poster_path }) => {
      return {
        id,
        name,
        title,
        poster_path,
      };
    }
  );
  // console.log({ movies });
  return { movies };
};

export default FetchMoviesList;
