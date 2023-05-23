import axios from 'axios';
import options from './ApiOptions';

const FetchMovieCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  const actors = response.data.cast.map(({ id, name, profile_path }) => {
    return {
      id,
      name,
      profile_path,
    };
  });

  console.log(actors);
  return actors;
};

export default FetchMovieCast;
