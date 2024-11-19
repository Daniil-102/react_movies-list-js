/* eslint-disable max-len */

import './App.scss';
import { MovieList } from './components/MovieList/MovieList';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content" data-cy="Movies">
      {moviesFromServer.length > 0 ? (
        <MovieList movies={moviesFromServer} />
      ) : (
        <p>No movies</p>
      )}
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
