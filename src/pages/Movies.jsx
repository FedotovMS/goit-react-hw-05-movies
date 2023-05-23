import React, { useEffect, useState } from 'react';
import FetchSearch from 'services/Search-api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    FetchSearch(query).then(response => {
      setMovies([...response.results]);
    });
  };

  useEffect(() => {
    FetchSearch(query).then(response => {
      setMovies([...response.results]);
    });
  }, [query]);

  return (
    <div>
      <form className="searchForm" onSubmit={handleFormSubmit}>
        <button type="submit" className="searchFormButton">
          <span className="searchFormButtonLabel">Search</span>
        </button>

        <input
          className="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={e => updateQuery(e.target.value.toLowerCase())}
        />
      </form>

      <ul>
        {movies.map(movie => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesSearch;
