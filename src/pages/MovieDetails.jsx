import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Movie ID: {movieId}</p>
    </div>
  );
};

export default MovieDetails;
