import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FetchMoviesList from 'services/MoviesList-api';
import {
  StyledMovieLink,
  Title,
  StyledMoviesList,
  StyledLi,
} from './Home.styled';

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
            poster_path: movie.poster_path,
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
        <StyledMoviesList>
          {movies.map(movie => (
            <StyledMovieLink
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <StyledLi>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={movie.title}
                  width="185"
                />
                <b>{movie.title}</b>
              </StyledLi>
            </StyledMovieLink>
          ))}
        </StyledMoviesList>
      )}
    </div>
  );
};

export default Home;
