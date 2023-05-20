import React, { useState } from 'react';
import FetchSearch from 'services/Search-api';
import { Link } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter your search query');
      return;
    }

    try {
      setIsLoading(true);
      const { movies } = await FetchSearch(searchQuery);
      const formattedMovies = movies.map(movie => {
        const title = movie.title || movie.name;
        return {
          id: movie.id,
          title,
        };
      });
      setSearchResults(formattedMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchFormButton">
          <span className="searchFormButtonLabel">Search</span>
        </button>

        <input
          className="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {searchResults.map(movie => (
            <Link key={movie.id} to={`${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesSearch;
