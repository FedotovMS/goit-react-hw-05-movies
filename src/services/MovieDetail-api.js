import axios from 'axios';
import options from './ApiOptions';

const FetchMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  const { id, title, genres, popularity, poster_path, overview } =
    response.data;

  const movieData = {
    id,
    title,
    genres,
    popularity,
    poster_path,
    overview,
  };

  return movieData;
};

export default FetchMovieDetails;
