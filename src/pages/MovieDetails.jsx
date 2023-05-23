import { Suspense, useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import FetchMovieDetails from 'services/MovieDetail-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

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
      <Link to={backLinkHref.current}>Back</Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {movie && (
            <>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />

              <h3>Popularity:</h3>
              <p>{movie.popularity}</p>
              <h3>Genres:</h3>
              <p>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </p>
              <h3>Overview:</h3>
              <p>{movie.overview}</p>
              <h4>More information:</h4>
              <ul>
                <li>
                  <Link to="credits">Credit</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Suspense>
                <Outlet />
              </Suspense>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
