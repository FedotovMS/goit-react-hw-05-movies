import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import MoviesSearch from 'pages/Movies';
import Credits from './Credits';
import Reviews from './Reviews';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
