/* eslint-disable max-len */
import movies from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MovieList movies={movies} />
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);