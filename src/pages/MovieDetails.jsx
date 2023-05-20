import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import FetchMovieDetails from 'services/MovieDetail-api';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const movieData = await FetchMovieDetails(movieId);
        setMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Details</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {movie && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Outlet />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
