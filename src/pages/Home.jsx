import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FetchMoviesList from 'services/MoviesList-api';
import { StyledMovieLink, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      <Title>Trending movies</Title>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <StyledMovieLink
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <li>{movie.title}</li>
            </StyledMovieLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
