import FetchMovieCast from 'services/MovieCast-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = ({ onClick }) => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  // FetchMovieCast(movieId);
  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const creditsData = await FetchMovieCast(movieId);
        setCredits(creditsData);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <ul>
      {credits.length > 0 ? (
        credits.map(credit => (
          <li key={credit.id}>
            <img
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w45/${credit.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={credit.name}
              width="45"
            />
            {credit.name}
          </li>
        ))
      ) : (
        <li>No credits available</li>
      )}
    </ul>
  );
};

export default Cast;
