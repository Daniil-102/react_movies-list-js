import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <div className="movies">No movies to display</div>;
  }

  return (
    <div className="movies">
      {movies.slice(0, 5).map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
