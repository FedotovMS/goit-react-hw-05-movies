import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchMoviesList from 'services/MoviesList-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { movies } = await FetchMoviesList();
        const formattedMovies = movies.map(movie => {
          const title = movie.title || movie.name;
          return {
            id: movie.id,
            title,
          };
        });
        setMovies(formattedMovies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <Link key={movie.id} to={`${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
